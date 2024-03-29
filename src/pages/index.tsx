import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({
  data,
}: PageProps<Queries.allStickerPackQuery>) {
  console.log(data.allContentfulStickerPack.nodes.map((i) => i.id));
  return (
    <Layout pageTitle="Home">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <article>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query allStickerPack {
    allContentfulStickerPack {
      nodes {
        name
        preview {
          gatsbyImageData(height: 250, placeholder: BLURRED)
        }
        price
        id
      }
    }
  }
`;

export const Head = () => <Seo pageTitle="Home"></Seo>;
