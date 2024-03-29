import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  pageTitle: string;
}

export default function Seo({ pageTitle }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {pageTitle} | {data.site?.siteMetadata?.title}
    </title>
  );
}
