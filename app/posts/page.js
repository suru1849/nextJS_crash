import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

async function Posts() {
  const posts = await getAllPosts();
  console.log(posts);

  return (
    <main>
      <div class="my-6">All posts</div>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            {index + 1}. <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Posts;
