import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "./layout/Footer";
import { Home } from "@/pages/Home";
import { DigiDiary } from "@/pages/caseStudies/DigiDiary";
import { DevProductivityTool } from "@/pages/caseStudies/DevProductivityTool";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/digi-diary" element={<DigiDiary />} />
            <Route path="/case-study/dev-productivity-tool" element={<DevProductivityTool />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
