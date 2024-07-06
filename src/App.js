import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Banjir from './pages/Banjir.js';
import AnginTopan from './pages/AnginTopan.js';
import GempaBumi from './pages/GempaBumi.js';
import Erupsi from './pages/Erupsi.js';
import Kebakaran from './pages/Kebakaran.js';
import CaraKerja from './pages/CaraKerja.js';
import Navbar from './components/Navbar';
import { HealthProvider } from './context/HealthContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer dari react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk styling toast

function App() {
  return (
    <Provider store={store}> 
      <HealthProvider>
        <ToastContainer /> {/* Tambahkan ToastContainer di sini */}
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/carakerja" element={<CaraKerja />} />
              <Route path="/banjir" element={<Banjir />} />
              <Route path="/angintopan" element={<AnginTopan />} />
              <Route path="/gempabumi" element={<GempaBumi />} />
              <Route path="/erupsi" element={<Erupsi />} />
              <Route path="/kebakaran" element={<Kebakaran />} />
            </Routes>
          </div>
        </Router>
      </HealthProvider>
    </Provider>  
  );
}

export default App;
