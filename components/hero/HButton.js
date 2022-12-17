import Link from "next/link"

export default function HButton({ title="Enter Title Plz", link="", style="", ...props }) {
	let className="rounded overflow-hidden cursor-pointer px-5 py-2.5 h-min w-fit group bg-blue-500 font-medium relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 dark:text-white hover:text-opacity-120 text-gray-700 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
  if (style !== ""){
		className += style
	}
	if (link !== ""){
		return (
			<Link href={link} target="__blank" passHref={true}>
				<div className={className}>
					<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
					<span className="relative">{title}</span>
				</div>
			</Link>
		)
	}
	else
		return (
		<div className="rounded overflow-hidden cursor-pointer px-5 py-2.5 h-min w-fit group bg-blue-500 font-medium relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 dark:text-white hover:text-opacity-120 text-gray-700 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
			<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
			<span className="relative">{title}</span>
		</div>
	)
}
