/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2024 Aspose Pty Ltd
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

import { expect } from "chai";
import "mocha";
import { FileInfo, GetDocumentInfoRequest } from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("info_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_get_supported_file_formats", () => {
        it("should return list of supported formats", () => {            
            const infoApi = TestContext.getInfoApi();

            return infoApi.getSupportedFileFormats()
                .then((result) => {                   
                    for (const format of result.formats) {
                        expect(format.fileFormat).to.not.equal("");
                        expect(format.extension).to.not.equal("");
                    }
                });
        });
    });

    describe("test_get_info", () => {
        it("should return document info", async () => {            
            const infoApi = TestContext.getInfoApi();
            let fileInfo = TestFile.SourceWord.ToFileInfo();
            let response = await infoApi.getDocumentInfo(new GetDocumentInfoRequest(fileInfo));
            expect(response.pageCount).equal(1);
        });

        it("TestGetInfoReturnsFileNotFound", async () => {  
            let fileInfo = new FileInfo();
            fileInfo.filePath = "some-folder/NotExist.docx";            
            try {
                let response = await TestContext.getInfoApi().getDocumentInfo(new GetDocumentInfoRequest(fileInfo));
                expect(response.pageCount).equal(1);
            } catch (error) {
                expect(error.message).equal("Can\'t find file located at \'some-folder/NotExist.docx\'.");
            }
        });         
    });    
    
});
