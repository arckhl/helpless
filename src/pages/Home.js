import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center flex-grow">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Kebutuhan Kesehatan Bencana Anda, Sudah Ada Pada Genggaman Kami</h1>
          <p className="text-sm text-gray-700 mb-4">
            Dimana saat terjadi bencana alam, anda tidak perlu khawatir atas kebutuhan kesehatan anda, kami akan sepenuh hati membantu anda.
          </p>
        </div>
        <div className="md:w-1/2 ml-4">
          <img src="kesehatan.png" alt="Disaster Health" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="container mx-auto p-4 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Jenis Bencana Alam</h1>
      </div>
      <div className="flex flex-wrap mt-4 justify-center">
        <Link to="/banjir" className="flex flex-col items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
          <img src="banjir.png" alt="Banjir" className="w-20 h-20 mb-2 rounded-full" />
          Banjir
        </Link>
        <Link to="/angintopan" className="flex flex-col items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
          <img src="angintopan.png" alt="Angin Topan" className="w-20 h-20 mb-2 rounded-full" />
          Angin Topan
        </Link>
        <Link to="/gempabumi" className="flex flex-col items-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
          <img src="gempabumi.png" alt="Gempa Bumi" className="w-20 h-20 mb-2 rounded-full" />
          Gempa Bumi
        </Link>
        <Link to="/erupsi" className="flex flex-col items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
          <img src="erupsi.png" alt="Erupsi" className="w-20 h-20 mb-2 rounded-full" />
          Erupsi
        </Link>
        <Link to="/kebakaran" className="flex flex-col items-center bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2">
          <img src="kebakaran.png" alt="Kebakaran" className="w-20 h-20 mb-2 rounded-full" />
          Kebakaran
        </Link>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center w-full mt-4">
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

export default Home;
