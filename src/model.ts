/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2023 Aspose Pty Ltd
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
/**
 * Metered license consumption information
 */
export class ConsumptionResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "credit",
            baseName: "credit",
            type: "number",
        },        
        {
            name: "quantity",
            baseName: "quantity",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ConsumptionResult.attributeTypeMap;
    }

    /**
     * Amount of used credits
     */
    public credit: number;
    
    /**
     * Amount of MBs processed
     */
    public quantity: number;
    
    public constructor(init?: Partial<ConsumptionResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * DiagramMasterSetting Object fields
 */
export class DiagramMasterSetting {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "masterPath",
            baseName: "masterPath",
            type: "string",
        },        
        {
            name: "useSourceMaster",
            baseName: "useSourceMaster",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiagramMasterSetting.attributeTypeMap;
    }

    /**
     * Path to custom master path
     */
    public masterPath: string;
    
    /**
     * Value of using master from source and target document together
     */
    public useSourceMaster: boolean;
    
    public constructor(init?: Partial<DiagramMasterSetting>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "usedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "totalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "requestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes compared document
 */
export class FileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "filePath",
            baseName: "filePath",
            type: "string",
        },        
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "storageName",
            baseName: "storageName",
            type: "string",
        },        
        {
            name: "password",
            baseName: "password",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileInfo.attributeTypeMap;
    }

    /**
     * Path to the compared document
     */
    public filePath: string;
    
    /**
     * Document version
     */
    public versionId: string;
    
    /**
     * Storage name 
     */
    public storageName: string;
    
    /**
     * Password for encrypted document
     */
    public password: string;
    
    public constructor(init?: Partial<FileInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File-format
 */
export class Format {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "fileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Format.attributeTypeMap;
    }

    /**
     * File format extension
     */
    public extension: string;
    
    /**
     * File format name
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<Format>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Describes list of supported file formats
 */
export class FormatsResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "formats",
            baseName: "formats",
            type: "Array<Format>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FormatsResult.attributeTypeMap;
    }

    /**
     * Supported file formats
     */
    public formats: Array<Format>;
    
    public constructor(init?: Partial<FormatsResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents document information
 */
export class InfoResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "format",
            type: "string",
        },        
        {
            name: "extension",
            baseName: "extension",
            type: "string",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "pageCount",
            baseName: "pageCount",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return InfoResult.attributeTypeMap;
    }

    /**
     * Document format
     */
    public format: string;
    
    /**
     * Document file extension
     */
    public extension: string;
    
    /**
     * Document file size
     */
    public size: number;
    
    /**
     * Pages count
     */
    public pageCount: number;
    
    public constructor(init?: Partial<InfoResult>) {
        
        Object.assign(this, init);
    }        
}

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

/**
 * Provides information for the object link. This is supposed to be an atom:link, therefore it should have all attributes specified here http://tools.ietf.org/html/rfc4287#section-4.2.7
 */
export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "href",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "rel",
            type: "string",
        },        
        {
            name: "type",
            baseName: "type",
            type: "string",
        },        
        {
            name: "title",
            baseName: "title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    /**
     * The \"href\" attribute contains the link's IRI. atom:link elements MUST have an href attribute, whose value MUST be a IRI reference
     */
    public href: string;
    
    /**
     * atom:link elements MAY have a \"rel\" attribute that indicates the link relation type.  If the \"rel\" attribute is not present, the link element MUST be interpreted as if the link relation type is \"alternate\".
     */
    public rel: string;
    
    /**
     * On the link element, the \"type\" attribute's value is an advisory media type: it is a hint about the type of the representation that is expected to be returned when the value of the href attribute is dereferenced.  Note that the type attribute does not override the actual media type returned with the representation.
     */
    public type: string;
    
    /**
     * The \"title\" attribute conveys human-readable information about the link.  The content of the \"title\" attribute is Language-Sensitive.
     */
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

/**
 * MetaData Object fields
 */
export class Metadata {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "author",
            baseName: "author",
            type: "string",
        },        
        {
            name: "lastSaveBy",
            baseName: "lastSaveBy",
            type: "string",
        },        
        {
            name: "company",
            baseName: "company",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Metadata.attributeTypeMap;
    }

    /**
     * Value of document Author
     */
    public author: string;
    
    /**
     * Value of last save by author of document
     */
    public lastSaveBy: string;
    
    /**
     * Value of Company of document
     */
    public company: string;
    
    public constructor(init?: Partial<Metadata>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "innerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Represents information about page
 */
export class PageInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            name: "pageNumber",
            baseName: "pageNumber",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageInfo.attributeTypeMap;
    }

    /**
     * Page width
     */
    public width: number;
    
    /**
     * Page height
     */
    public height: number;
    
    /**
     * Page number
     */
    public pageNumber: number;
    
    public constructor(init?: Partial<PageInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Rectangle model
 */
export class Rectangle {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "height",
            baseName: "height",
            type: "number",
        },        
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "x",
            baseName: "x",
            type: "number",
        },        
        {
            name: "y",
            baseName: "y",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Rectangle.attributeTypeMap;
    }

    /**
     * Height
     */
    public height: number;
    
    /**
     * Width
     */
    public width: number;
    
    /**
     * X coordinate
     */
    public x: number;
    
    /**
     * Y coordinate
     */
    public y: number;
    
    public constructor(init?: Partial<Rectangle>) {
        
        Object.assign(this, init);
    }        
}

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
/**
 * Item size
 */
export class Size {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "width",
            baseName: "width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "height",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Size.attributeTypeMap;
    }

    /**
     * Width of item
     */
    public width: number;
    
    /**
     * Height of item
     */
    public height: number;
    
    public constructor(init?: Partial<Size>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "isFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "modifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * StyleChangeInfo Object fields
 */
export class StyleChangeInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "changedProperty",
            baseName: "changedProperty",
            type: "string",
        },        
        {
            name: "oldValue",
            baseName: "oldValue",
            type: "string",
        },        
        {
            name: "newValue",
            baseName: "newValue",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StyleChangeInfo.attributeTypeMap;
    }

    /**
     * Name of changed style
     */
    public changedProperty: string;
    
    /**
     * Value of changed style from source document
     */
    public oldValue: string;
    
    /**
     * Value of changed style from target document
     */
    public newValue: string;
    
    public constructor(init?: Partial<StyleChangeInfo>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "versionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "isLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

/**
 * Comparison option class for updates endpoint
 */
export class UpdatesOptions extends ComparisonOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "changes",
            baseName: "changes",
            type: "Array<ChangeInfo>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UpdatesOptions.attributeTypeMap);
    }

    /**
     * Changes to apply or reject. Used only for updates resource (/comparison/updates)
     */
    public changes: Array<ChangeInfo>;
    
    public constructor(init?: Partial<UpdatesOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace UpdatesOptions {
}
// tslint:enable:quotemark
const enumsMap = {
    "ChangeInfo.ComparisonActionEnum": ChangeInfo.ComparisonActionEnum,
    "ChangeInfo.TypeEnum": ChangeInfo.TypeEnum,
    "ComparisonOptions.ChangeTypeEnum": ComparisonOptions.ChangeTypeEnum,
    "RevisionInfo.ActionEnum": RevisionInfo.ActionEnum,
    "RevisionInfo.TypeEnum": RevisionInfo.TypeEnum,
    "Settings.DetailsLevelEnum": Settings.DetailsLevelEnum,
    "Settings.CloneMetadataEnum": Settings.CloneMetadataEnum,
    "Settings.PasswordSaveOptionEnum": Settings.PasswordSaveOptionEnum,
    "Settings.PaperSizeEnum": Settings.PaperSizeEnum,
};

const typeMap = {
            ApplyRevisionsOptions,
            ChangeInfo,
            ComparisonOptions,
            ConsumptionResult,
            DiagramMasterSetting,
            DiscUsage,
            ErrorDetails,
            FileInfo,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            InfoResult,
            ItemsStyle,
            Link,
            Metadata,
            ModelError,
            ObjectExist,
            PageInfo,
            Rectangle,
            RevisionInfo,
            Settings,
            Size,
            StorageExist,
            StorageFile,
            StyleChangeInfo,
            FileVersion,
            UpdatesOptions,
};

export {enumsMap, typeMap};

/**
 * Request model for Comparisons operation.
 */
export class ComparisonsRequest {
    /**
     * Comparison options
     */
    public comparisonOptions: ComparisonOptions;
    
    public constructor(comparisonOptions: ComparisonOptions) {        
        this.comparisonOptions = comparisonOptions;
    }
}

/**
 * Request model for PostChanges operation.
 */
export class PostChangesRequest {
    /**
     * Comparison options
     */
    public comparisonOptions: ComparisonOptions;
    
    public constructor(comparisonOptions: ComparisonOptions) {        
        this.comparisonOptions = comparisonOptions;
    }
}

/**
 * Request model for PutChangesDocument operation.
 */
export class PutChangesDocumentRequest {
    /**
     * Comparison options
     */
    public updatesOptions: UpdatesOptions;
    
    public constructor(updatesOptions: UpdatesOptions) {        
        this.updatesOptions = updatesOptions;
    }
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string, versionId?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, file: Buffer, storageName?: string) {        
        this.path = path;
        this.file = file;
        this.storageName = storageName;
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(path: string, storageName?: string, recursive?: boolean) {        
        this.path = path;
        this.storageName = storageName;
        this.recursive = recursive;
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(srcPath: string, destPath: string, srcStorageName?: string, destStorageName?: string) {        
        this.srcPath = srcPath;
        this.destPath = destPath;
        this.srcStorageName = srcStorageName;
        this.destStorageName = destStorageName;
    }
}

/**
 * Request model for GetDocumentInfo operation.
 */
export class GetDocumentInfoRequest {
    /**
     * Gets or sets fileInfo
     */
    public fileInfo: FileInfo;
    
    public constructor(fileInfo: FileInfo) {        
        this.fileInfo = fileInfo;
    }
}

/**
 * Request model for ApplyRevisions operation.
 */
export class ApplyRevisionsRequest {
    /**
     * Apply revisions options
     */
    public revisionOptions: ApplyRevisionsOptions;
    
    public constructor(revisionOptions: ApplyRevisionsOptions) {        
        this.revisionOptions = revisionOptions;
    }
}

/**
 * Request model for GetRevisions operation.
 */
export class GetRevisionsRequest {
    /**
     * File information
     */
    public fileInfo: FileInfo;
    
    public constructor(fileInfo: FileInfo) {        
        this.fileInfo = fileInfo;
    }
}

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName?: string) {        
        this.storageName = storageName;
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(path: string, storageName?: string) {        
        this.path = path;
        this.storageName = storageName;
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(path: string, storageName?: string, versionId?: string) {        
        this.path = path;
        this.storageName = storageName;
        this.versionId = versionId;
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(storageName: string) {        
        this.storageName = storageName;
    }
}
