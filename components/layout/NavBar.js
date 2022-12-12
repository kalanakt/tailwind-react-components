import React from "react";
import { Disclosure } from "@headlessui/react";
import Container from "@components/container";
import Link from "next/link";
import Image from "next/image";
import GetImage from "@utils/getImage";
import { myLoader } from "@utils/all";
import Logo from "public/Logo";
import Github from "public/icons/Github";
import IconAdminD from "public/icons/navbar/IconAdminD";
import IconAngular from "public/icons/navbar/IconAngular";
import IconBootsrap from "public/icons/navbar/IconBootsrap";
import IconEcommerce from "public/icons/navbar/IconEcommerce";
import IconMUI from "public/icons/navbar/IconMUI";
import IconNext from "public/icons/navbar/IconNext";
import IconNuxt from "public/icons/navbar/IconNuxt";
import IconReact from "public/icons/navbar/IconReact";
import IconVue from "public/icons/navbar/IconVue";
import IconVuetify from "public/icons/navbar/IconVuetify";
import IconDocs from "public/icons/navbar/IconDocs";
import IconPortfolio from "public/icons/navbar/IconPortfolio";
import IconBlog from "public/icons/navbar/IconBlog";
import { templates } from 'data/templates'
import { mobile } from 'data/mobile'
import { bundels } from 'data/bundle'
import ThemeSwitch from "@components/themeSwitch";

function NavBar() {
  return (
    <div className="top-0 border-b border-gray-200 dark:border-gray-900 shadow-md sticky bg-transparent bg-opacity-50 backdrop-blur backdrop-filter  firefox:bg-opacity-90 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-fit py-1 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 block text-teal-600">
            <Link className="" href="/" passHref={true}>
              <div>
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center flex-row gap-8 text-sm">
                <li className="text-gray-500 font-medium text-md transition hover:text-gray-500/75">
                  <span className="peer text-black dark:text-white font-semibold text-md cursor-pointer">
                    Templates
                  </span>
                  <div className="hidden absolute p-4 bg-white dark:bg-black peer-hover:flex hover:flex w-fit flex-col rounded-md border border-gray-200 dark:border-gray-600 drop-shadow-lg">
                    <div className="py-5 capitalize flex flex-col text-gray-900 dark:text-gray-100">
                      <span>fully custermizeble $ SEO+ Web Site Themes.</span>
                      <span></span>
                    </div>
                    <div className="grid gap-3 grid-cols-1">
                      {templates.map((item) => (
                        <Link
                          key={item.id}
                          passHref={true}
                          href="/templates/[id]"
                          as={"/templates/" + item.id}
                          >
                          <div className="p-2 dark:hover:bg-gray-900 flex items-center rounded-lg transition cursor-pointer duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="text-gray-500 font-medium text-md transition hover:text-gray-500/75">
                  <span className="peer text-black dark:text-white font-semibold text-md cursor-pointer">
                    Apps
                  </span>
                  <div className="hidden absolute p-4 bg-white dark:bg-black peer-hover:flex hover:flex w-fit flex-col rounded-md border border-gray-200 dark:border-gray-600 drop-shadow-lg">
                    <div className="py-5 capitalize flex flex-col text-gray-900 dark:text-gray-100">
                      <span>
                        fully custermizeble Mobile & Desktop Aplications,
                      </span>
                      <span>
                        {" "}
                        developed by using fluter, dart & React Native
                      </span>
                    </div>
                    <div className="grid gap-3 grid-cols-1">
                      {mobile.map((item) => (
                        <Link
                        key={item.id}
                        passHref={true}
                        href="/apps/[id]"
                        as={"/apps/" + item.id}
                        >
                          <div className="hover:bg-gray-100 dark:hover:bg-gray-900 p-2 flex items-center rounded-lg transition cursor-pointer duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="text-gray-500 font-medium text-md transition hover:text-gray-500/75">
                  <Link passHref={true} href="/">
                    <span className="peer text-black dark:text-white font-semibold text-md cursor-pointer">
                      Bundle
                    </span>
                  </Link>
                  <div className="hidden absolute p-4 bg-white dark:bg-black peer-hover:flex hover:flex w-fit flex-col rounded-md border border-gray-200 dark:border-gray-600 drop-shadow-lg">
                    <div className="py-5 capitalize flex flex-col text-gray-900 dark:text-gray-100">
                      <span>Best Offer For Start Your ptoject</span>
                      <span>75 % OFF</span>
                    </div>
                    <div className="grid gap-3 grid-cols-1">
                      {bundels.map((item) => (
                        <Link
                        key={item.id}
                        href="/bundles/[id]"
                        as={"/bundles/" + item.id}
                        passHref={true}>
                          <div className="p-2 flex items-center rounded-lg transition cursor-pointer duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="text-gray-500 font-medium transition text-md hover:text-gray-500/75">
                  <Link passHref={true} href="/components">
                    <span className="text-black dark:text-white font-semibold text-md cursor-pointer ">
                      Components
                    </span>
                  </Link>
                </li>

                <li className="text-gray-500 font-medium transition text-md hover:text-gray-500/75">
                  <Link passHref={true} href="/blog">
                    <span className="text-black dark:text-white font-semibold text-md cursor-pointer">
                      Blog
                    </span>
                  </Link>
                </li>

                <li className="text-gray-500 font-medium transition text-md hover:text-gray-500/75">
                  <Link passHref={true} href="/contact">
                    <span className="text-black dark:text-white font-semibold text-md cursor-pointer">
                      Hire Us
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block">
            <ThemeSwitch />
          </div>

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 dark:bg-gray-900 shadow-md p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar