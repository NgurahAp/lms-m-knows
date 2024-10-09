import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "./types";
import { useAuth } from "../../hooks/useAuth";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { handleLogout } = useAuth();

  useEffect(() => {
    const dummyProducts: Product[] = [
      {
        id: 1,
        name: "Laptop",
        description: "Powerful laptop for professionals",
        price: 1200,
        imageUrl: "/images/laptop.jpg",
      },
      {
        id: 2,
        name: "Smartphone",
        description: "Latest smartphone with advanced features",
        price: 800,
        imageUrl: "/images/smartphone.jpg",
      },
      {
        id: 3,
        name: "Headphones",
        description: "Noise-cancelling headphones",
        price: 300,
        imageUrl: "/images/headphones.jpg",
      },
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="product-list">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Link ke halaman detail produk */}
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProductList;
