---
layout: post
featured: false
title:  "DSLA Developer Guide BUIDL Series - Part II"
author: Team
categories: [ mainnet, dev ]
image: assets/img/2021-10-28-stacktical-dsla-protocol-stablecoins-native-tokens-liquid-staking-october-2021-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## Developer Toolkit (DTK) Quick Start Guide Walkthrough

Okay, so you read [DSLA Developer Guide BUIDL Series - Part I](https://blog.stacktical.com/mainnet/dev/2021/11/08/stacktical-dsla-developer-guide-p1-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html), you see the value proposition and you have a use case you want to BUIDL!  Now what?

Let's go over some steps from the Setup and Quick Start sections of our [Developer Guide](https://readme.stacktical.com/developer-guide/) to see how to quickly spin up the DTK on your local machine and get BUIDLing.

> We highly recommend you check out the [Developer Guide](https://readme.stacktical.com/developer-guide/) and read it in it's entirety!

### Get Started with the DTK

#### Prerequisites:
   * [docker-compose](https://docs.docker.com/compose/install/)
   * [Hardhat](https://hardhat.org/) (can be added with `npm install --save-dev hardhat`)
   * [Node.js](https://nodejs.org) version 16.13.0 LTS
   * [npm](https://npmjs.com) version 7.21.1

#### Quick start

You are going to end up with two console tabs open at then end of this walkthrough.
   * One that is your main working tab for the DTK repo (stacktical-dsla-developer-toolkit)
   * One for running the external adapter (for your local Chainlink node)

Okay, let's go!

First, install Hardhat shorthand
```
npm i -g hardhat-shorthand && hardhat-completion install
```

Clone the DTK repo.  You can check it out [here](https://github.com/Stacktical/stacktical-dsla-developer-toolkit)
```
git clone https://github.com/Stacktical/stacktical-dsla-developer-toolkit.git
```

Make sure to switch into the cloned DTK repository folder, then run npm install
```
cd stacktical-dsla-developer-toolkit
npm install
```

> Some users may have `npm install` throw an error while installing `assemblyscript`. A suggested workaround for this is using `npm install assemblyscript` separately to install assemblyscript. Confirm success by running `npm install` again, which should then complete with no errors.

Next copy the env-min file to create your folder .env file
```
cp env-min .env
```
> You will note that there are a lot of variables in the .env file, because Hardhat checks for them based on data from `hardhat.config.ts`; if any of these variables are not present you will have errors thrown in later steps of this guide while trying to load the DTK. However, as long as the variables are present, they may be empty or set to dummy values, as is the case for most of the variables in env-min.

Set your console to use the .env file as the source for environment variables.
```
source .env
```

> Prior to running the next command, ensure that the `index.ts` file in the `stacktical-dsla-developer-toolkit/networks` has the `develop` network enabled. The develop network flag on line 4 should read `{ name: NETWORKS.DEVELOP, enabled: true },`

Next, we will deploy local services for the 'develop' network including the local `develop` blockchain and IPFS node.  Run the folling command to do so:

```
hh stacktical:restart-services --network develop
```

**In a separate console tab**  navigate to your local DTK repo and run the following command to spin up your local external adapter:

```
npm run external-adapter
```

>The external adapter code can be found in the `services` folder under the `external-adapter` subfolder.  It contains code for a simple Express.js app and can be modified to implement the logic of an indexer for a new use case.


Switch back to your working tab.

Now that services are running, we can deploy our contracts and Chainlink nodes using hh deploy with the following command:

```
hh deploy --network develop --reset
```
> This will clean any previous deployment of the 'develop' network and run the Chainlink nodes locally.
> You may run into a permissions error on the /services/chainlink-nodes or the /services/graph-protocol/postgres folders if you run the `hh deploy` command multiple times. If so, run the below commands to ensure permissions on these folders

```
sudo chown -R YOUR_USER: /home/your_path_to_DTK/stacktical-dsla-developer-toolkit/services/chainlink-nodes
sudo chown -R YOUR_USER: /home/your_path_to_DTK/stacktical-dsla-developer-toolkit/services/graph-protocol
```

Lastly we bootstrap the protocol, after which it will be ready to use!  Bootstrap using the following command:

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

#### Re-run the DTK after initial install

To quickly spin the DTK back up after install, open two console tabs and follow these steps:
```
// in tab 1
// navigate to the '/stacktical-dsla-developer-toolkit' folder and run:
npm run external-adapter

// in tab 2
// navigate to `/stacktical-dsla-developer-toolkit` folder and run:
sudo chown -R YOUR_USER: /home/your_path_to_DTK/stacktical-dsla-developer-toolkit/services/chainlink-nodes
sudo chown -R YOUR_USER: /home/your_path_to_DTK/stacktical-dsla-developer-toolkit/services/graph-protocol
hh deploy --network develop --reset
hh stacktical:bootstrap --network develop
```

### Quick Facts - Anatomy of an SLA Contract 📚

Now that we have walked through a deployment, let's quickly review the key parts of an SLA contract with DSLA Protocol.

#### Service Level Objective (SLO)

The SLO is the target performance that a *provider* is committing to meet. For an Uptime SLA that may be a certain percent uptime, ie. 95%. For an APR/APY SLA that may be a minimum APR, ie. 8%. The *provider* is committing to meet that target as a minimum.  *Users* are signing on to the SLA to receive that target service level at a minimum, or be compensated in event of a breach.

**#devtalk** all SLOs are stored in the SLORegistry contract. The SLO is a struct composed of a *value* and a *type*. The *value* is a number, which will be compared to the number returned from a verification (Service Level Indicator verification). The *type* is the relationship between the two numbers and is itself an enum with possible values of: EqualTo, NotEqualTo, SmallerThan, SmallerOrEqualTo, GreaterThan, and GreaterOrEqualTo.

> For example an Uptime SLA provider may commit to 95% uptime. The SLO for this example would be stored in a SLO struct with the *value* of 95 and a *type* of GreaterOrEqualTo.

#### Service Level Indicator (SLI)

The SLI is a check on how a service performed for a certain period.  In essence, the SLI is a numerical *value* indicating performance during a specific period, which is calculated by measuring real world data for the service. The returned SLI *value* is compared against the SLO *value* according to the SLO *type*.  This simple comparison gives a result that the SLA Contract uses to manage rewards and compensation for the period.

**#devtalk** the SLI is calculated by the *external adapter*, which is called by the Chainlink node when the Messenger Contract receives a request. The SLI value is returned through the Messenger Contract to the SLA Contract, which will execute settlement based on the outcome of comparing the SLI *value* with the SLO *value* according to the SLO *type*.  The Messenger Contract quarterbacks the entire SLI process, relaying the initial SLI request to Chainlink, receiving the response back and then relaying it to the SLA Contract.

> Continuing with our 95% Uptime SLA example. The SLO *value* would be 95 and the SLO *type* would be GreaterOrEqualTo.  When a SLI is triggered it works through the external adapter, real world Uptime performance is measured and returned as a numerical *value*. If the Service maintained 98% uptime during that period, the *value* returned would be 98. The SLI *value* of **98** would be compared against the SLO *value* of **95** according to the SLO *type* **GreaterOrEqualTo**.

| &nbsp;&nbsp;SLI Value&nbsp;&nbsp; | &nbsp;&nbsp;SLO Type&nbsp;&nbsp; | &nbsp;&nbsp;SLO Value&nbsp;&nbsp; |
| --------: | :------: | :-------- |
| 98 | >= | 95 |

SLO Respected ✅

#### Period

Periods, with respect to an SLA contract, have two meanings.  First the *start* and *end* timestamp representing the term of the SLA, or the term that the SLO is active for.  The second part is the *type*, which defines how often the SLO is verified with an SLI.  This can be Hourly, Daily, Weekly, BiWeekly, Monthly or Yearly.

**#devtalk** Periods are stored in the PeriodRegistry contract.  *Start* and *end* are unix timestamps for the start and end date of the SLA monitoring period.  *Type* is an enum that can be Hourly, Daily, Weekly, BiWeekly, Monthly or Yearly.  Lastly there is an *initialized* boolean variable used as an integrity check.
#### Token Pool

The SLA token pool is made up of a *provider* token pool and a *users* token pool. There is a relationship between the two, defined by a *leverage* value that the *provider* sets. The *provider* will initialize the SLA contract, depositing funds to back their service, which will compensate users if the identified SLO target is not met.  The *provider* will also set the leverage, which will determine how much *users* pay vs. how much they may redeem in event of a service breach. *Users* will sign on to the SLA, paying a small premium into the *users* token pool, from which the *provider* may claim a reward if the SLO target is met.

Adding *leverage* to the conversation can seem a bit overwhelming; though it is present, it is usually something people don't consider with their own insurance products. Consider a farmer's crop insurance for a moment. A farmer takes out crop insurance, paying a small premium to receive a large payout in unfortunate event that their crop is destroyed. There is a *leverage* value in the relationship between the premium and the payout, the customer just generally does not see it.
> ie. If the farmer pays **$5,000** to receive **$100,000** in coverage, the *leverage* value would be 20.

For a deeper dive into tokenomics please take a look at [this blog post](2021-03-25-stacktical-dsla-protocol-mainnet-deep-dive-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi.md).

#### Service Level Agreement (SLA)

A SLA is a contract between a service *provider* and service *user(s)* containing all of the above components. It will have an agreed SLO, which will be verified periodically according to a set SLI, and be active for a defined period or term.  The token pool is contributed to by both the provider and users, and rewards or compensations are paid out of it according to the SLI/SLO results.

### #DubaiDeFi

[#DubaiDeFi](https://blog.stacktical.com/mainnet/defi/2021/11/09/stacktical-dsla-protocol-dubai-defi-hackathon-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html), the biggest hackathon on the Arabian Peninsula, is the perfect chance to get started using the DTK to BUIDL! Plus a chance at over **$300K** in prizes!

Read our [blog post](https://blog.stacktical.com/mainnet/defi/2021/11/09/stacktical-dsla-protocol-dubai-defi-hackathon-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html) about it or head over to [dubaidefi.io](https://dubaidefi.io) to learn more!

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

---

## About DSLA Protocol

{% include youtube_player.html id="3M1FHY9rSqE" %}

DSLA Protocol is a turnkey, peer-to-peer risk management infrastructure for developers and their communities, that empowers anyone to manage their exposure to the performance failures of application, network and service, using peer-to-peer service level agreements.

DSLA Protocol's flagship use case is to optimize your staking rewards, by enabling you to hedge against the bad performance of your staking services.

To learn more about DSLA Protocol and the future of third party risk management (TPRM), please visit [stacktical.com](https://stacktical.com), browse our [blog](https://blog.stacktical.com), and follow [@stacktical](https://twitter.com/Stacktical) on Twitter.
