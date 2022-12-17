import HBanner from "./HBanner"
import HButton from "./HButton"
import HImage from "./HImage"
import HScrollx from "./HScrollx"

export default function Hero() {
	return (
        <div className="block">
	        <div className="flex pt-4 md:pt-8 lg:pt-10 w-full h-fit md:flex-row gap-8">
	            <div className="flex flex-col gap-y-6">
	                <HBanner />
	                <h1 className="sm:mx-auto uppercase py-3 w-full font-black text-blue-900 text-4xl text-center sm:text-4xl md:text-5xl lg:w-auto lg:text-left xl:text-6xl dark:text-white">Build your next idea <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">even faster.</span></h1>
	                <div className="flex flex-col">
	                    <span className="capitalize block pt-4 font-semibold text-md text-gray-500 dark:text-gray-400">Beautifully designed, Visually stunning, easy to customizable,</span>
	                    <span className="capitalize block font-semibold text-md text-gray-500 dark:text-gray-400">expertly crafted components, templates, apps & more...</span>
	                </div>

	                <div className="hidden md:flex flex-row justify-start space-x-4 pt-10">
	                    <HButton link="/components" title="Browse Components" />
	                    <HButton link="/product" title="Explor Products" />
	                </div>
	                <div className="flex md:hidden flex-row justify-start space-x-4 pt-10">
	                    <HButton link="/components" title="Components" />
	                    <HButton link="/product" title="Products" />
	                </div>
	            </div>
	        </div>
	        <div className="pt-8 md:pt-24">
	            <HScrollx />
	        </div>
        </div>
	)
}
