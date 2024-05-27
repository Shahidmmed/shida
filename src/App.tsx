import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Layout from "./pages/layout/Layout";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import CaseStudy from "./pages/work/CaseStudy";
import Report from "./pages/work/Report";
import ScrollToTop from "./ScrollToTop";
import Restaurant from "./pages/work/Restaurant";
import Thenga from "./pages/work/Thenga";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:caseStudy" element={<CaseStudy />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/thenga" element={<Thenga />} />
            <Route path="/work/report/:report" element={<Report />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
