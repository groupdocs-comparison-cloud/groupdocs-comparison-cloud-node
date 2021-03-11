# GroupDocs.Comparison Cloud Node.js SDK
Node.js module for communicating with the GroupDocs.Comparison Cloud API

## Installation

A package `groupdocs-comparison-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-comparison-cloud). You can install it with:

```shell
npm install groupdocs-comparison-cloud
```    

## Getting Started

Please follow the [installation](#installation) procedure and then run the following JavaScript code:

```js
// load the module
var GroupDocs = require('groupdocs-comparison-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct ComparisonApi
var infoApi = GroupDocs.InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then(function (response) {
        console.log("Supported file-formats:")
        response.formats.forEach(function (format) {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { InfoApi } from "groupdocs-comparison-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct ComparisonApi
const infoApi: InfoApi = InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```


## Licensing
GroupDocs.Comparison Cloud Node.js SDK licensed under [MIT License](LICENSE).

## Resources
+ [**Website**](https://www.groupdocs.cloud)
+ [**Product Home**](https://products.groupdocs.cloud/comparison)
+ [**Documentation**](https://docs.groupdocs.cloud/comparison)
+ [**Free Support Forum**](https://forum.groupdocs.cloud/c/comparison)
+ [**Blog**](https://blog.groupdocs.cloud/category/comparison)

## Contact Us
Your feedback is very important to us. Please feel free to contact us using our [Support Forums](https://forum.groupdocs.cloud/c/comparison).