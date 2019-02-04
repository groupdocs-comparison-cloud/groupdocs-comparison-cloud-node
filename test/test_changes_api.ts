import {TestSetter} from "./TestSetter";
import {
    Color,
    ComparisonRequestSettings,
    StyleSettingsValues,
    ComparisonMetadataValues,
    ComparisonFileInfo,
    ComparisonChange,
    ComparisonImagesRequest,
    Link,
    ComparisonStreamRequest,
    PostCategoriesChangesRequest,
    PostChangesRequest,
    PutChangesDocumentRequest,
    PutChangesDocumentStreamRequest,
    PutChangesImagesRequest, PutChangesImagesStreamRequest,
} from "../src/models/model";
import {ComparisonRequest} from "../src/models/comparison_request";
var assert = require('assert');
var testSetter = new TestSetter();

describe('Changes API test', function() {
    describe('Comparison post categories changes Test', function() {
        it('Should return category changes', function() {
            var request = new PostCategoriesChangesRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);
            request.categoriesType="ByNodeType";


            testSetter.changesApi.postCategoriesChanges (request).then(function (response) {
                assert.notEqual(response,null);
                for(var i = 0 ; i < response.length;i++)
                {
                    assert.notEqual(response[i],null);
                }
            });
        });
    });

    describe('Comparison post changes Test', function() {
        it('Should return changes', function() {
            var request = new PostChangesRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);

            testSetter.changesApi.postChanges (request).then(function (response) {
                assert.notEqual(response,null);
                for(var i = 0 ; i < response.length;i++)
                {
                    assert.notEqual(response[i],null);
                }
            });
        });
    });

    describe('Comparison put changes document Test', function() {
        it('Should return changes', function() {
            var request = new PutChangesDocumentRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);
            request.outPath = outPath;

            testSetter.changesApi.putChangesDocument (request).then(function (response) {
                assert.notEqual(response,null);
            });
        });
    });

    describe('Comparison put changes document stream Test', function() {
        it('Should return file', function() {
            var request = new PutChangesDocumentStreamRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);

            testSetter.changesApi.putChangesDocumentStream (request).then(function (response) {
                assert.notEqual(response,null);
                for(var i = 0 ; i < response.length;i++)
                {
                    assert.notEqual(response[i],null);
                }
            });
        });
    });

    describe('Comparison put changes image Test', function() {
        it('Should return image stream', function() {
            var request = new PutChangesImagesRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);
            request.outFolder = outPath;

            testSetter.changesApi.putChangesImages (request).then(function (response) {
                assert.notEqual(response,null);
                for(var i = 0 ; i < response.length;i++)
                {
                    assert.notEqual(response[i],null);
                }
            });
        });
    });

    describe('Comparison put changes image stream Test', function() {
        it('Should return image file', function() {
            var request = new PutChangesImagesStreamRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);

            testSetter.changesApi.putChangesImagesStream (request).then(function (response) {
                assert.notEqual(response,null);
                for(var i = 0 ; i < response.length;i++)
                {
                    assert.notEqual(response[i],null);
                }
            });
        });
    });

});