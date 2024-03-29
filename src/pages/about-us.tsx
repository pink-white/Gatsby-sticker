import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout pageTitle="About Us">
      <div>
        <p>Here is my E-commerce website</p>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo pageTitle="About Us"></Seo>;
