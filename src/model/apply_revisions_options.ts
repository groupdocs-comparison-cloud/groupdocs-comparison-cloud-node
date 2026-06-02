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

import { FileInfo } from "./file_info";
import { RevisionInfo } from "./revision_info";

/**
 * Options for apply revisions method
 */
export class ApplyRevisionsOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceFile",
            baseName: "sourceFile",
            type: "FileInfo",
        },
        {
            name: "revisions",
            baseName: "revisions",
            type: "Array<RevisionInfo>",
        },
        {
            name: "acceptAll",
            baseName: "acceptAll",
            type: "boolean",
        },
        {
            name: "rejectAll",
            baseName: "rejectAll",
            type: "boolean",
        },
        {
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ApplyRevisionsOptions.attributeTypeMap;
    }

    /**
     * Information about source file
     */
    public sourceFile: FileInfo;

    /**
     * Revisions to apply or reject.
     */
    public revisions: Array<RevisionInfo>;

    /**
     * Indicates whether to apply all revisions in the document
     */
    public acceptAll: boolean;

    /**
     * Indicates whether to reject all revisions in the document
     */
    public rejectAll: boolean;

    /**
     * Path to the resultant document (if not specified the document will not be saved)
     */
    public outputPath: string;

    public constructor(init?: Partial<ApplyRevisionsOptions>) {

        Object.assign(this, init);
    }
}
