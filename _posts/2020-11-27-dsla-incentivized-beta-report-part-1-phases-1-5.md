---
layout: post
featured: true
title:  "Beta Outro Part 1: Phase I-V"
author: Team
categories: [ beta ]
image: assets/img/2020-11-27-dsla-incentivized-beta-report-part-1-phases-1-5.jpg
---

## 👏 Thanks for Participating

*This is the 1st post of a two-part Beta Outro series, signaling the end of the DSLA Incentivized Beta. The 2nd and final part of this series will be posted on December 2nd, 2020.*

Dear DSLA champions, all Phases of the DSLA incentivized beta have now been completed.  
 
It's time to reflect on what happened for the past weeks! 🤔

* There is no weekly monitoring cycle left. 
* Phase I-V staking compensations / rewards can be proven. 
* Phase I-V staking compensations / rewards will be claimable soon.

###  Phase Timestamps:   
```
  betaPeriods = [
    {
      // October 21, 2020
      title: 'Phase I',
      sla_period_start: 1602633600,
      sla_period_end: 1603238400,
    },
    {
      // October 28, 2020
      title: 'Phase II',
      sla_period_start: 1603238400,
      sla_period_end: 1603843200,
    },
    {
      // November 04, 2020
      title: 'Phase III',
      sla_period_start: 1603843200,
      sla_period_end: 1604448000,
    },
    {
      // November 11, 2020
      title: 'Phase IV',
      sla_period_start: 1604448000,
      sla_period_end: 1605052800,
    },
    {
      // November 18, 2020
      title: 'Phase V',
      sla_period_start: 1605052800,
      sla_period_end: 1605657600,
    },
  ];
```
You can still access the Ðapp at **[DSLA.network](https://dsla.network)** to browse DSLA contracts and their Phases.
___

## 🏆 Phase I-V Report

👏 Thank you for your participating in the DSLA incentivized beta! 

What an insightful ride this has been! The DSLA core development team has learned tremendously from the planned and unplanned failures that we have experienced during the different phases of the beta.

In hindsight, we found a great balance between having just enough features working as expected to enable everyone to have an early taste of the hedging experience, and having features, infrastructure and operations that fail to various degrees, giving us clear pointers on what should be fixed, improved or dropped.

We are coming out of this controlled test with a lot of data to crunch, and areas to improve and solidify for the mainnet releases and our 2021 roadmap (more about that soon).

Here is a snapshot of the participation across all phases:

#### 🔥 80 participants
#### 🔥 More than 560M bDSLA tokens claimed
#### 🔥 More than 160M bDSLA tokens staked
#### 🔥 More than 50K USD TVL (Total Value Locked on Nov 27)
#### 🔥 On average 4.3M bDSLA tokens staked per DSLA contract
#### 🔥 On average 2.8 stakeholders per DSLA contract
#### 🔥 More than 60 DSLA contracts created

___
## Beta Objective

Remember? The objective of the DSLA incentivized beta was to validate the functional requirements of DSLA Protocol and DSLA.network, our flagship Ðapp, in preparation for their respective mainnet launch.

To challenge our core team's assumptions about what we must develop, the community was involved in a controlled usability test split across 5 weekly phases, designed to collect feedbacks about the Ðapp, iterate in real-time on the best ideas, and establish the final scope of the protocol to be audited by our security partner.

## The Good

Phase I and II proceeded as planned, with high levels of participation from the community, and active conversation on all communication channels. Especially on our [Telegram](https://t.me/stacktical). 

This enabled us to battle-test core features of DSLA Protocol and the DSLA.network Ðapp, namely: 

* The ability to [create](https://dsla.network/agreements/create) DSLA contracts
* The ability to stake (bDSLA) tokens to existing DSLA contracts
* Browsing through the DSLA contract marketplace, active [pools](https://dsla.network/pool) and active [hedges](https://dsla.network/hedge) views 

___

## The Bad

Real-time developments have started stalling in Phase III. 

As we were working on withdrawals and claims we realised that the protocol's time-based rules were not mature enough in their implementation, namely:

* When should you be able to stake? withdraw? claim?
* How stakes, withdrawals and claims interact with each other

We kept improving the overall usability of the Ðapp, but it is still missing:

* A way to withdraw (bDSLA) stakes
* A way to claim bDSLA staking rewards for Phases I-V
* A way to track the evolution of SLI

Last but not least, we underestimated the difference in implementation between the networks we wanted to add support for, during the beta. Harmony, Polakdot and Band Protocol are different beasts, we had to adapt.

___

## The Fix

### Withdrawals & Claims Refactoring

At this stage, we have refactored about a third of the DSLA.network Ðapp to ship the features missing from the beta scope, and circumvent the current limitations present at the DSLA Protocol level.

We can't directly address these limitations by improving the DSLA Protocol smart contracts, because any protocol re-deployment would break compatibility with the beta DSLA contracts, as we are moving from the Ropsten test network to Kovan.

Even if we were not changing networks, actively developping ways to migrate beta DSLA contracts to the new Kovan deployment would have been be a distraction from our roadmap.

**Instead, we will communicate the final status of the Ðapp developments in the [Beta Outro Part 2](https://app.gitbook.com/@stacktical/s/dsla-incentivized-beta/fundamentals/key-dates) on December 2nd.**

### Architecture Deprecation

On December 1st at 3PM CET, we will introduce one of the major changes we are making to the DSLA Protocol architecture, to meet our requirements for the mainnet.

⏰ **December 1st at 3PM CET, save the date.**


### New Network Integration Policy

We are taking a bit of a top down approach, here. Moving forwards, we will primarily add support for blockchains of blockchains (e.g. Substrate/Polkadot), prior to adding support for the stand-alone networks that rely on them. 

**Band Protocol being a Cosmos/Tendermint implementation, Cosmos (ATOM) support has been added to DSLA Protocol accordingly.**

___

## 💡 Feature Spotlight

Here is a series of other identified issues that we are looking forward to fixing.

### #1 Markeplace Pagination

With the growing number of DSLA contracts, networks and validators, it is becoming hard to navigate through the marketplace.

### #2 Better Pool & Hedge Tracking

Active pool and hedge views does not indicate how stakes are diversified across phases, and lack useful information.

### #3 Cross-Phase Stakes

Unused stakes remain bound to their Phase instead of being carried over to the new Phase.

## The Ðapp will up until mainnet

The [DSLA.network](https://dsla.network) Ðapp will remain up, running and improving until mainnet launch. Past testers and newcomers alike will have plenty of time and opportunity to try new features as they are released to the Koven test network.

See you in Outro Part 2, where we will wrap things up and officialize the next steps of the DSLA Protocol roadmap.
___

## 📕 User Manual

Please refer to the official **[DSLA Incentivized Beta Guide](https://readme.stacktical.com/dsla-incentivized-beta/)** to learn more.
___

## About DSLA Protocol

![DSLA Network, the flagship application of DSLA Protocol, a risk management protocol for developers](/assets/img/dsla-network_screenshot_iphone-duo.png)

DSLA is a risk management protocol for developers, to build applications and operate infrastructures that are natively capable of financially protecting users against failures. 

It enables anyone to vouch for the reliability of a service, get paid when the service performs as expected, or get compensated when the service does not meet expectations.  

**⚡️ [https://stacktical.com](https://stacktical.com)**

