import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

function GifExpertApp() {

  const [categories, setCategories] = useState(['One Punch Man']);

  // const handleAdd = () => {
  //   setCategories( [...categories, 'Ranma 1/2'] )
  //   // setCategories( cats => [...cats, 'Ranma 1/2'])
  // }



  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />


      <ol>
        { categories.map( category => (
          <GifGrid 
            category={category} 
            key={category}
          />
        ) )
         }
      </ol>

    </>
  )
}

export default GifExpertApp
