import profileImage from '/dp.jpg';
import whatsappIcon from '/whatsappicon_20x20.png';
import facebookIcon from '/facebook_20x20.png'; 
import instagramIcon from '/instagram_20x20.png'; 
import youtubeIcon from '/youtube_20x20.png';
import twitterIcon from '/twittericon_20x20.png';

function App() {
  return (
    <>
      <header className="bg-gray-200 p-4 flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Hassan Tahir</h1>
          <p className="text-sm md:text-base mb-4 md:mb-0 max-w-md">
            Machine Learning Engineer / Data Scientist
          </p>
        </div>
        <div className="md:w-1/2 text-center">
          <img src={profileImage} alt="Profile" className="w-32 h-32 md:w-48 md:h-auto md:mx-auto max-w-full float-right" />
        </div>
      </header>
      <nav className="bg-gray-800 text-white p-4 flex flex-wrap justify-between">
        <ul className="flex justify-start">
          <li className="mr-4">
            <a href="#educational-history" className="hover:text-gray-300">Educational History</a>
          </li>
          <li className="mr-4">
            <a href="#professional-skills" className="hover:text-gray-300">Professional Skills</a>
          </li>
          <li className="mr-4">
            <a href="#professional-projects" className="hover:text-gray-300">Professional Projects</a>
          </li>
          <li className="mr-4">
            <a href="#hobbies" className="hover:text-gray-300">Hobbies</a>
          </li>
          <li className="mr-4">
            <a href="#life-ambitions" className="hover:text-gray-300">Life Ambitions</a>
          </li>
          <li className="mr-4">
            <a href="#efforts-for-country" className="hover:text-gray-300">Efforts for Country</a>
          </li>
        </ul>
        <div>
          <a href="#footer" className="hover:text-gray-300">Contact Me</a>
        </div>
      </nav>
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
      <footer className="bg-gray-900 text-white text-center py-8 sm:w-full md:w-full lg:w-full xl:w-full">
        <p className="mb-4">Email: 11a55an@proton.me</p>
        <div className="flex justify-center">
          <a href="https://wa.me/00923034624939" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src={whatsappIcon} alt="WhatsApp" className="h-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src={facebookIcon} alt="Facebook" className="h-8" />
          </a>
          <a href="https://www.instagram.com/11a55an/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src={instagramIcon} alt="Instagram" className="h-8" />
          </a>
          <a href="https://youtube.com/@11a55an" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src={youtubeIcon} alt="YouTube" className="h-8" />
          </a>
          <a href="https://twitter.com/11a55an" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
            <img src={twitterIcon} alt="Twitter" className="h-8" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;