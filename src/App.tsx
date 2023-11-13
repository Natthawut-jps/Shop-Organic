import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import { ProductsDetailsDescription } from "./pages/ProductsDetailsDescription"
import Categories from "./pages/Categories"
import { NoPage } from "./pages/unities/NoPage"

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/product">
            <Route path=":categories" element={<Categories />} />
            <Route path=":categoriesP/:productList" element={<ProductsDetailsDescription />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
