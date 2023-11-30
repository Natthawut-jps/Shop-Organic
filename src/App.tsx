import { Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Categories } from "./pages/Categories"
import { NoPage } from "./pages/unities/NoPage"
import { ProductsDetailsDescription } from "./pages/ProductsDetailsDescription"
import { SignInAndSignUp } from "./pages/SignInAndSignUp"

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Acount/:SignInAndSignUp" element={<SignInAndSignUp />}/>
        <Route path="/product">
          <Route path=":categoriesParam" element={<Categories />} />
          <Route path=":categoriesP/:productList" element={<ProductsDetailsDescription />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
};

export default App
