/*
* The MIT License (MIT)
*
* Copyright (c) Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import axios = require("axios");

import { invokeApiMethod } from "../api_client";
import { Configuration } from "../configuration";
import * as model from "../model";
import { Serializer } from "../serializer";

/**
 * GroupDocs.Comparison Cloud API
 */
export class PreviewApi {

    /**
     * Creates new instance of PreviewApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new PreviewApi(config);
    }

    /**
     * Creates new instance of PreviewApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new PreviewApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    private constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Creates a preview images of document pages and returns an array of links to saved result
     * @param requestObj contains request parameters
     */
    public async preview(requestObj: model.PreviewRequest): Promise<Array<model.Link>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling preview.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/comparison/preview";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.previewOptions' is not null or undefined
        if (requestObj.previewOptions === null || requestObj.previewOptions === undefined) {
            throw new Error('Required parameter "requestObj.previewOptions" was null or undefined when calling preview.');
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "POST",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
            data: Serializer.serialize(requestObj.previewOptions, requestObj.previewOptions.constructor.name === "Object" ? "PreviewOptions" : requestObj.previewOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Array<Link>");
        return Promise.resolve(result);
    }

}
