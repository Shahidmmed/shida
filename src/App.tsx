import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Layout from "./pages/layout/Layout";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
