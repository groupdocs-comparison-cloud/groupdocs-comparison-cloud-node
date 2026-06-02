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
 * Request model for PutChanges operation.
 * Sends source and target documents as multipart/form-data and retrieves a list of changes.
 */
export class PutChangesRequest {
    /**
     * Source document file.
     */
    public sourceFile: Buffer;

    /**
     * Optional source file name (used for multipart Content-Disposition header).
     */
    public sourceFileName?: string;

    /**
     * One or more target document files.
     */
    public targetFiles: Buffer | Buffer[];

    /**
     * Optional array of target file names (used for multipart Content-Disposition header).
     */
    public targetFilesNames?: string[];

    /**
     * Comparison settings serialized as JSON (optional).
     */
    public settings?: string;

    /**
     * Change type filter (optional).
     */
    public changeType?: string;

    public constructor(
        sourceFile: Buffer,
        targetFiles: Buffer | Buffer[],
        sourceFileName?: string,
        targetFilesNames?: string[],
        settings?: string,
        changeType?: string,
    ) {
        this.sourceFile = sourceFile;
        this.targetFiles = targetFiles;
        this.sourceFileName = sourceFileName;
        this.targetFilesNames = targetFilesNames;
        this.settings = settings;
        this.changeType = changeType;
    }
}
