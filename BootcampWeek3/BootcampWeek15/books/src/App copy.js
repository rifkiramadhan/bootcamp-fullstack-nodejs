import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {

  const [kalimat, setKalimat] = useState(`Ini Kalimat`);
  const [counter, setCounter] = useState(0);

  const changeKalimat = () => {
    setKalimat("Kalimat Baru");
  };

  const addCounter = () => {
    if (counter >= 10) {
      alert("Maximal 10, Thanks");
    } else {
      let temp = counter + 1;
      setCounter(temp);
      console.log(counter);
    };
  };

  const substractCounter = () => {
    if (counter <= 0) {
      alert("Tidak bisa kurang dari 0!");
    } else {
      let temp = counter - 1;
      setCounter(temp);
      console.log(counter);
    };
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        {/* <div class="col-12">
          <h1>{kalimat}</h1>
          <button onClick={() => changeKalimat()} className="btn btn-sm btn-primary">Change Kalimat</button>
        </div> */}
        <div className="col-12">
          <button onClick={() => addCounter()} className="btn btn-outline-info">+ Tambah</button>
          <h1>{counter}</h1>
          <button onClick={() => substractCounter()} className="btn btn-outline-info">+ Kurang</button>
        </div>
      </div>
    </div>
  );
};

export default App;
