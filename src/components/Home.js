import React from 'react'


export default Home;


export function Home() {
  return (
    <section className='grid grid-cols-2 gap-8 content-center'>
    <div>
 
      <h1 className='text-8xl text-white font-bold'>Imagine your</h1>
      <br/>
      <h1 className='text-8xl text-white font-bold'>future...</h1>
      <h2 className='text-6xl text-[#FFC72C] font-bold py-10'>I want to be a</h2>
     
      <input className='text-white px-10 py-2 shadow-lg' aria-label='search input' placeholder="a scientist..."></input>

     
      <button className='bg-[#46F0BD] px-12 text-black font-bold  py-2 shadow-lg'>☁️ search </button>

      </div>

      <div className='bg-white'> 
            <div>
            <p class="mb-3 text-4xl font-normal text-black dark:text-gray-400">Katherine Johnson</p>
            <p class="mb-3 text-3xl font-normal text-gray-400">Mathematician</p>
            <img src="https://static01.nyt.com/images/2020/02/26/obituaries/24Johnson1/merlin_157899726_f670c425-adb2-46f6-9c15-bc356754fb87-superJumbo.jpg?quality=75&auto=webp" ></img>
            </div>     
            <div>
             
            </div> 
          
    
      </div>

    </section>
  )
}




