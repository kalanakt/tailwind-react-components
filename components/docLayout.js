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
      <div className="h-screen flex flex-col">
        <div className="flex flex-row">
          <CNavBar />
          <main className="hide-scroll-bar  bg-white overflow-y-auto max-h-screen flex-1 min-h-screen border-r-2 border-gray-200">{children}</main>

          <nav className="hidden md:block z-20 order-first w-fit border-r-2 hide-scroll-bar bg-white  max-h-screen text-gray-700 overflow-y-auto"><DocSidebar /></nav>

          <aside className="hidden md:block hide-scroll-bar bg-white overflow-y-auto"><DocRidebar/></aside>
        </div>
      </div>
    </>
  );
}
