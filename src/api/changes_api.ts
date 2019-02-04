import http = require("http");
import request = require("request");

import { addQueryParameterToUrl, invokeApiMethod } from "../internal/requestHelper";
import { Configuration } from "../internal/configuration";
import * as model from "../models/model";
import { ObjectSerializer } from "../internal/objectSerializer";

export * from "../models/model";

/**
 * GroupDocs.Comparison Cloud API
 */
export class ChangesApi {

    /**
     * Creates new instance of ChangesApi
     * @param appSid Application identifier (App SID).
     * @param appKey Application private key (App Key).
     */
    public static fromKeys(appSid: string, appKey: string) {
        const config = new Configuration(appSid, appKey);
        return new ChangesApi(config);
    }

    /**
     * Creates new instance of ChangesApi
     * @param config API configuration.
     */
    public static fromConfig(config: Configuration) {
        return new ChangesApi(config);
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
     * Posts the categories changes.
     * @param requestObj contains request parameters
     */
    public async postCategoriesChanges(requestObj: model.PostCategoriesChangesRequest): Promise<Array<model.ComparisonChangesCategoryDto>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCategoriesChanges.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/changes/categories";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "categoriesType", requestObj.categoriesType);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<ComparisonChangesCategoryDto>");
        return Promise.resolve(result);
    }

    /**
     * Returns json result with set of changes between documents
     * @param requestObj contains request parameters
     */
    public async postChanges(requestObj: model.PostChangesRequest): Promise<Array<model.ComparisonChange>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postChanges.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/changes";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<ComparisonChange>");
        return Promise.resolve(result);
    }

    /**
     * Applies changes to the document and returns document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async putChangesDocument(requestObj: model.PutChangesDocumentRequest): Promise<model.Link> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChangesDocument.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/changes/update";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        const requestOptions: request.Options = {
            method: "PUT",
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
     * Applies changes to the document and returns stream of document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async putChangesDocumentStream(requestObj: model.PutChangesDocumentStreamRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChangesDocumentStream.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/changes/stream";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve(result);
    }

    /**
     * Applies changes to the document and returns images of document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async putChangesImages(requestObj: model.PutChangesImagesRequest): Promise<Array<model.Link>> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChangesImages.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/changes/images";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outFolder", requestObj.outFolder);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: ObjectSerializer.serialize(requestObj.request, requestObj.request.constructor.name === "Object" ? "ComparisonRequest" : requestObj.request.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Array<Link>");
        return Promise.resolve(result);
    }

    /**
     * Applies changes to the document and returns image's streams of document with the result of comparison
     * @param requestObj contains request parameters
     */
    public async putChangesImagesStream(requestObj: model.PutChangesImagesStreamRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putChangesImagesStream.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/comparison/compareDocuments/changes/stream/images";
        const queryParameters: any = {};

        const requestOptions: request.Options = {
            method: "PUT",
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