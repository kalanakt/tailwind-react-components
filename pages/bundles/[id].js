import Layout from "@components/layout";
import { myLoader } from "@utils/all";
import Image from "next/image";

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]
export const bundles = [
  {
    id: 1,
    name: "Mega Bundle",
    description: "50+ Premium Dashboads And Themes",
  },
  {
    id: 2,
    name: "Mega Mobile Bundle",
    description: "49 Mobile Aplication Bundle.",
  },
  {
    id: 3,
    name: "React Bundle",
    description: "15+ React Website Templates.",
  },
  {
    id: 4,
    name: "Vue Bundle",
    description: "15+ Vue Website Templates.",
  },
  {
    id: 5,
    name: "Angular Bundle",
    description: "15+ Angular Website Templates.",
  },
];

function Bundle(props) {
  return (
    <Layout>
    <div className="bg-white dark:bg-black">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-8 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.project.name}</h2>
          <p className="mt-4 text-gray-500">
            {props.project.description}
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Image
            loader={myLoader}
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
            layout='fill'
          />
          <Image
            loader={myLoader}
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
            layout='fill'
          />
          <Image
            loader={myLoader}
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
            layout='fill'
          />
          <Image
            loader={myLoader}
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
            layout='fill'
          />
        </div>
      </div>
    </div>
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      project: bundles.filter((project) => project.id === parseInt(id))[0],
    },
  };
}


export default Bundle
