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

import { DiagramMasterSetting } from "./diagram_master_setting";
import { ItemsStyle } from "./items_style";
import { Metadata } from "./metadata";
import { Size } from "./size";

/**
 * Defines comparison process additional settings
 */
export class Settings {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "generateSummaryPage",
            baseName: "generateSummaryPage",
            type: "boolean",
        },
        {
            name: "showDeletedContent",
            baseName: "showDeletedContent",
            type: "boolean",
        },
        {
            name: "showInsertedContent",
            baseName: "showInsertedContent",
            type: "boolean",
        },
        {
            name: "styleChangeDetection",
            baseName: "styleChangeDetection",
            type: "boolean",
        },
        {
            name: "insertedItemsStyle",
            baseName: "insertedItemsStyle",
            type: "ItemsStyle",
        },
        {
            name: "deletedItemsStyle",
            baseName: "deletedItemsStyle",
            type: "ItemsStyle",
        },
        {
            name: "changedItemsStyle",
            baseName: "changedItemsStyle",
            type: "ItemsStyle",
        },
        {
            name: "wordsSeparatorChars",
            baseName: "wordsSeparatorChars",
            type: "Array<string>",
        },
        {
            name: "detailsLevel",
            baseName: "detailsLevel",
            type: "Settings.DetailsLevelEnum",
        },
        {
            name: "useFramesForDelInsElements",
            baseName: "useFramesForDelInsElements",
            type: "boolean",
        },
        {
            name: "calculateComponentCoordinates",
            baseName: "calculateComponentCoordinates",
            type: "boolean",
        },
        {
            name: "markChangedContent",
            baseName: "markChangedContent",
            type: "boolean",
        },
        {
            name: "markNestedContent",
            baseName: "markNestedContent",
            type: "boolean",
        },
        {
            name: "cloneMetadata",
            baseName: "cloneMetadata",
            type: "Settings.CloneMetadataEnum",
        },
        {
            name: "metaData",
            baseName: "metaData",
            type: "Metadata",
        },
        {
            name: "passwordSaveOption",
            baseName: "passwordSaveOption",
            type: "Settings.PasswordSaveOptionEnum",
        },
        {
            name: "password",
            baseName: "password",
            type: "string",
        },
        {
            name: "diagramMasterSetting",
            baseName: "diagramMasterSetting",
            type: "DiagramMasterSetting",
        },
        {
            name: "originalSize",
            baseName: "originalSize",
            type: "Size",
        },
        {
            name: "headerFootersComparison",
            baseName: "headerFootersComparison",
            type: "boolean",
        },
        {
            name: "paperSize",
            baseName: "paperSize",
            type: "Settings.PaperSizeEnum",
        },
        {
            name: "sensitivityOfComparison",
            baseName: "sensitivityOfComparison",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Settings.attributeTypeMap;
    }

    /**
     * Indicates whether to add summary page to resultant document or not
     */
    public generateSummaryPage: boolean;

    /**
     * Indicates whether to show deleted components in resultant document or not
     */
    public showDeletedContent: boolean;

    /**
     * Indicates whether to show inserted components in resultant document or not
     */
    public showInsertedContent: boolean;

    /**
     * Indicates whether to detect style changes or not
     */
    public styleChangeDetection: boolean;

    /**
     * Style for inserted components
     */
    public insertedItemsStyle: ItemsStyle;

    /**
     * Style for deleted components
     */
    public deletedItemsStyle: ItemsStyle;

    /**
     * Style for components with changed style
     */
    public changedItemsStyle: ItemsStyle;

    /**
     * An array of delimiters to split text into words
     */
    public wordsSeparatorChars: Array<string>;

    /**
     * Gets of sets the comparison details level
     */
    public detailsLevel: Settings.DetailsLevelEnum;

    /**
     * Indicates whether to use frames for shapes in Word Processing and for rectangles in Image documents
     */
    public useFramesForDelInsElements: boolean;

    /**
     * Indicates whether to calculate coordinates for changed components
     */
    public calculateComponentCoordinates: boolean;

    /**
     * Indicates whether to use frames for shapes in Word Processing and for rectangles in Image documents
     */
    public markChangedContent: boolean;

    /**
     * Gets or sets a value indicating whether to mark the children of the deleted or inserted element as deleted or inserted
     */
    public markNestedContent: boolean;

    /**
     * Gets or sets type of metadata to clone
     */
    public cloneMetadata: Settings.CloneMetadataEnum;

    /**
     * Gets or sets user metadata
     */
    public metaData: Metadata;

    /**
     * Gets or sets type of password saving
     */
    public passwordSaveOption: Settings.PasswordSaveOptionEnum;

    /**
     * Gets or sets user password to resultant document
     */
    public password: string;

    /**
     * Gets or sets master for Diagram document
     */
    public diagramMasterSetting: DiagramMasterSetting;

    /**
     * Gets or sets original document size when picture is compared with other different formats
     */
    public originalSize: Size;

    /**
     * Control to turn on comparison of header/footer contents
     */
    public headerFootersComparison: boolean;

    /**
     * Gets or sets the result document paper size
     */
    public paperSize: Settings.PaperSizeEnum;

    /**
     * Gets or sets a sensitivity of comparison. Default is 75
     */
    public sensitivityOfComparison: number;

    public constructor(init?: Partial<Settings>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Settings {
    export enum DetailsLevelEnum {
        Low = 'Low' as any,
        Middle = 'Middle' as any,
        High = 'High' as any,
    }
    export enum CloneMetadataEnum {
        Default = 'Default' as any,
        Source = 'Source' as any,
        Target = 'Target' as any,
        FileAuthor = 'FileAuthor' as any,
    }
    export enum PasswordSaveOptionEnum {
        None = 'None' as any,
        Source = 'Source' as any,
        Target = 'Target' as any,
        User = 'User' as any,
    }
    export enum PaperSizeEnum {
        Default = 'Default' as any,
        A0 = 'A0' as any,
        A1 = 'A1' as any,
        A2 = 'A2' as any,
        A3 = 'A3' as any,
        A4 = 'A4' as any,
        A5 = 'A5' as any,
        A6 = 'A6' as any,
        A7 = 'A7' as any,
        A8 = 'A8' as any,
    }
}
// tslint:enable:quotemark
