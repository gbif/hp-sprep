var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "or",
    "predicates": [
      {
        "type": "equals",
        "key": "gadmGid",
        "value": "USA.12_1"
      },
      {
        "type":"in",
        "key": "countryCode",
        "values": [
          "AS",
          "CK",
          "TL",
          "FM",
          "FJ",
          "PF",
          "GU",
          "KI",
          "MH",
          "NR",
          "NC",
          "NU",
          "MP",
          "PW",
          "PG",
          "WS",
          "SB",
          "TK",
          "TO",
          "TV",
          "VU",
          "WF"
        ]
      }
    ]
  }
};
