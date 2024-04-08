import { Route, Routes } from "react-router-dom";
import { Cookies } from "react-cookie";
import { Homepage } from "./pages/Homepage";
import Categories from "./pages/Categories";
import ProductsDetailsDescription from "./pages/ProductsDetailsDescription";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Settings } from "./pages/Settings";
import { ProtectRoute } from "./pages/unities/ProtectRoute";
import ErrorPage from "./pages/ErrorPage";
import OrderHistory from "./pages/OrderHistory";
import UserDashboard from "./pages/UserDashboard";
import OrderDetails from "./pages/OrderDetails";
import { Address } from "./pages/Address";
import { Edit_Add_Address } from "./pages/Edit_Add_Address";
import Checkout from "./pages/Checkout";
import Checkout_Bill from "./pages/checkout-billing";
import Reset_password from "./pages/unities/reset_password";
import Find_user from "./pages/unities/find_user";
import { Reset_password_protect } from "./pages/unities/reset-password-protect";
// function main
function App() {
  const cookie = new Cookies();
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/product">
          <Route path="categories">
            <Route
              path=":categoriesParam/:pageParam"
              element={<Categories />}
            />
          </Route>
          <Route path="detail">
            <Route
              path=":categoriesP/:productList"
              element={<ProductsDetailsDescription />}
            />
          </Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          element={<ProtectRoute Allow={cookie.get("_ur") ? true : false} />}
        >
          <Route path="/Account/Dashboard" element={<UserDashboard />} />
          <Route path="/Account/Orders" element={<OrderHistory />} />
          <Route
            path="/Account/Orders/:Detail/:order_id"
            element={<OrderDetails />}
          />
          <Route path="/Account/Address" element={<Address />} />
          <Route
            path="/Account/Address/:EditAndadd"
            element={<Edit_Add_Address />}
          />
          <Route path="/Account/Settings" element={<Settings />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/shop/checkout/bill" element={<Checkout_Bill />} />
        </Route>
        <Route path="/reset-password" element={<Find_user />} />
        <Route
          element={
            <Reset_password_protect Allow={cookie.get("_re") ? true : false} />
          }
        >
          <Route
            path={`/password-reset/${
              cookie.get("_re") && cookie.get("_re").slice(0, 30)
            }`}
            element={<Reset_password />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
