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
import Layout from "@components/layout";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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
    <Layout>
    <section className="mb-4 text-slate-600 mx-auto">

    <div className="flex flex-col justify-center items-center">
    {filteredComponents.map( (item, index ) =>
      <div key={index} className="w-4/6 px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="relative flex gap-1 space-x-1 rounded-xl p-1 flex rounded-lg p-1 transition">
          <Tab className={({ selected }) =>
                classNames(
                  'w-fit px-4 rounded-lg bg-transparent shadow py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-300',
                  'focus:outline-none',
                  selected
                    ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400'
                )
              }>Preview</Tab>
          <Tab className={({ selected }) =>
          classNames(
            'w-fit px-4 rounded-lg bg-transparent shadow py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-300',
            'focus:outline-none',
            selected
              ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400'
          )
              }>html</Tab>
          <Tab className={({ selected }) =>
          classNames(
            'w-fit px-4 rounded-lg bg-transparent shadow py-2.5 text-sm font-medium leading-5 text-gray-700 dark:text-gray-300',
            'focus:outline-none',
            selected
              ? 'bg-gray-100 dark:bg-gray-900 dark:text-white text-black shadow-lg'
              : 'text-gray-600 dark:text-gray-400'
          )
              }>react</Tab>
           <div className="absolute inset-y-0 right-20 pr-1 flex flex-col justify-center items-center">
           <a className="inline-flex items-center justify-center gap-2 rounded-md border bg-white py-2.5 px-3 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-gray-700 dark:focus-visible:ring-offset-gray-800" href="javascript:;" data-hs-component-dark-mode="#ctc-component-1-tab-1">
              <span className="group inline-flex h-4 w-4 flex-shrink-0 items-center justify-center font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-500">
                <svg data-svg="" className="hidden h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                </svg>

                <svg data-svg="" className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                </svg>
              </span>
            </a>
           </div>
           <div className="absolute inset-y-0 right-1 flex flex-col justify-center items-center">
           <a
              className="js-clipboard group inline-flex items-center justify-center gap-2 rounded-md border bg-white py-2.5 px-3 align-middle text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              href="javascript:;"
              data-hs-clipboard-options='{
                                      "contentTarget": "#ctc-component-1-tab-2 code",
                                      "successText": "Copied"
                                  }'
            >
              <svg className="js-clipboard-default h-3 w-3 transition group-hover:rotate-6" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
              </svg>

              <svg className="js-clipboard-success hidden h-3 w-3 rotate-6 text-blue-600" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
              </svg>
              <span className="js-clipboard-success-text">Copy</span>
            </a>
           </div>
        </Tab.List>
        <Tab.Panels className="mt-3">
          <Tab.Panel className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}><div className="h-40 min-h-full flex justify-center items-center">{item.component}</div></Tab.Panel>
          <Tab.Panel className={classNames(
                'bg-transparent',
                'focus:outline-none'
              )}>
              <SyntaxHighlighter language="javascript" customStyle={{borderRadius: "10px", backgroundColor: "#001E3C"}} >
                {item.code}
              </SyntaxHighlighter>
              </Tab.Panel>
          <Tab.Panel className={classNames(
                'bg-transparent rounded-md',
                'focus:outline-none'
              )}>
              <SyntaxHighlighter language="javascript" customStyle={{borderRadius: "10px", backgroundColor: "#001E3C"}} >
                 {item.code}
              </SyntaxHighlighter>
              </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      </div>
    )}
    </div>
    </section>
    </Layout>
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
