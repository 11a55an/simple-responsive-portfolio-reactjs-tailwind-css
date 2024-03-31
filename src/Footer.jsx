import React from 'react';
import whatsappIcon from '../public/whatsappicon_20x20.png'; // Import your WhatsApp icon image
import facebookIcon from '../public/facebook_20x20.png'; // Import your Facebook icon image
import instagramIcon from '../public/instagram_20x20.png'; // Import your Instagram icon image
import youtubeIcon from '../public/youtube_20x20.png'; // Import your YouTube icon image
import twitterIcon from '../public/twittericon_20x20.png'; // Import your Twitter icon image

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      {/* Contact Information */}
      <p className="mb-4">Email: example@example.com</p>

      {/* Social Media Icons */}
      <div className="flex justify-center">
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
          <img src={whatsappIcon} alt="WhatsApp" className="h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
          <img src={facebookIcon} alt="Facebook" className="h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
          <img src={instagramIcon} alt="Instagram" className="h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
          <img src={youtubeIcon} alt="YouTube" className="h-8" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2 hover:opacity-75">
          <img src={twitterIcon} alt="Twitter" className="h-8" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
