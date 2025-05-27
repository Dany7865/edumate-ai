import { useState } from "react";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import ResumePDF from "./ResumePdf";

const ResumeBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-center bg-gray-100 flex flex-col items-center justify-center gap-4">
      {/* Download Button */}
      <h1 className="text-3xl font-bold mb-6">Resume Builder</h1>
      <PDFDownloadLink document={<ResumePDF />} fileName="resume.pdf">
        {({ loading }) => (
          <button className="px-5 py-3 font-medium text-white bg-blue-500 rounded-md">
            {loading ? "Loading PDF..." : "Download Your Resume"}
          </button>
        )}
      </PDFDownloadLink>

      {/* Preview Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-5 py-3 font-medium text-white bg-green-500 rounded-md"
      >
        Preview Resume
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-[90%] max-w-4xl p-6 shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-4">PDF Preview</h2>

            {/* Render PDF Blob as iframe */}
            <div className="border h-[80vh] overflow-hidden rounded-md">
              <BlobProvider document={<ResumePDF />}>
                {({ url, loading }) =>
                  loading ? (
                    <p>Loading preview...</p>
                  ) : (
                    <iframe
                      src={url}
                      title="PDF Preview"
                      width="100%"
                      height="100%"
                      className="rounded"
                    />
                  )
                }
              </BlobProvider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
