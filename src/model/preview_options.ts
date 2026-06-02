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

/**
 * Defines preview options
 */
export class PreviewOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileInfo",
            baseName: "fileInfo",
            type: "FileInfo",
        },
        {
            name: "format",
            baseName: "format",
            type: "PreviewOptions.FormatEnum",
        },
        {
            name: "outputFolder",
            baseName: "outputFolder",
            type: "string",
        },
        {
            name: "width",
            baseName: "width",
            type: "number",
        },
        {
            name: "height",
            baseName: "height",
            type: "number",
        },
        {
            name: "pageNumbers",
            baseName: "pageNumbers",
            type: "Array<number>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PreviewOptions.attributeTypeMap;
    }

    /**
     * Input file info
     */
    public fileInfo: FileInfo;

    /**
     * Preview image format
     */
    public format: PreviewOptions.FormatEnum;

    /**
     * Path to folder with preview results
     */
    public outputFolder: string;

    /**
     * Preview width
     */
    public width: number;

    /**
     * Preview height
     */
    public height: number;

    /**
     * Page numbers that will be previewed.
     */
    public pageNumbers: Array<number>;

    public constructor(init?: Partial<PreviewOptions>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PreviewOptions {
    export enum FormatEnum {
        Jpeg = 'Jpeg' as any,
        Png = 'Png' as any,
        Bmp = 'Bmp' as any,
    }
}
// tslint:enable:quotemark
