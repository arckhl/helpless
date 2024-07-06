// DataCollection.js
import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function DataCollection() {
  const data = useSelector(state => state.data);

  // Gunakan data sesuai kebutuhan

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Data Collection</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <footer className="fixed bottom-0 left-0 w-full text-white bg-gray-800 p-4 text-center">
        <h2 className="text-xl mb-2">Contact Us</h2>
        <div className="flex justify-center">
          <a href="https://facebook.com" className="mr-4">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" className="mr-4">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" className="mr-4">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://wa.me" className="mr-4">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DataCollection;
