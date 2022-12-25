import React,{useRef} from 'react'
import './loader.css'
const Loader = () => {
    let index = useRef(0);
   const loaderData=[
        {
            greet:"Hello!"
        },
        {
            greet:"नमस्ते"
        },
        {
            greet:"Bonjour!"
        },
        {
            greet:"Hola!"
        }
    ]
  return (
    <div className='loader'>
       <h3 className='loader-greet'> {loaderData[index.current].greet}</h3>
    </div>
  )
}

export default Loader;