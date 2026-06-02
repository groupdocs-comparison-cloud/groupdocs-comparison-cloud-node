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

import { expect } from "chai";
import "mocha";
import { PutChangesRequest } from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("put_changes_api", () => {

    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
    });

    describe("test_put_changes_api", () => {

        it("test_put_changes_word", async () => {
            const sourceBuffer = TestContext.getTestFileBuffer(TestFile.SourceWord);
            const targetBuffer = TestContext.getTestFileBuffer(TestFile.TargetWord);
            const request = new PutChangesRequest(
                sourceBuffer,
                [targetBuffer],
                TestFile.SourceWord.fileName,
                [TestFile.TargetWord.fileName],
            );
            const response = await TestContext.getCompareApi().putChanges(request);
            expect(response).to.be.an("array");
            expect(response.length).to.be.greaterThan(0);
        });

        it("test_put_changes_pdf", async () => {
            const sourceBuffer = TestContext.getTestFileBuffer(TestFile.SourcePdf);
            const targetBuffer = TestContext.getTestFileBuffer(TestFile.TargetPdf);
            const request = new PutChangesRequest(
                sourceBuffer,
                [targetBuffer],
                TestFile.SourcePdf.fileName,
                [TestFile.TargetPdf.fileName],
            );
            const response = await TestContext.getCompareApi().putChanges(request);
            expect(response).to.be.an("array");
            expect(response.length).to.be.greaterThan(0);
        });

        it("test_put_changes_missing_source_throws", async () => {
            const request = new PutChangesRequest(null, []);
            try {
                await TestContext.getCompareApi().putChanges(request);
                expect.fail("Expected error was not thrown");
            } catch (e) {
                expect(e.message).to.include("requestObj.sourceFile");
            }
        });

        it("test_put_changes_missing_target_throws", async () => {
            const sourceBuffer = TestContext.getTestFileBuffer(TestFile.SourceWord);
            const request = new PutChangesRequest(sourceBuffer, null);
            try {
                await TestContext.getCompareApi().putChanges(request);
                expect.fail("Expected error was not thrown");
            } catch (e) {
                expect(e.message).to.include("requestObj.targetFiles");
            }
        });

    });

});
