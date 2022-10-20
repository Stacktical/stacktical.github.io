---
layout: post
featured: false
title:  "DSLA v2.0"
author: Team
categories: [ mainnet ]
image: assets/img/2022-09-01-stacktical-dsla-protocol-v2-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## GRC Automation Middleware

DSLA enables stakeholders on different sides of a service or event to trade risk using Decentralized Service Level Agreements (SLA), and with the roll out of DSLA v2.0 SLA stakeholders have more flexibility, control and a better overall experience than ever before.

We're excited to cover the improvements and changes in v2.0 that make it more streamlined and intuitive for stakeholders, and make DSLA GRC Automation Middleware more attractive for developers and integrators.

## A Better Way to Manage Risk

Today DSLA is live on six networks: Ethereum, Avalanche, Fantom, Harmony, Binance Smart Chain and Polygon, with work ongoing to port DSLA to Solana. The release of v2.0 also enables a number of new flagship use cases, like NFT Floor Price Protection, that broaden the general audience of end-users that could make use of a DSLA risk management product.

It's safe to say that with v2.0, swapping risk with DSLA is more accessible than ever.

Let's look at some key structural changes and improvements DSLA v2.0 incorporates:

* **SLA Owners, SLA Liquidity Providers and SLA Users**, three distinct SLA stakeholders with different roles, responsibilities and benefits;
* **Claim Fees**, improving the overall tokenomics of DSLA and offsetting the up front verification fee deposit required of SLA Owners;
* **Multi-provider SLA Support**, enabling many-to-many SLA's where anyone can sign on to back an SLA on the Provider side;
* **Deviation Based Rewards**, making compensations and rewards proportional to performance, and incentivizing providers to **outperform**;
* **Severity Levels and Penalties**, allowing the setup of SLA's that support fine tuned compensations according to the severity of failure, using pre-agreed severity levels
* **Introduction of Branded Service Credits**, modifying the previous DSLA-SP and DSLA-LP position tokens to be Branded Service Credits specific to each use case;
* **Instant Claim Availability**, claim as you go for compensation or rewards you are entitled to;
* **SLA's Don't Terminate on Breach**, providing a more intuitive user experience, SLA's no longer terminate on the first breach, but stay active through the whole term set when the SLA contract was created;
* **More Flexible SLA Policies**, SLA's can be setup to measure performance using any of the following operators: `>`, `>=`, `<`, `<=`, `=` and `!=`;
* **Integration Tests and Unit Tests**, improved integration and unit tests, ensuring DSLA Protocol performs as expected and making the Developer Toolkit (DTK) more robust and developer friendly;
* **Refactoring, Gas Optimizations and Bug Fixes**, improving basic protocol operation;
* **Audits by Hacken and Astra**

## Risk Prediction Markets and SLA Stakeholders

Prediction Markets let you trade the outcome of real world events. We now have three distinct stakeholders within DSLA Protocol who play a role in trading risk using DSLA GRC Automation Middleware and the [DSLA.network](https://dsla.network) dApp.

**With DSLA, service stakeholders can trade third-party risk with each other, by staking on the outcome of periodic events, called SLA verifications.**

**SLA Owners**: Create an SLA contract that **SLA Liquidity Providers** and **SLA Users** can sign onto to trade risk. The **SLA Owner** sets the terms of the SLA contract, and is also required to deposit DSLA tokens to pay for the SLA verifications. **SLA Owners** in v2.0 are entitled to a claim fee of **0.3%** for all claims paid from the SLA contract. Usually an SLA Owner will also create the compensation pool and be an **SLA Liquidity Provider**.

**SLA Liquidity Providers**: Contribute to the compensation pool, backing that the performance targets set in an SLA contract will be met. **SLA Liquidity Providers** trade risk with **SLA Users**. When the SLA targets are met, **SLA Liquidity Providers** may claim a reward from the user pool.

**SLA Users**: Contribute to the user pool, hedging risk that the targets set in an SLA contract are not met. **SLA Users** trade risk with **SLA Liquidity Providers**. If the SLA targets are not met, **SLA Users** may claim a compensation.

## A Deeper Look at v2.0 Enhancements

Okay, so let's take a deeper look at some of the major changes, improvements and enhancements that v2.0 is shipping. 👇

### What's That About *Claim Fees*?

The introduction of **Claim Fees** improves overall protocol tokenomics and incentivizes stakeholders to create SLAs that liquidity providers and users will want to sign onto. With the new claim fee structure, all compensation and reward claims are subject to the following claim fees:
* 99.55% sent to the SLA Stakeholder (the **SLA User** or **SLA Liquidity Provider**) making the claim
* 0.3% claim fee sent to the **SLA Owner**
* 0.15% claim fee sent to **DSLA Core Team**

![DSLA v2.0 Claim Fees](/assets/img/dsla-v2-claim-fees.jpg)

The claim fee incentivizes the creation of SLA's that other **SLA Liquidity Providers** and **SLA Users** will want to sign onto. The more stakeholders that sign onto and use an SLA, the more fees will be generated.

All SLA Owners have to stake DSLA tokens to pay for periodic verifications when they create an SLA. The 0.3% claim fee is meant to offset this upfront cost, with upside that claim fees can easily exceed upfront verification fees.

Verification fees are handled the same in v2.0 as they have been previously with 25% of the fee going to the user who performs the verification, 25% going to the developer who created the use case, 25% to the DSLA Core Team and 25% burned in the DSLA Bonfire Burn.

![DSLA v2.0 Verification Fees](/assets/img/dsla-v2-verification-fees.jpg)

### Many-to-Many SLA's

Allowing multiple **SLA Liquidity Providers** to sign onto the same SLA makes the protocol more efficient and easier to scale. Now **SLA Liquidity Providers** who just want to back a certain SLA can sign onto it and provide liquidity, without having to necessarily create their own SLA.

This makes Decentralized SLA's function more like typical DeFi liquidity pools that many liquidity providers would be familiar with. By allowing anyone to assess current SLA's in the marketplace and provide liquidity to make a return, without having to issue a new SLA and attract **SLA Users**, we reduce friction and overhead for **SLA Liquidity Providers**.

### Deviation Based Rewards

DSLA v2.0 modifies how rewards and compensations are calculated so that they scale according to performance. What does this mean?

When a Service Level Indicator (SLI) verification is done, DSLA checks actual performance against the Service Level Objective (SLO), which is the target set in the SLA. The difference between **actual** and **target**, as a percentage, is the **deviation**, which is then used in the rewards or compensations calculation.

So when actual performance very close to the target performance, rewards or compensations are smaller. If there is a large deviation then rewards or compensations are also larger.

In practice this means that service providers and **SLA Liquidity Providers** are incentivized to **outperform** the SLO target, because the better they perform the more rewards they earn (and the worse they perform the more compensations are paid out).

For **SLA Users** compensations and premiums paid will also scale according to deviation. The worse a provider performs, the larger the compensation for the **SLA User**. On the flip side, smaller premiums will be deducted from the funds the **SLA User** staked in the user pool if the provider just meets SLA targets.

In practice **SLA Users** will often be able to claim back a portion of their staked funds at the end of the SLA term, if the provider met, but did not really exceed, SLA targets.

## Severity Levels and Penalties

Allows

### Branded Service Credits

The tokens to represent **SLA User** and **SLA Liquidity Provider** stakes in each SLA have been updated to be more reflective of the SLA contract type and how risk is being swapped using DSLA contracts.

Service credit tokens will now be specific to the use case, retiring the standard DSLA-SP and DSLA-LP tokens used previously. New use cases and SLA contract types will be able to assign the name for their specific Branded Service Credits.

For example, if we have a staking performance SLA for guaranteed APR/APY returns, instead of **SLA Users** getting issued a generic DSLA-SP token to represent their stake, they could receive APRMISS tokens. APRMISS tokens would be entitled to a claim if the APR target in the SLA is ***missed***. It's more practical and intuitive than "short" tokens, when regular users aren't *shorting* anything, they are just swapping risk to receive protection.

In the future, Branded Service Credit names will be one of a number of protocol specifications that will be approved via governance. Governance rights will be granted based on NFTs earned in the DSLA Metaverse and by using DSLA to hedge risk.

### Instant Claim Availability

**SLA Liquidity Providers** and **SLA Users** both stake tokens through the term of the SLA when they sign onto an SLA contract. With DSLA v2.0, however, if a stakeholder is entitled to compensations or rewards after periodic verifications, they may claim those funds.

### SLA's Don't Terminate on Breach

SLA contracts no longer terminate on the first SLO breach. This simple change makes the way SLA contracts work much more intuitive and will make managing SLA contracts much more streamlined.

Prior to DSLA v2.0, if a periodic verification was performed and the SLA was found to have not met targets, compensations would be made available to **SLA Users** and the SLA contract would terminate.

A new SLA would then need to be created and signed onto again by all parties to hedge and trade risk. Now stakeholders can choose an SLA, sign on for the entire term, and claim compensation or rewards as they go, giving a much smoother user experience for all involved.

### SLA Period and Policy Changes

Weekly and monthly periods for verifications are the most practical, in demand and fit for purpose, so we've streamline v2.0 to focus on these.

At the same time, DSLA now supports SLO targets to be set using any of the following operators: `>`, `>=`, `<`, `<=`, `=` and `!=`.

### Enhanced Integration Tests and Unit Tests

The core team put a lot of effort developing comprehensive integration tests and unit tests to ensure the protocol works as expected with the v2.0 upgrades.

Including these tests in the DTK provides a robust framework for other developers who create a use case or integrate DSLA GRC Automation Middleware into their application. Developers using the DTK now have a great testing toolkit to ensure everything works as expected.

The enhanced integration tests and unit tests will make developing and deploying new use cases much more streamlined.

## Security Audits & Bug Bounty

As always, security is paramount and we continue to put it first. With the significant structural changes and additions to DSLA in v2.0 we have engaged external auditors to review the code for any vulnerabilities.

Our security process for DSLA v2.0 includes:

* An audit from leading smart contract auditor [Hacken](https://hacken.io/)
* An audit from leading security firm [Astra](https://getastra.com/)
* A security bug bounty campaign live on [Immunefi](https://immunefi.com/bounty/dslaprotocol/)
* Enhanced integration test and unit test framework developerd for v2.0

---

# 💡DSLA Protocol
### GRC Automation Middleware

DSLA’s approach to integrated risk management enables the downside-protected delivery of goods, services and digital assets without intermediaries.

👉 Get started at [**dsla.network**](https://dsla.network)

👉 Read more at [**stacktical.com**](https://stacktical.com)

👉 Check our blog at [**blog.stacktical.com**](https://blog.stacktical.com)

👉 Build a use case at [**readme.stacktical.com**](https://readme.stacktical.com/developer-guide/)

👉 Join our Guild at [**guild.xyz/dsla**](https://guild.xyz/dsla)

👉 Check active bounties at [**dework.xyz/dsla**](https://dework.xyz/dsla)

👉 Discuss on our governance forum at [**commonwealth.im/dsla**](https://commonwealth.im/dsla)