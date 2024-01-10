import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/_search.scss"

const product = {
  name: "Product",
  price: 100,
  id: "qwerty",
  stock: 5,
  image: "https://m.media-amazon.com/images/I/81o11eS8pLL._SX679_.jpg",
  handler: () => {},
};

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="search">
      <aside className="filters">
        <h3>Filters</h3>
        <div className="filter">
          <h4>Sort</h4>
          <select
            name="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">None</option>
            <option value="asc">Price (low to high)</option>
            <option value="dsc">Price (high to low)</option>
          </select>
        </div>

        <div className="filter">
          <h4>Max Price: {maxPrice ? maxPrice : ""}</h4>
          <input
            type="range"
            name="maxPrice"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div className="filter">
          <h4>Category</h4>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">sample 1</option>
            <option value="">sample 2</option>
          </select>
        </div>
      </aside>

      <main className="content">
        <h3>Products</h3>
        <input
          type="text"
          placeholder="search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchField"
        />

        <div className="productList">
          <ProductCard product={product} />
        </div>

        <div className="paginator">
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === 4}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default Search;
