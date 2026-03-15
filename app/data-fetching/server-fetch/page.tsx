import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
}

async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch("https://dummyjson.com/products", {
    // cache: "no-store",
    // cache: "force-store",
    cache: "reload", // fetches fresh response , update the cache
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function ServerSideFetch() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h1>Server Side data fetching</h1>
      <h3>{products?.total} no of products</h3>
      <div className="flex flex-col gap-8">
        {products?.products?.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
