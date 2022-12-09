---
layout: post
featured: false
title:  "DSLA's Decentralized Governance Toolkit"
author: Team
categories: [ mainnet ]
image: assets/img/2022-12-07-stacktical-dsla-protocol-decentralization-with-gnosis-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## Everywhere DSLA v2 is Deployed ✅

Decentralized governance is active for all DSLA v2 deployments!

We've been working with the team at [Gnosis Guild](https://gnosisguild.org) to be among the first projects poineering on-chain governance on multiple chains simultaneously using Gnosis Safe, Zodiac and Snapshot.

Decentralized governance over DSLA Protocol parameters on Ethereum Mainnet was rolled out back in November via [[DSLA-IP9]](https://dao.dsla.network/#/proposal/0x276ffc4bcdff602574b1c88a8c6eb73316af529da5066e6e63417dc9eaa17cc2) on our Snapshot Space at [https://dao.dsla.network](https://dao.dsla.network). Now we're happy to announce that governance is live for DSLA v2 everywhere it is deployed: Ethereum Mainnet, Arbitrum, Avalanche and Polygon!

Snapshot proposal [[DSLA-IP10] is live on our Snapshot Space](https://dao.dsla.network/#/proposal/0x2ee8f34a11f024dbf27db33622a5c9b81ed1f2cb524f9e3c2c34c4c68569eb77) to update protocol parameters for Arbitrum, Avalanche and Polygon.

This is an exciting next step in our journey to completely decentralize DSLA.

## The Toolkit ⚒️

Let's take a closer look at the tools that make this decentralied governance possible.

### Gnosis Safe 🏦

First up, we've got a DSLA DAO [Gnosis Safe](https://app.safe.global) setup on each network, and that Safe is the owner of the relevant contracts for setting DSLA Protocol parameters.

As we continue our journey to decentralize, we will look to add other members to act as signatories on these DAO Safe multisigs. At this point, though, additional signatories are **not** required to endorse on-chain governance decisions over DSLA Protocol parameters thanks to the other tools we're leveraging!

### Zodiac + Reality.eth 🧘‍♂️

We use the [Zodiac Reality Module](https://zodiac.wiki/index.php/Category:Reality_Module) application within Gnosis Safe to enable on-chain execution of governance decisions based on off-chain votes via [Snapshot](https://dao.dsla.network).

The Zodiac module enables connecting Gnosis Safe to Snapshot, via the SafeSnap plugin, and then executing transactions contained in Snapshot Proposals based on the outcome of those proposals. Proposal outcomes are validated and the result supplied by the [Reality.eth](https://reality.eth.link/) oracle.

[Gnosis Guild](https://gnosisguild.org) are the keepers of Zodiac Protocol, which is a suite of tools for DAOs. There are several other useful DAO tools in the Zodiac Protocol and we encourage anyone interested to read more at the [Gnosis Guild website](https://gnosisguild.org) or on their [wiki](https://zodiac.wiki).

### Snapshot and SafeSnap ⚡

Snapshot is a fantastic tool that allows for off-chain, gasless voting based on on-chain holdings or credentials. We've been using Snapshot for a while to manage governance votes at our space on [https://dao.dsla.network](https://dao.dsla.network).

SafeSnap is a plugin for Snapshot that allows you to execute on-chain transactions using a Gnosis Safe, based on the outcome of Snapshot Proposals. This plugin integration is made possible using the Zodiac Reality Module, which glues together Gnosis Safe, Reality.eth and Snapshot.

You enable the SafeSnap plugin on Snapshot and point it to your Zodiac Reality Module contract, which is deployed when you enable the Zodiac application in your Gnosis Safe.

## How it Works Together 🤝

Proposals created on [DSLA's Snapshot Space](https://dao.dsla.network) have the option now to include transactions on any of the four networks that DSLA v2 is deployed on. If a proposal includes transactions, the outcome of the vote will be tracked and set by the Reality.eth oracle and then those transactions can be executed with the click of a button (by anyone) on the Snapshot Proposal page.

It's exciting to be on the leading edge of this sort of decentralized governance. To our knowledge we're the first project to be updating on-chain parameters on all chains where the protocol is deployed via governance.

## DSLA Academy of Risk Learning Track 📚

We'll be creating a Decentralized Governance learning track in the DSLA Academy of Risk that helps walk-through setting up these tools, as well as some of the risks, like malicious proposals and mitigations available!

## The Decentralized Future 🛣️

This is a major step towards true end-to-end decentralization of DSLA Protocol. We're excited to continue on this journey with our community, other projects and the web3 space!

---

# 💡 DSLA

### GRC Automation Middleware

DSLA's approach to integrated risk management enables the downside-protected delivery of goods, services and digital assets without intermediaries.

👉 Get started at **[dsla.network](https://dsla.network)** 

👉 Read more at [**stacktical.com**](https://stacktical.com)

👉 Check our blog at [**blog.stacktical.com**](https://blog.stacktical.com)

👉 Start Building at [**readme.stacktical.com**](https://readme.stacktical.com/developer-guide/)

👉 Join our Guild at [**guild.xyz/dsla**](https://guild.xyz/dsla)

👉 Check active bounties at [**dework.xyz/dsla**](https://dework.xyz/dsla)

👉 Discuss on our governance forum at [**commonwealth.im/dsla**](https://commonwealth.im/dsla)