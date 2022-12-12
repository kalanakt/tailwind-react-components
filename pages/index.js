import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import Hero from "@components/hero";
import Product from "@components/product/Product";
import Feature from "@components/ui/Feature";

export default function Home(props) {
  return (
    <>
        <Layout>
          <Container>
            <Hero />
          </Container>
          <Product />
          <Feature />
        </Layout>
    </>
  );
}
