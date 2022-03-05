---
layout: post
featured: false
title:  "A dive into the DSLA Metaverse: Prologue"
author: Team
categories: [ metaverse, nft ]
image: assets/img/2022-03-01-stacktical-dsla-protocol-metaverse-inaugural-nft-mint-blockchain-cryptocurrency-fintech-legaltech-insurtech-itsm-slm-sla-defi-nft.png
---

## Inauguration Complete 

Dear members of the DSLA community, on February 13th 2022, the first non-fungible tokens (NFT) of the DSLA Metaverse, in collaboration with artist and  illustrator [Abi Daker](https://abidaker.com/), were [successfully minted](https://etherscan.io/tx/0x01f2f1dcebcb7d377acb3d4fee85df9b2eea72caa11196730031bc377251ad49) by the DSLA Protocol core team. 

As per our November 30th, 2021 snapshot across all DSLA-supported blockchain networks, applications and wallets, [101 DSLA token holders](https://etherscan.io/token/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe#balances) were each awarded one of the minted DSLA Metaverse Biomes.

#### Proof of Mint

[0x01f2f1dcebcb7d377acb3d4fee85df9b2eea72caa11196730031bc377251ad49](https://etherscan.io/tx/0x01f2f1dcebcb7d377acb3d4fee85df9b2eea72caa11196730031bc377251ad49)

#### Smart Contract

```solidity
// contracts/DSLAMetaverseBiomes.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.5.0/contracts/token/ERC1155/ERC1155.sol";

contract DSLAMetaverseBiomes is ERC1155 {
    uint256 public constant FIRE = 0;
    uint256 public constant WATER = 1;
    uint256 public constant EARTH = 2;
    uint256 public constant AIR = 3;
    uint256 public constant LIGHT = 4;
    uint256 public constant DARK = 5;

    constructor() ERC1155("https://gateway.pinata.cloud/ipfs/QmfJVfcVzaJvPwAwqey9qN1EQMAeozdtbf8idbw2h1k6ZF/{id}.json") {
        _mint(msg.sender, FIRE, 417, "");
        _mint(msg.sender, WATER, 503, "");
        _mint(msg.sender, EARTH, 415, "");
        _mint(msg.sender, AIR, 416, "");
        _mint(msg.sender, LIGHT, 408, "");
        _mint(msg.sender, DARK, 404, "");
    }
}
```

## Learn, Mint & Earn

### General Design Principles

The DSLA Metaverse is comprised of 6 biomes, with their own elemental trait:

* **Wildfire Fields**, the **fire** biome; 
* **Uptime Falls**, the **water** biome;
* **Quicksand Dips**, the **earth** biome;
* **Volatility Creeks**, the **air** biome;
* **Fiber Peaks**, the **light** biome;
* **Moongate Abyss**, **dark** biome.

Each biome is designed to represent a type of downside risk that the DSLA Protocol middleware allows you to manage without middleman.

| DSLA Biome        | Downside Risk                       |
| ----------------- | ----------------------------------- |
| Wildfire Fields   | Volatility of Returns               |
| Uptime Falls      | Volatility of Availability          |
| Quicksand Dips    | Volatility of Digital Asset Floors  |
| Volatility Creeks | Volatility of Digital Currency Pegs |
| Fiber Peaks       | Volatility of Response Time         |
| Moongate Abyss    | Volatility of Delivery Time         |

By travelling to a DSLA Biome, DSLA Champions－valued members of our community－can complete online courses and sharpen their risk management skills through practical application of decentralized service level agreements. 

Whether as a third-party service provider, a user, or a development team building on DSLA Protocol, you will learn to make the most out of all the features our risk management middleware and the DSLA family of products have to offer.

As you complete online courses, you validate DSLA knowledge, acquire DSLA skills, and increase your ownership of the DSLA lore by minting NFTs.

These NFTs are proofs of your DSLA journey to the gratifying world of investor protection and capital preservation.

### Minting Opportunities

NFTs are fundamentally a credentials technology. On the DSLA Metaverse, trusted learning credentials are split into three types.

#### Type 1: Lore

DSLA Lore NFTs embody the mythology of the DSLA brand, and family of products. 

Ownership of these NFTs translates into additional **protocol incentives**.

For example, owning a DSLA Biome NFT entitles you to boosted staking rewards for the corresponding DSLA Biome and DSLA Protocol use cases.

#### Type 2: Knowledge

DSLA Knowledge NFTs represent the knowledge gained during online courses. 

High knowledge translates into **publishing rights**.

For example, owning a SLA Contract NFT grants you the right to enrich the mediagraphy of the SLA creation online course with your own media.

#### Type 3: Skills

DSLA Skill NFTs represent your usage of DSLA Protocol over time. 

High usage translates into **governance rights**.

For example, owning a SLA Contract Creation NFT grants you a say on an improvement proposal that involves the creation of SLA contracts. 

### DSLA Biomes

DSLA Biomes are **lore-type** tokens of the DSLA Metaverse.

They are the foundation of the DSLA Risk Management Body of Knowledge, and a perfect introduction to the DSLA Metaverse experience.

> When I was first approached to illustrate the DSLA metaverse, I was intrigued by the brief which involved creating visual landscapes to represent different areas of their business. As I worked on each biome, my understanding of the function of each area became clearer and more detailed. I look forward to developing the metaverse further and adding more detail and layers to the artwork in the future! Abi Daker

| DSLA Biome | Wildfire Fields |
| --- | --- |
| **Element** | Fire 🔥 |
| **Risk** | Volatility of Returns |
|  | [![Wildfire Fields Biome NFT](/assets/img/Wildfire_Fields_Gen0_thumb.png)](/assets/img/Wildfire_Fields_Gen0_sm.png) |
| **Artist** | [Abi Daker](https://twitter.com/abidaker) |
| **Supply** | 417 |
| **Easter Egg** | 417 is the HTTP error code for **Expectation Failed**: "The expectation given in an Expect request-header field could not be met by this server." |

> Wildfire Fields has fertile volcanic soil for growing crops, but is in constant danger from fires and volcanic flows. The Outpost harvests geothermal energy to pull water from deep wells and run an irrigation system that protects and support crops.



| **Biome:** | Uptime Falls |
| --- | --- |
| **Element:** | Water💧 |
| **Risk:** | Volatility of Availability |
|  | [![Uptime Falls Biome NFT](/assets/img/Uptime_Falls_Gen0_thumb.png)](/assets/img/Uptime_Falls_Gen0_sm.png) |
| **Biome NFT Artist:** | [Abi Daker](https://twitter.com/abidaker) |
| **Supply** | 503                                                          |
| **Easter Egg**        | 503 is the HTTP error code for **Service Unavailable**: "The request was not completed. The server is temporarily overloading or down." |

> Uptime Falls benefits from abundant water supplies and uses it to generate hydroelectric power. The Outpost manufactures batteries, using them to store excess power and stockpiling them for later use.



| **Biome:** | Quicksand Dips |
| --- | --- |
| **Element:** | Earth ⛰ |
| **Risk:** | Volatility of Digital Asset Floors |
|  | [![Quicksand Dips Biome NFT](/assets/img/Quicksand_Dips_Gen0_thumb.png)](/assets/img/Quicksand_Dips_Gen0_sm.png) |
| **Biome NFT Artist:** | [Abi Daker](https://twitter.com/abidaker) |
| **Supply** | 415                                                          |
| **Easter Egg**        | 415 is the HTTP error code for **Unsupported Media Type**: "The server will not accept the request, because the mediatype is not supported." |

> Quicksand Dips is the source for mystical white quartz used in creating artifacts. White quartz is mined and then refined in a crucible for the final crystal ingots that can be used to mint artifacts.



| **Biome:** | Volatility Creeks |
| --- | --- |
| **Element:** | Air 🌪️ |
| **Risk:** | Volatility of Digital Currency Pegs |
|  | [![Volatility Creeks Biome NFT](/assets/img/Volatility_Creeks_Gen0_thumb.png)](/assets/img/Volatility_Creeks_Gen0_sm.png) |
| **Biome NFT Artist:** | [Abi Daker](https://twitter.com/abidaker) |
| **Supply** | 416                                                          |
| **Easter Egg**        | 416 is the HTTP error code for **Requested Range Not Satisfiable**: "The requested byte range is not available and is out of bounds." |

> Volatility Creeks harnesses the raging and violent winds to generate power. Supply stockpiles are protected by weather platforms that are able to catch tornadoes, harvesting their energy and protecting the rest of the biome from damage.



| **Biome:** | Fiber Peaks |
| --- | --- |
| **Element:** | Light ☀️ |
| **Risk:** | Volatility of Response Time |
|  | [![Fiber Peaks Biome NFT](/assets/img/Fiber_Peaks_Gen0_thumb.png)](/assets/img/Fiber_Peaks_Gen0_sm.png) |
| **Biome NFT Artist:** | [Abi Daker](https://twitter.com/abidaker) |
| **Supply** | 408                                                          |
| **Easter Egg**        | 408 is the HTTP error code for **Request Timeout**: "The request took longer than the server was prepared to wait." |

> Fiber Peaks is the communications hub of the metaverse. The unique sunlight is harvested by a collector tower and converted into crystals that power communications throughout the biomes.



| **Biome:** | Moongate Abyss |
| --- | --- |
| **Element:** | Dark 🌑 |
| **Risk:** | Volatility of Delivery Time |
|  | [![Moongate Abyss Biome NFT](/assets/img/Moongate_Abyss_Gen0_thumb.png)](/assets/img/Moongate_Abyss_Gen0_sm.png) |
| **Biome NFT Artist:** | [Abi Daker](https://twitter.com/abidaker) |
| **Supply** | 404                                                          |
| **Easter Egg**        | 404 is the HTTP error code for **Not Found**: "The server can not find the requested page." |

> The Moongate Abyss harvests dark energy crystals from the deep, which supply the Moongate Portal Generator. This generator powers the various Moongates that allow transportation between biomes.

### Collection

All **2563 DSLA Biome NFTs** are part of the [DSLA Metaverse collection on OpenSea](https://opensea.io/collection/dsla-metaverse).

As mentioned above, a DSLA Biome NFT entitles you to boosted staking rewards for a DSLA Biome, and its subset of DSLA Protocol use cases. 

---

# Powered by DSLA Protocol

### A Middleware to manage third-party risk without Middlemen

👉 Get started at **[dsla.network](https://dsla.network)** 

👉 Read more at [**stacktical.com**](https://stacktical.com)

👉 Check our blog at [**blog.stacktical.com**](https://blog.stacktical.com)

👉 Build a use case at [**readme.stacktical.com**](https://readme.stacktical.com/developer-guide/)
