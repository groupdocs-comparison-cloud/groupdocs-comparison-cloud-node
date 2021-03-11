/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2021 Aspose Pty Ltd
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
import { ApplyRevisionsOptions, ApplyRevisionsRequest, GetRevisionsRequest, RevisionInfo } from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("review_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_review_api", () => {

        it("test_get_revisions", async () => {                          
            var response = await TestContext.getReviewApi().getRevisions(new GetRevisionsRequest(TestFile.SourceWithRevs.ToFileInfo()));
            expect(response.length).equal(2);
        });

        it("test_apply_revisions", async () => {              
            var options = new ApplyRevisionsOptions();
            options.sourceFile = TestFile.SourceWithRevs.ToFileInfo();
            options.outputPath = "/resultFilePath/result.docx";
            let rev1 = new RevisionInfo();
            rev1.id = 0;
            rev1.action = RevisionInfo.ActionEnum.Accept;
            let rev2 = new RevisionInfo();
            rev2.id = 1;
            rev2.action = RevisionInfo.ActionEnum.Reject;
            options.revisions = [rev1, rev2];

            var response = await TestContext.getReviewApi().applyRevisions(new ApplyRevisionsRequest(options));
            expect(response.rel).equal(options.outputPath);
        });
      
        it("test_accept_all_revisions", async () => {              
            var options = new ApplyRevisionsOptions();
            options.sourceFile = TestFile.SourceWithRevs.ToFileInfo();
            options.outputPath = "/resultFilePath/result.docx";
            options.acceptAll = true;

            var response = await TestContext.getReviewApi().applyRevisions(new ApplyRevisionsRequest(options));
            expect(response.rel).equal(options.outputPath);
        });

        it("test_reject_all_revisions", async () => {              
            var options = new ApplyRevisionsOptions();
            options.sourceFile = TestFile.SourceWithRevs.ToFileInfo();
            options.outputPath = "/resultFilePath/result.docx";
            options.rejectAll = true;

            var response = await TestContext.getReviewApi().applyRevisions(new ApplyRevisionsRequest(options));
            expect(response.rel).equal(options.outputPath);
        });     
    });    
});
