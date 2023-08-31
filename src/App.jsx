import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useModal } from "./StateManager/ModalContext";
import Header from "./components/header/Header";
import Modal from "./components/header/Modal";
import Footer from "./components/Footer";
import ShopItemDetails from "./components/ShopItemDetails";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Category from "./components/Category";
import ForgotPassword from "./components/ForgotPassword";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Categories = lazy(() => import("./pages/Categories"));
const Testimonials = lazy(() => import("./pages/testimonials/Testimonials"));
const UserOrders = lazy(() => import("./pages/UserOrders"));
const UserAccount = lazy(() => import("./pages/user-account/UserAccount"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

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
      <Suspense>
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
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
