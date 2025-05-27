import { useState, type ChangeEvent } from "react";
import { PDFDocument } from "pdf-lib";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";

export default function PdfTools() {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);

  const handleMerge = async () => {
    if (!file1 || !file2) {
      alert("Upload 2 PDFs");
      return;
    }

    const pdf1Bytes = await file1.arrayBuffer();
    const pdf2Bytes = await file2.arrayBuffer();

    const pdf1 = await PDFDocument.load(pdf1Bytes);
    const pdf2 = await PDFDocument.load(pdf2Bytes);
    const merged = await PDFDocument.create();

    const copiedPages1 = await merged.copyPages(pdf1, pdf1.getPageIndices());
    copiedPages1.forEach((page: any) => merged.addPage(page));

    const copiedPages2 = await merged.copyPages(pdf2, pdf2.getPageIndices());
    copiedPages2.forEach((page: any) => merged.addPage(page));

    const mergedPdfBytes = await merged.save();
    const arrayBuffer = new Uint8Array(mergedPdfBytes).buffer;

    const blob = new Blob([arrayBuffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    setMergedUrl(url);
  };

  const handleFile1Change = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFile1(file);
  };

  const handleFile2Change = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFile2(file);
  };

  return (
    <section id="pdf-tools" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h3 className="text-3xl font-bold mb-6">PDF Converter & Merger</h3>

        <div className="flex flex-col gap-6 w-full">
          {/* Upload First PDF */}
          <label className="flex flex-col items-center justify-center w-full h-36 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50">
            <DocumentArrowUpIcon className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-gray-700 font-medium">
              {file1?.name || "Upload First PDF"}
            </span>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFile1Change}
              className="hidden"
            />
          </label>

          {/* Upload Second PDF */}
          <label className="flex flex-col items-center justify-center w-full h-36 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-green-500 hover:bg-green-50">
            <DocumentArrowUpIcon className="w-8 h-8 text-green-500 mb-2" />
            <span className="text-gray-700 font-medium">
              {file2?.name || "Upload Second PDF"}
            </span>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFile2Change}
              className="hidden"
            />
          </label>
        </div>

        <button
          onClick={handleMerge}
          className="bg-blue-600 text-white px-6 py-2 rounded mt-6 hover:bg-blue-700 transition"
        >
          Merge PDFs
        </button>

        {mergedUrl && (
          <div className="mt-6">
            <a
              href={mergedUrl}
              download="merged.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline text-blue-700 cursor-pointer"
            >
              Download Merged PDF
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
