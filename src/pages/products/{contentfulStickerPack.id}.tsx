import { PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductQuery>) {
  const img = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout pageTitle={data.contentfulStickerPack?.name!}>
      <div>
        <GatsbyImage image={img!} alt={data.contentfulStickerPack?.name!} />
        <h3>${data.contentfulStickerPack?.price}</h3>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      preview {
        gatsbyImageData(height: 450, placeholder: BLURRED)
      }
      price
    }
  }
`;
