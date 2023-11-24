import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Categories from "./pages/Categories"
import { NoPage } from "./pages/unities/NoPage"
import { ProductsDetailsDescriptionContext } from "./pages/ProductsDetailsDescription"


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product">
          <Route path=":categoriesParam" element={<Categories />} />
          <Route path=":categoriesP/:productList" element={<ProductsDetailsDescriptionContext />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
};

export default App
