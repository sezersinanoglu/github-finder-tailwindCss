import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad amet quis quaerat sit odio delectus minima sapiente voluptas pariatur consequatur.
      <a href="https://sezersinanoglu.github.io/">
        {' '} Sezer Sinanoglu Github
      </a>{' '} Portfolio Front to back
      <strong>
        <a href="https://github.com/sezersinanoglu/sezersinanoglu.github.io">{' '}Github Repo Sezer SINANOGLU</a>
      </strong>.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className='text-white'> 1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">Layout By: 
      <a href="#" className='text-white'> Sezer Sinanoglu</a>
      </p>
    </div>
  )
}

export default About
