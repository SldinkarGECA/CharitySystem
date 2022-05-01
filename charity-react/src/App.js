import "./App.css";

import CharityProjects from "./components/CharityProjects";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <div className="container-fluid">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CharityProjects" element={<CharityProjects />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
