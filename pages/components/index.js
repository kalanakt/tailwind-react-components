import Image from 'next/image';
import Link from 'next/link';
import { Data } from 'data/Data'
import Layout from "@components/layout";
import { myLoader } from "@utils/all";
import { components } from 'data/components';

export default function Components() {
	return (
    <Layout>
		 {components.map((item) => (
			<div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 " key={item.id}>
				<div id="scrollspy" className="divide-y divide-gray-200 dark:divide-gray-800">
					<div id="basic-forms" className="mb-5 scroll-mt-12 py-10 lg:py-14">
					<h2 className="mb-5">
						<a className="text-lg font-semibold text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400" href="#basic-forms"> {item.name} </a>
					</h2>

					<div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
					{item.subcategory.map((item, index) => (
							<Link 
							href="/components/[id]"
							as={"/components/" + item.id}
							passHref={true} 
							key={index} 
							className="group relative rounded-xl border border-gray-200 bg-gray-50 ring-1 ring-transparent ring-opacity-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-[#151c2f]" 
							>
							    <div>
									<div className="relative pt-[50%]">
										<Image layout='fill' loader={myLoader} className="absolute top-0 left-0 h-full w-full rounded-t-xl object-cover dark:hidden" src={item.img} alt="Image Description" />
										<Image layout='fill' loader={myLoader} className="absolute top-0 left-0 hidden h-full w-full rounded-t-xl object-cover dark:block" src={item.img} alt="Image Description" />
									</div>
									<div className="rounded-b-xl bg-white py-3.5 px-4 dark:bg-slate-900">
										{item.isnew ? 
										(<h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">File Input <span className="ml-1 inline rounded-full border border-blue-300 bg-blue-50 py-0.5 px-2 text-[.6125rem] uppercase leading-4 text-blue-600 dark:border-blue-800/[.2] dark:bg-blue-800/[.15] dark:text-blue-500">New</span></h3>)
										:
										(<h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">File Input</h3>)
										}
										<p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">{item.components.length} components</p>
									</div>
								</div>
							</Link>
					))}
					</div>
					</div>
				</div>
			</div>
		 ))}
    </Layout>
	);
  };
