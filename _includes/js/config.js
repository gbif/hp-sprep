var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
    occurrenceSearchTabs: ['TABLE', 'DATASETS', 'GALLERY', 'MAP'],
    highlightedFilters: ['country', 'taxonKey', 'datasetKey', 'year', 'occurrenceStatus', 'establishmentMeans', 'q', 'hostingOrganizationKey'],
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
              "type": "in",
              "key": "country",
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
  }
};

if (pageLang === 'nu')  {siteConfig.routes.occurrenceSearch.route = '/lotomatala';}
if (pageLang === 'fij') {siteConfig.routes.occurrenceSearch.route = '/nai-tukutuku-vakasokumuni';}
if (pageLang === 'rmi') {siteConfig.routes.occurrenceSearch.route = '/melele';}
if (pageLang === 'sb')  {siteConfig.routes.occurrenceSearch.route = '/oloketa-informeson-en-statistiks';}
if (pageLang === 'sm')  {siteConfig.routes.occurrenceSearch.route = '/faamaumauga';}
if (pageLang === 'tk')  {siteConfig.routes.occurrenceSearch.route = '/fakamaumauga';}
if (pageLang === 'to')  {siteConfig.routes.occurrenceSearch.route = '/fakamatala';}
if (pageLang === 'tv')  {siteConfig.routes.occurrenceSearch.route = '/fakamatalaaga';}