"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsResponse {
  posts: Post[];
  total: number;
}

export default function ReactQueryExample() {
  const queryClient = useQueryClient();
  const { data, isLoading, error, refetch } = useQuery<PostsResponse>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts!");
      }

      return response.json();
    },
    staleTime: 2 * 60 * 1000,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div>
      <h1>ReactQueryExample</h1>
      {data?.posts?.map((post: Post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
