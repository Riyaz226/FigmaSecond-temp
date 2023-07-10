import React,{useState} from 'react'
import Sec from './Second'
import Thir from './Third'
import Four from './Fourt'
import one from '../images/social1.jpg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './Style.css'
import {toast} from 'react-toastify'

function Fronend() {

//  const getdata = useSelector((state)=>state.cartreducer);
  //console.log(getdata)
  
 // const sidebar = useSelector((state)=>state.sidebar);

   const dispatch = useDispatch;

//   const send = () =>{
  
// }
const [changeColor,setChangeColor]=useState(false);

 const handleClick=()=>{
  setChangeColor(!changeColor) 
}
  return (
    <>
<div className='rounded-2xl p-1 m-1'>    

<section className=' rounded-2xl p-5 m-4' id="section">
   <div class='container  px-4 mx-auto '>
<div class="flex">
<button class='md:px-6 lg:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
</button>
<span class='px-5'>

</span>
<a class=' flex text-2xl font-medium pr-5 mr-5  lg:border-r border-yellow-300 
md:pt-1'>
   Generix</a>
    <div class="my-auto" >
      <ul class="hidden lg:flex font-bold text-gray-600">
        <li class="pr-5"><Link to="" class="px-3 py-2  hover:text-teal-400 ">About</Link></li>
        <li class="pr-5"><Link to="" class="px-3 py-2  hover:text-teal-400">Features</Link></li>
        <li class="pr-5"><Link to="" class="px-3 py-2  hover:text-teal-400">How it works</Link></li>
        <li class="pr-5"><Link to="" class="px-3 py-2  hover:text-teal-400">Pricing</Link></li>
        <li class="pr-5"><Link to="" class="px-3 py-2  hover:text-teal-400">Contact us</Link></li>
      </ul>
     </div>  
       <a class='hidden md:block ml-auto text-medium text-white px-8 py-2 rounded-2xl hover:bg-red-700' 
       >
        Sign Up
       </a>
      
</div>
<div>
<ul class="hidden lg:hidden font-bold text-gray-600" >
        <li class="mt-1"><Link to="" class="py-2">About</Link></li>
        <li class="mt-1"><Link to="" class="py-2" >Features</Link></li>
        <li class="mt-1"><Link to="" class="py-2">How it works</Link></li>
        <li class="mt-1"><Link to="" class="py-2">Pricing</Link></li>
        <li class="mt-1"><Link to="" class="py-2">Contact us</Link></li>
        <ul>
           <li class="mt-2"><Link to="" 
           class="md:hidden ml-16 text-medium bg-red-500 text-white
            border border-black-200 rounded-3xl px-8 py-1 hover:bg-blue-500">Sign</Link></li>
        </ul>
      </ul>
</div>

<div class='flex flex-wrap py-12 lg:py-36'>
<div class='w-full lg:w-1/2'>
<h2 class='text-center lg:text-left text-3xl font-semibold lg:text-5xl lg:font-bold ' id="write">
  All the tools you need for Social Media analyties
</h2>

<p class='text-center lg:text-left mt-5 sm:mt-4 lg:mt-8 text-gray-600' id="write2">
  Prove the Roi of social media,plan more enaging content,and create automated white label analytics reports 
</p>

<div class='flex justify-center '>
<div class='flex mt-8 fond-bold bg-red-400 rounded-3xl py-3 pl-7  lg:mx-1 ' style={{width:"215px",cursor:"pointer",backgroundColor:"white",}} id="left">
Get Started to free
<span class='lg:pl-3 '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
</span>
</div>
</div>

<p class='text-center lg:text-left mt-3 sm:mt-6 text-gray-600' id="write2">No credit card requried.Plans start at $0/mo.</p>
</div>
<div class='w-full pt-5 flex justify-center lg:w-1/2 lg:flex'>
   <img className='rounded-3xl ml-8 ' src={one} alt="" style={{width:"543px",height:"273px",marginLeft:"1px"}}/>
</div>

</div>

<div class='flex justify-center'style={{cursor:"pointer"}}>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  animate-bounce">
       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
     </svg>
  <span class='ml-1 text-white'>
      Scroll Down
     </span>
</div>
 </div>
  </section>  
 </div>

<section><Sec/></section>  
<section><Thir/></section>  
<section><Four/></section>  


    </>
  )
}

export default Fronend