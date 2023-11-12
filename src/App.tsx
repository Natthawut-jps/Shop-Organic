import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductsDetailsDescription from "./pages/ProductsDetailsDescription"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product/vagetables" element={<ProductsDetailsDescription />} />
        </Routes>
      </div>
    </>
  )
}

export default App
