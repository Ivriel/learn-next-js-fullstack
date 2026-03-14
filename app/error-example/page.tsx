import React from "react";

async function getProducts() {
  // simulate a dummy errors
  const shouldError = Math.random() > 0.5;
  if (shouldError) {
    throw new Error("Failed to fetch products");
  }

  return [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
  ];
}

export default async function ErrorExample() {
  const products = await getProducts();
  return (
    <div className="p-4">
      <h1>Product Lists</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
