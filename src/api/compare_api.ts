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
import FormData = require("form-data");

import { invokeApiMethod } from "../api_client";
import { Configuration } from "../configuration";
import * as model from "../model";
import { Serializer } from "../serializer";

/**
 * GroupDocs.Comparison Cloud API
 */
export class CompareApi {

    /**
     * Creates new instance of CompareApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new CompareApi(config);
    }

    /**
     * Creates new instance of CompareApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new CompareApi(config);
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
     * Compares source and target documents and returns a link to saved result
     * @param requestObj contains request parameters
     */
    public async comparisons(requestObj: model.ComparisonsRequest): Promise<model.Link> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling comparisons.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/comparison/comparisons";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.comparisonOptions' is not null or undefined
        if (requestObj.comparisonOptions === null || requestObj.comparisonOptions === undefined) {
            throw new Error('Required parameter "requestObj.comparisonOptions" was null or undefined when calling comparisons.');
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "POST",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
            data: Serializer.serialize(requestObj.comparisonOptions, requestObj.comparisonOptions.constructor.name === "Object" ? "ComparisonOptions" : requestObj.comparisonOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Link");
        return Promise.resolve(result);
    }

    /**
     * Retrieves a list of changes between source and target documents
     * @param requestObj contains request parameters
     */
    public async postChanges(requestObj: model.PostChangesRequest): Promise<Array<model.ChangeInfo>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChanges.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/comparison/changes";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.comparisonOptions' is not null or undefined
        if (requestObj.comparisonOptions === null || requestObj.comparisonOptions === undefined) {
            throw new Error('Required parameter "requestObj.comparisonOptions" was null or undefined when calling postChanges.');
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "POST",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
            data: Serializer.serialize(requestObj.comparisonOptions, requestObj.comparisonOptions.constructor.name === "Object" ? "ComparisonOptions" : requestObj.comparisonOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Array<ChangeInfo>");
        return Promise.resolve(result);
    }

    /**
     * Accepts or rejects changes to the resultant document and returns a link to saved result
     * @param requestObj contains request parameters
     */
    public async putChangesDocument(requestObj: model.PutChangesDocumentRequest): Promise<model.Link> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChangesDocument.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/comparison/updates";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.updatesOptions' is not null or undefined
        if (requestObj.updatesOptions === null || requestObj.updatesOptions === undefined) {
            throw new Error('Required parameter "requestObj.updatesOptions" was null or undefined when calling putChangesDocument.');
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
            data: Serializer.serialize(requestObj.updatesOptions, requestObj.updatesOptions.constructor.name === "Object" ? "UpdatesOptions" : requestObj.updatesOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  Serializer.deserialize(response.data, "Link");
        return Promise.resolve(result);
    }

    /**
     * Retrieves a list of changes between source and target documents supplied directly in the request body as multipart/form-data.
     * @param requestObj contains request parameters
     */
    public async putChanges(requestObj: model.PutChangesRequest): Promise<Array<model.ChangeInfo>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChanges.');
        }

        const localVarPath = this.configuration.getServerUrl() + "/comparison/changes";
        const queryParameters: any = {};

        // verify required parameters
        if (requestObj.sourceFile === null || requestObj.sourceFile === undefined) {
            throw new Error('Required parameter "requestObj.sourceFile" was null or undefined when calling putChanges.');
        }
        if (requestObj.targetFiles === null || requestObj.targetFiles === undefined) {
            throw new Error('Required parameter "requestObj.targetFiles" was null or undefined when calling putChanges.');
        }

        const formData = new FormData();
        // source file
        formData.append('sourceFile', requestObj.sourceFile, requestObj.sourceFileName || 'sourceFile');

        // target files – can be a single file or an array
        if (Array.isArray(requestObj.targetFiles)) {
            requestObj.targetFiles.forEach((file: any, idx: number) => {
                const fileName = (requestObj.targetFilesNames && requestObj.targetFilesNames[idx]) ? requestObj.targetFilesNames[idx] : `targetFile${idx}`;
                formData.append('targetFiles', file, fileName);
            });
        } else {
            formData.append('targetFiles', requestObj.targetFiles, requestObj.targetFilesNames ? requestObj.targetFilesNames[0] : 'targetFile');
        }

        if (requestObj.settings !== undefined && requestObj.settings !== null) {
            formData.append('settings', requestObj.settings);
        }
        if (requestObj.changeType !== undefined && requestObj.changeType !== null) {
            formData.append('changeType', requestObj.changeType);
        }

        const requestOptions: axios.AxiosRequestConfig = {
            method: "PUT",
            params: queryParameters,
            url: localVarPath,
            responseType: "json",
            data: formData,
            headers: formData.getHeaders ? formData.getHeaders() : undefined,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result = Serializer.deserialize(response.data, "Array<ChangeInfo>");
        return Promise.resolve(result);
    }

}
