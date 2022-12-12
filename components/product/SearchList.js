import { Data } from 'data/Data';
import React, { useState } from 'react';
import Card from './Card';
import NotFound from './NotFound';


function SearchList({filteredProduct, searchShow=false}) {
  const [seeAll, setSeeAll] = useState(false);
  const filtered = filteredProduct.map( (project) =>  <Card key={project.id} {...project} />);
  if (filtered.length == 0 && searchShow==true){
    return (
      <NotFound />
    )
  }
  else if (filtered.length == 0 ){
    const filtered2 = Data.slice(0, 6).map( project =>  <Card key={project.id} {...project} />);
    return (
      <div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3'>
        {filtered2}
      </div>
    )
  }
  else {
    return (
      <div className='w-full md:grid md:grid-cols-2 lg:grid-cols-3'>
        {filtered}
      </div>
    );
  }
}

export default SearchList;