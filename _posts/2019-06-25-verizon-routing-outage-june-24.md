---
layout: post
featured: false
title:  "Verizon Knocked Large Parts of the Internet Offline Yesterday"
author: Team
categories: [ news, outages ]
image: assets/img/2019-06-25-verizon-routing-outage-june-24.jpg
---
## My name is route

On June 24th, Verizon accidently started routing Internet traffic through a small company in Nothern Pennsylvania for nearly three hours, causing a major outage of Cloudflare, Facebook, Amazon and other online service providers, including customers of the three aforementioned technology companies (including Discord).

According to [Cloudflare's incident report](https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/), although they repeatedly called and emailed their support, the Cloudflare Ops team still had not hear from Verizon at the time of writing, over 8 hours after the incident. Nobody was aware of Verizon taking action to resolve the issue.

> At Cloudflare, we wish that events like this never take place, but unfortunately the current state of the Internet does very little to prevent incidents such as this one from occurring.

Fortunately, routing security technologies like [RPKI](https://blog.cloudflare.com/cloudflares-rpki-toolkit/) and Decentralized Security SLAs powered by [Stacktical](https://stacktical.com) could bring new ways to mitigate these risks in the future.

Read more about the news on [The Verge](https://www.theverge.com/2019/6/24/18715308/discord-down-outage-cloudflare-problems-crunchyroll-feedly).
