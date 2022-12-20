import Image from "next/image";
import Link from "next/link";
import { Tab } from '@headlessui/react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import { PhotographIcon, ClipboardCopyIcon, SunIcon, MoonIcon, PencilIcon, PencilAltIcon } from "@heroicons/react/outline";
import Github from "public/icons/ui/Github";
import CodeSandbox from "public/icons/ui/CodeSandbox";
import IconVue from "public/icons/navbar/IconVue";
import IconReact from "public/icons/navbar/IconReact";

export default function CodePreview({ code="", lightcomponent="",darkcomponent="", codesandbox="/", github="/", ...props }) {
    const [ codetheme, setCodetheme ] = useState('light');
    const toolbar = [
        {
            icon: CodeSandbox,
            name: "View On CodeSandbox",
            link: "/fvrv"
        },
        {
            icon: PencilAltIcon,
            name: "Edit On Github",
            link: "/bkj"
        },
    ]
  return (
    <div className="relative flex flex-col gap-4">
        <div className={ codetheme==='dark'? "bg-slate-800 border border-slate-200 shadow-md p-2 pt-4 rounded-lg" : "bg-slate-50 border border-slate-200 shadow-md p-2 pt-4 rounded-lg"}>
            <div className="p-2 flex hide-scroll-bar justify-center items-center h-full py-8 overflow-y-scroll">
            { codetheme==='dark'? darkcomponent : lightcomponent}
            </div>
        </div>
        <div className="rounded-md border border-slate-200 shadow-md flex flex-col">
            <Tab.Group>
                <Tab.List className="flex p-2 flex-row gap-x-4 justify-between items-center">
                    <Tab title="React Code" className="flex bg-opacity-50 rounded bg-gray-200 p-1 flex-row gap-2 justify-start border-none outline-none focus:outline-none">
                    <span className="text-md">React</span>
                    <IconReact className="w-2 h-2"/>
                    </Tab>
                    <div className="flex bg-opacity-50 rounded bg-gray-200 p-1 flex-row gap-3 justify-center items-center">
                    {toolbar.map((item, index) => (
                        <Link  href={item.link} key={index}>
                            <span title={item.name}>
                              <item.icon className="h-5 w-5"/>
                            </span>
                        </Link>
                    ))}
                    <button title="Color Mode" onClick={() => codetheme==='dark' ? setCodetheme('light') : setCodetheme('dark')}>
                        { codetheme==='dark'?
                        <SunIcon className="w-5 h-5"/>
                        :
                        <MoonIcon className="w-5 h-5" />
                        }
                    </button>
                    <div className=""  title="Copy Code">
                    <CopyToClipboard text={code}>
                         <ClipboardCopyIcon className="w-5 h-5"/>
                    </CopyToClipboard>
                    </div>
                    </div>
                    <Tab title="Vue Code" className="flex bg-opacity-50 rounded bg-gray-200 p-1 flex-row gap-2 border-none outline-none focus:outline-none">
                    <span className="text-md">Vue</span>
                    <IconVue className="w-2 h-2"/>
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                    <pre>{code}</pre>
                    </Tab.Panel>
                    <Tab.Panel className="bg-slate-800 border-b-md shadow-md pt-2 dark:bg-slate-50 flex hide-scroll-bar justify-center items-center h-60 overflow-y-scroll">
                        <pre className="text-xs font-mono font-medium leading-6 text-white dark:text-white">{code}</pre>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </div>
  );
}
