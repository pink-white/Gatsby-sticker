import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface blogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: blogPostProps) {
  const img = getImage(
    data.mdx?.frontmatter?.headerImg?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout pageTitle="">
      <GatsbyImage image={img as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        title
        headerImg {
          childImageSharp {
            gatsbyImageData(height: 300, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
