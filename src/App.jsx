import "./App.css";
import DesignedToFit from "./compoents/DesignedToFit";
import FeaturedProduct from "./compoents/FeaturedProduct";
import Hero from "./compoents/Hero";
import BlogItems from "./compoents/blog/BlogItems";
import ProductList from "./compoents/product/ProductList";
import Footer from "./compoents/shared/Footer";
import Navbar from "./compoents/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <FeaturedProduct />
      <DesignedToFit />
      <BlogItems />

      <Footer />
    </>
  );
}

export default App;
