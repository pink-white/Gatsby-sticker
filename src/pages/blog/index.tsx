import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import { Link, PageProps, graphql } from "gatsby";

export default function Blog({ data }: PageProps<Queries.BlogPostQuery>) {
  return (
    <Layout pageTitle="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <Link to={`/blog/${file.frontmatter?.slug}`}>
            <article key={index}>
              <h3>{file.frontmatter?.title}</h3>
              <h5>
                {file.frontmatter?.author} in: {file.frontmatter?.category}
              </h5>
              <h6>{file.frontmatter?.date}</h6>
              <p>{file.excerpt}</p>
            </article>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPost {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          date
          title
          slug
        }
        excerpt(pruneLength: 60)
      }
    }
  }
`;

export const Head = () => <Seo pageTitle="Blog"></Seo>;
