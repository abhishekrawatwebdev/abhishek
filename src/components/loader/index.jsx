import React from 'react'
import './loader.css'
const Loader = () => {
    let index = 0;
   const loaderData=[
        {
            name:"Hello!"
        },
        {
            name:"नमस्ते"
        },
        {
            name:"Bonjour!"
        },
        {
            name:"Hola!"
        }
    ]
    // useEffect(()=>{
    //     setInterval(()=>{
    //         index=index+1;
    //     },1000)
    // },[index])
  return (
    <div className='loader'>
       <h3> {loaderData[index].name}</h3>
    </div>
  )
}

export default Loader;