import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useModal } from "./StateManager/ModalContext";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories";
import Modal from "./components/header/Modal";
import Footer from "./components/Footer";
import ShopItemDetails from "./components/ShopItemDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Category from "./components/Category";
import ForgotPassword from "./components/ForgotPassword";
import Testimonials from "./pages/testimonials/Testimonials";
import UserOrders from "./pages/UserOrders";
import UserAccount from "./pages/user-account/UserAccount";
import ResetPassword from "./pages/ResetPassword";

export default function App() {
  const { showModal1, setShowModal1, showModal2, setShowModal2 } = useModal();

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal showModal={showModal1} setShowModal={setShowModal1}>
        <ShoppingCart />
      </Modal>
      <Modal showModal={showModal2} setShowModal={setShowModal2}>
        <ForgotPassword />
      </Modal>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="shop" element={<Shop />} />
        <Route path="footwear/:itemId" element={<ShopItemDetails />} />
        <Route path="user-orders" element={<UserOrders />} />
        <Route path="categories" element={<Categories />} />
        <Route path="category" element={<Category />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="user-account" element={<UserAccount />} />
        <Route path="reset-password/:token" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
