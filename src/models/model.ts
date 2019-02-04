/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2018 Aspose Pty Ltd
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
 * ComparisonChange dto
 */
export class ComparisonChange {

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
            name: "type",
            baseName: "type",
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
            name: "action",
            baseName: "action",
            type: "string",
        },        
        {
            name: "styleChanges",
            baseName: "styleChanges",
            type: "Array<ComparisonStyleChange>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ComparisonChange.attributeTypeMap;
    }

    /**
     * The identifier
     */
    public id: number;
    
    /**
     * The type change
     */
    public type: string;
    
    /**
     * The text
     */
    public text: string;
    
    /**
     * The authors
     */
    public authors: Array<string>;
    
    /**
     * The action
     */
    public action: string;
    
    /**
     * The style changes
     */
    public styleChanges: Array<ComparisonStyleChange>;
    
    public constructor(init?: Partial<ComparisonChange>) {
        
        (<any>Object).assign(this, init);
    }        
}

export class ComparisonChangesCategoryDto {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "category",
            baseName: "category",
            type: "string",
        },        
        {
            name: "changes",
            baseName: "changes",
            type: "Array<ComparisonChange>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ComparisonChangesCategoryDto.attributeTypeMap;
    }

    /**
     * The identifier
     */
    public category: string;
    
    /**
     * The type change
     */
    public changes: Array<ComparisonChange>;
    
    public constructor(init?: Partial<ComparisonChangesCategoryDto>) {

        (<any>Object).assign(this, init);
    }        
}

/**
 * ComparisonFileInfo dto
 */
export class ComparisonFileInfo {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "folder",
            baseName: "folder",
            type: "string",
        },        
        {
            name: "name",
            baseName: "name",
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
        return ComparisonFileInfo.attributeTypeMap;
    }

    /**
     * The folder
     */
    public folder: string;
    
    /**
     * The name
     */
    public name: string;
    
    /**
     * The password
     */
    public password: string;
    
    public constructor(init?: Partial<ComparisonFileInfo>) {

        (<any>Object).assign(this, init);
    }        
}

export class ComparisonMetadataValues {

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
        return ComparisonMetadataValues.attributeTypeMap;
    }

    /**
     * Gets or sets the author.
     */
    public author: string;
    
    /**
     * Gets or sets the last save by.
     */
    public lastSaveBy: string;
    
    /**
     * Gets or sets the company.
     */
    public company: string;
    
    public constructor(init?: Partial<ComparisonMetadataValues>) {

        (<any>Object).assign(this, init);
    }        
}

/**
 * ComparisonRequest
 */
export class ComparisonRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceFile",
            baseName: "sourceFile",
            type: "ComparisonFileInfo",
        },
        {
            name: "targetFiles",
            baseName: "targetFiles",
            type: "Array<ComparisonFileInfo>",
        },
        {
            name: "settings",
            baseName: "settings",
            type: "ComparisonRequestSettings",
        },
        {
            name: "changes",
            baseName: "changes",
            type: "Array<ComparisonChange>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ComparisonRequest.attributeTypeMap;
    }

    /**
     * The source name
     */
    public sourceFile: ComparisonFileInfo;

    /**
     * The files names
     */
    public targetFiles: Array<ComparisonFileInfo>;

    /**
     * The settings
     */
    public settings: ComparisonRequestSettings;

    /**
     * The changes
     */
    public changes: Array<ComparisonChange>;

    public constructor(init?: Partial<ComparisonRequest>) {

        (<any>Object).assign(this, init);
    }
}
/**
 * ComparisonRequestSettings dto
 */
export class ComparisonRequestSettings {

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
            type: "StyleSettingsValues",
        },        
        {
            name: "deletedItemsStyle",
            baseName: "deletedItemsStyle",
            type: "StyleSettingsValues",
        },        
        {
            name: "styleChangedItemsStyle",
            baseName: "styleChangedItemsStyle",
            type: "StyleSettingsValues",
        },        
        {
            name: "wordsSeparatorChars",
            baseName: "wordsSeparatorChars",
            type: "Array<string>",
        },        
        {
            name: "useFramesForDelInsElements",
            baseName: "useFramesForDelInsElements",
            type: "boolean",
        },        
        {
            name: "detailLevel",
            baseName: "detailLevel",
            type: "string",
        },        
        {
            name: "calculateComponentCoordinates",
            baseName: "calculateComponentCoordinates",
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
            type: "ComparisonMetadataValues",
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
            name: "markDeletedInsertedContentDeep",
            baseName: "markDeletedInsertedContentDeep",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ComparisonRequestSettings.attributeTypeMap;
    }

    /**
     * The generate summary page
     */
    public generateSummaryPage: boolean;
    
    /**
     * The show deleted content
     */
    public showDeletedContent: boolean;
    
    /**
     * The style change detection
     */
    public styleChangeDetection: boolean;
    
    /**
     * The inserted items style
     */
    public insertedItemsStyle: StyleSettingsValues;
    
    /**
     * The deleted items style
     */
    public deletedItemsStyle: StyleSettingsValues;
    
    /**
     * The style changed items style
     */
    public styleChangedItemsStyle: StyleSettingsValues;
    
    /**
     * The words separator chars
     */
    public wordsSeparatorChars: Array<string>;
    
    /**
     * The use frames for delete ins elements
     */
    public useFramesForDelInsElements: boolean;
    
    /**
     * The detail level
     */
    public detailLevel: string;
    
    /**
     * The calculate component coordinates
     */
    public calculateComponentCoordinates: boolean;
    
    /**
     * The clone metadata
     */
    public cloneMetadata: string;
    
    /**
     * The metadata
     */
    public metaData: ComparisonMetadataValues;
    
    /**
     * The password save option
     */
    public passwordSaveOption: string;
    
    /**
     * The password
     */
    public password: string;
    
    /**
     * The mark deleted inserted content deep
     */
    public markDeletedInsertedContentDeep: boolean;
    
    public constructor(init?: Partial<ComparisonRequestSettings>) {

        (<any>Object).assign(this, init);
    }        
}

/**
 * ComparisonStyleChange dto
 */
export class ComparisonStyleChange {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "changedProperty",
            baseName: "changedProperty",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ComparisonStyleChange.attributeTypeMap;
    }

    /**
     * Gets or Sets the name of th property that was changes
     */
    public changedProperty: string;
    
    public constructor(init?: Partial<ComparisonStyleChange>) {

        (<any>Object).assign(this, init);
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

        (<any>Object).assign(this, init);
    }        
}

/**
 * StyleSettingsValues dto
 */
export class StyleSettingsValues {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "color",
            baseName: "color",
            type: "Color",
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
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StyleSettingsValues.attributeTypeMap;
    }

    /**
     * Gets or sets the color.
     */
    public color: Color;
    
    /**
     * Gets or sets the begin separator string.
     */
    public beginSeparatorString: string;
    
    /**
     * Gets or sets the end separator string.
     */
    public endSeparatorString: string;
    
    public constructor(init?: Partial<StyleSettingsValues>) {

        (<any>Object).assign(this, init);
    }        
}

export class ValueType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ValueType.attributeTypeMap;
    }

    public constructor(init?: Partial<ValueType>) {

        (<any>Object).assign(this, init);
    }        
}

export class Color extends ValueType {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "transparent",
            baseName: "Transparent",
            type: "Color",
        },        
        {
            name: "aliceBlue",
            baseName: "AliceBlue",
            type: "Color",
        },        
        {
            name: "antiqueWhite",
            baseName: "AntiqueWhite",
            type: "Color",
        },        
        {
            name: "aqua",
            baseName: "Aqua",
            type: "Color",
        },        
        {
            name: "aquamarine",
            baseName: "Aquamarine",
            type: "Color",
        },        
        {
            name: "azure",
            baseName: "Azure",
            type: "Color",
        },        
        {
            name: "beige",
            baseName: "Beige",
            type: "Color",
        },        
        {
            name: "bisque",
            baseName: "Bisque",
            type: "Color",
        },        
        {
            name: "black",
            baseName: "Black",
            type: "Color",
        },        
        {
            name: "blanchedAlmond",
            baseName: "BlanchedAlmond",
            type: "Color",
        },        
        {
            name: "blue",
            baseName: "Blue",
            type: "Color",
        },        
        {
            name: "blueViolet",
            baseName: "BlueViolet",
            type: "Color",
        },        
        {
            name: "brown",
            baseName: "Brown",
            type: "Color",
        },        
        {
            name: "burlyWood",
            baseName: "BurlyWood",
            type: "Color",
        },        
        {
            name: "cadetBlue",
            baseName: "CadetBlue",
            type: "Color",
        },        
        {
            name: "chartreuse",
            baseName: "Chartreuse",
            type: "Color",
        },        
        {
            name: "chocolate",
            baseName: "Chocolate",
            type: "Color",
        },        
        {
            name: "coral",
            baseName: "Coral",
            type: "Color",
        },        
        {
            name: "cornflowerBlue",
            baseName: "CornflowerBlue",
            type: "Color",
        },        
        {
            name: "cornsilk",
            baseName: "Cornsilk",
            type: "Color",
        },        
        {
            name: "crimson",
            baseName: "Crimson",
            type: "Color",
        },        
        {
            name: "cyan",
            baseName: "Cyan",
            type: "Color",
        },        
        {
            name: "darkBlue",
            baseName: "DarkBlue",
            type: "Color",
        },        
        {
            name: "darkCyan",
            baseName: "DarkCyan",
            type: "Color",
        },        
        {
            name: "darkGoldenrod",
            baseName: "DarkGoldenrod",
            type: "Color",
        },        
        {
            name: "darkGray",
            baseName: "DarkGray",
            type: "Color",
        },        
        {
            name: "darkGreen",
            baseName: "DarkGreen",
            type: "Color",
        },        
        {
            name: "darkKhaki",
            baseName: "DarkKhaki",
            type: "Color",
        },        
        {
            name: "darkMagenta",
            baseName: "DarkMagenta",
            type: "Color",
        },        
        {
            name: "darkOliveGreen",
            baseName: "DarkOliveGreen",
            type: "Color",
        },        
        {
            name: "darkOrange",
            baseName: "DarkOrange",
            type: "Color",
        },        
        {
            name: "darkOrchid",
            baseName: "DarkOrchid",
            type: "Color",
        },        
        {
            name: "darkRed",
            baseName: "DarkRed",
            type: "Color",
        },        
        {
            name: "darkSalmon",
            baseName: "DarkSalmon",
            type: "Color",
        },        
        {
            name: "darkSeaGreen",
            baseName: "DarkSeaGreen",
            type: "Color",
        },        
        {
            name: "darkSlateBlue",
            baseName: "DarkSlateBlue",
            type: "Color",
        },        
        {
            name: "darkSlateGray",
            baseName: "DarkSlateGray",
            type: "Color",
        },        
        {
            name: "darkTurquoise",
            baseName: "DarkTurquoise",
            type: "Color",
        },        
        {
            name: "darkViolet",
            baseName: "DarkViolet",
            type: "Color",
        },        
        {
            name: "deepPink",
            baseName: "DeepPink",
            type: "Color",
        },        
        {
            name: "deepSkyBlue",
            baseName: "DeepSkyBlue",
            type: "Color",
        },        
        {
            name: "dimGray",
            baseName: "DimGray",
            type: "Color",
        },        
        {
            name: "dodgerBlue",
            baseName: "DodgerBlue",
            type: "Color",
        },        
        {
            name: "firebrick",
            baseName: "Firebrick",
            type: "Color",
        },        
        {
            name: "floralWhite",
            baseName: "FloralWhite",
            type: "Color",
        },        
        {
            name: "forestGreen",
            baseName: "ForestGreen",
            type: "Color",
        },        
        {
            name: "fuchsia",
            baseName: "Fuchsia",
            type: "Color",
        },        
        {
            name: "gainsboro",
            baseName: "Gainsboro",
            type: "Color",
        },        
        {
            name: "ghostWhite",
            baseName: "GhostWhite",
            type: "Color",
        },        
        {
            name: "gold",
            baseName: "Gold",
            type: "Color",
        },        
        {
            name: "goldenrod",
            baseName: "Goldenrod",
            type: "Color",
        },        
        {
            name: "gray",
            baseName: "Gray",
            type: "Color",
        },        
        {
            name: "green",
            baseName: "Green",
            type: "Color",
        },        
        {
            name: "greenYellow",
            baseName: "GreenYellow",
            type: "Color",
        },        
        {
            name: "honeydew",
            baseName: "Honeydew",
            type: "Color",
        },        
        {
            name: "hotPink",
            baseName: "HotPink",
            type: "Color",
        },        
        {
            name: "indianRed",
            baseName: "IndianRed",
            type: "Color",
        },        
        {
            name: "indigo",
            baseName: "Indigo",
            type: "Color",
        },        
        {
            name: "ivory",
            baseName: "Ivory",
            type: "Color",
        },        
        {
            name: "khaki",
            baseName: "Khaki",
            type: "Color",
        },        
        {
            name: "lavender",
            baseName: "Lavender",
            type: "Color",
        },        
        {
            name: "lavenderBlush",
            baseName: "LavenderBlush",
            type: "Color",
        },        
        {
            name: "lawnGreen",
            baseName: "LawnGreen",
            type: "Color",
        },        
        {
            name: "lemonChiffon",
            baseName: "LemonChiffon",
            type: "Color",
        },        
        {
            name: "lightBlue",
            baseName: "LightBlue",
            type: "Color",
        },        
        {
            name: "lightCoral",
            baseName: "LightCoral",
            type: "Color",
        },        
        {
            name: "lightCyan",
            baseName: "LightCyan",
            type: "Color",
        },        
        {
            name: "lightGoldenrodYellow",
            baseName: "LightGoldenrodYellow",
            type: "Color",
        },        
        {
            name: "lightGreen",
            baseName: "LightGreen",
            type: "Color",
        },        
        {
            name: "lightGray",
            baseName: "LightGray",
            type: "Color",
        },        
        {
            name: "lightPink",
            baseName: "LightPink",
            type: "Color",
        },        
        {
            name: "lightSalmon",
            baseName: "LightSalmon",
            type: "Color",
        },        
        {
            name: "lightSeaGreen",
            baseName: "LightSeaGreen",
            type: "Color",
        },        
        {
            name: "lightSkyBlue",
            baseName: "LightSkyBlue",
            type: "Color",
        },        
        {
            name: "lightSlateGray",
            baseName: "LightSlateGray",
            type: "Color",
        },        
        {
            name: "lightSteelBlue",
            baseName: "LightSteelBlue",
            type: "Color",
        },        
        {
            name: "lightYellow",
            baseName: "LightYellow",
            type: "Color",
        },        
        {
            name: "lime",
            baseName: "Lime",
            type: "Color",
        },        
        {
            name: "limeGreen",
            baseName: "LimeGreen",
            type: "Color",
        },        
        {
            name: "linen",
            baseName: "Linen",
            type: "Color",
        },        
        {
            name: "magenta",
            baseName: "Magenta",
            type: "Color",
        },        
        {
            name: "maroon",
            baseName: "Maroon",
            type: "Color",
        },        
        {
            name: "mediumAquamarine",
            baseName: "MediumAquamarine",
            type: "Color",
        },        
        {
            name: "mediumBlue",
            baseName: "MediumBlue",
            type: "Color",
        },        
        {
            name: "mediumOrchid",
            baseName: "MediumOrchid",
            type: "Color",
        },        
        {
            name: "mediumPurple",
            baseName: "MediumPurple",
            type: "Color",
        },        
        {
            name: "mediumSeaGreen",
            baseName: "MediumSeaGreen",
            type: "Color",
        },        
        {
            name: "mediumSlateBlue",
            baseName: "MediumSlateBlue",
            type: "Color",
        },        
        {
            name: "mediumSpringGreen",
            baseName: "MediumSpringGreen",
            type: "Color",
        },        
        {
            name: "mediumTurquoise",
            baseName: "MediumTurquoise",
            type: "Color",
        },        
        {
            name: "mediumVioletRed",
            baseName: "MediumVioletRed",
            type: "Color",
        },        
        {
            name: "midnightBlue",
            baseName: "MidnightBlue",
            type: "Color",
        },        
        {
            name: "mintCream",
            baseName: "MintCream",
            type: "Color",
        },        
        {
            name: "mistyRose",
            baseName: "MistyRose",
            type: "Color",
        },        
        {
            name: "moccasin",
            baseName: "Moccasin",
            type: "Color",
        },        
        {
            name: "navajoWhite",
            baseName: "NavajoWhite",
            type: "Color",
        },        
        {
            name: "navy",
            baseName: "Navy",
            type: "Color",
        },        
        {
            name: "oldLace",
            baseName: "OldLace",
            type: "Color",
        },        
        {
            name: "olive",
            baseName: "Olive",
            type: "Color",
        },        
        {
            name: "oliveDrab",
            baseName: "OliveDrab",
            type: "Color",
        },        
        {
            name: "orange",
            baseName: "Orange",
            type: "Color",
        },        
        {
            name: "orangeRed",
            baseName: "OrangeRed",
            type: "Color",
        },        
        {
            name: "orchid",
            baseName: "Orchid",
            type: "Color",
        },        
        {
            name: "paleGoldenrod",
            baseName: "PaleGoldenrod",
            type: "Color",
        },        
        {
            name: "paleGreen",
            baseName: "PaleGreen",
            type: "Color",
        },        
        {
            name: "paleTurquoise",
            baseName: "PaleTurquoise",
            type: "Color",
        },        
        {
            name: "paleVioletRed",
            baseName: "PaleVioletRed",
            type: "Color",
        },        
        {
            name: "papayaWhip",
            baseName: "PapayaWhip",
            type: "Color",
        },        
        {
            name: "peachPuff",
            baseName: "PeachPuff",
            type: "Color",
        },        
        {
            name: "peru",
            baseName: "Peru",
            type: "Color",
        },        
        {
            name: "pink",
            baseName: "Pink",
            type: "Color",
        },        
        {
            name: "plum",
            baseName: "Plum",
            type: "Color",
        },        
        {
            name: "powderBlue",
            baseName: "PowderBlue",
            type: "Color",
        },        
        {
            name: "purple",
            baseName: "Purple",
            type: "Color",
        },        
        {
            name: "red",
            baseName: "Red",
            type: "Color",
        },        
        {
            name: "rosyBrown",
            baseName: "RosyBrown",
            type: "Color",
        },        
        {
            name: "royalBlue",
            baseName: "RoyalBlue",
            type: "Color",
        },        
        {
            name: "saddleBrown",
            baseName: "SaddleBrown",
            type: "Color",
        },        
        {
            name: "salmon",
            baseName: "Salmon",
            type: "Color",
        },        
        {
            name: "sandyBrown",
            baseName: "SandyBrown",
            type: "Color",
        },        
        {
            name: "seaGreen",
            baseName: "SeaGreen",
            type: "Color",
        },        
        {
            name: "seaShell",
            baseName: "SeaShell",
            type: "Color",
        },        
        {
            name: "sienna",
            baseName: "Sienna",
            type: "Color",
        },        
        {
            name: "silver",
            baseName: "Silver",
            type: "Color",
        },        
        {
            name: "skyBlue",
            baseName: "SkyBlue",
            type: "Color",
        },        
        {
            name: "slateBlue",
            baseName: "SlateBlue",
            type: "Color",
        },        
        {
            name: "slateGray",
            baseName: "SlateGray",
            type: "Color",
        },        
        {
            name: "snow",
            baseName: "Snow",
            type: "Color",
        },        
        {
            name: "springGreen",
            baseName: "SpringGreen",
            type: "Color",
        },        
        {
            name: "steelBlue",
            baseName: "SteelBlue",
            type: "Color",
        },        
        {
            name: "tan",
            baseName: "Tan",
            type: "Color",
        },        
        {
            name: "teal",
            baseName: "Teal",
            type: "Color",
        },        
        {
            name: "thistle",
            baseName: "Thistle",
            type: "Color",
        },        
        {
            name: "tomato",
            baseName: "Tomato",
            type: "Color",
        },        
        {
            name: "turquoise",
            baseName: "Turquoise",
            type: "Color",
        },        
        {
            name: "violet",
            baseName: "Violet",
            type: "Color",
        },        
        {
            name: "wheat",
            baseName: "Wheat",
            type: "Color",
        },        
        {
            name: "white",
            baseName: "White",
            type: "Color",
        },        
        {
            name: "whiteSmoke",
            baseName: "WhiteSmoke",
            type: "Color",
        },        
        {
            name: "yellow",
            baseName: "Yellow",
            type: "Color",
        },        
        {
            name: "yellowGreen",
            baseName: "YellowGreen",
            type: "Color",
        },        
        {
            name: "R",
            baseName: "R",
            type: "number",
        },        
        {
            name: "G",
            baseName: "G",
            type: "number",
        },        
        {
            name: "B",
            baseName: "B",
            type: "number",
        },        
        {
            name: "A",
            baseName: "A",
            type: "number",
        },        
        {
            name: "isKnownColor",
            baseName: "IsKnownColor",
            type: "boolean",
        },        
        {
            name: "isEmpty",
            baseName: "IsEmpty",
            type: "boolean",
        },        
        {
            name: "isNamedColor",
            baseName: "IsNamedColor",
            type: "boolean",
        },        
        {
            name: "isSystemColor",
            baseName: "IsSystemColor",
            type: "boolean",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "empty",
            baseName: "Empty",
            type: "Color",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Color.attributeTypeMap);
    }

    public transparent: Color;
    
    public aliceBlue: Color;
    
    public antiqueWhite: Color;
    
    public aqua: Color;
    
    public aquamarine: Color;
    
    public azure: Color;
    
    public beige: Color;
    
    public bisque: Color;
    
    public black: Color;
    
    public blanchedAlmond: Color;
    
    public blue: Color;
    
    public blueViolet: Color;
    
    public brown: Color;
    
    public burlyWood: Color;
    
    public cadetBlue: Color;
    
    public chartreuse: Color;
    
    public chocolate: Color;
    
    public coral: Color;
    
    public cornflowerBlue: Color;
    
    public cornsilk: Color;
    
    public crimson: Color;
    
    public cyan: Color;
    
    public darkBlue: Color;
    
    public darkCyan: Color;
    
    public darkGoldenrod: Color;
    
    public darkGray: Color;
    
    public darkGreen: Color;
    
    public darkKhaki: Color;
    
    public darkMagenta: Color;
    
    public darkOliveGreen: Color;
    
    public darkOrange: Color;
    
    public darkOrchid: Color;
    
    public darkRed: Color;
    
    public darkSalmon: Color;
    
    public darkSeaGreen: Color;
    
    public darkSlateBlue: Color;
    
    public darkSlateGray: Color;
    
    public darkTurquoise: Color;
    
    public darkViolet: Color;
    
    public deepPink: Color;
    
    public deepSkyBlue: Color;
    
    public dimGray: Color;
    
    public dodgerBlue: Color;
    
    public firebrick: Color;
    
    public floralWhite: Color;
    
    public forestGreen: Color;
    
    public fuchsia: Color;
    
    public gainsboro: Color;
    
    public ghostWhite: Color;
    
    public gold: Color;
    
    public goldenrod: Color;
    
    public gray: Color;
    
    public green: Color;
    
    public greenYellow: Color;
    
    public honeydew: Color;
    
    public hotPink: Color;
    
    public indianRed: Color;
    
    public indigo: Color;
    
    public ivory: Color;
    
    public khaki: Color;
    
    public lavender: Color;
    
    public lavenderBlush: Color;
    
    public lawnGreen: Color;
    
    public lemonChiffon: Color;
    
    public lightBlue: Color;
    
    public lightCoral: Color;
    
    public lightCyan: Color;
    
    public lightGoldenrodYellow: Color;
    
    public lightGreen: Color;
    
    public lightGray: Color;
    
    public lightPink: Color;
    
    public lightSalmon: Color;
    
    public lightSeaGreen: Color;
    
    public lightSkyBlue: Color;
    
    public lightSlateGray: Color;
    
    public lightSteelBlue: Color;
    
    public lightYellow: Color;
    
    public lime: Color;
    
    public limeGreen: Color;
    
    public linen: Color;
    
    public magenta: Color;
    
    public maroon: Color;
    
    public mediumAquamarine: Color;
    
    public mediumBlue: Color;
    
    public mediumOrchid: Color;
    
    public mediumPurple: Color;
    
    public mediumSeaGreen: Color;
    
    public mediumSlateBlue: Color;
    
    public mediumSpringGreen: Color;
    
    public mediumTurquoise: Color;
    
    public mediumVioletRed: Color;
    
    public midnightBlue: Color;
    
    public mintCream: Color;
    
    public mistyRose: Color;
    
    public moccasin: Color;
    
    public navajoWhite: Color;
    
    public navy: Color;
    
    public oldLace: Color;
    
    public olive: Color;
    
    public oliveDrab: Color;
    
    public orange: Color;
    
    public orangeRed: Color;
    
    public orchid: Color;
    
    public paleGoldenrod: Color;
    
    public paleGreen: Color;
    
    public paleTurquoise: Color;
    
    public paleVioletRed: Color;
    
    public papayaWhip: Color;
    
    public peachPuff: Color;
    
    public peru: Color;
    
    public pink: Color;
    
    public plum: Color;
    
    public powderBlue: Color;
    
    public purple: Color;
    
    public red: Color;
    
    public rosyBrown: Color;
    
    public royalBlue: Color;
    
    public saddleBrown: Color;
    
    public salmon: Color;
    
    public sandyBrown: Color;
    
    public seaGreen: Color;
    
    public seaShell: Color;
    
    public sienna: Color;
    
    public silver: Color;
    
    public skyBlue: Color;
    
    public slateBlue: Color;
    
    public slateGray: Color;
    
    public snow: Color;
    
    public springGreen: Color;
    
    public steelBlue: Color;
    
    public tan: Color;
    
    public teal: Color;
    
    public thistle: Color;
    
    public tomato: Color;
    
    public turquoise: Color;
    
    public violet: Color;
    
    public wheat: Color;
    
    public white: Color;
    
    public whiteSmoke: Color;
    
    public yellow: Color;
    
    public yellowGreen: Color;
    
    public R: number;
    
    public G: number;
    
    public B: number;
    
    public A: number;
    
    public isKnownColor: boolean;
    
    public isEmpty: boolean;
    
    public isNamedColor: boolean;
    
    public isSystemColor: boolean;
    
    public name: string;
    
    public empty: Color;
    
    public constructor(init?: Partial<Color>) {
        super(init);
        (<any>Object).assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            ComparisonChange,
            ComparisonChangesCategoryDto,
            ComparisonFileInfo,
            ComparisonMetadataValues,
            ComparisonRequest,
            ComparisonRequestSettings,
            ComparisonStyleChange,
            Link,
            StyleSettingsValues,
            ValueType,
            Color,
};

export {enumsMap, typeMap};

/**
 * Request model for PostCategoriesChanges operation.
 */
export class PostCategoriesChangesRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;

    /**
     * Type of the categories.
     */
    public categoriesType: string;
    
    public constructor(request?: ComparisonRequest, categoriesType?: string) {        
        this.request = request;
        this.categoriesType = categoriesType;
    }
}

/**
 * Request model for PostChanges operation.
 */
export class PostChangesRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;
    
    public constructor(request?: ComparisonRequest) {        
        this.request = request;
    }
}

/**
 * Request model for PutChangesDocument operation.
 */
export class PutChangesDocumentRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;

    /**
     * outPath: path to output document on file storage
     */
    public outPath: string;
    
    public constructor(request?: ComparisonRequest, outPath?: string) {        
        this.request = request;
        this.outPath = outPath;
    }
}

/**
 * Request model for PutChangesDocumentStream operation.
 */
export class PutChangesDocumentStreamRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;
    
    public constructor(request?: ComparisonRequest) {        
        this.request = request;
    }
}

/**
 * Request model for PutChangesImages operation.
 */
export class PutChangesImagesRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;

    /**
     * outFolder: path to output folder on file storage
     */
    public outFolder: string;
    
    public constructor(request?: ComparisonRequest, outFolder?: string) {        
        this.request = request;
        this.outFolder = outFolder;
    }
}

/**
 * Request model for PutChangesImagesStream operation.
 */
export class PutChangesImagesStreamRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;
    
    public constructor(request?: ComparisonRequest) {        
        this.request = request;
    }
}

/**
 * Request model for ComparisonImages operation.
 */
export class ComparisonImagesRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;

    /**
     * outFolder: path to output folder on file storage
     */
    public outFolder: string;
    
    public constructor(request?: ComparisonRequest, outFolder?: string) {        
        this.request = request;
        this.outFolder = outFolder;
    }
}

/**
 * Request model for ComparisonImagesStream operation.
 */
export class ComparisonImagesStreamRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;
    
    public constructor(request?: ComparisonRequest) {        
        this.request = request;
    }
}

/**
 * Request model for ComparisonStream operation.
 */
export class ComparisonStreamRequest {
    /**
     * The request.
     */
    public request: ComparisonRequest;
    
    public constructor(request?: ComparisonRequest) {        
        this.request = request;
    }
}
