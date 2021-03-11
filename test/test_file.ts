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
import { FileInfo } from "../src/model";
/**
 * Describes test file
 */
export class TestFile {

    /** TestFile */
    public static SourceCell: TestFile = new TestFile("source.xlsx", "source_files\\cell\\");
    public static SourceDiagram: TestFile = new TestFile("source.vsdx", "source_files\\diagram\\");
    public static SourceEmail: TestFile = new TestFile("source.eml", "source_files\\email\\");
    public static SourceHtml: TestFile = new TestFile("source.html", "source_files\\html\\");
    public static SourceImage: TestFile = new TestFile("source.png", "source_files\\image\\");
    public static SourceNote: TestFile = new TestFile("source.one", "source_files\\note\\");
    public static SourcePdf: TestFile = new TestFile("source.pdf", "source_files\\pdf\\");
    public static SourceSlide: TestFile = new TestFile("source.pptx", "source_files\\slide\\");
    public static SourceText: TestFile = new TestFile("source.txt", "source_files\\text\\");
    public static SourceWord: TestFile = new TestFile("source.docx", "source_files\\word\\");
    public static SourceWithRevs: TestFile = new TestFile("source_with_revs.docx", "source_files\\word\\");

    public static SourceCellProtected: TestFile = new TestFile("source_protected.xlsx", "source_files\\cell\\", "1231");
    public static SourceNoteProtected: TestFile = new TestFile("source_protected.one", "source_files\\note\\", "123");
    public static SourcePdfProtected: TestFile = new TestFile("source_protected.pdf", "source_files\\pdf\\", "12345678");
    public static SourceSlideProtected: TestFile = new TestFile("source_protected.pptx", "source_files\\slide\\", "1231");
    public static SourceWordProtected: TestFile = new TestFile("source_protected.docx", "source_files\\word\\", "1231");

    public static TargetCell: TestFile = new TestFile("target.xlsx", "target_files\\cell\\");
    public static TargetDiagram: TestFile = new TestFile("target.vsdx", "target_files\\diagram\\");
    public static TargetEmail: TestFile = new TestFile("target.eml", "target_files\\email\\");
    public static TargetHtml: TestFile = new TestFile("target.html", "target_files\\html\\");
    public static TargetImage: TestFile = new TestFile("target.png", "target_files\\image\\");
    public static TargetNote: TestFile = new TestFile("target.one", "target_files\\note\\");
    public static TargetPdf: TestFile = new TestFile("target.pdf", "target_files\\pdf\\");
    public static TargetSlide: TestFile = new TestFile("target.pptx", "target_files\\slide\\");
    public static TargetText: TestFile = new TestFile("target.txt", "target_files\\text\\");
    public static TargetWord: TestFile = new TestFile("target.docx", "target_files\\word\\");

    public static TargetCellProtected: TestFile = new TestFile("target_protected.xlsx", "target_files\\cell\\", "1471");
    public static TargetNoteProtected: TestFile = new TestFile("target_protected.one", "target_files\\note\\", "123");
    public static TargetPdfProtected: TestFile = new TestFile("target_protected.pdf", "target_files\\pdf\\", "0987654");
    public static TargetSlideProtected: TestFile = new TestFile("target_protected.pptx", "target_files\\slide\\", "1471");
    public static TargetWordProtected: TestFile = new TestFile("target_protected.docx", "target_files\\word\\", "5784");

    public static TargetSlide1: TestFile = new TestFile("target_1.pptx", "target_files\\slide\\");
    public static TargetSlide2: TestFile = new TestFile("target_2.pptx", "target_files\\slide\\");
    public static TargetSlide1Protected: TestFile = new TestFile("target_1_protected.pptx", "target_files\\slide\\", "1471");
    public static TargetSlide2Protected: TestFile = new TestFile("target_2_protected.pptx", "target_files\\slide\\", "1471");
    public static TargetWord1: TestFile = new TestFile("target_1.docx", "target_files\\word\\");
    public static TargetWord2: TestFile = new TestFile("target_2.docx", "target_files\\word\\");
    public static TargetWord1Protected: TestFile = new TestFile("target_1_protected.docx", "target_files\\word\\", "5784");
    public static TargetWord2Protected: TestFile = new TestFile("target_2_protected.docx", "target_files\\word\\", "5784");

    /**
     * File name
     */
    public fileName: string;
    
    /**
     * Folder where file is located
     */
    public folder: string;

    /**
     * File password
     */
    public password: string;

    /**
     * Returns test file path
     */
    public GetPath() {
        return this.folder + this.fileName;
    }

    /**
     *  Returns FileInfo
     */
    public ToFileInfo()
    {
        let fileInfo = new FileInfo();
        fileInfo.filePath = this.GetPath();
        fileInfo.password = this.password;
        return fileInfo;
    }

    /**
     * Attachment password
     */
    public attachmentPassword: string;

    private constructor(fileName: string, folder: string, password?: string) {
        this.fileName = fileName;
        this.folder = folder;
        this.password = password;
    }

    public static GetTestFiles() {
        return [
            TestFile.SourceCell,
            TestFile.SourceDiagram,
            TestFile.SourceEmail,
            TestFile.SourceHtml,
            TestFile.SourceImage,
            TestFile.SourceNote,
            TestFile.SourcePdf,
            TestFile.SourceSlide,
            TestFile.SourceText,
            TestFile.SourceWord,
            TestFile.SourceWithRevs,
            TestFile.SourceCellProtected,
            TestFile.SourceNoteProtected,
            TestFile.SourcePdfProtected,
            TestFile.SourceSlideProtected,
            TestFile.SourceWordProtected,
            TestFile.TargetCell,
            TestFile.TargetDiagram,
            TestFile.TargetEmail,
            TestFile.TargetHtml,
            TestFile.TargetImage,
            TestFile.TargetNote,
            TestFile.TargetPdf,
            TestFile.TargetSlide,
            TestFile.TargetText,
            TestFile.TargetWord,
            TestFile.TargetCellProtected,
            TestFile.TargetNoteProtected,
            TestFile.TargetPdfProtected,
            TestFile.TargetSlideProtected,
            TestFile.TargetWordProtected,
            TestFile.TargetSlide1,
            TestFile.TargetSlide2,
            TestFile.TargetSlide1Protected,
            TestFile.TargetSlide2Protected,
            TestFile.TargetWord1,
            TestFile.TargetWord2,
            TestFile.TargetWord1Protected,
            TestFile.TargetWord2Protected            
        ];
    }
}
