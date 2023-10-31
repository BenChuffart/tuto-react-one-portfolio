import React from 'react'

const About = () => {
  return (
    <div 
        name="about" 
        className='w-full h-screen bg-gradient-to-b from bg-gray-800 to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'
                >About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores commodi corporis ullam, sunt dignissimos, non temporibus voluptates quis deleniti fuga blanditiis officia quidem suscipit, voluptate nesciunt quod nemo saepe incidunt. Expedita, nesciunt. Facere nam dicta similique, est deleniti ad quaerat eveniet reprehenderit suscipit corrupti, eius tempore soluta ea totam! Blanditiis.
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos at eligendi eum, cumque maiores odit aliquid est. Suscipit dicta, facilis ipsum mollitia fugit temporibus culpa rerum eligendi eveniet aliquam commodi pariatur quos vero. Voluptatum velit error molestias. Aliquid facere nemo ipsam mollitia delectus quidem esse alias inventore necessitatibus voluptatibus!
            </p>
        </div>
    </div>
  )
}

export default About