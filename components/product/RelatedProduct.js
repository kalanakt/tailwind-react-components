import { myLoader } from "@utils/all";
import { Data } from "data/Data";
import Image from "next/image";
import Link from "next/link";

export default function RelatedProjects(props) {
	const selectProjectsByCategory = Data.filter((item) => {
		let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(props.category);
	  });

	const filteredProduct = selectProjectsByCategory.filter((product) => {
        return product.name.toLowerCase() || product.category.toLowerCase();
      });

	return (
		<div className="bg-transparent mt-5">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-5 text-left">
				Related Projects
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
				{filteredProduct.slice(0, 3).map((project, index) => {
					return (
						<Link
							href="/product/[id]"
							as={"/product/" + project.id}
							passHref={true}
							key={index}
						>
						<Image
							src={project.img}
							loader={myLoader}
							className="rounded-md cursor-pointer"
							width="400"
							height="400"
							alt={project.title}
						/>
						</Link>
					);
				})}
			</div>
		</div>
	);
}