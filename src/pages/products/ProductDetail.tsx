import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Product } from "./types";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    // Di sini Anda akan mengambil data produk dari API berdasarkan productId
    // Untuk contoh ini, kita akan menggunakan data dummy
    const dummyProduct: Product = {
      id: Number(productId),
      name: "Sample Product",
      description: "This is a detailed description of the sample product.",
      price: 999,
      imageUrl: "/images/sample-product.jpg",
    };
    setProduct(dummyProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail h-screen flex justify-center items-center">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
