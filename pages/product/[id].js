import HButton from "@components/hero/HButton";
import Rater from "@components/product/Rater";
import RelatedProjects from "@components/product/RelatedProduct";
import { myLoader } from "@utils/all";
import { Data } from "data/Data";
import Image from "next/image";
import Link from "next/link";
import ModalImage from "react-modal-image";

function SingleProduct(props) {
  return (
    <section className="mb-4 text-slate-600">
      <div className="relative mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 pt-4">
            <ModalImage
              small={props.project.img}
              large={props.project.img}
              alt={props.project.name}
              hideDownload={true}
              hideZoom={true}
              className="rounded-md border-none cursor-pointer"
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              {props.project.images.map((project) => {
                return (
                  <div
                    className="mb-10 sm:mb-0 rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                    key={project.id}
                  >
                    <ModalImage
                      small={project.img}
                      large={project.img}
                      alt={project.title}
                      hideDownload={true}
                      hideZoom={true}
                      className="rounded-md border-none cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>
            <div className="pt-4 bg-transparent">
              <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-5 text-left">
                Basic Features:
              </p>
              <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                {props.project.features.map((project, index) => {
                  return (
                    <li className="flex items-center" key={index}>
                      <svg
                        className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {project}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-4 bg-transparent">
              <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-5 text-left">
                Product Details:
              </p>
              <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <span>Published: </span>
                  <span>{props.project.publishDate}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>Version: </span>
                  <span>{props.project.version}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>File Size: </span>
                  <span>{props.project.size}</span>
                </li>
              </ul>
            </div>

            <RelatedProjects category={props.project.category} />
          </div>

          <div className="sticky top-0 pt-4">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              {props.project.category}
            </strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch]">
                <span className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-5 text-left">
                  {props.project.name}
                </span>

                <p className="mt-0.5 text-sm">Highest Rated Product</p>

                <Rater rate={4.8} />
              </div>

              <p className="text-lg font-bold">{props.project.price}</p>
            </div>

            <div className="pt-4 md:pt-8 text-gray-700 dark:text-gray-300">
              {props.project.discription}
            </div>

            <div className="flex-row flex gap-2 mt-2 lg:mt-4">
              {props.project.tags.map((project, index) => {
                return (
                  <div className="mb-1 sm:mb-0" key={index}>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {project}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex pb-8 flex-row justify-start space-x-4 pt-10">
              <HButton link={props.project.prelink} title="Live Preview" />
              <HButton link={props.project.buylink} title="Buy" />
            </div>

            <div className="pt-8 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Need Help?
                </h5>
              </div>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                If you are not a famillier with web development or need a
                helping hand, you can hire us and we will install, setup,
                customize and publish this template for you.
              </p>
              <Link href="/contact" passHref={true}>
                <div className="inline-flex items-center text-blue-600 hover:underline">
                  <span>Contact Us</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex pt-8">
              <HButton link="/" title="Go Back" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: Data.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default SingleProduct;
