import { Link } from "react-router-dom";
import "../styles/_home.scss";
import ProductCard from "../components/ProductCard";

const product = {
  name: "Product",
  price: 100,
  id: "qwerty",
  stock: 5,
  image: "https://m.media-amazon.com/images/I/81o11eS8pLL._SX679_.jpg",
  handler: () => {},
};

const Home = () => {
  return (
    <main className="home">
      <section className="coverSection"></section>

      <div className="productSectionHeaders">
        <h3>Latest Products</h3>
        <Link to="/search" className="findMore">
          More
        </Link>
      </div>

      <section className="latestProductsContainer">
        <ProductCard product={product} />
      </section>
    </main>
  );
};

export default Home;
