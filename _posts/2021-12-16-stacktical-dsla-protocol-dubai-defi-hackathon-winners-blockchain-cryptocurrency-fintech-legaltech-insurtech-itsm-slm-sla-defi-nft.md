---
layout: post
featured: true
title:  "#DubaiDeFi, We've Got a Winner 🏆"
author: Team
categories: [ mainnet, defi ]
image: assets/img/2021-11-09-stacktical-dsla-protocol-dubai-defi-hackathon-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg
---

## 💡 An exciting taste of what's to come!

The [#DubaiDeFi](https://dubaidefi.io) participants did not disappoint! The responses and submissions were fantastic and we are excited for what this represents for DSLA protocol going into 2022 and beyond.

#DubaiDeFi served as a major stepping stone and proof of concept for the future that the core team is building towards. Namely, the development of new use cases by the community and the integration of DSLA protocol by other developers into their own applications. 

Having new use cases built by external developers is how we will truly see DSLA protocol **scale**. It is awesome to see the Developer Toolkit (DTK) used to build viable, functional use cases for managing risk using DSLA protocol.

We had a number of interesting and innovative submissions, and we are proud to announce DSLA Protocol's prize winners:

## First Place - Stablecoin Peg SLA's 🥇

**$50K USD in** **$DSLA:** **$PAR Peg SLA**. Amazingly this entry was completed in just around 24 hours using the DTK! **$PAR** is [Mimo's](https://mimo.capital) **$EUR** pegged stablecoin and this SLA provides the ability for holders to mitigate their risk of **$PAR** losing its peg to **$EUR**.

This use case is very timely, considering recent market volatility, and we're happy to announce that we are rolling out **Stablecoin Peg SLA Risk Agreements** as a new type of supported agreement in DSLA Protocol and on our [dsla.network](https://dsla.network) dApp!

Let's take a little deeper look at this use case!

### What are pegged assets?

Pegged assets refer to a class of crypto assets that are intended to have their value stay matched, or **pegged**, to the value of an underlying asset. These underlying assets can be a fiat currency such as USD or EUR (in the case of stablecoins), a commodity like gold, another cryptocurrency such as BTC or a stock such as TESLA, just to name a few.

The methods for ensuring the peg is maintained can vary. Some pegged assets are backed and redeemable for the actual underlying asset. Other pegged assets are collateralized or partially collateralized by other crypto assets and use different algorithms to incentivize the peg to be maintained.

### Losing peg

There is a risk that the algorithms designed to maintain a peg falter, resulting in the price of the pegged asset becoming untethered from the price of the underlying asset. This can be due to a number of factors, but is something we see more often during times of extremely high volatility.

Loss of peg can result in real losses for anyone holding the asset. Consider for example if [Mimo's](https://mimo.capital) PAR stablecoin could not maintain a value close to it's **$1 EUR** target. During the recent market crash on December 4, 2021, we in fact saw this happen. There was approximately a 10 hour window where, during this crash, PAR was trading significantly below it's **$1 EUR** target.

![PAR Peg Lost During Volatility 4-Dec-2021](/assets/img/2021-12-16-stacktical-dsla-protocol-market-volatility-par-peg-loss-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.jpg "PAR-EUR Peg 4-Dec")

PAR losing peg in this case could have resulted in losses for individuals using it. Someone who used their PAR to trade for another cryptocurrency during this 10 hour window would have received less in exchange for it than they should have, if the peg were maintained. Another risk would be a trader with a leveraged position, using PAR as collateral, having their position become undercollateralized due to the value of PAR falling, and getting liquidated as a result.

|**RISK&nbsp;APPRAISAL**| |
|---------------------|----------|
| Risk Type        | Peg Risk |
| Risk Description | Crypto asset price becomes untethered from underlying asset price | 
| Assets at Risk   | Stablecoins, Synthetic Assets |
| Value at Risk    | > \$100b |

## DSLA Protocol fixes this

The **Stablecoin Peg SLA** will enable holders of pegged assets such PAR  and other stablecoins to offset the risk of those assets losing peg, receiving compensation in event of a loss of peg.

On the flip side, **Stablecoin Peg SLAs** will allow for core teams, investor groups, or individuals who are confident that the respective protocol will maintain it's peg to back it and profit when it does.

> Holders of a pegged asset use DSLA Protocol to swap the risk of depegging away to a counterparty, in exchange for a small premium. The counterparty profits from that premium, if the peg is maintained.

### How it will work 

To activate an agreement, both parties need to fund their position by staking one of the many supported currencies (as updated [here!](2021-10-28-stacktical-dsla-protocol-stablecoins-native-tokens-liquid-staking-october-2021-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.md)) to the DSLA contract liquidity pool.

While a **Stablecoin Peg SLA** is active, DSLA Protocol monitors the price of the pegged asset and the underlying asset (ie. the price of PAR and the price of EUR); periodic verifications of the prices are done at the interval noted in the contract.

If the difference between the pegged asset price and the underlying asset price stays within the thresholds of the agreement, DSLA Liquidity Providers earn the right to claim a reward, by depleting premiums paid by the pegged asset holders who signed onto the DSLA contract.

Conversely, if an agreement is violated, Pegged Asset Holders earn the right to claim a compensation, by depleting the upfront commitment of DSLA Liquidity Providers.

### A foundation to build upon

**Stablecoin Peg SLAs** are our first step into the ring where offering risk management for pegged assets is concerned. With this foundation already built, we will be able to expand rather easily to support other types of synthetic assets such as stETH ([lido.fi](https://lido.fi)) or WBTC in the future.

## Other Winners of #DubaiDeFi

Okay, so obviously we were massively impressed and excited by the potential of the **Stablecoin Peg SLA**. We had some other amazing entries from #DubaiDeFi as well, let's take a look at those now:

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

Next, we're taking the feedback we received during the hackathon to fine tune the DTK. The core team will continue working to make the DSLA protocol value proposition known and continue onboarding developers to the ecosystem.

For any developers that are interested in starting to BUIDL with DSLA protocol, check out our **[blog post](https://blog.stacktical.com/mainnet/dev/2021/11/15/stacktical-dsla-protocol-dtk-developer-toolkit-getting-started-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.html)** announcing the release of the DSLA Developer Toolkit (DTK) or jump right into the **[Developer Guide](https://readme.stacktical.com/developer-guide/developer-toolkit-1/quick-start)**.

### #DubaiDeFi...Round 2 🥊

#DubaiDeFi was great and honestly we can't wait to do it all again. Expect some more details on the next #DubaiDeFi hackathon SOON!

We had some feedback during the hackathon that, with the complexity of developing in crypto, giving participants more time will allow for better and more integrated solutions to be submitted. We agree, and with that in mind we plan for the next #DubaiDeFi hackathon to take place over a longer period of time, allowing for more participants to BUIDL cooler stuff!

With that said, there's no time like the present, and the [Developer Toolkit (DTK)](https://github.com/Stacktical/stacktical-dsla-developer-toolkit/) is available now. We would encourage any interested developers to get started today!

## 🎧 Stay tuned for more

Make sure to follow [@stacktical](https://twitter.com/Stacktical) on Twitter for official announcements, and join our shiny new [Discord server](https://discord.gg/bknuhcXV) for developer talks.

---

## About DSLA Protocol

{% include youtube_player.html id="3M1FHY9rSqE" %}

DSLA Protocol is a turnkey, peer-to-peer risk management infrastructure for developers and their communities, that empowers anyone to manage their exposure to the performance failures of application, network and service, using peer-to-peer service level agreements.

DSLA Protocol's flagship use case is to optimize your staking rewards, by enabling you to hedge against the bad performance of your staking services.

To learn more about DSLA Protocol and the future of third party risk management (TPRM), please visit [stacktical.com](https://stacktical.com), browse our [blog](https://blog.stacktical.com), and follow [@stacktical](https://twitter.com/Stacktical) on Twitter.
