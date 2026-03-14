import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Metadata title Example",
  description: "Metadata description Example",
};

export default function MetadataExamplePage() {
  const examples = [
    {
      id: 1,
      title: "Metadata Example",
    },
    {
      id: 2,
      title: "Metadata Example 2",
    },
    {
      id: 3,
      title: "Metadata Example 3",
    },
  ];
  return (
    <div>
      <h1>Metadata Example</h1>
      <ul>
        {examples.map((example) => (
          <li key={example.id}>
            <Link href={`/metadata-example/${example.id}`}>
              {example.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
