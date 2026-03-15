"use client";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

export default function UseEffectExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  async function fetchListOfProducts() {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      if (result) {
        setData(result.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      <h1>UseEffectExample</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
