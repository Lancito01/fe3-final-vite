import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Components/layout/Layout";
import { useContextGlobal } from './Components/utils/global.context';

function App() {
  const { darkTheme } = useContextGlobal();

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
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
    </div>

  );
}

export default App;
