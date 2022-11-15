import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router-dom";
import "./Connect.css";

function Popup() {
  return (
    <div className="popup_div">
      <div className="popup">
        <div className="top_popup">
          <p>Connect Wallet</p>
          <img src="/x.png" />
        </div>
        <div className="down_popup">
          <p>Choose your preferred wallet:</p>
          <Link to={"/"} className='input_btn'>
            <input type="button" value="Metamask" id="btn1"/>
          </Link>
          <img src="/image66.png" id="img1"/>
          <img src="/Chevron.png"  id="arrow1"/>
          <Link to={"/"} className='input_btn'>
            <input type="button" value="WalletConnect" id="btn2" />
          </Link>
          <img src="/image69.png" id="img2"/>
          <img src="/Chevron.png"  id="arrow2"/>
        </div>
      </div>
    </div>
  );
}

export default Popup;
