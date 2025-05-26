import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePdf";

const ResumeBuilder = () => {
  return (
<div className="text-center bg-gray-100">
      <PDFDownloadLink
      document={<ResumePDF />}
      fileName="resume.pdf"
    >
      <button className="px-5 py-3 font-medium text-white bg-blue-500 rounded-md ">Download Your Resume</button>
    </PDFDownloadLink>
</div>
  );
};

export default ResumeBuilder;
