import React from 'react'

function Content() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-gray-200 p-4">
        <div id="leftContent" className="section">
          <h2 className="text-lg font-bold mb-2">Professional Skills</h2>
          <ol className="list-decimal pl-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>MongoDb</li>
            <li>MySQL</li>
            <li>Data Analysis</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Predictive Modeling</li>
            <li>Time Series Forecasting</li>
            <li>Recommendation Systems</li>
          </ol>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-4">
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
                <td className="border p-2">2024</td>
                <td className="border p-2">4</td>
                <td className="border p-2">3.44</td>
                <td className="border p-2">86%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">FSc Pre Engineering</td>
                <td className="border p-2">2018</td>
                <td className="border p-2">1100</td>
                <td className="border p-2">829</td>
                <td className="border p-2">75%</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="border p-2">3</td>
                <td className="border p-2">Matriculation</td>
                <td className="border p-2">2016</td>
                <td className="border p-2">1100</td>
                <td className="border p-2">950</td>
                <td className="border p-2">86%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="hobbies" className="section">
          <h2 className="text-lg font-bold mb-2">Hobbies</h2>
          <ul className="list-disc pl-4">
            <li>Music</li>
            <li>Football</li>
            <li>Photography</li>
          </ul>
        </div>

        <div id="life-ambitions" className="section">
          <h2 className="text-lg font-bold mb-2">Life Ambitions</h2>
          <ul className="list-disc pl-4">
            <li><strong>Achieved:</strong>
              <ul className="list-disc pl-4">
                <li>Make Friends</li>
                <li>Complete my Bachelors in Computer Science</li>
                <li>Start Journaling</li>
                <li>Start Exercising</li>
              </ul>
            </li>
            <li><strong>Struggling:</strong>
              <ul className="list-disc pl-4">
                <li>Build a career in Data Science</li>
                <li>Be financially independent</li>
                <li>Travel to at least 10 countries</li>
                <li>Learn how to play a guitar</li>
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
                <li>Casted my vote in elections</li>
                <li>Organized awareness campaigns regarding Breast Cancer</li>
              </ul>
            </li>
            <li><strong>Struggling:</strong>
              <ul className="list-disc pl-4">
                <li>Advocating for environmental conservation</li>
                <li>Supporting education initiatives</li>
                <li>Raising awareness about social evils</li>
                <li>Fighting corruption in different government departments</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-full md:w-1/4 p-4 bg-gray-200">
        <div id="rightContent" className="section">
          <h2 className="text-lg font-bold mb-2">Professional Projects</h2>
          <ol className="list-decimal pl-4">
            <li>Portfolio Website</li>
            <li>Hostel Admission Management Website</li>
            <li>Music Recommendation System</li>
            <li>Air Pollution Monitoring System</li>
            <li>Multioutput Urdu Comment Classification</li>
            <li>Breast Cancer Detection Using MaskRCNN</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Content
