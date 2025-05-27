import Hero from "../components/Hero";
import Features from "../components/Features";
import AssistantSection from "../components/AssistantSection";
import Footer from "../components/Footer";
import ResumeBuilder from "../components/ResumeBuilder";
import PdfTools from "../components/PdfTools";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Hero />
      <Features />
      <AssistantSection />
      <ResumeBuilder />
      <PdfTools />
      <Footer />
    </div>
  );
};

export default Home;
