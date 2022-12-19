import Image from "next/image";
import { myLoader } from "@utils/all";
import Link from 'next/link';

function DocRidebar(props) {
  return (
    <section className="px-1 pt-8 mx-auto w-full">
      <span className="pl-1 pb-8 font-semibold text-gray-500">Our Sponsors</span>
      <div className="grid pt-4 grid-cols-1 gap-2 text-center lg:grid-cols-2">
        <div className="flex items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/puma_color.png" alt="Todoist Logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/nb_color.png" alt="Slack Logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/fila_color.png" alt="Typeform Logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/canon_color.png" alt="Postcss Logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/amazon_color.png" alt="Yahoo Logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center p-2 bg-opacity-25 bg-gray-300">
          <Image width={150} height={70} loader={myLoader} src="/images/brands/adidas_color.png" alt="Algolia Logo" className="block object-contain h-16" />
        </div>
      </div>
    </section>
  );
}

export default DocRidebar
