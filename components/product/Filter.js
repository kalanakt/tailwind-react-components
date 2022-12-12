const selectOptions = [
	'Admin Dashboard',
	'E Commerce',
	'Mobile Apps',
	'Desktop Apps',
	'React',
	'Vue',
];

function Filter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="px-3 text-sm sm:text-md focus:outline-none bg-transparent border-none outline-none"
		>
			<option value={setSelectProject} className="text-normal sm:text-md bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-none outline-none focus:outline-none bg-transparent">
				All Products
			</option>

			{selectOptions.map((option) => (
				<option className="bg-gray-300 dark:bg-gray-700 text-normal sm:text-md text-gray-900 dark:text-gray-100 border-none outline-none focus:outline-none bg-transparent" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default Filter;
