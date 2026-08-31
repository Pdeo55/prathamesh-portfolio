import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "./layout/Footer";
import { Home } from "@/pages/Home";
import { DigiDiary } from "@/pages/caseStudies/DigiDiary";
import { DevProductivityTool } from "@/pages/caseStudies/DevProductivityTool";
import { BookIt } from "@/pages/caseStudies/BookIt";

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
            <Route path="/case-study/book-it" element={<BookIt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
