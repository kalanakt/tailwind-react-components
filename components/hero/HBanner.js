import Link from "next/link"

export default function HBanner() {
	return (
		<div
			className="h-fit text-base font-semibold leading-7 text-sky-500"
			aria-hidden="true"
		>
			<Link href="/bundle" target="__blank" passHref={true}>
				<div className="hidden pr-4 max-w-fit cursor-pointer items-baseline gap-x-3 rounded-full bg-slate-400/10 ring-1 ring-slate-900/10 hover:bg-slate-500/10 md:flex">
					<span className="rounded-full bg-secondary-light dark:bg-ternary-dark px-3 py-1 text-[13px] font-semibold leading-5 text-gray-600 dark:text-white">
						Black Friday Deal
					</span>
					<span className="text-[13px] font-medium leading-5 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
						Get All-access, Mega bundle for{"  "}<s className="opacity-60">$448</s> $299{" "}
						<span aria-hidden="true">→</span>
					</span>
				</div>
			</Link>
		</div>
	)
}
