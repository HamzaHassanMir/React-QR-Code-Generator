import React, { useState } from "react";
import QRCode from "react-qr-code";
import './style.css'

const Qrcodegen = () => {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  function handleBtnClick() {
    setQRCode(input);
    setInput('');
  }

  return (
    <div className="qr-container">
      <h1>Qr Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter Value"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleBtnClick}
        >
          Generator
        </button>
        <div className="">
          <QRCode id="qr-code" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Qrcodegen;
