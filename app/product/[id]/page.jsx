"use client";
import ProductDetail from "@/app/product/product-details/ProductDetails";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";

const SingleProductPage = ({ params: { id } }) => {
  const [product, setProduct] = useState(null);

  const paths = [
    { label: "Home", href: "/" },
    { label: "Technology", href: "/technology" },
    { label: "Laptop", href: "/technology/laptop" },
    { label: "Apple", href: "/technology/laptop/Apple" },
    { label: "Apple iPad Pro 11 (2020) Wifi 128Gb (Silver)- 128Gb" },
    { label: "11Inch" },
    { label: "Wifi" },
  ];

  useEffect(() => {
    if (id) {
      // Fetch the product data based on the product ID
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="">
        <Breadcrumb paths={paths} />
      </div>
      {product ? <ProductDetail product={product} /> : <div>Loading...</div>}
    </div>
  );
};

export default SingleProductPage;
