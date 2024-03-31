import React from 'react'
import profileImage from '../public/dp.jpg';

function Header() {
  return (
    <header className="bg-gray-200 p-4 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Hassan Tahir</h1>
          <p className="text-sm md:text-base mb-4 md:mb-0 max-w-md">
            Machine Learning Engineer / Data Scientist
          </p>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 text-center">
          <img src={profileImage} alt="Profile" className="w-32 h-32 md:w-48 md:h-auto md:mx-auto max-w-full" />
        </div>
      </header>
  )
}

export default Header
