import React, { Component } from 'react'
import './Style.css'

import one from '../images/transport.jpg'
import two from '../images/Ellipse.png'


export class Third extends Component {
  render() {
    return (
      <>
<div className='rounded-2xl p-1 m-1'>    
 
  <div className=' rounded-2xl p-5 m-4 ' id="section3">
           <img src={two} class='z-20 animate-ping w-6 absoulte right-96 top-36 ' />
            <div class='container px-5 py-4 '>
              <div class='flex flex-wrap '>
               <p class='w-full text-center text-1xl font-semibold lg:font-bold  lg:w-1/2 text-3xl font-bold pl-26  lg:text-left '>We provide logisties soultion tailor made for individual customber!
               </p>
              <p class='text-center pt-7 sm:py-9 lg:w-1/2 text-1xl font-semibold text-blue-700 mt-auto lg:text-left' style={{fontSize:'1em',wordSpacing:'2px'}}>Generix Express provides customized services for custombers around the world from 50+ leading industries.For more information please.
              <img src={two} class='z-20 animate-ping  w-6 absoulte ml-auto lg:left-96 top-36   ' />
              </p>
              <img src={two} class='z-20 animate-ping w-6 absoulte right-96 top-36 ' />
  <div>
                   </div>
              </div>            
          </div>
   </div> 
</div>

     <div class='ml-3 text-center my-1 lg:text-left lg:pl-48  ' style={{marginTop:"32px"}}>
     <p class=' text-3xl font-semibold '>Maritime transport</p>
      <p class='text-2xl my-4 sm:my-4 text-3xl font-semibold lg:text-4xl font-bold my-16' id='write3'>passengers or goods(cargo)</p>
 </div>

<section
      class="my-2 flex flex-wrap justify-center items-center gap-x-16 text-white  p-5 "
    >
    <div class="w-[300px] h-[340px] bg-transparent cursor-pointer group perspective">
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div class="absolute backface-hidden border-2 w-full h-full">
            <img src={one} class="w-full h-full" />
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">The King's Man</h1>
              <p class="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button
                class="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-11 delay-500 duration-1000 group-hover:bottom-11 scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
</div>
</section>  

<section class='px-9 '>
    <div class=''>
    <p class='text-2xl md:font font-semibold pt-3 text-center text-orange-600'>Our Awesome Team</p>
     
     <div class='mt-14 flex flex-wrap gap-8 justify-center'>
       <div class='w-1/3 w-64 text-center'>
          <img src="https://i.imgur.com/I9XFqdd.jpg" class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Diano Lansdowne</h3>
          <p class='text-1xl  text-gray-700 font1 pt-1'>Founder,CEO</p>
<div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>
      </div>

        <div class='w-1/3 w-64 text-center'>
          <img src='https://i.imgur.com/eX7uYfG.jpeg' class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Rey Mibourne</h3>
          <p class='text-1xl text-gray-700 font1 pt-1'>Software Engineer</p>
          <div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>      
        </div>
  
        <div class='w-1/3 w-64 text-center'>
          <img src='https://i.imgur.com/Zi7qqQA.jpg' class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Carolien Bloeme</h3>
          <p class='text-1xl text-gray-700 font1 pt-1'>Prdouct Marktig Manager</p>
          <div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>      
        </div>

        <div class='w-1/3 w-64 text-center'>
          <img src="https://i.imgur.com/Id57NSW.jpg" class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Gladys Kanyinda</h3>
          <p class=' text-gray-700 font1 pt-1'>Contect Manager</p>
          <div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>      
        </div>

        <div class='w-1/3 w-64 text-center'>
          <img src="https://i.imgur.com/NRYrB0l.jpeg" class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Diano Lansdowne</h3>
          <p class='text-1xl  text-gray-700 font1 pt-1'>Founder,CEO</p>
<div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>
      </div>

        <div class='w-1/3 w-64 text-center'>
          <img src="https://i.imgur.com/I9XFqdd.jpg" class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Rey Mibourne</h3>
          <p class='text-1xl text-gray-700 font1 pt-1'>Software Engineer</p>
          <div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>      
        </div>
  
        <div class='w-1/3 w-64 text-center'>
          <img src="https://i.imgur.com/waxFbz6.jpg" class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Carolien Bloeme</h3>
          <p class='text-1xl text-gray-700 font1 pt-1'>Prdouct Marktig Manager</p>
          <div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>      
        </div>

        <div class='w-1/3 w-64 text-center'>
          <img src= "https://i.imgur.com/0hhtbTn.jpeg" class='w-12 h-12 rounded-3xl mx-auto'/>
          <h3 class=' text-gray-700 font-bold pt-1'>Gladys Kanyinda</h3>
          <p class=' text-gray-700 font1 pt-1'>Contect Manager</p>
          <div class='flex justify-center pt-2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>
<span class='pl-5'></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-600">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
</div>      
        </div>

    </div>


  </div>
</section>

<section class='px-9'>
<div class='' style={{backgroundColor:"#fafafa"}}>
<p class='text-2xl pt-12 md:font font-semibold pt-24 text-center text-black-600'>News</p>
<div class='text-center mb-12 lg:mt-1 ' style={{wordSpacing:"2px"}}>
<p class='text-2xl font-semibold pt-24  text-gray-600'>Sep 2021, Height raises a$14M Series A from Redpoint and opens signup access</p>
<p class='text-2xl font-semibold pt-24  text-gray-600'>Jun 2020 ,Height raises a$2M Seed round from Lightspeed.IA Ventunes,and angles</p>
<p class='text-2xl font-semibold pt-24  text-gray-600'>Mar 2020, Height raises it is 5th employee</p>
<p class='text-2xl font-semibold pt-24  text-gray-600'>Aug 2019 ,Height lanuches is private beta</p>
<p class='text-2xl font-semibold pt-24  text-gray-600'>Aug 2018, Height raises a$2.25M in Seed round from Matrix Partners,and angles</p>
</div>
</div>
</section>
      </>
    )
  }
}

export default Third

