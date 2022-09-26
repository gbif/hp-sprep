---
klass: "about"
lang-ref: home
layout: home
title: Pacific Biodiversity Information Facility
description | Pacific Biodiversity Information Facility presents all of the Pacific biodiversity data available on GBIF.
  <form action="/specimen/search" method="GET">
    <input name="q" class="input" tye="text" placeholder="Name, catalog no, code, …" style="width: 250px">
    <button type="submit" class="button is-primary">Search specimens</button>
  </form>
background: /assets/images/Niue-Project-Banner.jpg
#background: https://mixkit.imgix.net/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-0.jpg?w=1200&h=630&fit=crop
imageLicense: Photo by Huggard Tongatule
parallax: true # OPTION - default is false

height: 75vh
cta:
  - text: Get Data
    href: /data
    isPrimary: true
permalink: /
composition:
  - type: heroImage # the block type
  - type: stats
    data: home.stats
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---

