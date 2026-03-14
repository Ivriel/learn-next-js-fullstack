import { Metadata } from "next";

const dummyData = {
  "1": {
    title: "Metadata Example 1",
    description: "Metadata Example 1",
  },
  "2": {
    title: "Metadata Example 2",
    description: "Metadata Example 2",
  },
  "3": {
    title: "Metadata Example 3",
    description: "Metadata Example 3",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function DynamicMetadataExample({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = dummyData[slug as keyof typeof dummyData];
  return (
    <div>
      <h1>{data.title}</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
