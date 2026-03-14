"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Profile() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(
    searchParams.getAll("name"),
    searchParams.has("age"),
    "searchParams",
  );

  const handleNavigate = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Profile Component - Client</h1>
      <button onClick={handleNavigate}>Navigate to homepage</button>
    </div>
  );
}
