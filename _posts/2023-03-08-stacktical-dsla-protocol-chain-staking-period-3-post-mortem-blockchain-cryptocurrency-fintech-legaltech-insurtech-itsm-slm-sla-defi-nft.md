---
layout: post
featured: false
title:  "Parametric Staking Period #3 Post Mortem"
author: Team
categories: [ mainnet ]
image: assets/img/2023-03-08-stacktical-dsla-protocol-chain-staking-period-3-post-mortem-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.png
---

## Period #3 APR Boost Calculation Error 🧮

Parametric Staking Period #3 ran from 31-Jan-2023 to 28-Feb-2023. Upon verification at the start of March our community raised concerns that rewards seemed low, considering DSLA token upside performance through February.

After investigating, it was confirmed there was indeed a miscalculation in the Service Level Indicator (SLI) for Period #3, resulting in the incorrect APR Boost being applied for the period. Staking APR for the month was 12%, while the 120% APR Boost should have in fact been triggered.

Let's review what happened and take this opportunity to dive into how DSLA works when calculating an SLI.

### SLA, SLO and SLI ✅

When a Service Level Agreement (SLA) is created a Service Level Objective (SLO) is set, which is the target performance that is being committed to. With an NFT Floor Price Protection agreement, for instance, the SLO would be the target floor price.

A Service Level Indicator (SLI) is the periodic measure of actual performance. Each period of an SLA, the SLI is fetched and compared with the SLO to determine whether the agreement was honoured or breached.

For Parametric Staking, the SLI is the Month-Over-Month(MoM) change in the DSLA token price, expressed as a percentage. Parametric Staking also makes use of Severity Levels, to determine the APR Boost.

Severity Levels
* If $DSLA MoM performance is **less than** 100%, stakers earn 12% APR
* If $DSLA MoM performance is **greater than** 100%, stakers earn 120% APR
* If $DSLA MoM performance is **greater than** 250%, stakers earn 300% APR

###  How the SLI is Fetched 📩

When a period ends in an SLA, anyone can trigger the verification event, paying the transaction fee for the verification and earning a DSLA reward for doing so. Protocol parameters are set via [governance](https://dao.dsla.network) and as of this writing the verification reward is 25,000 DSLA.

The verification transaction will initiate a call to Chainlink to fetch SLI data from the external adapter that calculates the SLI.

| ![DSLA System Architecture](/assets/img/2023-03-08-dsla-system-architecture.png) |

Because the calculation error we encountered with Parametric Staking was in the External Adapter, it can be patched without having to redeploy new smart contracts. This is a good opportunity to also identify that this access and control, while necessary, presents a centralization risk that participants should be aware of.

It is also worth noting that one of the goals of DSLA Chain would be eventually enabling the usage of on-chain data for this and other monitoring use cases, helping to eliminate this dependency and centralization risk.

## Parametric Staking Calculation Methodology 🧑‍💻

The methodology behind calculating the SLI for DSLA upside performance is relatively straightforward. The External Adapter does the following to calculate $DSLA upside performance:

* Price data are fetched for the period that is being verified. A call is made to [Coingecko's API](https://coingecko.com/en/api) for the month; Coingecko returns hourly data for the entire period.
* The average price for the period is calculated, using all data ticks returned by [Coingecko](https://coingecko.com).
* Price data are then fetched for the previous period from [Coingecko's API](https://coingecko.com/en/api).
* The average price for the previous period is calculated using all data ticks returned.
* Price change is then calculated as follows: 

$$ {(Current Period Average - Previous Period Average)} \over {Previous Period Average} $$

This formula 👆 is where the error was, which resulted in performance being underestimated. The formula has now been corrected, so performance will calculate correctly going forward.

## Airdrop Top Up 🪂

To make this right for stakers, we've manually calculated what rewards should have been distributed based on holders' xDSLA-1 balance at the time of distribution. We will be airdropping the difference to all stakers accordingly. The summary for each network:

| Network | Distributed Reward | Airdrop to be Distributed |
| ------- | ------------------ | ------------------------- |
| Ethereum | 1,485,013 | 13,365,119 |
| Arbitrum | 872,270 | 7,850,433 |
| Polygon | 650,013 | 5,850,120 |

---

# 💡 DSLA Protocol

### GRC Automation Middleware

DSLA's approach to integrated risk management enables the downside-protected delivery of goods, services and digital assets without intermediaries.

👉 Get started at **[dsla.network](https://dsla.network)** 

👉 Read more at [**stacktical.com**](https://stacktical.com)

👉 Check our blog at [**blog.stacktical.com**](https://blog.stacktical.com)

👉 Start Building at [**readme.stacktical.com**](https://readme.stacktical.com/developer-guide/)

👉 Join our Guild at [**guild.xyz/dsla**](https://guild.xyz/dsla)

👉 Check active bounties at [**dework.xyz/dsla**](https://dework.xyz/dsla)

👉 Discuss on our governance forum at [**commonwealth.im/dsla**](https://commonwealth.im/dsla)