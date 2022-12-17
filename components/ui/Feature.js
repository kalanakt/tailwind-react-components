import { myLoader } from "@utils/all";
import Image from "next/image";
import Link from 'next/link';

function Feature(){
    return(
        <div className="flex min-h-screen items-center justify-center p-10 bg-white dark:bg-black pt-8 md:pt-20">
  <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
    <div className="row-span-2 shadow-md flex flex-col rounded-md border border-slate-200 dark:border-slate-900">
      <div className="relative hidden h-full w-full overflow-hidden lg:block">
        <div className="absolute inset-0 top-0">
          <Image loader={myLoader} src="https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png" className="h-full w-full object-cover object-left-top" alt="hbf" layout='fill' />
        </div>
      </div>
      <div className="p-10">
        <h3 className="text-xl font-medium text-gray-700">Omnichannel support center</h3>
        <p className="mt-2 text-slate-500">Chatwoot connects with popular customer communication channels like Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram, Line, etc., and helps you deliver a consistent customer experience across channels.</p>
        <p className="mt-2 inline-flex text-sky-700"><Link href="" >Read More →</Link></p>
      </div>
    </div>
    <div className="flex shadow-md rounded-md border border-slate-200 dark:border-slate-900">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">A live-chat that fits your brand</h3>
        <p className="mt-2 text-slate-500">Connect with your website visitors, communicate with them in realtime and give them quality support with a live-chat widget that fits your brand.</p>
        <p className="mt-2 inline-flex text-sky-700"><Link href="" >Read More →</Link></p>
      </div>

      <div className="rounded-r-md relative hidden h-full w-2/5 overflow-hidden lg:block">
        <div className="absolute">
          <Image width={800} height={1000} loader={myLoader} src="/images/ui-project-1.jpg" className="border-r object-cover object-left-top" alt="" />
        </div>
      </div>
    </div>
    <div className="flex shadow-md flex-row rounded-md border border-slate-200 dark:border-slate-900">
      <div className="flex-1 p-10">
        <h3 className="text-xl font-medium text-gray-700">Respond faster, with automated chatbots</h3>
        <p className="mt-2 text-slate-500">Integrate with chatbots using Rasa or Dialogflow to automate conversations. Qualify using chatbots and seamlessly handoff to human agents.</p>
        <p className="mt-2 inline-flex text-sky-700"><Link href="" >Read More →</Link></p>
      </div>
      <div className="relative hidden h-full w-2/5 overflow-hidden lg:block rounded-r-md">
        <div className="absolute">
          <Image width={800} height={1000} loader={myLoader} src="/images/ui-project-1.jpg" className=" h-full w-full object-cover object-left-top" alt="hbf"/>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Feature
