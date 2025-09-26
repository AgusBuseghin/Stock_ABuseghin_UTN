import { BrowserRouter, Routes, Route } from "react-router"
import ProductList from "./Components/ProductList"
import ProductForm from "./Components/ProductForm"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/product" element={<ProductForm/>} />
        <Route path="*" element={<h1>404 no encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
