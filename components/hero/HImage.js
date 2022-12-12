

export default function HImage() {
	return (
		<div
			role="status"
			className="w-full text-[0.8125rem] md:w-full leading-5 text-slate-900 rounded bg-transparent border shadow-xl shadow-black/5 ring-1 ring-slate-700/10 border-gray-200 animate-pulse md:p-6 dark:border-gray-700"
		>
			<div className="items-center mb-4 h-4 bg-gray-300 rounded dark:bg-gray-500">
				<ul className="mx-4 pb-2 flex flex-row justify-between items-center">
					<li>
						<kbd className="text-gray-800  dark:text-gray-100 hidden md:flex">explore</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100 hidden md:flex">blog</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100 hidden md:flex">service</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100 hidden md:flex">join</kbd>
					</li>
				</ul>
			</div>
			<div className="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-500">
				<svg
					className="w-12 h-12 text-gray-200 dark:text-gray-300"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 640 512"
				>
					<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
				</svg>
			</div>
			<div className=" mb-4 h-4 bg-gray-300 rounded dark:bg-gray-500">
				<ul className="flex flex-row justify-between">
					<li>
						<svg
							aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100">1</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100">2</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100">3</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100">4</kbd>
					</li>
					<li>
						<kbd className="text-gray-800  dark:text-gray-100">5</kbd>
					</li>
					<li>
						<svg
							aria-hidden="true"
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</li>
				</ul>
			</div>
			<div className="flex flex-row justify-between gap-x-2">
				<div className="rounderd p-2 w-fit">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
					<div className="flex items-center mt-4 space-x-3">
						<svg
							className="w-14 h-14 text-gray-200 dark:text-gray-200"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
								clipRule="evenodd"
							></path>
						</svg>
						<div>
							<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
							<div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
						</div>
					</div>
				</div>
                <div className="rounderd p-2 w-fit">
					<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
					<div className="flex items-center mt-4 space-x-3">
						<svg
							className="w-14 h-14 text-gray-200 dark:text-gray-200"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
								clipRule="evenodd"
							></path>
						</svg>
						<div>
							<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
							<div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
						</div>
					</div>
				</div>
			</div>

			<span className="sr-only">Loading...</span>
		</div>
	)
}
