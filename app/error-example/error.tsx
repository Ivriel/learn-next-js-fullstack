"use client";

import React, { useEffect } from "react";

export default function ErrorExampleFallbackUI({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // send a report to the logging service
  }, [error]);
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold">Something went wrong!</h1>
      <p className="text-red-500">{error?.message || "An error occured"}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
