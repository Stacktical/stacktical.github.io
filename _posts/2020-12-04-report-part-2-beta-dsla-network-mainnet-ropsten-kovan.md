---
layout: post
featured: false
title:  "Beta Outro Part 2: Conclusion"
author: Team
categories: [ beta ]
image: assets/img/2020-12-04-report-part-2-beta-dsla-network-mainnet-ropsten-kovan.jpg
---

## Update your Bookmarks

*This is the 2nd post of a two-part Beta Outro series, signaling the end of the DSLA Incentivized Beta. Read the 1st post [here](https://blog.stacktical.com/beta/2020/11/27/dsla-incentivized-beta-report-part-1-phases-1-5.html).*

Dear DSLA champions, now that the DSLA incentivized beta has ended, the beta DSLA.network Ðapp, running on the Ropsten test network and powered by Band Protocol, has permanently moved to [beta.dsla.network](https://beta.dsla.network). We do not plan on maintaining it much, it is more akin to a live archive.

The main address at [DSLA.network](https://dsla.network) now gives you access to the latest version of the MVP Ðapp, running on the Kovan test network and [powered by Chainlink](https://blog.stacktical.com/partnership/mainnet/2020/12/01/stacktical-dsla-protocol-partners-chainlink-oracle-blockchain-cryptocurrency-defi.html). Please use it as a reference from now on.

The MVP Ðapp is the closest thing there is to the upcoming mainnet release, except for the use of test assets. The DSLA core development team will keep updating the MVP, until it reaches the functional and non-functional requirements set for the mainnet.

## The Missing Parts of beta.dsla.network

During the beta, we did not manage to ship bDSLA withdrawal and claiming features within the allocated time. A series of reliability incidents highlighted point of failures in the beta architecture, and hindered our ability to develop in realtime, hackathon conditions.

We also identified risks of conflicts and overlaps between the two missing features, as the protocol's time-based rules were not mature enough at the time to account for certain edge cases and [race conditions](https://en.wikipedia.org/wiki/Race_condition).

### bDSLA withdrawals

Since withdrawals are contigent on these rules, and considering our shift to a stake-and-forget model, **where you only need to stake once** for all the available periods of a given DSLA contract, withdrawals are being redeveloped from the ground up. 

They will never make it to beta.dsla.network.

### bDSLA claims

With the recent architectural change of DSLA Protocol, the implementation of the claiming feature has significantly diverged from the target mainnet implementation. 

DSLA Protocol relies on an oracle network to perform 3 types of operations:  

* ① Display accurate, realtime price information in DSLA contracts so users can monitor their liquidity pools, hedges and policy valuations;

* ② Convert users stakes and delegations into their DSLA and stablecoin equivalent to make liquidity and insurance deposits;

* ③ Connect DSLA contracts with decentralized indexers during a contract verification to trigger claims and insurance payouts.

During the beta, our oracle developments were spread across the Ðapp, an API and our protocol's smart contracts, for each one of these operations.

Too much overhead that we could handle, in hindsight.

### Meet you at the Bonfire

While the DSLA architecture has dramatically improved, and that key areas of the DSLA Protocol and the DSLA.network Ðapp have been battle-tested, it is unfortunate that the community did not get a proper end-to-end taste of the DSLA experience before launch. 

But instead of allocating more resources to the beta Ðapp, and running into more third-party infrastructure issues, we will focus our team's efforts on our core mission. **All claims based on your staking activity during the beta will be directly available on the mainnet's revamped [bonfire](http://dsla.network/bonfire) upon launch.**

## For a Better, Safer Mainnet in Q1 2021

The tentative launch window of the DSLA Protocol and the DSLA.network Ðapp on the mainnet was contingent on the pace of developments, and mandatory security audits.

As expressed in our [previous post](https://blog.stacktical.com/beta/2020/11/27/dsla-incentivized-beta-report-part-1-phases-1-5.html), we do not quite meet the mainnet functional requirements just yet. 

From a security standpoint, the current backlog of our auditing partners does not allow a Q4 2020 launch. There are a lot of projects waiting to be audited at the moment, and the waiting time increases with the limited capacity of auditing teams during the Holiday season.

We have decided to set the new launch window of the DSLA Protocol and the DSLA.network Ðapp to Q1 2021 to remove all incentives to rush security audits, to further polish our developments based on the incentivized beta test feedbacks, and to have more room to introduce the community to our growing list of mainnet partners through a series of marketing initiatives.

Stay tuned for our upcoming partnership announcements, 10 AMAs with the best AMAs communities in the blockchain and cryptocurrency industry, a new wave of influencer coverage of DSLA Protocol, and multiple other exciting events, as we get closer to primetime.

Join the conversation [on Telegram](https://t.me/stacktical).


## About DSLA Protocol

[![DSLA Token, now on Argent wallet](/assets/img/2020-08-26-dsla-token-available-on-Argent-keyless-wallet-screenshot.jpg)](https://stacktical.com)

[DSLA Protocol](https://stacktical.com) is a risk management framework that enables infrastructure operators and developers to reduce their users exposure to service delays, interruptions and financial losses, using self-executing service level agreements, bonus-malus insurance policies, and crowdfunded liquidity pools.

DSLA Protocol's flagship use case is to offset the financial losses of Proof-of-Stake delegators and DeFi users, while incentivizing the connectivity, performance and availability of staking pool operators and DeFi service providers.

To learn more about DSLA Protocol, please visit [stacktical.com](https://stacktical.com), browse our official [blog](https://blog.stacktical.com), and follow [@stacktical](https://twitter.com/Stacktical) on Twitter.