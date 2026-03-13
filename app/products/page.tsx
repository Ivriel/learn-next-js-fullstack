import Link from "next/link";
import React from "react";

export default function Products() {
  const products = [
    {
      id: "1",
      name: "Mobile",
      price: 50000,
    },
    {
      id: "2",
      name: "Laptop",
      price: 20000,
    },
    {
      id: "3",
      name: "Mouse",
      price: 30000,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded w-fit">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Rp {product.price}</p>
            <Link href={`/products/${product.id}`} className="text-blue-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
