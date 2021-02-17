---
layout: post
featured: false
title:  "Stacktical receives web3 foundation grant to predict the scalability of Polkadot and Substrate blockchains "
author: Team
categories: [ partnership, press ]
image: assets/img/2020-02-12-stacktical-dsla-w3f-grant-blockchain-scalability-staking.jpg
---
## Will it scale ?

Polkadot is a blockchain network that provides shared security and secure messaging to Parachains, plug-and-play specialized blockchain, with parallelizable computations. Its architecture is a departure from generalized programmable blockchain that empower a wide variety of use cases at the expense of scalability.

Fundamental scalability bottlenecks remain in Polkadot, though. 

The fact that there will be a finite number of Parachains on the network upon launch is proof that limitations exist: While the capacity boost in using parallel Parachain computation is substantial, ensuring that they remain up, synced, and secure does cost resources.

As a Polkadot researcher, part of your job is to **figure out these resource requirements and drive architectural decisions (e.g. allocating a specific number Parachain slots) through repeated performance benchmarks**, in various protocol configuration and transactional scenarios.

But rather than spending weeks running thousands of performance benchmarks, and manually interpret their result, what if you could let your machine could figure out the scalability of your system itself using mathematical models, and very few performance measurements?

That is exactly what we set out to do with [willitscale-polkadot](https://github.com/Stacktical/willitscale-polkadot).

## willitscale-polkadot

Stacktical was originally a scalability prediction platform for DevOps professionals.

Our R&D efforts in the past three years enabled us to apply mathematical and statistical models to application and network benchmarks, and surface what humans can hardly (or simply can’t) guess from analyzing performance benchmarks.  

> By establishing that a given system was experiencing 24% contention and 8% coherency overheads, we were empowering DevOps teams with tangible scalability numbers they could communicate and improve on.

When we shifted the company's focus to enabling anyone to roll out peer-to-peer, electronic SLA contracts on the blockchain, we naturally started thinking about how we could leverage predictive analytics with blockchain networks.

Stumbling upon [this article](https://polkadot.network/polkadot-parachain-slots/) has been instrumental in confirming that similar overheads had been observed by Polkadot researchers. As the Parachain count increase, it appears the network throughput should theoretically reach a natural upper bound (diminishing returns from contention overhead) before declining (negative return from incoherency). 

![Capacity and Latency predictions, powered by willitscale-polkadot](https://raw.githubusercontent.com/Stacktical/willitscale-polkadot/master/resources/willitscale-client.png)
*The scalability chart of publicly available benchmarks of a private Ethereum network. For illustration purpose only.*

## What's next ?

The second milestone on our roadmap is to add predictive capabilities to the [polkadot-deployer](https://github.com/w3f/polkadot-deployer) :  

* Throughput measurement capability based on balance transfers
* Latency measurement capability based on balance transfers
* A new benchmark option to run predictive analysis on measurements
 
These changes will enable [willitscale-polkadot](https://github.com/Stacktical/willitscale-polkadot) users to effortlessly collect Substrate / Polkadot benchmark results to feed the predictive engine.

![project supported by web3 foundation grants program](https://raw.githubusercontent.com/Stacktical/willitscale-polkadot/master/resources/grant_w3f.png)

We would like to thank the [web3 foundation](https://web3.foundation) for supporting our development efforts of the first blockchain scalability prediction platform for Polkadot network researchers.

We're hoping that [willitscale-polkadot](https://github.com/Stacktical/willitscale-polkadot) will pave the way to faster, more quality development of decentralized products based on Polkadot, Substrate and more.   

Check out the [project on Github](https://github.com/Stacktical/willitscale-polkadot) and join the effort.

## About DSLA Protocol

[![DSLA Token, now on Argent wallet](/assets/img/2020-08-26-dsla-token-available-on-Argent-keyless-wallet-screenshot.jpg)](https://stacktical.com)

[DSLA Protocol](https://stacktical.com) is a risk management framework that enables infrastructure operators and developers to reduce their users exposure to service delays, interruptions and financial losses, using self-executing service level agreements, bonus-malus insurance policies, and crowdfunded liquidity pools.

DSLA Protocol's flagship use case is to offset the financial losses of Proof-of-Stake delegators and DeFi users, while incentivizing the connectivity, performance and availability of staking pool operators and DeFi service providers.

To learn more about DSLA Protocol, please visit [stacktical.com](https://stacktical.com), browse our official [blog](https://blog.stacktical.com), and follow [@stacktical](https://twitter.com/Stacktical) on Twitter.