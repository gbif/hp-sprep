---
klass: "about"
lang-ref: home
layout: home
title: PBIF
description: Pacific portal to present all of the Pacific occurrence biodiversity data available on GBIF.
background: /assets/images/Crimson_crowned_fruit_dove.jpg
#background: https://mixkit.imgix.net/videos/preview/mixkit-white-sand-beach-and-palm-trees-1564-0.jpg?w=1200&h=630&fit=crop
imageLicense: Photo by Stuart Chape
parallax: true # OPTION - default is false
height: 90vh
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
