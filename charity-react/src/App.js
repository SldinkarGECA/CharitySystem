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
                    <Route exact path="" element={<Home/>}/>
                    <Route exact path="/CharityProjects" element={<CharityProjects/>}/>
                    <Route exact path="/donors" element={<Donors/>}/>
                    <Route exact path="/products" element={<Products/>}/>
                    <Route exact path="/stores" element={<Stores/>}/>
                    <Route path="*" element={<Home/>}/>
                </Routes>
            </Navbar>
            <Footer/>
        </div>
    );
}

export default App;
