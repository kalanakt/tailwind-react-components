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

function CNavBar(props) {
  return (
    <div className="top-0 flex justify-center items-center absolute w-full border-b border-gray-200 dark:border-gray-900 shadow-md bg-transparent bg-opacity-50 backdrop-blur backdrop-filter  firefox:bg-opacity-90 z-10">
      <span className="text-black">hvh</span>
    </div>
  );
}

export default CNavBar
