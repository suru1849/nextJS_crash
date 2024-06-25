import Link from "next/link";
import React from "react";

export const metadata = {
  title: "about",
  description: "abous us page",
};

function AboutLayout({ children }) {
  return (
    <div>
      <nav className="my-6">
        <ul className="flex gap-6">
          <li>
            <Link href={"/about/mission"}>Mission</Link>
          </li>
          <li>
            <Link href={"/about/vission"}>Vission</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}

export default AboutLayout;
