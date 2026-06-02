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

import { PageInfo } from "./page_info";
import { Rectangle } from "./rectangle";
import { StyleChangeInfo } from "./style_change_info";

/**
 * ChangeInfo Object fields
 */
export class ChangeInfo {

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
            name: "comparisonAction",
            baseName: "comparisonAction",
            type: "ChangeInfo.ComparisonActionEnum",
        },
        {
            name: "type",
            baseName: "type",
            type: "ChangeInfo.TypeEnum",
        },
        {
            name: "text",
            baseName: "text",
            type: "string",
        },
        {
            name: "targetText",
            baseName: "targetText",
            type: "string",
        },
        {
            name: "authors",
            baseName: "authors",
            type: "Array<string>",
        },
        {
            name: "styleChangeInfo",
            baseName: "styleChangeInfo",
            type: "Array<StyleChangeInfo>",
        },
        {
            name: "pageInfo",
            baseName: "pageInfo",
            type: "PageInfo",
        },
        {
            name: "box",
            baseName: "box",
            type: "Rectangle",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ChangeInfo.attributeTypeMap;
    }

    /**
     * Id of change
     */
    public id: number;

    /**
     * Action (accept or reject). This field shows comparison what to do with this change
     */
    public comparisonAction: ChangeInfo.ComparisonActionEnum;

    /**
     * Type of change (Inserted, Deleted or StyleChanged)
     */
    public type: ChangeInfo.TypeEnum;

    /**
     * Text of changed element
     */
    public text: string;

    /**
     * Changed text of target doc
     */
    public targetText: string;

    /**
     * Array of authors who made this change (used for multi comparison)
     */
    public authors: Array<string>;

    /**
     * Array of style changes
     */
    public styleChangeInfo: Array<StyleChangeInfo>;

    /**
     * Page where current change is placed
     */
    public pageInfo: PageInfo;

    /**
     * Coordinates of changed element
     */
    public box: Rectangle;

    public constructor(init?: Partial<ChangeInfo>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ChangeInfo {
    export enum ComparisonActionEnum {
        None = 'None' as any,
        Accept = 'Accept' as any,
        Reject = 'Reject' as any,
    }
    export enum TypeEnum {
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
