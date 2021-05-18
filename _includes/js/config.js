var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS'],
  highlightedFilters: ['countryCode', 'taxonKey', 'year', 'occurrenceStatus', 'occurrenceIssue', 'datasetKey'],
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
