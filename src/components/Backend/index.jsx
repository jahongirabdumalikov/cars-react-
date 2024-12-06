import React, { useEffect, useState } from "react";

const GET_PRODUCTS = "http://localhost:3000/products";

const Backend = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(GET_PRODUCTS);
        if (!res.ok) throw new Error("API Error: " + res.status);
        const body = await res.json();
        setProducts(body?.data || body); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white w-full max-w-[304px] mx-auto h-[400px] rounded-[10px] shadow-md overflow-hidden flex flex-col relative"
          >
            <div className="p-6 flex-grow flex flex-col">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-4">{product.category}</p>

              <div className="flex justify-center mb-4">
                <img
                  className="w-[300px] h-[200px] object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="flex justify-between items-center mt-auto gap-4">
                <div className="flex items-center">
                  <img
                    src="/assets/images/1.svg"
                    alt=""
                    className="w-[150px] h-[30px]"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    src="/assets/images/2.svg"
                    alt="Rule"
                    className="w-[150px] h-[30px]"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    src="/assets/images/3.svg"
                    alt=""
                    className="w-[150px] h-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
