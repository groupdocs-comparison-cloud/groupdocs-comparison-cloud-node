/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2018 Aspose Pty Ltd
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
import http = require("http");
import request = require("request");

import { addQueryParameterToUrl, invokeApiMethod } from "../internal/requestHelper";
import { Configuration } from "../internal/configuration";
import * as model from "../models/model";
import * as Request from "../models/comparison_request";
import { ObjectSerializer } from "../internal/objectSerializer";

export * from "../models/model";

/**
 * GroupDocs.Comparison Cloud API
 */
export class ComparisonApi {

    /**
     * Creates new instance of ComparisonApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new ComparisonApi(config);
    }

    /**
     * Creates new instance of ComparisonApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new ComparisonApi(config);
    }

    /**
     * Configuration
     */
    private configuration: Configuration;

    /**
     * @param config Configuration.
     */
    public constructor(config: Configuration) {
        this.configuration = config;
    }

    /**
     * Returns document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async comparison(requestObj: Request.ComparisonRequest): Promise<model.Link> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling comparison.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Link");
        return Promise.resolve(result);
    }

    /**
     * Returns images of document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async comparisonImages(requestObj: model.ComparisonImagesRequest): Promise<Array<model.Link>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling comparisonImages.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/images";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outFolder", requestObj.outFolder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration).then();
        const result =  ObjectSerializer.deserialize(response.body, "Array<Link>");
        return Promise.resolve(result);
    }

    /**
     * Returns image's streams of document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async comparisonImagesStream(requestObj: model.ComparisonImagesStreamRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling comparisonImagesStream.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/stream/images";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: await  ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  await ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Returns stream of document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async comparisonStream(requestObj: model.ComparisonStreamRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling comparisonStream.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/stream";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

}
