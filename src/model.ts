/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
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
            type: "string",
        },        
        {
            name: "comparisonTypeChanged",
            baseName: "comparisonTypeChanged",
            type: "string",
        },        
        {
            name: "text",
            baseName: "text",
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
    public comparisonAction: string;
    
    /**
     * Type of change (Inserted, Deleted or StyleChanged)
     */
    public comparisonTypeChanged: string;
    
    /**
     * Text of changed element
     */
    public text: string;
    
    /**
     * Array of authors who made this change (used for multi comparison)
     */
    public authors: Array<string>;
    
    /**
     * Array of style changes
     */
    public styleChangeInfo: Array<StyleChangeInfo>;
    
    public constructor(init?: Partial<ChangeInfo>) {
        
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
    
    /**
     * Width of original document
     */
    public width: number;
    
    /**
     * Height of original document
     */
    public height: number;
    
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
     * Strikethrough style for changed components
     */
    public strikeThrough: boolean;
    
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
 * Defines comparison options
 */
export class Options {

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
            name: "outputPath",
            baseName: "outputPath",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Options.attributeTypeMap;
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
     * Path to the resultant document (if not specified the document will not be saved)
     */
    public outputPath: string;
    
    public constructor(init?: Partial<Options>) {
        
        Object.assign(this, init);
    }        
}

/**
 * OriginalSize Object fields
 */
export class OriginalSize {

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
        return OriginalSize.attributeTypeMap;
    }

    /**
     * Width of original document
     */
    public width: number;
    
    /**
     * Height of original document
     */
    public height: number;
    
    public constructor(init?: Partial<OriginalSize>) {
        
        Object.assign(this, init);
    }        
}

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
            name: "styleChangedItemsStyle",
            baseName: "styleChangedItemsStyle",
            type: "ItemsStyle",
        },        
        {
            name: "wordsSeparatorChars",
            baseName: "wordsSeparatorChars",
            type: "Array<string>",
        },        
        {
            name: "detailLevel",
            baseName: "detailLevel",
            type: "string",
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
            name: "markDeletedInsertedContentDeep",
            baseName: "markDeletedInsertedContentDeep",
            type: "boolean",
        },        
        {
            name: "cloneMetadata",
            baseName: "cloneMetadata",
            type: "string",
        },        
        {
            name: "metaData",
            baseName: "metaData",
            type: "Metadata",
        },        
        {
            name: "passwordSaveOption",
            baseName: "passwordSaveOption",
            type: "string",
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
            type: "OriginalSize",
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
    public styleChangedItemsStyle: ItemsStyle;
    
    /**
     * An array of delimiters to split text into words
     */
    public wordsSeparatorChars: Array<string>;
    
    /**
     * Gets of sets the comparison detalisation level 
     */
    public detailLevel: string;
    
    /**
     * Indicates whether to use frames for shapes in Word Processing and for rectangles in Image documents
     */
    public useFramesForDelInsElements: boolean;
    
    /**
     * Indicates whether to calculate coordinates for changed components
     */
    public calculateComponentCoordinates: boolean;
    
    /**
     * Indicates whether to accept inserted/deleted styles for all children of inserted/deleted components
     */
    public markDeletedInsertedContentDeep: boolean;
    
    /**
     * Gets or sets type of metadata to clone
     */
    public cloneMetadata: string;
    
    /**
     * Gets or sets user metadata
     */
    public metaData: Metadata;
    
    /**
     * Gets or sets type of password saving
     */
    public passwordSaveOption: string;
    
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
    public originalSize: OriginalSize;
    
    public constructor(init?: Partial<Settings>) {
        
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
export class UpdatesOptions extends Options {

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
     * Changes to apply or reject. Used only for Changes resourse (/comparison/updates)
     */
    public changes: Array<ChangeInfo>;
    
    public constructor(init?: Partial<UpdatesOptions>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            ChangeInfo,
            DiagramMasterSetting,
            DiscUsage,
            ErrorDetails,
            FileInfo,
            FileVersions,
            FilesList,
            FilesUploadResult,
            Format,
            FormatsResult,
            ItemsStyle,
            Link,
            Metadata,
            ModelError,
            ObjectExist,
            Options,
            OriginalSize,
            Settings,
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
    public comparisonOptions: Options;
    
    public constructor(comparisonOptions: Options) {        
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
    public comparisonOptions: Options;
    
    public constructor(comparisonOptions: Options) {        
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
    public comparisonOptions: UpdatesOptions;
    
    public constructor(comparisonOptions: UpdatesOptions) {        
        this.comparisonOptions = comparisonOptions;
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
