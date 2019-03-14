$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("joe/karatte/test.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Addresses",
  "description": "",
  "id": "testing-addresses",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Verify the map",
  "description": "",
  "id": "testing-addresses;verify-the-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "url \u0027http://maps.googleapis.com/maps/api/geocode/xml\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "param (address: \u002790 Rivonia Rd, Johannesburg, 2196, South Africa\u0027)",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "match response.GeocodeResponse.status contains \u0027OK\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://maps.googleapis.com/maps/api/geocode/xml\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 533091100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the map",
  "description": "",
  "id": "testing-addresses;verify-the-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "url \u0027http://maps.googleapis.com/maps/api/geocode/xml\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "param (address:  \u0027676767jhjhjhkhj,878787878\u0027)",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "match response.GeocodeResponse.status contains \u0027OK\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://maps.googleapis.com/maps/api/geocode/xml\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 39173087,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Verify the weather",
  "description": "",
  "id": "testing-addresses;verify-the-weather",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "url \u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "param City \u003d  \u003ccity\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "match $.City \u003d\u003d \u003cvalue\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "testing-addresses;verify-the-weather;",
  "rows": [
    {
      "cells": [
        "city",
        "value"
      ],
      "line": 25,
      "id": "testing-addresses;verify-the-weather;;1"
    },
    {
      "cells": [
        "\u0027/Johannesburg\u0027",
        "\"Johannesburg\""
      ],
      "line": 26,
      "id": "testing-addresses;verify-the-weather;;2"
    },
    {
      "cells": [
        "\u0027/Pretoria\u0027",
        "\u0027Pretoria"
      ],
      "line": 27,
      "id": "testing-addresses;verify-the-weather;;3"
    },
    {
      "cells": [
        "\u0027/\u0027",
        "\u0027#notnull\u0027"
      ],
      "line": 28,
      "id": "testing-addresses;verify-the-weather;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Verify the weather",
  "description": "",
  "id": "testing-addresses;verify-the-weather;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "url \u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "param City \u003d  \u0027/Johannesburg\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "match $.City \u003d\u003d \"Johannesburg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 26389596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 6
    },
    {
      "val": " \u0027/Johannesburg\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.param(String,String\u003e)"
});
formatter.result({
  "duration": 5680920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 1948632221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 954026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.City",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\"Johannesburg\"",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14103881,
  "error_message": "com.intuit.karate.exception.KarateException: path: $.City, actual: \u0027\u0027, expected: \u0027Johannesburg\u0027, reason: not equal\r\n\tat com.intuit.karate.StepDefs.matchNamed(StepDefs.java:554)\r\n\tat com.intuit.karate.StepDefs.matchEquals(StepDefs.java:540)\r\n\tat ✽.And match $.City \u003d\u003d \"Johannesburg\"(joe/karatte/test.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the weather",
  "description": "",
  "id": "testing-addresses;verify-the-weather;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "url \u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "param City \u003d  \u0027/Pretoria\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "match $.City \u003d\u003d \u0027Pretoria",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 21043182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 6
    },
    {
      "val": " \u0027/Pretoria\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.param(String,String\u003e)"
});
formatter.result({
  "duration": 4211481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 717838747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 228693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.City",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027Pretoria",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 26350911,
  "error_message": "com.intuit.karate.exception.KarateException: javascript evaluation failed: \u0027Pretoria\r\n\tat com.intuit.karate.StepDefs.matchNamed(StepDefs.java:554)\r\n\tat com.intuit.karate.StepDefs.matchEquals(StepDefs.java:540)\r\n\tat ✽.And match $.City \u003d\u003d \u0027Pretoria(joe/karatte/test.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify the weather",
  "description": "",
  "id": "testing-addresses;verify-the-weather;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "url \u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "param City \u003d  \u0027/\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "match $.City \u003d\u003d \u0027#notnull\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://restapi.demoqa.com/utilities/weather/city\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 19382028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 6
    },
    {
      "val": " \u0027/\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.param(String,String\u003e)"
});
formatter.result({
  "duration": 3750681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 761561803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 198542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.City",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#notnull\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 16459080,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the weather for Polokwane",
  "description": "",
  "id": "testing-addresses;verify-the-weather-for-polokwane",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "url \u0027http://restapi.demoqa.com/utilities/weather/city/Johannesburg\u0027",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "#And request (City:\u0027/Polokwane\u0027)"
    }
  ],
  "line": 33,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "match $.City \u003d\u003d \"Johannesburg\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://restapi.demoqa.com/utilities/weather/city/Johannesburg\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 22799340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 855280479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 54044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.City",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\"Johannesburg\"",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 12670282,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify the weather for Pretoria",
  "description": "",
  "id": "testing-addresses;verify-the-weather-for-pretoria",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "url \u0027http://restapi.demoqa.com/utilities/weather/city/Pretoria\u0027",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#And param (City:\u0027/Polokwane\u0027)"
    }
  ],
  "line": 40,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "match $ contains {City:\"Pretoria\"}",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://restapi.demoqa.com/utilities/weather/city/Pretoria\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 16831132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 879545277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 250880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " {City:\"Pretoria\"}",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1503572,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 46,
      "value": "#And match response \u003d\u003d { City: \u0027Polokwane\u0027 }"
    },
    {
      "line": 50,
      "value": "#\tExamples:"
    },
    {
      "line": 51,
      "value": "#    | city      | value      |"
    },
    {
      "line": 52,
      "value": "#   | \u0027Johannesburg\u0027        | [\u0027Johannesburg\u0027]      |"
    },
    {
      "line": 53,
      "value": "#  | [\u0027a\u0027, \u0027b\u0027] | [\u0027a\u0027, \u0027b\u0027] |"
    }
  ],
  "line": 55,
  "name": "Verify the ilab",
  "description": "",
  "id": "testing-addresses;verify-the-ilab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "url \u0027https://www.ilabquality.com/\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "status 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027https://www.ilabquality.com/\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 21791271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 2217218090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 198542,
  "status": "passed"
});
});