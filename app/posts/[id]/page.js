import getPost from "@/lib/getPost";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

async function postPage({ params }) {
  const { id } = params;

  const post = await getPost(id);

  return (
    <main>
      <div className="mt-6">{post.title}</div>
      <div className="mt-6 text-blue-700">{post.body}</div>
    </main>
  );
}

export default postPage;
