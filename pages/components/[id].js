import HButton from "@components/hero/HButton";
import Rater from "@components/product/Rater";
import RelatedProjects from "@components/product/RelatedProduct";
import { myLoader } from "@utils/all";
import { components } from "data/components";
import { Data } from "data/Data";
import Image from "next/image";
import Link from "next/link";
import ModalImage from "react-modal-image";

function SingleProduct(props) {
  return (
    <section className="mb-4 text-slate-600">
      hi  {console.log(components)}
    </section>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query; 
  let py= components.map((element) => {
    return {...element,subcategory: element.subcategory.filter((subcategory) => subcategory.id ===  parseInt(id))}
  })
  console.log(py);
  return {
    props: {
      project: components.filter((project) => project.id === parseInt(id))[0],
    },
  };
}

export default SingleProduct;
