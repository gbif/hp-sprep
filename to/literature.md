---
klass: "about"
title: Literature
description: We publish open data
permalink: /to/literature/search
layout: literature
noindex: true
---

<script>
  // overwritting siteconfig for a specific page allows us to have multiple literature widgets with different configuration
  var siteConfig = {
    literature: {
      rootFilter: {
          predicate: {
          type: 'in',
          key: 'countriesOfCoverage',
          values: ['AS','CK','TL','FM','FJ','PF','GU','KI','MH','NR','NC','NU','MP','PW','PG','WS','SB','TK','TO','TV','VU','WF']
        }
      }
    }
  };
</script>
