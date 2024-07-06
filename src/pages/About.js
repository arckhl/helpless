import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-sm text-gray-700">
        Ketika bencana melanda, kami di sini untuk Anda. Setiap langkah yang kami ambil dalam membangun platform ini didedikasikan untuk memberikan bantuan dan harapan kepada mereka yang terkena dampak. Kami percaya bahwa dengan teknologi dan kepedulian, kita bisa bersama-sama melewati masa sulit ini. Bersama, kita membangun jaringan yang kuat untuk mendukung satu sama lain dalam menghadapi tantangan yang berat. Mari bersama-sama membawa cahaya di tengah gelapnya masa-masa sulit ini.
        </p>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <h2 className="text-xl mb-2">Contact Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default About;
