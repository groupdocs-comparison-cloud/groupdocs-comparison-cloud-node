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
import { Settings } from "./settings";

/**
 * Defines comparison options
 */
export class ComparisonOptions {

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
            name: "targetFiles",
            baseName: "targetFiles",
            type: "Array<FileInfo>",
        },
        {
            name: "settings",
            baseName: "settings",
            type: "Settings",
        },
        {
            name: "changeType",
            baseName: "changeType",
            type: "ComparisonOptions.ChangeTypeEnum",
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
        return ComparisonOptions.attributeTypeMap;
    }

    /**
     * Information about source file
     */
    public sourceFile: FileInfo;

    /**
     * Information about target file(s)
     */
    public targetFiles: Array<FileInfo>;

    /**
     * Comparison settings
     */
    public settings: Settings;

    /**
     * Changes type. Used only for Changes resource(/comparison/changes)
     */
    public changeType: ComparisonOptions.ChangeTypeEnum;

    /**
     * Path to the resultant document (if not specified the document will not be saved)
     */
    public outputPath: string;

    public constructor(init?: Partial<ComparisonOptions>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ComparisonOptions {
    export enum ChangeTypeEnum {
        None = 'None' as any,
        Modified = 'Modified' as any,
        Inserted = 'Inserted' as any,
        Deleted = 'Deleted' as any,
        Added = 'Added' as any,
        NotModified = 'NotModified' as any,
        StyleChanged = 'StyleChanged' as any,
        Resized = 'Resized' as any,
        Moved = 'Moved' as any,
        MovedAndResized = 'MovedAndResized' as any,
        ShiftedAndResized = 'ShiftedAndResized' as any,
    }
}
// tslint:enable:quotemark
