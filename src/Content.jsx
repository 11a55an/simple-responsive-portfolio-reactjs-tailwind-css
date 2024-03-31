import React from 'react'

function Content() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Container */}
      <div className="w-full md:w-1/3 bg-gray-200 p-4">
        <div id="leftContent" className="section">
          <h2 className="text-lg font-bold mb-2">Professional Skills</h2>
          <ol className="list-decimal pl-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ol>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full md:w-1/3 p-4">
        <div id="mainContent" className="section">
          <h2 className="text-lg font-bold mb-2">Educational History</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Degree Title</th>
                <th className="border p-2">Passing Year</th>
                <th className="border p-2">Total Marks</th>
                <th className="border p-2">Obtained Marks</th>
                <th className="border p-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">Bachelor's in Computer Science</td>
                <td className="border p-2">2022</td>
                <td className="border p-2">800</td>
                <td className="border p-2">720</td>
                <td className="border p-2">90%</td>
              </tr>
              {/* Add more rows if needed */}
            </tbody>
          </table>
        </div>

        <div id="hobbies" className="section">
          <h2 className="text-lg font-bold mb-2">Hobbies</h2>
          <ul className="list-disc pl-4">
            <li>Reading</li>
            <li>Playing Guitar</li>
            <li>Hiking</li>
          </ul>
        </div>

        <div id="life-ambitions" className="section">
          <h2 className="text-lg font-bold mb-2">Life Ambitions</h2>
          <ul className="list-disc pl-4">
            <li><strong>Achieved:</strong>
              <ul className="list-disc pl-4">
                <li>Become a skilled developer</li>
                <li>Travel to at least 10 countries</li>
                {/* Add more achieved ambitions */}
              </ul>
            </li>
            <li><strong>Struggling:</strong>
              <ul className="list-disc pl-4">
                <li>Start my own business</li>
                <li>Write a book</li>
                {/* Add more struggling ambitions */}
              </ul>
            </li>
          </ul>
        </div>

        <div id="efforts-for-country" className="section">
          <h2 className="text-lg font-bold mb-2">Efforts for Country</h2>
          <ul className="list-disc pl-4">
            <li><strong>Succeeded:</strong>
              <ul className="list-disc pl-4">
                <li>Volunteered for community service</li>
                <li>Donated to charity organizations</li>
                {/* Add more succeeded efforts */}
              </ul>
            </li>
            <li><strong>Struggling:</strong>
              <ul className="list-disc pl-4">
                <li>Advocating for environmental conservation</li>
                <li>Supporting education initiatives</li>
                {/* Add more struggling efforts */}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-1/3 p-4">
        <div id="rightContent" className="section">
          <h2 className="text-lg font-bold mb-2">Professional Projects</h2>
          <ol className="list-decimal pl-4">
            <li>Responsive Website</li>
            <li>E-commerce Application</li>
            <li>Chat Application</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Content
