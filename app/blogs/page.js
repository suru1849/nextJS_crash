import Link from "next/link";
import React from "react";

function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", description: "Blog description 1" },
    { id: 2, title: "Blog 2", description: "Blog description 2" },
  ];
  return (
    <main>
      <ul class="mt-6">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Blogs;
