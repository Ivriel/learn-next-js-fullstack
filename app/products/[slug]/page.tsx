import React from "react";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>; // harus sesuai nama di dalam []
}) {
  const { slug } = await params;
  console.log(slug, "slug");
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{slug}</p>
    </div>
  );
}
