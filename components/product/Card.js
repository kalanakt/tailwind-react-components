import { myLoader } from "@utils/all";
import Image from "next/image";
import Link from "next/link";
import { StarIcon, ArrowDownIcon, BookmarkIcon } from "@heroicons/react/outline";

export default function Card(props) {
  return (
    <div className="m-4">
      <Link
        href="/product/[id]"
        as={"/product/" + props.id}
        passHref={true}
      >
        <div className="w-full bg-gray-200 dark:bg-slate-900 bg-opacity-25 px-6 py-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <div className="relative">
            <Image
              src={props.img}
              loader={myLoader}
              className="rounded-xl border-none cursor-pointer"
              alt="Single Project"
              layout="responsive"
              width={100}
              height={90}
            />
            <div className="grid pb-2 grid-flow-col auto-cols-max justify-start gap-2 items-center cursor-pointer text-gray-800 px-1 text-sm absolute bottom-0 inset-x-0">
            {props.tags.map((item, index) => (
              <div key={index} className="bg-blue-200 bg-opacity-50 border-0 rounded-lg border-slate-700 px-3">
                {item}
              </div>
            ))}
            </div>
          </div>
          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">price</dt>

                <dd className="text-sm text-gray-500">{props.price}</dd>
              </div>

              <div>
                <dt className="sr-only">name</dt>

                <dd className="font-medium">{props.name}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-row flex-wrap items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                <StarIcon className="w-5 h-5" aria-hidden={true}/>

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-gray-500">Rating</p>

                  <p className="font-medium">{props.rate} / 5</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center">

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-gray-500">Sells</p>

                  <p className="font-medium">{props.buy} items</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                <BookmarkIcon className="w-5 h-5" aria-hidden={true}/>

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-gray-500">Category</p>

                  <p className="font-medium">{props.category}</p>
                </div>
              </div>
            </div>
          </div>
          {/* <h1 className="mt-4 text-2xl font-bold cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-1.5">
            {props.name}
          </h1>
          <div className="my-4">
            <div className="flex flex-row gap-x-4 justify-start">
              <div className="flex flex-row space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-1.5">{props.rate} / 5</p>
              </div>
              <div className="flex flex-row space-x-1 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <p className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 mb-1.5">{props.buy}</p>
              </div>
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
