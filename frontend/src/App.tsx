import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AssistantSection from './components/AssistantSection';
import Footer from './components/Footer';
import ResumeBuilder from './components/ResumeBuilder';
import PdfTools from './components/PdfTools';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <Features />
      <AssistantSection />
      <ResumeBuilder/>
      <PdfTools/>
      <Footer /> 
    </div>
  );
}

export default App;