import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Layout from "./pages/layout/Layout";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "./ScrollToTop";
import Restaurant from "./pages/work/Restaurant";
import Thenga from "./pages/work/Thenga";
import Inventory from "./pages/work/Inventory";
import Leads from "./pages/work/Leads";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/thenga" element={<Thenga />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
