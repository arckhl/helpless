import React from 'react';

function CaraKerja() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Gambar di sebelah kiri */}
      <div className="md:w-1/2">
        <img
          src="kesehatanbencana.png"
          alt="Cara Kerja"
          className="w-full h-auto max-h-full md:max-w-sm" // Menambahkan max-w-sm untuk mengatur lebar maksimal gambar
          style={{ maxWidth: '80%' }} // Style inline untuk memastikan gambar tidak melebihi parent element
        />
      </div>
      
      {/* Penjelasan singkat di sebelah kanan */}
      <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
        <h1 className="text-4xl font-bold mb-4">Cara Kerja Kami</h1>
        <p className="text-lg text-gray-700">
          Di sini Anda dapat menambahkan penjelasan singkat tentang cara kerja sistem yang sedang Anda bangun. Misalnya, bagaimana proses pengumpulan data, pengelolaan kebutuhan, atau sistem penyaluran bantuan dalam respons terhadap bencana alam.
        </p>
      </div>
    </div>
  );
}

export default CaraKerja;
