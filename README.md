## set data untuk custome report allure teman
{
  "default": {
    "require": [
      "features/step_definitions/**/*.ts"
    ],
    "requireModule": [
      "ts-node/register"
    ],
    "format": [
      "progress",
      "html:test-results/report.html",
      ["allure-cucumberjs/reporter"] 
    ],
    "paths": ["features/**/*.feature"],
    "worldParameters": {
    "allureResultsDir": "allure-results"
    }
  }
}

## SET Package JSON
    // "report": "node generate-report.js",
    // "test:vehicle": "cucumber-js features/add-vehicle.feature",
    // "test:headed": "HEADLESS=false cucumber-js"