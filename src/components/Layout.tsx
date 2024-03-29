import { Link } from "gatsby";
import React from "react";

interface ILayoutProps {
  children: any;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: ILayoutProps) {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About US</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
