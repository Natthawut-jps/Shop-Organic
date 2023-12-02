import { Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Categories } from "./pages/Categories"
import { NoPage } from "./pages/unities/NoPage"
import { ProductsDetailsDescription } from "./pages/ProductsDetailsDescription"
import { SignInAndSignUp } from "./pages/SignInAndSignUp"
import Contact from "./pages/Contact"
import About from "./pages/About"

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/Acount/:SignInAndSignUp" element={<SignInAndSignUp />} />
        <Route path="/product">
          <Route path="categories">
            <Route path=":categoriesParam/:pageParam" element={<Categories />} />
          </Route>
          <Route path="detail">
            <Route path=":categoriesP/:productList" element={<ProductsDetailsDescription />} />
          </Route>
        </Route>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
};

export default App
