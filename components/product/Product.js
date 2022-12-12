import HButton from "@components/hero/HButton";
import { Data } from "data/Data";
import { SetStateAction, useState } from "react";
import Filter from "./Filter";
import SearchList from "./SearchList";

function Product() {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    const [seeAll, setSeeAll] = useState(false);
    const [selectProject, setSelectProject] = useState("All Projects");

    const handleChange = (e) => {
        setSearchField(e.target.value);
        if (e.target.value === "") {
          setSearchShow(false);
        } else {
          setSearchShow(true);
        }
      };
    
    const selectProjectsByCategory = Data.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        if (selectProject == "All Projects") return category; 
        else return category.includes(selectProject);
      });
    
    const filteredProduct = selectProjectsByCategory.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchField.toLowerCase()) ||
          product.category.toLowerCase().includes(searchField.toLowerCase()) ||
          product.search.toLowerCase().includes(searchField.toLowerCase())
        );
      });
    
    const filteredProductn = selectProjectsByCategory.filter((product) => {
        return product.name.toLowerCase() || product.category.toLowerCase();
      });

    function searchList() {
        if (searchShow) {
            return (
            <SearchList searchShow={searchShow} filteredProduct={filteredProduct.slice(0, 6)} />
            );
        } else {
            return (
            <SearchList searchShow={searchShow} filteredProduct={filteredProductn.slice(0, 6)} />
            );
        }
        }
    
    function seeall(){
      setSeeAll(!seeAll)
    }

    function allList(){
      if (seeAll && filteredProduct.length > 6) {
        return (
        <SearchList searchShow={searchShow} filteredProduct={filteredProduct.slice(6)} />
        );
    }
    }

    return(
        <div className="h-fit flex flex-col mx-2 md:mx-28">
          <div className="w-3/6 shadow-md bg-transparent mx-auto rounded flex flex-row gap-2 p-3 border border-gray-200 dark:border-gray-800">
            <input
                onChange={handleChange}
                className="w-full text-sm py-2 rounded-lg sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light border-none outline-none focus:outline-none bg-transparent"
                id="name"
                name="name"
                type="search"
                required={false}
                placeholder="Enter Key Words To Search Items."
                aria-label="Name"
            />
            <Filter setSelectProject={setSelectProject} /> 
          </div>
          <div className="mx-auto pt-3">
            <span className="capitalize block bg-gray-200 dark:bg-gray-900 bg-opacity-50 shadow-sm rounded-md py-1 px-3 font-semibold text-md text-gray-500 dark:text-gray-400">
             Filtered {filteredProduct.length} Item Out Of {selectProjectsByCategory.length}, Range [0, {Data.length}]
            </span>
          </div>
          <div className="pt-4 md:pt-8 lg:pt-12">
          {searchList()}
          {allList()}
          </div>
          <div onClick={seeall} className="mt-4 md:mt-8 flex justify-center items-center">
            <HButton link="" title={seeAll ? "Minimize Results" : "See All Results"} />
          </div>
    </div>
    )
}

export default Product