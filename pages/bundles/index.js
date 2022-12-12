import Image from 'next/image';
import Link from 'next/link';
import { Data } from 'data/Data'
import Layout from "@components/layout";
import { myLoader } from "@utils/all";

export default function Bundle() {
	return (
    <Layout>
	  <div className="px-4 pt-16 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
		  <div>
			<p className="bg-orange-300 rounded-md inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase bg-teal-accent-400">
			  70 % OFF
			</p>
		  </div>
		  <h2 className="max-w-lg mb-6 text-gray-800 dark:text-gray-200 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
			<span className="relative inline-block">
			  <svg
				viewBox="0 0 52 24"
				fill="currentColor"
				className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
			  >
				<defs>
				  <pattern
					id="bc9273ce-29bb-4565-959b-714607d4d027"
					x="0"
					y="0"
					width=".135"
					height=".30"
				  >
					<circle cx="1" cy="1" r=".7" />
				  </pattern>
				</defs>
				<rect
				  fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
				  width="52"
				  height="24"
				/>
			  </svg>
			  <span className="relative">Hurry up!</span>
			</span>{' '}
			Choose your Bundle. Get Premium products
		  </h2>
		  <p className="text-base text-gray-700 md:text-lg">
		  Get the best value for your money with this bundles of 10+ Premium Templates with 30+ Stunning Dashboard layouts, 200+ Elegant Pages, 300+ Reusable
components / UI Elements, and plenty more, at 70% discount.
		  </p>
		</div>
		<div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
		  <div className="flex flex-col transition duration-300 bg-gray-200 dark:bg-gray-800 rounded shadow-sm hover:shadow">
			<div className="relative w-full h-48">
			<Image
				loader={myLoader}
				src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
				className="object-cover w-full h-full rounded-t"
				alt="Plan"
			  />
			</div>
			<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b border-gray-300 dark:border-gray-700">
			  <div>
				<div className="text-lg font-semibold text-gray-900 dark:text-white">Mega Bundle</div>
				{/* <p className="text-sm text-gray-900">
				  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				  doloremque.
				</p> */}

				<ul className="space-y-1 py-4 max-w-md list-inside text-gray-500 dark:text-gray-400">
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						20+ Premium WebSite Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						5 Premium Mobile App Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Lifetime Premium Support
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Well Documented
					</li>
				</ul>

				<div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
				  $300
				</div>
			  </div>
			  <Link
				href="/"
				className="bg-blue-600 rounderd-lg inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
			  >
				Buy Mega Bundle
			  </Link>
			</div>
		  </div>
		  <div className="flex flex-col transition duration-300 bg-gray-200 dark:bg-gray-800 rounded shadow-sm hover:shadow">
			<div className="relative w-full h-48">
			<Image
				loader={myLoader}
				src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
				className="object-cover w-full h-full rounded-t"
				alt="Plan"
			  />
			</div>
			<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b border-gray-300 dark:border-gray-700">
			  <div>
				<div className="text-lg font-semibold">Mega Mobile Bundle</div>
				{/* <p className="text-sm text-gray-900">
				  A flower in my garden, a mystery in my panties. Heart attack
				  never was so close.
				</p> */}
				<ul className="space-y-1 py-4 max-w-md list-inside text-gray-500 dark:text-gray-400">
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						20+ Premium Mobile App Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						5 Premium Desktop App Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Lifetime Premium Support
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Well Documented
					</li>
				</ul>
				<div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
				  $500
				</div>
			  </div>
			  <Link
				href="/"
				className="bg-blue-600 rounderd-lg inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
			  >
				Buy Mega Mobile Bundle
			  </Link>
			</div>
		  </div>
		  <div className="flex flex-col transition duration-300 bg-gray-200 dark:bg-gray-800 rounded shadow-sm hover:shadow">
			<div className="relative w-full h-48">
			<Image
				loader={myLoader}
				src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
				className="object-cover w-full h-full rounded-t"
				alt="Plan"
			  />
			</div>
			<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b border-gray-300 dark:border-gray-700">
			  <div>
				<div className="text-lg font-semibold">React Bundle</div>
				{/* <p className="text-sm text-gray-900">
				  We never had the chance to. Maybe it was the eleven months he
				  spent in the womb.
				</p> */}
				<ul className="space-y-1 py-4 max-w-md list-inside text-gray-500 dark:text-gray-400">
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						20+ React WebSite Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						1 React Native Mobile App Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Lifetime Premium Support
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Well Documented
					</li>
				</ul>
				<div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
				  $80
				</div>
			  </div>
			  <Link
				href="/"
				className="bg-blue-600 rounderd-lg inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
			  >
				Buy React Bundle
			  </Link>
			</div>
		  </div>
		  <div className="flex flex-col transition duration-300 bg-gray-200 dark:bg-gray-800 rounded shadow-sm hover:shadow">
			<div className="relative w-full h-48">
			<Image
				loader={myLoader}
				src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
				className="object-cover w-full h-full rounded-t"
				alt="Plan"
			  />
			</div>
			<div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b border-gray-300 dark:border-gray-700">
			  <div>
				<div className="text-lg font-semibold">Vue Bundle</div>
				{/* <p className="text-sm text-gray-900">
				  We never had the chance to. Maybe it was the eleven months he
				  spent in the womb.
				</p> */}
				<ul className="space-y-1 py-4 max-w-md list-inside text-gray-500 dark:text-gray-400">
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						20+ Vue WebSite Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						1 Electron Desktop App Templates
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Lifetime Premium Support
					</li>
					<li className="flex flex-row items-center">
						<svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
						Well Documented
					</li>
				</ul>
				<div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-5xl">
				  $80
				</div>
			  </div>
			  <Link
				href="/"
				className="bg-blue-600 rounderd-lg inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
			  >
				Buy Vue Bundle
			  </Link>
			</div>
		  </div>
		</div>
	  </div>
    </Layout>
	);
  };
