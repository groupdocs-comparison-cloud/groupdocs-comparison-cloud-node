import {Configuration} from "../src/internal/configuration";
import {GroupDocsComparisonApiVersions} from "../src/internal/groupDocsComparisonApiVersions";
import {
    Color,
    ComparisonRequest,
    ComparisonRequestSettings,
    StyleSettingsValues,
    ComparisonMetadataValues,
    ComparisonFileInfo,
    ComparisonChange, ComparisonChangesCategoryDto
} from "../src/models/model";
import {ComparisonApi} from "../src/api/comparison_api";
const asposestoragecloud = require('asposestoragecloud');
import {ChangesApi} from "../src/api/changes_api";
export class TestSetter
{
    settings = require("./Config.json");
    public configuration: Configuration = new Configuration(this.settings.AppSID,this.settings.AppKey,this.settings.ApiBaseUrl,false,GroupDocsComparisonApiVersions.v1);
    public comparisonApi:ComparisonApi = new ComparisonApi(this.configuration);
    public changesApi:ChangesApi = new ChangesApi(this.configuration);
    public storageApi = asposestoragecloud;
    public GetComparisonRequest(sourceName: string, targetName:string):ComparisonRequest {
        var comparisonRequest = new ComparisonRequest();
        var comparisonRequestSettings = new ComparisonRequestSettings();
        comparisonRequestSettings.generateSummaryPage = true;
        comparisonRequestSettings.showDeletedContent = true;
        comparisonRequestSettings.styleChangeDetection = true;
        comparisonRequestSettings.useFramesForDelInsElements = false;
        comparisonRequestSettings.detailLevel = "Low";
        //Set style values
        //delete items style
        var deletedItemsStyle = new StyleSettingsValues();
        deletedItemsStyle.color = (new Color().red);
        deletedItemsStyle.beginSeparatorString = "";
        deletedItemsStyle.endSeparatorString = "";
        comparisonRequestSettings.deletedItemsStyle = deletedItemsStyle;

        //inserted items style
        var insertedItemsStyle = new StyleSettingsValues();
        insertedItemsStyle.color = (new Color().blue);
        insertedItemsStyle.beginSeparatorString = ("");
        insertedItemsStyle.endSeparatorString = ("");
        comparisonRequestSettings.insertedItemsStyle = (insertedItemsStyle);

        //style change style
        var styleChangedStyle = new StyleSettingsValues();
        styleChangedStyle.color = (new Color().green);
        styleChangedStyle.beginSeparatorString = "";
        styleChangedStyle.endSeparatorString = "";
        comparisonRequestSettings.styleChangedItemsStyle = styleChangedStyle;

        comparisonRequestSettings.calculateComponentCoordinates = false;
        comparisonRequestSettings.cloneMetadata = "Source";
        comparisonRequestSettings.markDeletedInsertedContentDeep = false;

        var comparisonMetadataValues = new ComparisonMetadataValues();
        comparisonMetadataValues.author = "GroupDocs";
        comparisonMetadataValues.company = "GroupDocs";
        comparisonMetadataValues.lastSaveBy = "GroupDocs";

        comparisonRequestSettings.metaData = comparisonMetadataValues;

        comparisonRequestSettings.password = "1111";
        comparisonRequestSettings.passwordSaveOption = "User";

        var sourceFileInfo = new ComparisonFileInfo();

        sourceFileInfo.folder = ("");
        sourceFileInfo.name = (sourceName);
        sourceFileInfo.password = "";

        comparisonRequest.sourceFile = sourceFileInfo;

        var targetFile = new ComparisonFileInfo();

        targetFile.folder = "";
        targetFile.name = targetName;
        targetFile.password = "";

        comparisonRequest.targetFiles = new Array<ComparisonFileInfo>();
        comparisonRequest.targetFiles.push(targetFile);
        //Set Comparison settings
        comparisonRequest.settings = (comparisonRequestSettings);

        var changes = new Array<ComparisonChange>();

        var acceptChange = new ComparisonChange();
        acceptChange.id = 0;
        acceptChange.action = "Accept";

        changes.push(acceptChange);

        var rejectChange = new ComparisonChange();
        rejectChange.id = 1;
        rejectChange.action = "Reject";

        changes.push(rejectChange);

        comparisonRequest.changes = changes;
        return comparisonRequest;
    }
}