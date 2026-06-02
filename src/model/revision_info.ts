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

/**
 * Provides information about one revision.
 */
export class RevisionInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "id",
            baseName: "id",
            type: "number",
        },
        {
            name: "action",
            baseName: "action",
            type: "RevisionInfo.ActionEnum",
        },
        {
            name: "text",
            baseName: "text",
            type: "string",
        },
        {
            name: "author",
            baseName: "author",
            type: "string",
        },
        {
            name: "type",
            baseName: "type",
            type: "RevisionInfo.TypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RevisionInfo.attributeTypeMap;
    }

    /**
     * Id of revision
     */
    public id: number;

    /**
     * Action (accept or reject). This field allows you to influence the display of the revision.
     */
    public action: RevisionInfo.ActionEnum;

    /**
     * The text that is in revision.
     */
    public text: string;

    /**
     * Author.
     */
    public author: string;

    /**
     * RevisionHandler type, depending on the type the Action (accept or reject) logic changes.
     */
    public type: RevisionInfo.TypeEnum;

    public constructor(init?: Partial<RevisionInfo>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RevisionInfo {
    export enum ActionEnum {
        None = 'None' as any,
        Accept = 'Accept' as any,
        Reject = 'Reject' as any,
    }
    export enum TypeEnum {
        Insertion = 'Insertion' as any,
        Deletion = 'Deletion' as any,
        FormatChange = 'FormatChange' as any,
        StyleDefinitionChange = 'StyleDefinitionChange' as any,
        Moving = 'Moving' as any,
    }
}
// tslint:enable:quotemark
