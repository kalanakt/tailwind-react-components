import Image from "next/image";
import { myLoader } from "@utils/all";
import Link from 'next/link';

function DocRidebar(props) {
  return (
    <section className="pt-8 mx-auto h-full w-full">
      <div className="flex flex-col px-2 gap-4">
      <span className="pl-1 font-semibold text-gray-500">Our Sponsors</span>
      <div className="grid pb-8 grid-cols-1 gap-2 text-center lg:grid-cols-2">
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/puma_color.png" alt="Todoist Logo" className="block object-contain h-16" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/nb_color.png" alt="Slack Logo" className="block object-contain h-16" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/fila_color.png" alt="Typeform Logo" className="block object-contain h-16" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/canon_color.png" alt="Postcss Logo" className="block object-contain h-16" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/amazon_color.png" alt="Yahoo Logo" className="block object-contain h-16" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/adidas_color.png" alt="Algolia Logo" className="block object-contain h-16" />
        </div>
        <Link href="/" passHref={true}>
        <div className="flex rounded-md items-center h-20 justify-center p-2 bg-opacity-25 bg-gray-300">
           <span className="cursor-pointer text-gray-600 font-semibold">+ Become Sponsor</span>
        </div>
        </Link>
      </div>
      </div>
      <div className="px-2">
      <span className="pl-1 pb-8 font-semibold text-gray-500">Our Backers</span>
      <div className="grid pt-4 grid-cols-1 gap-2 text-center lg:grid-cols-4">
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image loader={myLoader} width={50} height={50} src="/images/brands/puma_color.png" alt="Todoist Logo" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image loader={myLoader} width={50} height={50} src="/images/brands/nb_color.png" alt="Slack Logo" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image loader={myLoader} width={50} height={50} src="/images/brands/fila_color.png" alt="Typeform Logo" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image loader={myLoader} width={50} height={50} src="/images/brands/canon_color.png" alt="Postcss Logo" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image loader={myLoader} width={50} height={50} src="/images/brands/amazon_color.png" alt="Yahoo Logo" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex rounded-md items-center justify-center p-2 bg-opacity-25 bg-gray-300">
        <Image loader={myLoader} width={50} height={50} src="/images/brands/amazon_color.png" alt="" className="w-12 h-12 rounded-full" />
        </div>
      </div>
      <Link href="/" passHref={true}>
        <div className="flex mt-3 p-5 w-fit rounded-md items-center justify-center bg-opacity-25 bg-gray-300">
           <span className="cursor-pointer text-gray-600 font-semibold">+ Become Backer</span>
        </div>
      </Link>
      </div>
      
      <div className="sticky shadow-md bg-transparent p-3 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 gap-4 z-20 bottom-0 flex flex-row">
        <Image loader={myLoader} width={50} height={50} src="/images/brands/amazon_color.png" alt="" className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold text-dray-800">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <a rel="noopener noreferrer" href="#" className="text-xs text-dray-800 hover:underline">View profile</a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default DocRidebar
