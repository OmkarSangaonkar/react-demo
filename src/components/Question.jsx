import React from 'react'
import CatagorizeQuestion from './questions/CatagorizeQuestion'
import Comprenhession from './questions/Comprenhession'
import ClozeQuestion from './questions/ClozeQuestion'


function Question() {
  return (
    <div>
       <CatagorizeQuestion/>
       <ClozeQuestion/>
       <Comprenhession/>
    </div>
  )
}

export default Question