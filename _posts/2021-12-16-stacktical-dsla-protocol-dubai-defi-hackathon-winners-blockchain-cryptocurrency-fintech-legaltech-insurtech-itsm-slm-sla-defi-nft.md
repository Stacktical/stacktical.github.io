---
layout: post
featured: true
title:  "#DubaiDeFi, We've Got a Winner 🏆"
author: Team
categories: [ mainnet, defi ]
image: assets/img/2021-12-16-stacktical-dsla-protocol-dubai-defi-hackathon-winners-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## 💡 It was an exciting taste of what's to come!

The [#DubaiDeFi](https://dubaidefi.io) participants did not disappoint! The responses and submissions were fantastic and we are excited for what this represents for DSLA protocol in 2022 and beyond.

#DubaiDeFi served as a real world stress test for the DSLA Protocol Developer Toolkit (DTK). It was a proof of concept for the future that the core team is building towards, where the community and other developers are empowered to build their own use cases and integrate DSLA Protocol Risk Management Middleware into their applications. 

External developers building new use cases and integrating DSLA Risk Management Middleware is how we will truly see DSLA Protocol **scale**. It was awesome to see the DTK used to build viable, functional use cases during #DubaiDeFi!

We had a number of interesting and innovative submissions, and we are proud to announce the prize winners chosen by the DSLA Core Team:

## First Place - Stablecoin Peg SLA's 🥇

**$50K USD in** **$DSLA:** **$PAR Peg SLA**. Amazingly this entry was completed in just around 24 hours using the DTK. It's a true testament to how easily developers can integrate DSLA Risk Management Middleware into their products!

**$PAR** is [Mimo's](https://mimo.capital) **$EUR** pegged stablecoin and this SLA provides the ability for holders to mitigate their risk of **$PAR** losing its peg to **$EUR**.

This use case is very timely, considering recent market volatility, and we're happy to announce that we are rolling out **Stablecoin Peg SLA Risk Agreements** as a new type of supported agreement in DSLA Protocol and on our [dsla.network](https://dsla.network) dApp!

Let's take a little deeper look!

### What are pegged assets?

Pegged assets are a type of crypto assets that are intended to have their value stay matched, or **pegged**, to the value of another asset. These underlying assets can be a fiat currency such as **USD** or **EUR** (in the case of stablecoins), a commodity like **gold**, another cryptocurrency such as **BTC** or a stock like **TESLA**, just to name a few.

The methods for ensuring the peg is maintained can vary. Some pegged assets are backed and redeemable for the actual underlying asset. Other pegged assets are collateralized or partially collateralized by other crypto assets and use different algorithms to incentivize the peg to be maintained.

### Losing peg

There is a risk that the algorithms designed to maintain a peg falter, resulting in the pegged asset price no longer matching the asset it is supposed to be pegged to. This is something we see more often during times of high volatility, but can also happen due to flaws in the algorithms designed to maintain a peg.

Loss of peg can result in real losses for anyone holding the asset. Consider for example if [Mimo's](https://mimo.capital) PAR stablecoin could not maintain a value close to it's **$1 EUR** target. During the recent market crash on December 4, 2021, we in fact saw this happen. There was approximately a 10 hour window where, during this crash, PAR was trading significantly below it's **$1 EUR** target.

![PAR Peg Lost During Volatility 4-Dec-2021](/assets/img/2021-12-16-stacktical-dsla-protocol-market-volatility-par-peg-loss-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg "PAR-EUR Peg 4-Dec")

PAR losing peg in this case could have resulted in losses for people holding or using it. Someone who used their PAR to trade for another cryptocurrency during this 10 hour window would have received less in exchange for it than they should have. Another possibility would be someone using PAR as collateral could have had their position become undercollateralized due to the value of PAR falling, and been liquidated as a result.

|**RISK&nbsp;APPRAISAL**| |
|---------------------|----------|
| Risk Type        | Peg Risk |
| Risk Description | Crypto asset price becomes untethered from underlying asset price | 
| Assets at Risk   | Stablecoins, Synthetic Assets |
| Value at Risk    | > \$100b |

## DSLA Protocol fixes this

The **Stablecoin Peg SLA** will enable holders of pegged assets like PAR to offset the risk of those assets losing peg, and receive compensation in the event they do.

On the flip side, **Stablecoin Peg SLAs** will allow for core teams, investor groups, or individuals who are confident that the respective protocol will maintain it's peg to back it and profit when it does.

> Holders of a pegged asset use DSLA Protocol to swap the risk of depegging away to a counterparty, in exchange for a small premium. The counterparty profits from that premium, if the peg is maintained.

### How it will work 

There are two sides to a Peg SLA. You can sign on to:
* **'Side A' (Provides coverage):** these users are backing that the Peg will be maintained. They provide liquidity to create the compensation pool, which will compensate 'Side B' if the Peg is not maintained.
* **'Side B' (Obtains Coverage):** these users are hedging against the risk that the Peg is not maintained. They pay a small premium (like insurance) to be covered. If the Peg is lost, they would be entitled to a compensation. If the Peg is maintained, their premiums go to reward the LP's from 'Side A' who provided coverage.

To activate an agreement, both parties need to fund their position by staking one of the many supported currencies (as updated [here!](2021-10-28-stacktical-dsla-protocol-stablecoins-native-tokens-liquid-staking-october-2021-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.md)) to the DSLA contract liquidity pool.  

While a **Stablecoin Peg SLA** is active, DSLA Protocol monitors the price of the pegged asset and the underlying asset (ie. the price of PAR and the price of EUR); periodic verifications of the prices are done at the interval noted in the contract.

If the difference between the pegged asset price and the underlying asset price stays within the thresholds of the agreement, DSLA Liquidity Providers earn the right to a reward, claiming some of the premiums paid by the users who obtained coverage.

On the flip side, if an agreement is violated, Pegged Asset Holders earn the right to claim a compensation, by depleting the compensation pool created by DSLA Liquidity Providers.

### A foundation to build upon

**Stablecoin Peg SLAs** are our first step into the ring where offering risk management for pegged assets is concerned. With this foundation already built, we will be able to expand to support other types of synthetic assets such as stETH ([lido.fi](https://lido.fi)) or WBTC in the future.

## Other Winners of #DubaiDeFi

Okay, so obviously from that tangent we were massively impressed and excited by the potential of the **Stablecoin Peg SLA**. We had some other amazing entries from #DubaiDeFi as well, let's take a look at those now:

### Second Place 🥈

**$25K USD in** **$DSLA:** **Options Factory** by [@DojimaFinance](https://twitter.com/DojimaFinance) for lending and derivatives on Fantom. The option factory can be used for various SLAs including hedging risk on staking returns/yield and hedging risk of loss of peg for stablecoins or other synthetic assets.

### Third Place (TIE) 🥉

There were too many good entries to pick from and we had a tie for third place!

**$10K USD in** **$DSLA:** **Power Plant SLAs** for power plant efficiency. This innovative use case gives the ability to provide an insurance on the efficiency of a solar power plant. OpenRazer API was integrated and used to fetch the data determining efficiency.

**$10K USD in** **$DSLA:** **Google Stackdriver integration using OSS parser**. This submission allows you to fetch SLI data and monitor SLAs using Google Stackdriver, which requires credentials, but with the integration of OSS Parser, the credentials are not visible to the node operator or person providing execution code.

### And Congrats to the Winners Chosen by Other Sponsors! 🏅

A huge congratulations and thanks go out to all other individuals and teams who participated in #DubaiDeFi. We would also like to congratulate the winners chosen by [Mimo](https://mimo.capital), [Harmony](https://harmony.one), [Fantom](https://fantom.foundation), [Balancer](https://balancer.fi) and [SwissBorg](https://swissborg.com)!

## What's Next

Prizes have been distributed to the winners chosen by the DSLA core team already.

We're excited to see where the #DubaiDeFi hackathon participants take their works. A number of the entries could be built into viable products that we would love to be able to use in the future, and as we already noted the **Stablecoin Peg SLA** is already moving from concept to reality!

### Developers Wanted!

For any developers that are interested in starting to BUIDL with DSLA protocol, check out our **[blog post](https://blog.stacktical.com/mainnet/dev/2021/11/15/stacktical-dsla-protocol-dtk-developer-toolkit-getting-started-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html)** announcing the release of the DSLA Developer Toolkit (DTK), check out the **[Developer Guide](https://readme.stacktical.com/developer-guide/developer-toolkit-1/quick-start)**, or jump right into the [Developer Toolkit (DTK)](https://github.com/Stacktical/stacktical-dsla-developer-toolkit/).

---

# 💡 DSLA Protocol
### Risk Management Middleware

An application and network middleware for managing vendor risk using community-enforced service level agreements.

👉 Get started at **[dsla.network](https://dsla.network)** 

👉 Read more at [**stacktical.com**](https://stacktical.com)

👉 Check our blog at [**blog.stacktical.com**](https://blog.stacktical.com)

👉 Start Building at [**readme.stacktical.com**](https://readme.stacktical.com/developer-guide/)

👉 Join our [**Developer Discord**](https://discord.gg/2XhwdRjFnn)

👉 Join our [**Telegram Community**](https://t.me/Stacktical)

👉 Follow us on twitter at [**twitter.com/Stacktical**](https://twitter.com/Stacktical)