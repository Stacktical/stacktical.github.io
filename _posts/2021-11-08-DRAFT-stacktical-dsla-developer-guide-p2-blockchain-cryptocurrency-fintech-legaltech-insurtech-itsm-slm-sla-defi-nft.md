---
layout: post
featured: false
title:  "DSLA Developer Guide BUIDL Series - Part II"
author: Team
categories: [ mainnet, dev ]
image: assets/img/2021-10-28-stacktical-dsla-protocol-stablecoins-native-tokens-liquid-staking-october-2021-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## DTK Quick Start Guide Walkthrough

Okay, so you read [DSLA Developer Guide BUIDL Series - Part I](https://blog.stacktical.com/mainnet/dev/2021/11/08/stacktical-dsla-developer-guide-p1-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html), you see the value proposition and you have a use case you want to BUIDL!  Now what?

Let's go over some steps from the Developer Toolkit (DTK) Setup and Quick Start sections of our [Developer Guide](https://readme.stacktical.com/developer-guide/) to see how to quickly spin up the DTK on your local machine and get BUIDLing.

> We highly recommend you check out the [Developer Guide](https://readme.stacktical.com/developer-guide/) and read it in it's entirety!

### Quick Start

Prerequisites:
   * [docker-compose](https://docs.docker.com/compose/install/)
   * [Hardhat](https://hardhat.org/) (can be added with `npm install --save-dev hardhat`)

You are going to end up with three console tabs open at then end of this walkthrough.
   * One for the DTK repo (stacktical-dsla-developer-toolkit)
   * One for running a local ganache instance for local blockchain
   * One for running the external adapter (for your local Chainlink node)

Install Hardhat shorthand
```
npm i -g hardhat-shorthand && hardhat-completion install
```

Clone the DTK repo.  You can check it out [here](https://github.com/Stacktical/stacktical-dsla-developer-toolkit)
```
git clone https://github.com/Stacktical/stacktical-dsla-developer-toolkit.git
```

Make sure to switch into the cloned DTK repository folder, then run npm install
```
npm install
```

> npm install may throw an error while installing assemblyscript. A suggested workaround is using `npm install assemblyscript` separately to install assemblyscript. Confirm success by running `npm install` again, which should then complete with no errors.

Next copy the env-min file to create your folder .env file
```
cp env-min .env
```
> There are a lot of variables you will see in the .env file, because Hardhat checks for them based on data from `hardhat.config.ts`; if any of these variables are not present you will have errors thrown in later steps of this guide while trying to load the project. However, as long as the variables are present, they may be empty or set to dummy values, as is the case for many variables env-min.

Set your console to use the .env file as the source for environment variables.
```
source .env
```

**In a separate console tab**, use ganache to spin up a local blockchain. Navigate into the `stacktical-dsla-developer-toolkit` folder and run the following command:
```
npm run custom-ganache
```
Leave the ganache tab open and switch back to your other console tab


Deploy local services for the 'develop' network including local develop blockchain and IPFS node.

> Prior to running the next command, ensure that the `index.ts` file in the `stacktical-dsla-developer-toolkit/networks` has the `develop` network enabled. The develop network line should read `{ name: NETWORKS.DEVELOP, enabled: true },`

```
hh stacktical:restart-services --network develop
```


         **confirm placement and need**
         ```
         npm install pm2-g
         ```
         *------skip------*
         Deploy the external adapter for the 'develop' network.
         ```
         npm run external-adapter
         ```
         >The external adapter code can be found in the `services` folder under the `external-adapter` subfolder.  It contains code for a simple Express.js app and can be modified to implement the logic of an indexer for a new use case.

         *------end skip-------*
         *-----replace with-----*

Run the external adapter.  **In a new console tab** clone the external adapter github:
```
git clone https://github.com/Stacktical/stacktical-dsla-oracle-se.git
```
Navigate into the new folder:
```
cd stacktical-dsla-oracle-se
```
Create a .env file in this folder and set it to:

***confirm what needs to be in this***
```
IPFS_URI="https://ipfs.dsla.network"
MUMBAI_URI="https://matic-testnet-archive-rpc.bwarelabs.com"
POLYGON_URI="https://rpc-mainnet.maticvigil.com/v1/96b2b86853d974f8317375658735be6d7a8fca07"
HARMONYTESTNET_URI="https://api.s0.b.hmny.io"
HARMONY_URI="https://a.api.s0.t.hmny.io"
FANTOM_URI="https://rpc.ftm.tools"
AVALANCHE_URI="https://avalanche--mainnet--rpc.datahub.figment.io/apikey/b34ce748427fec8b08808bd184d1e99b/ext/bc/C/rpc"
BSC_URI="https://bsc-dataseed.binance.org"
#HARMONY_URI="https://api.s0.t.hmny.io"
DEVELOP_URI="http://localhost:8545"
ETHEREUM_URI="https://mainnet.infura.io/v3/e8dc03e5684a4dd5872f4e0da2187dca"
KOVAN_URI="https://kovan.infura.io/v3/e8dc03e5684a4dd5872f4e0da2187dca"
```
Install the Google Cloud Functions Framework with the following command
```
npm install --save-dev @google-cloud/functions-framework
```
Start up the external adapter
```
npm run dev
```
*-----end replace-----*

Navigate back to the DTK tab.

Now that services are running, we can deploy our contracts and Chainlink nodes by running:

> confirm that the `BASE_MESSENGER` variable `constants.ts` is as follows `BASE_MESSENGER = 'base-messenger',` instead of `BASE_MESSENGER = 'dummy-use-case',` 

> run the below sudo command to ensure permissions on chainlink-nodes folder

```
sudo chown -R dhansen: /home/dhansen/DSLA/Devlopment/stacktical-dsla-developer-toolkit/services/chainlink-nodes

sudo chown -R YOUR_USER: /home/your_path_to_DTK/stacktical-dsla-developer-toolkit/services/chainlink-nodes
```

Deploy the contracts and Chainlink nodes using hh deploy
```
hh deploy --network develop --reset
```

> This will clean any previous deployment of the 'develop' network and run the Chainlink nodes locally.

Lastly we bootstrap the protocol, after which it will be ready to use!

```
hh stacktical:bootstrap --network develop
```

Optionally after this you can deploy a pre-configured SLA using:

```
hh stacktical:deploy-sla --network develop --index 0
```

And you can run a SLI verification on that SLA using:

```
hh stacktical:request-sli --network develop
```

> Depending on networks/develop.config.ts configuration, the first period of the SLA contract is going to be "expired" and can thus be verified.  If the configuration is modified so that the first period is not expired, then verification will not be possible.

That's it, you've got a full, local deployment of DSLA Protocol!

### Quick Facts - Anatomy of an SLA Contract 📚

Now that we have walked through a deployment, let's quickly review the key parts of an SLA contract with DSLA Protocol.

#### Service Level Objective (SLO)

Describe SLO in layman terms here.

#### Service Level Indicator (SLI)

Describe SLI in layman terms here.

#### Period

Describe period in layman terms here.

#### Token Pool

Describe token pool(s) + leverage in layman terms here.

#### Service Level Agreement (SLA)

The grand puba, the whole enchilada, the whole kit and kaboodle. A SLA is a contract between a service provider and service user(s) containing all of the above components. An agreed SLO, to be verified according to an identified SLI, with a defined term or period that the agreement is active.  The token pool is contributed to by both the provider and users and rewards or compensations are paid out of it according to the SLI/SLO.

### Important Links  

**DSLA DTK Github**<br>
[https://github.com/Stacktical/stacktical-dsla-developer-toolkit](https://github.com/Stacktical/stacktical-dsla-developer-toolkit)  

**DSLA Protocol Developer Guide**<br>
[https://readme.stacktical.com/developer-guide/](https://readme.stacktical.com/developer-guide/)

**DSLA Protocol Discord (for technical discussions)**<br>
[https://discord.gg/bknuhcXV](https://discord.gg/bknuhcXV)

**DSLA Support Telegram**<br>
[https://t.me/dsla_network](https://t.me/dsla_network)

**DSLA Protocol Community Telegram**<br>
[https://t.me/stacktical](https://t.me/stacktical)


### #DubaiDeFi

[#DubaiDeFi](https://blog.stacktical.com/bonfire/reporting/2021/11/07/stacktical-dsla-protocol-dubai-defi-hackathon-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html), the biggest hackathon on the Arabian Peninsula, is the perfect chance to get started!




![DSLA Protocol Contract Interaction](/assets/img/dsla-protocol_contract_interaction.jpeg)


---

## About DSLA Protocol

{% include youtube_player.html id="3M1FHY9rSqE" %}

DSLA Protocol is a turnkey, peer-to-peer risk management infrastructure for developers and their communities, that empowers anyone to manage their exposure to the performance failures of application, network and service, using peer-to-peer service level agreements.

DSLA Protocol's flagship use case is to optimize your staking rewards, by enabling you to hedge against the bad performance of your staking services.

To learn more about DSLA Protocol and the future of third party risk management (TPRM), please visit [stacktical.com](https://stacktical.com), browse our [blog](https://blog.stacktical.com), and follow [@stacktical](https://twitter.com/Stacktical) on Twitter.
