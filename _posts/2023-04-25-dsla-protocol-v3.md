---
layout: post
featured: true
title:  "Dive into DSLA v3.0"
author: Team
categories: [ mainnet ]
image: assets/img/2024-02-25-dsla-protocol-v3.jpg

---

## DSLA v2.0—Risk Management Powerhouse

3 years ago, DSLA v2.0 introduced a series of structural changes to the DSLA v1.0 experience:

* Support for **Any Risk**, provided the performance of a third-party service can be probed through a Decentralised Oracle Network (DON);
* Support for **Any Risk Operator**—`>`, `>=`, `<`, `<=`, `=` and `!=`— allowing the fine-grained comparison of the measured performance of a third-party service and the service level objective (SLO);
* Support for **Deviation-Based Payouts**, allowing the transfer of value between peers based on how far the measured performance of a third-party service deviates from the service level objective (SLO);
* Support for **Severity Levels**, allowing the transfer of value based on the severity of a service level agreement (SLA) breach;
* Support for **Collaborative Underwriting**, allowing multiple peers to gain risk exposure in a service level agreement (SLA), and collect user premiums;
* Support for **Brand Service Credits**, allowing risk exposure in a service level agreement (SLA) to be represented by a custom-branded ERC20 token;

It was arguably one of the most comprehensive Peer-to-Peer Risk Management experience ever created, and remains, to this day, the only product in the blockchain industry to deploy, manage and enforce service level agreements (SLA).

## DSLA v3.0—Power Mastery

DSLA v3.0 is an evolution of DSLA v2.0 operating at three levels:

* A new architecture for market-validated features of the protocol
* A conscious effort to remove protocol friction and drive adoption
* A revamp of tokenomics with a focus on programmatic growth

## Onto a New Architecture

Same ingredients, different recipe, extra spices.

### Agreement Abstraction

They say the best technology is the one you don't notice. 

Ever since we started iterating on DSLA, back in 2018, service level agreements (SLA) were always at the center of our communication strategy and at the center of the peer-facing experience we envisionned. 

But although there is a strong rationale for importing service governance vehicles from the Web 2.0—since Web 3.0 exposes participants to the same nature of third-party risks—the historical reluctance of builders in the blockchain industry to be economically held accountable for the capacity of their products forces us to rethink an approach that we deem too literal to gain the traction our community is seeking.

**In DSLA v3.0, the service level agreement (SLA) view will become an advanced mode for power users.**

It will not be the first thing you experience when you use the dapp. Instead, hedging against the downside performance of a third-party service will be stripped down to minting and holding Service Credits—reward-bearing ERC20 tokens—using the the DSLA utility token utility token as a minting fee.

> The best explanation for service level agreements will be "no explanation needed", as the value of the protocol becomes more tangible than ever before with Service Credits. Conversely, this strengthens the value proposition of a DSLA Service Credit Wallet.

### Proof of Breach

The need for using service level agreement without capital requirements was expressed by many of the hundreds potential customer we interviewed for the past 5+ years. 

DSLA v3.0 will introduce a capital-less mode, that allow service level agreements to operate without value locked, and collectively build a pure ledger of third-party service failures close to Satoshi's vision of timestamping.

**Upon third-party service failures, users and underwriters will have the ability to tokenize a service level agreement breach into a "Proof of Breach" collectible, that can be exchanged for perks in third-party Service Catalog.**

In the most original scenario, the failure of third-party service A, will lead you to earning a perk for third-party service B, effectively acting as a migration incentive. With the addition of migration capabilities, our vision for Peer-to-Peer Risk Management becomes more comprehensive than ever before.

> Imagine receiving a L2 airdrop when Solana goes down. In a context where airdrop allocation depends increasingly more on your holdings, Proof of Breach can become a standard for being elligible to the incentives of third-party services in competition with your portfolio.

### ReStaking

One of the biggest takeaways of DSLA v2.0 is its successful Parametric Staking program. 

Beyond the million dollars in volume it has generated on DSLA Protocol, the most noticeable aspect of staking was that it was a service level agreement with custom Severity Levels behind the scenes—An excellent example of the aforementioned Agreement Abstraction design.

In DSLA v3.0, the default experience will be close the the Parametric Staking experience, in an effort to capitalise on our most adopted use case to date.

**Instead of staking the DSLA utility token, users and underwriters will spend a one-time, fixed amount of the DSLA utility token to register their participation to a service level agreement—The equivalent of a digital signature of a contract.**

When they pay this registration fee, users and underwriters will mint and receive Service Credits—reward-bearing ERC20 tokens—that represent their participation to a service level agreement.

**Service Credits can be staked, and will bear rewards when the corresponding service level agremeent is either breached (users), or honoured (underwriters).**

The more Service Credits you hold, the bigger share of the available capital you are entitled to.

> Although staking was powered by a service level agreement, the DSLA utility token stakeholders never felt the need for understanding how staking worked.
>
> 

## No More Protocol Friction?

Most protocol requirements were a deal breaker for users.

### Removal of Upfront Costs

Originally, the DSLA token has been used as a validation fee for each service level agreement period. 

**In DSLA v3.0, the creation of service level agreements will only require a one-time (stablecoin) fee, no matter their duration.** 

One of the benefits of rethinking validation is the resulting mitigation of OEV (Oracle Extractable Value). Without incentives, bot will have no reason to sandwich the service level agreement (SLA) validation process like they did in DSLA v2.0.

Each service level agreement sale will increase the protocol treasury to further enable Service Credits staking rewards.

### Departure from Total Value Locked

To participate to a service level agreement, users and underwriters were expected to deposit capital in order to have the right to claim capital based on the outcome of a service level agreement validation (that relies on `>`, `>=`, `<`, `<=`, `=` and `!=` risk operators). 

This behaviour will remain available in DSLA v3.0, as it is compatible with certain use cases where capital efficiency is not an issue. 

Nonetheless, we will add support for service level agreements without capital deposit requirements, as **timestamping a third-party service failure holds intrinsequal value with the minting of a Proof of Breach**.

### Gas Optimization

DSLA v2.0 was not audited from the perspective of gas consumption. 

Under stress, creating a service level agreement (SLA) on the Ethereum network could cost up to 1.5 ETH, a prohibitive, hidden cost that would limit the availability of hedging strategies (e.g. allow users to create service level agreement for themselves) and ultimately turn the marketplace into a ghost town.

DSLA v3.0 is being written to cost less while retaining the same capabilities and more.

> This is a good case for L2 networks and Chainlink CCIP with whom we are working to create cross-chain service level agreements (SLA) and Service Credits.



## Supercharged Tokenomics

The DSLA utility token needs to establish itself as the pulse of DSLA Protocol, beyond SLA validation.

### DSLA Token Utility

In DSLA v3.0 the DSLA utility token becomes: 

* The payment currency of creating service level agreements (SLA);
* The payment currency of minting reward-bearing Service Credits;
* The payment currency of minting a Proof of Breach;
* The payment currency of swapping a Proof of Breach for a Service Catalog perk.

> The accumulation of the DSLA utility token by the protocol paves the way to Service Credits staking rewards and ever-improving liquidity on DEX.

### DSLA Token Burns

A percentage of the DSLA utility token used as payment will be automatically burned upon minting Service Credits and Proof of Breach.

> The DSLA utility token is deflationary forever, and no new the DSLA utility token can ever be minted.

### DSLA Token Buybacks

A percentage of protocol revenue will be dedicated to buybacks. 

Whenever possible, buybacks will be native to the protocol features.

### DSLA Protocol Revenue Share

In the DSLA v3.0 architecture, holding Service Credits effectively entitles you to protocol revenue share.

### Governance

All percentage values will be decided upon through a DSLA Improvement Proposal (DSLA-IP).



## Roadmap

**DSLA v3.0 is set for release end March 2024, or earlier.**

In the meantime, full support for DSLA v2.0 will be restored in the dapp at https://network, including but not limited to unstaking from the Parametric Staking program, and browsing all existing use cases, namely NFT Floor Price SLAs and LST Peg Parity SLAs.

We will detail the 2024 Roadmap for DSLA in a dedicated article, and shed light on how we are rebuilding our offering around the best narratives:

### [#RWA](https://twitter.com/hashtag/RWA?src=hashtag_click): 

* Inflation Hedging
* Credit Default Hedging 



### [#BRC20](https://twitter.com/hashtag/BRC20?src=hashtag_click): 

* Ordinals Floor Hedging 



### [#DePin](https://twitter.com/hashtag/DePin?src=hashtag_click): 

* Service Disruption Hedging 



### [#ReStaking](https://twitter.com/hashtag/ReStaking?src=hashtag_click) 

* LST Peg Hedging Layer (for Eigen Layer)



### [#AI](https://twitter.com/hashtag/AI?src=hashtag_click): 

* No Code Super Apps



It's time to make things happen again. We appreciate your support.



# 💡 Learn More

👉 Get started at **[dsla.network](https://dsla.network)** 

👉 Read more at [**stacktical.com**](https://stacktical.com)

👉 Check our blog at [**blog.stacktical.com**](https://blog.stacktical.com)

👉 Start Building at [**readme.stacktical.com**](https://readme.stacktical.com/developer-guide/)

👉 Join our Guild at [**guild.xyz/dsla**](https://guild.xyz/dsla)

👉 Check active bounties at [**dework.xyz/dsla**](https://dework.xyz/dsla)

👉 Discuss on our governance forum at [**commonwealth.im/dsla**](https://commonwealth.im/dsla)



---

