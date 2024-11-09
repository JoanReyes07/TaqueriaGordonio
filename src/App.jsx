import PaginaInicio from "./components/PaginaInicio/PaginaInicio";
import PaginaMenu from "./components/PaginaMenu/PaginaMenu";
import PaginaProductosTortas from "./components/PaginProductos/PaginaProductosTortas";
import PaginaProductosTacos from "./components/PaginProductos/PaginaProductosTacos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/Menu-General" element={<PaginaMenu />} />
        <Route path="/Menu-Platillo-Tacos" element={<PaginaProductosTacos />} />
        <Route path="/Menu-Platillo-Tortas" element={<PaginaProductosTortas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
