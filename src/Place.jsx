import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router-dom";
import "./Place.css";

function Place() {
  return (
    <div className="body">
      <div className="navbar">
        <nav className="nav">
          <div className="logo_img">
            <img src="/public/Group.png" />
          </div>
          <div className="nav_link">
            <Link to="/">Home</Link>
            <Link to="/Place">Place to stay</Link>
            <Link to="/">NFTs</Link>
            <Link to="/">Community</Link>
          </div>
          <div id="wallet_btn">
            <Link to="/" type="button" id="nav_btn">
              Connect wallet
            </Link>
          </div>
        </nav>
      </div>
      <div className="header_link">
        <Link>Resturant</Link>
        <Link>Cottage</Link>
        <Link>Castle</Link>
        <Link>Fantasy City</Link>
        <Link>Beach</Link>
        <Link>Cabins</Link>
        <Link>Off-grid</Link>
        <Link>Farm</Link>
        <Link>
          <input type="button" value="Location" />
        </Link>
      </div>
      <div className="gallery">
        <div id="gallery_grid">
          <a href="/" id="grp1">
            <img src="/Group2(1).png" />
          </a>
          <a href="/" id="grp2">
            <img src="/Group2(3).png" />
          </a>
          <a href="/" id="grp3">
            <img src="/Group2(4).png" />
          </a>
          <a href="/" id="grp4">
            <img src="/Group2(5).png" />
          </a>
          <a href="/" id="grp5">
            <img src="/Group2(6).png" />
          </a>
          <a href="/" id="grp6">
            <img src="/Group2(7).png" />
          </a>
          <a href="/" id="grp7">
            <img src="/Group2(8).png" />
          </a>
          <a href="/" id="grp8">
            <img src="/Group2(9).png" />
          </a>
          <a href="/" id="grp9">
            <img src="/Group2(10).png" />
          </a>
          <a href="/" id="grp10">
            <img src="/Group2(11).png" />
          </a>
          <a href="/" id="grp11">
            <img src="/Group2(12).png" />
          </a>
          <a href="/" id="grp12">
            <img src="/Group2(13).png" />
          </a>
          <a href="/" id="grp13">
            <img src="/Group13.png" />
          </a>
          <a href="/" id="grp14">
            <img src="/Group2(15).png" />
          </a>
          <a href="/" id="grp15">
            <img src="/Group2(16).png" />
          </a>
          <a href="/" id="grp16">
            <img src="/Group2(17).png" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Place;
