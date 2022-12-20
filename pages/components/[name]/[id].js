import HButton from "@components/hero/HButton";
import Rater from "@components/product/Rater";
import RelatedProjects from "@components/product/RelatedProduct";
import { myLoader } from "@utils/all";
import { components } from "data/components";
import { components1 } from "data/components1";
import { Data } from "data/Data";
import Image from "next/image";
import Link from "next/link";
import { Tab } from '@headlessui/react'
import DocLayout from "@components/docLayout";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CodePreview from "@components/ui/codePreview";
import PropTable from "@components/ui/propTable";


function SingleComponent(props){
  const selectComponentsByCategory = components1.filter((item) => {
      let category =
        item.category.charAt(0).toLowerCase() + item.category.slice(1);
      return category.includes(props.project.name);
    });

  const filteredComponents = selectComponentsByCategory.filter((product) => {
      return (
        product.subcategory.toLowerCase().includes(props.project.id)
      );
    });


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <DocLayout>
    <section className="h-screen text-slate-600 mx-auto">
    <div className="flex flex-col justify-center gap-8 md:gap-20 py-16 items-center">
    {filteredComponents.map( (item, index ) =>
      <div key={index} className="w-full space-y-8 md:w-4/6 px-2 sm:px-0">
      <div>
        <div className="flex flex-col gap-2">
         <p className="text-sm leading-6 font-semibold text-sky-500 capitalize">{item.subcategory}</p>
         <h1 className="inline-block text-2xl font-extrabold text-slate-900 tracking-tight capitalize">{item.name}</h1>
         <p className="text-slate-700">{item.description}</p>
        </div>
      </div>

      <CodePreview code={item.code} codesandbox="/" github="/" lightcomponent={item.component} darkcomponent={item.component} />
      <PropTable table={item.table}/>

      <div className="flex flex-col">
      <h2 className="group flex whitespace-pre-wrap -ml-4 pl-4 mb-2 text-sm leading-6 text-sky-500 font-semibold tracking-normal dark:text-sky-400" id="basic-usage">Basic usage</h2>
      <h3 className="group whitespace-pre-wrap -ml-4 pl-4 inline-block text-lg font-extrabold text-slate-900 tracking-tight capitalize">Truncate</h3>
      <p>Use utilities like <code>.rounded-sm</code>, <code>.rounded</code>, or <code>.rounded-lg</code> to apply different border radius sizes to an element.</p>
      <div className="not-prose dark:bg-gray-900 mt-4 mb-4 bg-slate-50 border border-black/5 relative rounded-xl overflow-auto flex items-center justify-around gap-4 p-8">
        {item.component}
      </div>
      <div className="relative">
      <pre>{item.code}</pre>
     <div className="flex absolute top-1 right-1 justify-center items-center">
     <CopyToClipboard text={item.code}>
      <div className="p-2 rounded-md border border-gray-400">
        <svg className="h-3 w-3 text-black dark:text-white" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
        </svg>
      </div>
      </CopyToClipboard>
     </div>
     </div>
      </div>

      </div>
    )}
    </div>
    </section>
    </DocLayout>
  );
}

export async function getServerSideProps({ query }) {
  const {name, id } = query;
  return {
    props: {
      project: query
    }
  };
}

export default SingleComponent;
