import Link from 'next/link'
import { components } from '@/components'
import Image from 'next/future/image'
import { Footer } from '@/components/Footer'

function Component({ components, priority = false }) {
  return (
    <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8" key={components.id}>
      <div id="scrollspy" className="divide-y divide-gray-200 dark:divide-gray-800">
        <div id="basic-forms" className="mb-5 scroll-mt-12 py-10 lg:py-14">
          <h2 className="mb-5">
            <div className="text-lg font-semibold text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
              {components.name}
            </div>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {components.subcategory.map((component, index) => (
              <Link href={`/components/${component.name}`} key={index}>
                <div className="group relative rounded-xl border border-gray-200 bg-gray-50 ring-1 ring-transparent ring-opacity-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-[#151c2f]">
                  <div className="relative pt-[50%]">
                    <Image
                      priority={true}
                      layout="fill"
                      width={150}
                      height={50}
                      className="absolute top-0 left-0 h-full w-full rounded-t-xl object-cover dark:hidden"
                      src={component.img}
                      alt="Image Description"
                    />
                    <Image
                      priority={true}
                      layout="fill"
                      width={150}
                      height={50}
                      className="absolute top-0 left-0 hidden h-full w-full rounded-t-xl object-cover dark:block"
                      src={component.img}
                      alt="Image Description"
                    />
                  </div>
                  <div className="rounded-b-xl bg-white py-3.5 px-4 dark:bg-slate-900">
                    {component.isnew ? (
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
                        {component.name}
                        <span className="ml-1 inline rounded-full border border-blue-300 bg-blue-50 py-0.5 px-2 text-[.6125rem] uppercase leading-4 text-blue-600 dark:border-blue-800/[.2] dark:bg-blue-800/[.15] dark:text-blue-500">
                          New
                        </span>
                      </h3>
                    ) : (
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-500">
                        {component.name}
                      </h3>
                    )}
                    <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
                      {component.components.length} components
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Components() {
  return (
    <>
      <main className="mt-16 sm:mt-20 relative">
        <div className="relative max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto sm:text-center">
          <h1 className="text-sm leading-6 font-semibold text-sky-500">Showcase</h1>
          <p className="mt-6 text-[2.5rem] leading-none sm:text-6xl tracking-tight font-bold text-slate-900 dark:text-white">
            You can build anything with Tailwind CSS.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Well not quite <em>anything</em>, like you can't build a spaceship with it. But you can
            definitely build the website for the spaceship —{' '}
            <Link href="/showcase/nasa">
              <a className="font-semibold border-b border-sky-300 text-gray-900 hover:border-b-2 dark:text-white dark:border-sky-400">
                NASA did
              </a>
            </Link>
            .
          </p>
        </div>
        <div>
          {components.map((components, siteIndex) => (
            <Component key={components.name} components={components} priority={siteIndex < 6} />
          ))}
        </div>
      </main>
      <Footer className="mt-32" />
    </>
  )
}

Components.layoutProps = {
  meta: {
    title: 'Example Components',
    description:
      'Beautiful websites built with Tailwind CSS, including marketing sites, SaaS applications, ecommerce stores, and more.',
    ogImage: require('@/img/showcase/og.jpg'),
  },
}

export async function getStaticProps() {
  return { props: {} }
}
