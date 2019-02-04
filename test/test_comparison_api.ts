import {TestSetter} from "./TestSetter";
import {
    Color,
    ComparisonRequestSettings,
    StyleSettingsValues,
    ComparisonMetadataValues,
    ComparisonFileInfo,
    ComparisonChange,
    ComparisonImagesRequest,
    Link, ComparisonStreamRequest,
} from "../src/models/model";
import {ComparisonRequest} from "../src/models/comparison_request";

var assert = require('assert');
var testSetter = new TestSetter();
describe('Comparison API test', function() {
    describe('Comparison Request test', function() {
        it('should return link', function() {
            var request = new ComparisonRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);
            request.outPath = outPath;

            testSetter.comparisonApi.comparison(request).then(function (response) {
                assert.notEqual(response,null);

            });
        });
    });

    describe('Comparison Image test', function() {
        it('should return links to images', function() {
            var request = new ComparisonImagesRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);
            request.outFolder = outPath;

            testSetter.comparisonApi.comparisonImages(request).then(function (response) {
                assert.notEqual(response,null);

            });
        });
    });

    describe.skip('Comparison Image stream test', function() {
        it('should return streams',  async function() {
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            var request = new ComparisonImagesRequest(await testSetter.GetComparisonRequest(sourceName, targetName),outPath);

            const res = await testSetter.comparisonApi.comparisonImagesStream(request);
            assert.notEqual(res,null);
            for(var i = 0 ; i < res.length;i++)
            {
                assert.notEqual(res[i],null);
            }

        });
    });

    describe('Comparison Stream test', function() {
        it('should return stream',  async function() {
            var request = new ComparisonStreamRequest();
            var outPath = 'result.docx',
                sourceName = "source.docx",
                targetName = "target.docx";

            request.request = testSetter.GetComparisonRequest(sourceName, targetName);

            const res = await testSetter.comparisonApi.comparisonStream(request);
        });
    });
});
