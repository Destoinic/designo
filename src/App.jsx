import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Locations from "./Pages/Locations";
import GraphicDesign from "./Pages/GraphicDesign";
import WebDesign from "./Pages/WebDesign";
import AppDesign from "./Pages/AppDesign";
import Contact from "./Pages/Contact";
import NoMatch from "./Pages/NoMatch";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
