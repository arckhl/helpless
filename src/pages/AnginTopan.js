import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function AnginTopan() {
  const [selectedData, setSelectedData] = useState({
    timDibutuhkan: 'Tidak Memilih',
    manajemenPangan: 'Tidak Memilih',
    sumberKesehatan: 'Tidak Memilih',
    kendaraanDibutuhkan: 'Tidak Memilih',
  });

  // Handler untuk mengirim data yang dipilih
  const handleDataSubmit = () => {
    console.log(selectedData); // Misalnya, cetak data yang dipilih ke konsol
    toast.success("Data Sukses Dikirim", {
        position: "top-right",
        autoClose: 3000, // Durasi toast muncul dalam milidetik
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Bencana Banjir</h1>
      <p className="text-center text-sm text-gray-700 mb-4">
        Halaman ini untuk menentukan kebutuhan kesehatan saat bencana alam Banjir.
      </p>
      <div className="flex flex-col md:flex-row items-start ml-8 md:ml-16 lg:ml-24 w-full max-w-3xl">
        {/* Dropdown untuk Tim yang Dibutuhkan */}
        <div className="w-full max-w-xs mb-4 md:mb-0 md:mr-5">
          <label htmlFor="tim-dibutuhkan" className="block text-lg font-medium text-gray-700 mb-2">
            Tim yang Dibutuhkan
          </label>
          <select
            id="tim-dibutuhkan"
            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedData.timDibutuhkan}
            onChange={(e) => setSelectedData({ ...selectedData, timDibutuhkan: e.target.value })}
          >
            <option value="Tidak Memilih">Tidak Memilih</option>
            <option value="Tim Search and Rescue (SAR)">Tim Search and Rescue (SAR)</option>
            <option value="Tim Evakuasi">Tim Evakuasi</option>
            <option value="Tim Kesehatan atau TIM DVI">Tim Kesehatan atau TIM DVI</option>
            <option value="Tim Binmas yang selalu mencatat semua informasi">
              Tim Binmas yang selalu mencatat semua informasi
            </option>
            <option value="Tim Lalulintas ini bergerak mengatur kepadatan arus kendaraan di jalan raya">
              Tim Lalulintas ini bergerak mengatur kepadatan arus kendaraan di jalan raya
            </option>
          </select>
        </div>
        
        {/* Dropdown untuk Manajemen Pangan */}
        <div className="w-full max-w-xs">
          <label htmlFor="manajemen-pangan" className="block text-lg font-medium text-gray-700 mb-2">
            Manajemen Pangan :
          </label>
          <select
            id="manajemen-pangan"
            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedData.manajemenPangan}
            onChange={(e) => setSelectedData({ ...selectedData, manajemenPangan: e.target.value })}
          >
            <option value="Tidak Memilih">Tidak Memilih</option>
            <option value="Beras">Beras</option>
            <option value="Pasokan Makanan Lengkap">Pasokan Makanan Lengkap</option>
            <option value="Pasokan Minuman Lengkap">Pasokan Minuman Lengkap</option>
          </select>
        </div>
      </div>

      {/* Dropdown untuk Sumber Daya Kesehatan dan Kendaraan yang Dibutuhkan */}
      <div className="flex flex-col md:flex-row items-start ml-8 md:ml-16 lg:ml-24 w-full max-w-3xl mt-4">
        {/* Dropdown untuk Sumber Daya Kesehatan */}
        <div className="w-full max-w-xs mb-4 md:mb-0 md:mr-5">
          <label htmlFor="sumber-kesehatan" className="block text-lg font-medium text-gray-700 mb-2">
            Sumber Daya Kesehatan :
          </label>
          <select
            id="sumber-kesehatan"
            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedData.sumberKesehatan}
            onChange={(e) => setSelectedData({ ...selectedData, sumberKesehatan: e.target.value })}
          >
            <option value="Tidak Memilih">Tidak Memilih</option>
            <option value="Obat - obatan lengkap">Obat - obatan lengkap</option>
            <option value="Dokter dan Suster">Dokter dan Suster</option>
            <option value="Staf kesehatan lengkap">Staf kesehatan lengkap</option>
          </select>
        </div>
        
        {/* Dropdown untuk Kendaraan yang Dibutuhkan */}
        <div className="w-full max-w-xs">
          <label htmlFor="kendaraan-dibutuhkan" className="block text-lg font-medium text-gray-700 mb-2">
            Kendaraan yang Dibutuhkan :
          </label>
          <select
            id="kendaraan-dibutuhkan"
            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedData.kendaraanDibutuhkan}
            onChange={(e) => setSelectedData({ ...selectedData, kendaraanDibutuhkan: e.target.value })}
          >
            <option value="Tidak Memilih">Tidak Memilih</option>
            <option value="Ambulance">Ambulance</option>
            <option value="Helikopter">Helikopter</option>
            <option value="Damkar">Damkar</option>
            <option value="Motor Trail Rescuer">Motor Trail Rescuer</option>
            <option value="Kendaraan Amfibi">Kendaraan Amfibi</option>
            <option value="Kapal atau perahu">Kapal atau perahu</option>
            <option value="Truk Seba Guna">Truk Seba Guna</option>
            <option value="Truk Tangki Air">Truk Tangki Air</option>
          </select>
        </div>
      </div>

      {/* Tombol untuk submit dan kembali */}
      <div className="flex justify-between mt-4 w-full max-w-3xl">
        {/* Tombol untuk kembali ke halaman Home */}
        <Link to="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Kembali
        </Link>

        {/* Tombol untuk submit dan menampilkan data yang dipilih */}
        <Link
          to={{
            pathname: '/banjir',
            state: { selectedData: selectedData },
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDataSubmit} // Memanggil fungsi handleDataSubmit saat tombol diklik
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default AnginTopan;
