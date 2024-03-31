import React from 'react';
import whatsappIcon from '../public/whatsappicon_20x20.png';
import facebookIcon from '../public/facebook_20x20.png'; 
import instagramIcon from '../public/instagram_20x20.png'; 
import youtubeIcon from '../public/youtube_20x20.png';
import twitterIcon from '../public/twittericon_20x20.png';

function Footer() {
  return (
    <div id='footer'>
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
    </div>
  );
}

export default Footer;
