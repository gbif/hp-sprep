var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'dark', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  highlightedFilters: ['countryCode', 'occurrenceStatus', 'taxonKey', 'year', 'occurrenceIssue'],
  rootPredicate: {
    "type": "and",
    "predicates": [
   		{
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
      },
      {
        "type": "equals",
        "key": "notIssues",
        "value": "COUNTRY_COORDINATE_MISMATCH"
      }
    ]
  }
};
