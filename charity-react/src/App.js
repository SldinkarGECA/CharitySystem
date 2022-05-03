import {Route, Routes} from "react-router-dom";

import CharityProjects from "./components/CharityProjects";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Stores from "./components/Stores";
import Donors from "./components/Donors";

function App() {
    return (
        <div className="container-fluid">
            <Navbar>
                <Routes>
                    <Route path="" element={<Home/>}/>
                    <Route path="/CharityProjects" element={<CharityProjects/>}/>
                    <Route path="/donors" element={<Donors/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/stores" element={<Stores/>}/>
                </Routes>
            </Navbar>
            <Footer/>
        </div>
    );
}

export default App;
