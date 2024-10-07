import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "./types";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams<{ productId: string }>();

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

    // Temukan produk berdasarkan ID dari URL
    const selectedProduct = dummyProducts.find(
      (product) => product.id === Number(productId)
    );

    setProduct(selectedProduct || null);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail h-screen flex justify-center items-center">
      <div>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <Link to="/products">Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
