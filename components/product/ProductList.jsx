import React, { useState, useEffect } from "react";
import IconArrowRight from "@/public/Nordcom-Icons/IconArrowRight";
import IconArrowLeft from "@/public/Nordcom-Icons/IconArrowLeft";
import Product from "./Product";
import productsData from "./product.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const renderProducts = () => {
    return currentProducts.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };

  const handlePageChange = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(products.length / productsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6">
      {renderProducts()}
      <div className="flex md:col-span-2 lg:col-span-4 justify-end text-center mt-8 mb-16 items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="flex justify-center px-1 py-2 w-[2.5rem] h-[2.5rem] border border-primary-31 rounded-[5px]"
        >
          <IconArrowLeft />
        </button>

        {getPageNumbers().map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`${
              currentPage === number
                ? "bg-primary-19 text-white"
                : "text-primary-35"
            } px-1 py-2 w-[2.5rem] h-[2.5rem] border border-primary-31 rounded-lg`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="flex justify-center bg-blue-5 px-1 py-2 w-[2.5rem] h-[2.5rem] border border-primary-31 rounded-lg"
        >
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
