---
layout: post
featured: true
title:  "DSLA Parametric Staking"
author: Team
categories: [ mainnet ]
image: assets/img/2022-07-21-stacktical-dsla-protocol-parametric-staking-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## The Problem with Staking 📉

One of the biggest risks users face when staking crypto is the volatility and price movement of the asset they are staking. 

Stakers run the risk of having their tokens locked during upside moves in the token price. As a result they are often compelled to dump their returns to lock in gains, putting constant selling pressure on the token.

## Enter Parametric Staking 📈

Parametric Staking is a novel implementation of DSLA's decentralized Service Level Agreement (SLA) technology, providing a performance-based staking solution that aligns the interests of stakers and projects.

So how does it work?

First we need a parameter that we can measure the performance of to use as a basis for calculating the staking reward APR. For DSLA's own Parametric Staking program we've chosen to use **Token Price**.

Using **Token Price** as our parameter, we can view Parametric Staking like a **Staking Upside SLA**. Stakers are hedging against the risk of the token price going up while their tokens are locked. Like any hedge, if what you are hedging against happens, you make a return.

> With Parametric Staking based on Token Price, if the token price goes up, the staking APR also goes up and stakers earn more rewards.

For the DeFi 🦍's out there, in the simplest terms possible: **Number go up means number go up 😊.**

As noted, for DSLA's Parametric Staking program we used token price as the measured parameter, but you could use any input that relates to your token or protocol as long as the data are available. A few possible examples:
* **Token Price** - to offset staking returns price pressure
* **Holder Count** - to encourage an increase in holders
* **Tokens Bridged to a New Chain** - to encourage cross-chain adoption
* **Protocol-Specific Growth Metrics** - to reward and encourage specific protocol growth
 
The flowchart below gives an overview of how Parametric Staking works, powered by DSLA GRC Automation Middleware:

[![Parametric Staking Flowchart](/assets/img/2022-09-29-parametric-staking-sla-flowchart.png)](/assets/img/2022-09-29-parametric-staking-sla-flowchart.png)

Parametric Staking will allow projects to make their staking more targeted and effective. It also provides a self-governed spend, where more tokens are spent as rewards if the staking program is having the desired effect and less tokens are spent as rewards if it is not.

Parametric Staking pools are capped in size, which has several additional benefits including:
- Capped maximum spend
- Creates scarcity and engagement
- Maintains attractive APR's for stakers

## Staking Service Credits 🪙

As with any DSLA-powered SLA, users who deposit to a Parametric Staking SLA receive Branded Service Credits back to represent their SLA position. For DSLA's staking program these tokens are branded as `xDSLA`.

Service Credits function much like other liquid staking tokens that you may be familiar with in the broader crypto ecosystem, such as `stETH`. The Service Credits are value accruing, deriving their value from the performance of the underlying token.

In practice this means there is no need for users to claim and re-stake, Service Credits accrue rewards and automatically compound.

Service Credits being a liquid staking token enables future novel applications and trading opportunities for users with locked stakes.

## DSLA's Parametric Staking Program

DSLA's inaugural Parametric Staking program provides stakers the ability to hedge the upside risk of the DSLA token price rising while their tokens are locked for staking.

DSLA's Parametric Staking pools are setup with an initial term of six months, with monthly verifications and reward distributions. When users deposit DSLA tokens they will receive `xDSLA` Service Credits in return to represent their stake in the pool.

When a user stakes DSLA tokens, those tokens are locked until after *next* verification period. For example, if someone stakes any time during Period #2, which runs from 31-Dec-2022 to 31-Jan-2023, their DSLA tokens will be locked until after Period #3, which runs from 31-Jan-2023 to 28-Feb-2023. After that, they may claim rewards or claim and unstake completely. Or they may continue to hold their `xDSLA` tokens and accrue additional rewards!

Staking APR will scale up based on the calculated month-over-month price increase of the DSLA utility token. Note that it's not a simple comparison of the price at the start and end of the period, though. To mitigate manipulation, the average and mean price of the token over the entire period are used to compare to the price at the start of the period.

> If the token price increases by 250% month-over-month, the staking APR for that period would be up to 300%.

**Up to 300% APR?!?!** Yes!

DSLA is not an inflationary token and staking rewards are not paid through minting new tokens. Rather, the staking pools have been funded by an initial token allocation from reserves and ongoing funding will be through various current and upcoming revenue streams like validation fees, minting fees and claim fees.

It is also worth specifically noting that, while the headline of up to 300% APR is **exciting**, it is important to ground expectations on whether the parameters for that will be met month after month.

## Ready to Shake Up the Staking Landscape 🌋

DSLA's Parametric Staking is made possible by leveraging our SLA 3.0 technology and just goes to show how flexible and powerful DSLA Protocol is as an Automation Middleware.

We're excited to roll this out for our global community of DSLA Champs first, and then see it grow as other protocols adopt the superior solution that Parametric Staking represents.

**Are you a project that is interested in deploying Parametric Staking?** Join our [**Guild**](https://guild.xyz/dsla) and hop into our Discord server to chat about Parametric Staking!

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