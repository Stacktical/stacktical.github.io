---
layout: post
featured: true
title:  "Hardening DSLA against CEX Programmatic Sell-Offs"
author: WilhemPujar
categories: [ post-mortem, security ]
image: assets/img/2020-11-14-suspicious-activity-report-mitigation-plan.jpg
---

## Not your Private Keys, Not your DSLA Tokens

*The purpose of this Suspicion Activity Report (SAR) is to disclose the existence of transactions that do not make sense to our team, as well as introduce an emergency plan to mitigate their impact on the [DSLA Token](https://etherscan.io/token/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe), and the rest of the DSLA family of products.*

### 📅 November 13, 2020

It was brought to our attention that large amounts of DSLA tokens originating from the ProBit [liquidity pool](https://etherscan.io/token/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe?a=0x72e5263ff33d2494692d7f94a758aa9f82062f73) have been sold on Uniswap, in highly automated ways.

### 📅  November 14, 2020

Per our initial investigation, it is indeed unlikely that a human trader would [withdraw DSLA tokens from ProBit](https://etherscan.io/tx/0xa63248a6a421a25d969c3835b6c0ad3afa934885152e8646bd2fddae022eaa8a), then [swap DSLA tokens for USDT on Uniswap](https://etherscan.io/tx/0xd27a16d359c58b589b5805b39b41e09f2ee61446d8a32159203696cb3ce83859), in such a short amount of time (2 minutes), and on [repeated, systematic occasions](https://etherscan.io/token/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe?a=0xc9cae208c7a00b000bbb4bd0645dd170623e9526).

### ⚠️ Intermediate conclusion

Burried in otherwise valid transactions, the `0xc9cae208c7a00b000bbb4bd0645dd170623e9526` wallet involved in these swaps is **either exerting price manipulation, or turning a profit through aggressive arbitrage**.

We have reached to the ProBit team for clarification, as we lack the elements to clearly establish responsibilities at this stage.

___

## Mitigation Plan

There is no reliable model for quantifying the impact of programmatic sell-offs on the price of assets and their market capitalization. 

But we can still harden DSLA against suppression, manipulation, and trading abuse, by:

* **A)** Recapturing lost value by reducing DSLA's total supply;
* **B)** Parting ways with our centralized cryptocurrency exchanges;
* **C)** Adding liquidity and creating new LP incentives across all DEX pools.

### A) 🔥 2B+ DSLA Token Burn

On November 30, 2020, we will proceed with a **2,000,000,000.00 DSLA token burn** using our personal, team, company and participating partners wallets. All other DSLA holders will benefit from the increase in scarcity / decreate in total supply of DSLA.

In that same spirit, we will also inaugurate a new section on the [DSLA Protocol official website](https://stacktical.com), dedicated to: 

* The tracking of your DSLA holdings;
* The updated DSLA token distribution and the detailed purpose of company wallets;
* The monitoring of DSLA transactions.

These information also aim at increasing the overall auditability of the project, in preparation for our mainnet launch.

### B) 🤝 Trusted Trading Platforms

As we're figuring out the ins and outs of the sell-off with the ProBit team, we strongly advise you do not deposit any funds to their service


| Type        |  | Status           | Exchange 
| :------------- | :------------- | :------------- | :------------- | :------------- | :------------- |
| Initial Pool | **Genesis** of the DSLA DEX Pools | **Created** | [Uniswap](https://uniswap.info/pair/0xd0fbb87e47da9987d345dbdf3a34d4266cf5ebe9)
| Bridge Pool 1 | **Extension** of the DSLA DEX Pools | **Created** | [Mooniswap](https://mooniswap.info/pair/0xd3FE251864dD3D69D47EBB0F530c8541856aA6BB)
| Bridge Pool 2 | **Extension** of the DSLA DEX Pools | **Created** | [Balancer](https://pools.balancer.exchange/#/pool/0xdff4f867855fd7db4d240b60fd0a88f6a049427a/)
| DEX Aggregator | **Combination** of all DSLA DEX Pools | **Listed** | [1nch](https://1inch.exchange/#/DSLA/ETH)
| DEX Listing | **DEX alternative** to DSLA DEX Pools | **Listed** | [IDEX](https://exchange.idex.io/trading/DSLA-ETH)

### C) 💧 DEX Liquidity

We had already hinted at new iterations to the DSLA Community Faucet in the past. This incident further puts that effort in perspective. We will make it one of our priorities from now on .

___


## What's next?

We will keep investigating the sell-off, and share new updates as new information come in.

___

## About DSLA Protocol

![DSLA Network, the flagship application of DSLA Protocol, a risk management protocol for developers](/assets/img/dsla-network_screenshot_iphone-duo.png)

DSLA is a risk management protocol for developers, to build applications and operate infrastructures that are natively capable of financially protecting users against failures. 

It enables anyone to vouch for the reliability of a service, get paid when the service performs as expected, or get compensated when the service does not meet expectations.  

⚡️ [https://stacktical.com](https://stacktical.com)

