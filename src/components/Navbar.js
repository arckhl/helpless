import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          HelpLess
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/carakerja" className="text-white">Cara Kerja</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
