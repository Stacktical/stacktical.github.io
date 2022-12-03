---
layout: post
featured: false
title:  "Parametric Staking Excess Rewards"
author: Team
categories: [ mainnet ]
image: assets/img/2022-12-02-stacktical-dsla-protocol-parametric-staking-post-mortem-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## Excess Rewards Distributed for Period 0

Members of the community who checked their rewards on the DSLA Parametric Staking pool on December 2nd noticed that the staking rewards looked a little too generous -- almost 10% for the month. That's about 120% APR, which is possible with Parametric Staking, but the token price performance for the month didn't justify that sort of return. 

What's going on?

## What Happened 🔎

In short, there was a precision error with the way reward levels were configured in the Parametric Staking SLA that was deployed.

This had an unintended result of increasing APR rewards by a factor of 10. With the token price performance over the past month, staking rewards should have been paid out at around the base 12% APR, or approximately 1% for the month. However, due to the reward level misconfiguration, rewards were calculated at a rate of 120% APR, which resulted in a monthly reward distribution of about 10%!

## What's Next ➡️

First and most important:

Unstake from the current staking pools and ⚠️⚠️**DO NOT RESTAKE**⚠️⚠️

If you restake to the current pool your funds will be locked through the next period, but won't earn any rewards!

Okay, with that out of the way, we are requesting all users currently staking to please ensure that you unstake by December 19, 2022.

We will be redeploying a new Parametric Staking Pool with the proper reward parameters on December 29, 2022. As previously communicated, staking APR on this pool will be variable, from 12% to 300%, depending on the price performance of the DSLA token.

Yes, this does unfortunately mean that stakers will miss out on rewards for December, but we figure that's not a bad tradeoff for considering the 10x on expected rewards for November!

Once the new Parametric Staking Pool opens on December 29th, please stake your tokens to it at [https://dsla.network/stake](https://dsla.network/stake). Note that there will again be **limited space** as there will be a cap on each pool!

## We Appreciate the Support of the Community🤝

While roadbumps are not unexpected when you're launching new and innovative products, they're seldom ideal. We're glad that in this case the result was a nice Christmas Bonus for our community, who are pioneering Parametric Staking with us!

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