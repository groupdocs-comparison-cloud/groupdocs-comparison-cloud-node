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
 * ItemsStyle Object fields
 */
export class ItemsStyle {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fontColor",
            baseName: "fontColor",
            type: "string",
        },
        {
            name: "highlightColor",
            baseName: "highlightColor",
            type: "string",
        },
        {
            name: "beginSeparatorString",
            baseName: "beginSeparatorString",
            type: "string",
        },
        {
            name: "endSeparatorString",
            baseName: "endSeparatorString",
            type: "string",
        },
        {
            name: "bold",
            baseName: "bold",
            type: "boolean",
        },
        {
            name: "italic",
            baseName: "italic",
            type: "boolean",
        },
        {
            name: "strikeThrough",
            baseName: "strikeThrough",
            type: "boolean",
        },
        {
            name: "underline",
            baseName: "underline",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ItemsStyle.attributeTypeMap;
    }

    /**
     * Font color for changed components
     */
    public fontColor: string;

    /**
     * Highlight color for changed components
     */
    public highlightColor: string;

    /**
     * Start tag for changed components
     */
    public beginSeparatorString: string;

    /**
     * End tag for changed components
     */
    public endSeparatorString: string;

    /**
     * Bold style for changed components
     */
    public bold: boolean;

    /**
     * Italic style for changed components
     */
    public italic: boolean;

    /**
     * Strike through style for changed components
     */
    public strikeThrough: boolean;

    /**
     * Underline style for changed components
     */
    public underline: boolean;

    public constructor(init?: Partial<ItemsStyle>) {

        Object.assign(this, init);
    }
}
