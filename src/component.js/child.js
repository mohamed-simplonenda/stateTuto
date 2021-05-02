import React from 'react'


// const Child = ({name,age,lastname}) => {
const Child = ({image,titre,description}) => {
  return(
    <div> 
    {/* <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{lastname}</h1> */}
        <img src={image}/>
    <h1>{titre}</h1>
    <p>{description}</p>
    
    </div>
   )

 }

export default Child