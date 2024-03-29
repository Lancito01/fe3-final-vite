import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Components/layout/Layout";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<h2>404 not found</h2>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
