import { Route, Routes } from "react-router-dom";
import CheckOut from "../componenet/CheckOut/CheckOut";
import Cart from "../componenet/Cart";
import PrivateRoutes from "../routes/PrivateRoutes";
import react from "react";
import PublicRoute from "./PublicRoutes";
import NotFound from '../componenet/404/Page404'
const Home = react.lazy(() => import("../componenet/home"));
const Products = react.lazy(() => import("../componenet/product"));
const ProductSinleView = react.lazy(() =>
  import("../componenet/product/ProductSingleView")
);
const About = react.lazy(() => import("../componenet/about"));
const Portfolio = react.lazy(() => import("../componenet/portfolio"));
const Blog = react.lazy(() => import("../componenet/blog"));
const Contact = react.lazy(() => import("../componenet/Contact"));
const BlogDetails = react.lazy(() => import("../componenet/blog/BlogDetails"));
const Trading = react.lazy(() => import("../componenet/detail_page/Trading"));
const Accademy = react.lazy(() => import("../componenet/detail_page/Accademy"));

export default function Auth() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/:section"
          element={<Products />}
        />
        <Route
          path="/products/:section/:product_id"
          element={<Products />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Portfolio />} />
        <Route path="/events" element={<Blog />} />
        <Route path="/blog_details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/accademy" element={<Accademy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Route>
      
      <Route element={<PrivateRoutes />}>
      
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
