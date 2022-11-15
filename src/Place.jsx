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
            <Link to="/Connectwallet" type="button" id="nav_btn">
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
        <Link Id="inp-location">
          <input type="button" id="location" value="Location" />
        </Link>
        <img src="/setting-5.png" alt="" id="location_icon" />
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
      <div className="footer">
        <div className="left_footer_div">
          <div id="footer_img">
            <img src="logo.png" />
          </div>
          <div id="footer_icons">
            <a>
              <img src="/facebook.png" />
            </a>
            <a>
              <img src="/instagram.png" />
            </a>
            <a>
              <img src="/twitter.png" />
            </a>
          </div>
          <div id="copyright">
            <img src="/copyright.png" />
            <p>2022 Metabnb</p>
          </div>
        </div>
        <div className="right_footer_div">
          <div className="footer_div ">
            <p className="ft_hd">Community</p>
            <Link to="/" className="div1">
              <p>NFT</p>
            </Link>
            <Link to="/" className="div1">
              <p>Tokens</p>
            </Link>
            <Link to="/" className="div1">
              <p>Landlords</p>
            </Link>
            <Link to="/" className="div1">
              <p>Discord</p>
            </Link>
          </div>
          <div className="footer_div">
            <p className="ft_hd">Places</p>
            <Link to="/" className="div2">
              <p>Castle</p>
            </Link>
            <Link to="/" className="div2">
              <p>Farms</p>
            </Link>
            <Link to="/" className="div2">
              <p>Beach</p>
            </Link>
            <Link to="/" className="div2">
              <p>Learn more</p>
            </Link>
          </div>
          <div className="footer_div">
            <p className="ft_hd">About us</p>
            <Link to="/" className="div3">
              <p>Road map</p>
            </Link>
            <Link to="/" className="div3">
              <p>Creator</p>
            </Link>
            <Link to="/" className="div3">
              <p>Career</p>
            </Link>
            <Link to="/" className="div3">
              <p>Contact us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
