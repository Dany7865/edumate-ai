import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import VoiceAssistant from "./pages/VoiceAssistant";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/voice-assistant" element={<VoiceAssistant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
