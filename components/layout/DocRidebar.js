import Image from "next/image";
import { myLoader } from "@utils/all";
import Link from 'next/link';

function DocRidebar(props) {
  return (
    <section class="px-1 pt-8 mx-auto w-full">
      <span className="pl-6 font-semibold text-gray-500">Our Sponsors</span>
      <div class="grid grid-cols-1 gap-2 text-center lg:grid-cols-2">
        <div class="flex items-center justify-center p-2 bg-opacity-25 bg-primary-light">
          <img src="/images/brands/puma_color.png" alt="Todoist Logo" class="block object-contain h-16" />
        </div>
        <div class="flex items-center justify-center p-2 bg-opacity-25 bg-primary-light">
          <img src="/images/brands/nb_color.png" alt="Slack Logo" class="block object-contain h-16" />
        </div>
        <div class="flex items-center justify-center p-2 bg-opacity-25 bg-primary-light">
          <img src="/images/brands/fila_color.png" alt="Typeform Logo" class="block object-contain h-16" />
        </div>
        <div class="flex items-center justify-center p-2 bg-opacity-25 bg-primary-light">
          <img src="/images/brands/canon_color.png" alt="Postcss Logo" class="block object-contain h-16" />
        </div>
        <div class="flex items-center justify-center p-2 bg-opacity-25 bg-primary-light">
          <img src="/images/brands/amazon_color.png" alt="Yahoo Logo" class="block object-contain h-16" />
        </div>
        <div class="flex items-center justify-center p-2 bg-opacity-25 bg-primary-light">
          <img src="/images/brands/adidas_color.png" alt="Algolia Logo" class="block object-contain h-16" />
        </div>
      </div>
    </section>
  );
}

export default DocRidebar
