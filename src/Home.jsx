import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import "./Connect.css";

function FirstSection() {

  const [modal, setOpenModal] = useState(false)

  const linkConnect = () => {
    setOpenModal(!modal) 
  }
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
            <Link to="/" type="button" id="nav_btn" onClick={linkConnect}>
              Connect wallet
            </Link>
          </div>
        </nav>
      </div>
      <div className="mobile_view">
        <div className="logo_img">
          <img src="/public/Group.png" />
        </div>
        <div>
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>
          <ul className="menu">
            <li id="top_list">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Place">Place to stay</Link>
            </li>
            <li>
              <Link to="/">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
            <li id="down_list">
              <Link to="/" type="button" id="nav_btn">
                Connect wallet
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="first_sect">
        <div className="left_div">
          <p id="heading">
            Rent a <span className="color_span">Place</span> away from{" "}
            <span className="color_span">Home</span> in the{" "}
            <span className="color_span">metaverse</span>
          </p>
          <p id="paragraph">
            we provide you access to luxurk and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="input_field">
            <input
              type="text"
              placeholder="Search for location"
              id="search_field"
            />
            <input type="button" value="Search" id="search_btn" />
          </div>
        </div>
        <div className="right_div">
          <img src="/firstsection.png" alt="" />
        </div>
      </div>
      <div className="first_sect_btm">
        <img id="first_sect_btm1" src="/mbtoken.png" alt="" />
        <img id="first_sect_btm2" src="metamask.png" alt="" />
        <img id="first_sect_btm3" src="/opensea.png" alt="" />
      </div>
      <div className="second_sect">
        <p>Inspiration for your next adventure</p>
        <div id="grid">
          <a href="/" id="grp1" className="group">
            <img src="/Group1.png" />
          </a>
          <a href="/" id="grp2" className="group">
            <img src="/Group2.png" />
          </a>
          <a href="/" id="grp3" className="group">
            <img src="/Group3.png" />
          </a>
          <a href="/" id="grp4" className="group">
            <img src="/Group4.png" />
          </a>
          <a href="/" id="grp5" className="group">
            <img src="/Group5.png" />
          </a>
          <a href="/" id="grp6" className="group">
            <img src="/Group6.png" />
          </a>
          <a href="/" id="grp7" className="group">
            <img src="/Group7.png" />
          </a>
          <a href="/" id="grp8" className="group">
            <img src="/Group8.png" />
          </a>
        </div>
      </div>
      <div className="third_sect">
        <div className="third_sect_div">
          <p id="third_sect_header">Metabnb NFTs</p>
          <p id="third_sect_para">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <Link to="/" type="button">
            Learn more
          </Link>
        </div>
        <div className="third_sect_img">
          <a>
            <img src="/Frame.png" id="frame"/>
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="left_footer_div">
          <div id="footer_img">
            <img src="logo.png" />
          </div>
          <div id="footer_icons">
            <a className="footer_icons_img">
              <img src="/facebook.png" />
            </a>
            <a className="footer_icons_img">
              <img src="/instagram.png" />
            </a>
            <a className="footer_icons_img">
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
            <Link to="/" className="last_div">
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
            <Link to="/" className="last_div">
              <p>Contact us</p>
            </Link>
          </div>
        </div>
      </div>
      {modal && (
        <div className="popup_div" onClick={linkConnect}>
        <div className="popup">
          <div className="top_popup">
            <p>Connect Wallet</p>
            <img src="/x.png" id="close" onClick={linkConnect} />
          </div>
          <div className="down_popup">
            <p>Choose your preferred wallet:</p>
            <Link to={"/"} className="input_btn">
              <input type="button" value="Metamask" id="btn1" />
            </Link>
            <img src="/image66.png" id="img1" />
            <img src="/Chevron.png" id="arrow1" />
            <Link to={"/"} className="input_btn">
              <input type="button" value="WalletConnect" id="btn2" />
            </Link>
            <img src="/image69.png" id="img2" />
            <img src="/Chevron.png" id="arrow2" />
          </div>
        </div>
      </div>
      )}
      
    </div>
  );
}



export default FirstSection;


