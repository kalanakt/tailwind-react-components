import HButton from "@components/hero/HButton";
import HBanner from "@components/hero/HBanner";

export const components1 = [
  {
    id: 1,
    category: 'forms',
    subcategory: 'blog-cards',
    name: 'contact page 2',
    code: `<div
			class="h-fit text-base font-semibold leading-7 text-sky-500"
			aria-hidden="true"
		>
			<a href="/bundle" target="__blank" passHref={true}>
				<div class="hidden pr-4 max-w-fit cursor-pointer items-baseline gap-x-3 rounded-full bg-slate-400/10 ring-1 ring-slate-900/10 hover:bg-slate-500/10 md:flex">
					<span class="rounded-full bg-secondary-light dark:bg-ternary-dark px-3 py-1 text-[13px] font-semibold leading-5 text-gray-600 dark:text-white">
						Black Friday Deal
					</span>
					<span class="text-[13px] font-medium leading-5 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
						Get All-access, Mega bundle for{"  "}<s class="opacity-60">$448</s> $299{" "}
						<span aria-hidden="true">→</span>
					</span>
				</div>
			</a>
		</div>`,
    component: <HBanner />
  },
  {
    id: 2,
    category: 'forvh chcjv m',
    subcategory: 'contact',
    name: 'contact page 2',
    code: `<p class="bg-red-400 text-2xl">Ho</p>`,
    component: <HButton />
  },
  {
    id: 3,
    category: 'forms',
    subcategory: 'blog-cards',
    name: 'contact cj page 2',
    code:'<p>H chjhj o</p>',
    component: <HButton />
  },
  {
    id: 4,
    category: 'forvh chcjv m',
    subcategory: 'contact',
    name: 'contact page 2',
    code: '<p>H chjhj o</p>',
    component: <HButton />
  },
]