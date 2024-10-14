import React from 'react'
import Features from './Features'
import First from './First'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
      <Navbar/>
       <First/>
        <Features />
        <footer className="w-full py-4 bg-gray-800 text-center text-white mt-auto pt-16">
          <span>© 2024 AI-Powered Food Safety System</span>
        </footer>
    </>
  )
}

export default Home