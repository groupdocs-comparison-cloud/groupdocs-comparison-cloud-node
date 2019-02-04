import {ComparisonChange, ComparisonFileInfo, ComparisonRequestSettings} from "./model";

/**
 * Request model for Comparison operation.
 */
import * as request from "../models/model";
export class ComparisonRequest {
    /**
     * The request.
     */
    public request: request.ComparisonRequest;

    /**
     * outPath: path to output document on file storage
     */
    public outPath: string;

    public constructor(request?: request.ComparisonRequest, outPath?: string) {
        this.request = request;
        this.outPath = outPath;
    }
}
