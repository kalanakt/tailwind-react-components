import HButton from "@components/hero/HButton";
import Rater from "@components/product/Rater";
import Card from '@components/product/Card';
import RelatedProjects from "@components/product/RelatedProduct";
import { myLoader } from "@utils/all";
import Image from "next/image";
import Link from "next/link";
import ModalImage from "react-modal-image";
import { Data } from 'data/Data'
import { useState } from 'react';
import Layout from "@components/layout";

const templates = [
  {
    id: 1,
    name: "Admin Dashboad Templates",
    description: "100% customizable Templates",
  },
  {
    id: 2,
    name: "Ecommerce Templates",
    description: "grow up your buisness.",
  },
  {
    id: 3,
    name: "Blog Templates",
    description: "100% customizable Templates",
  },
  {
    id: 4,
    name: "Portfolio Templates",
    description: "grow up your buisness.",
  },
  {
    id: 5,
    name: "Docs Templates",
    description: "100% customizable Templates",
  }
];

function SingleCategory(props) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const selectProjectsByCategory = Data.filter((item) => {
      let category =
        item.subcategory.charAt(0).toUpperCase() + item.subcategory.slice(1);
      return category.includes(props.project.name);
    });

  const filteredProduct = selectProjectsByCategory.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchField.toLowerCase()) ||
        product.category.toLowerCase().includes(searchField.toLowerCase()) ||
        product.search.toLowerCase().includes(searchField.toLowerCase())
      );
    });

  const handleChange = (e) => {
      setSearchField(e.target.value);
      if (e.target.value === "") {
        setSearchShow(false);
      } else {
        setSearchShow(true);
      }
    };
  return (
    <Layout>
    <div className="pb-8 md:pb-20 h-fit px-2 md:px-12 md:mx-24">
			<div className='pl-2 flex flex-col gap-2 pt-2 md:mt-4 mb-7'>
      <nav aria-label="Breadcrumb">
        <ol role="list" className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link href="/" className="block transition hover:text-gray-700">
              <div>
              <span className="sr-only"> Home </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              </div>
            </Link>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link href="/apps" className="block transition hover:text-gray-700"><span>Templates</span></Link>
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <span className="block transition hover:text-gray-700"> {props.project.name} </span>
          </li>
        </ol>
        </nav>
				<span className="pt-8 pb-4 font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light ">
						{props.project.name}
				</span>
				<span className="text-left text-sm md:text-md text-primary-dark dark:text-primary-light">
				Production-ready 🤩, easy to use, and highly customizable pro Template which offers everything you need to build modern, eye-catching and responsive web applications in no time! 🚀
				</span>
			</div>
			<div className="mx-2 bg-white rounded flex gap-2 items-center w-full md:w-1/3 p-3 shadow-sm border border-gray-200">
				<input
					onChange={handleChange}
					className="w-full pl-4 text-sm py-2 rounded-lg sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light border-none outline-none focus:outline-none bg-transparent"
					id="name"
					name="name"
					type="search"
					required={false}
					placeholder=" Search Products"
					aria-label="Name"
				/>
      </div>
		  <div className="mx-0 w-full h-fit">
      <div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3'>
      {filteredProduct.map((item, index) => (
          <Card key={index} {...item} />
      ))}
      </div>
      </div>
		</div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      project: templates.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default SingleCategory;
