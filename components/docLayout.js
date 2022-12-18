import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import GetImage from "@utils/getImage";
import Navbar from "@components/navbar";
import CNavBar from "./layout/CNavBar";
import CFooter from "./layout/CFooter";
import DocSidebar from "./layout/DocSidebar";
import DocRidebar from "./layout/DocRidebar";

export default function DocLayout(props) {
  const { children } = props;
  const ogimage = GetImage(props?.openGraphImage)?.src ?? "";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: ogimage,
              width: 800,
              height: 600,
              alt: props.title
            }
          ],
          site_name: props.title
        }}
        twitter={{
          handle: "@surjithctly",
          site: "@surjithctly",
          cardType: "summary_large_image"
        }}
      />
      <div className="relative min-h-screen max-h-screen flex flex-col">
        <div className="flex-1 flex flex-row overflow-y-hidden">
          <main className="hide-scroll-bar flex-1 overflow-y-auto border-r-2 border-gray-200">{children}</main>

          <nav className="order-first w-fit overflow-y-auto"><DocSidebar /></nav>

          <aside className="hide-scroll-bar overflow-y-auto"><DocRidebar/></aside>
        </div>
      </div>
    </>
  );
}
