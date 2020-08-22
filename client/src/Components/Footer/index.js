import React from "react";
import "./style.css";
import logo from "./../../images/logo.png";
import iconPhone from "./../../images/icons/iconPhone.png";
import iconMail from "./../../images/icons/iconMail.png";
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-sub'>
          <img
            className='logo'
            onClick={() => {
              window.location.href = "#";
            }}
            src={logo}
          />
        </div>
        <p>
          <hr className='vr' />
        </p>
        <div
          className='footer-sub'
          onClick={() => {
            window.location.href = "tel:+970597252561";
          }}
        >
          <img className='icon-footer' src={iconPhone} />
          <div>
            <p
              onClick={() => {
                window.location.href = "tel:+970597252561";
              }}
            >
              +970597252561
            </p>
            <br />
            <p
              onClick={() => {
                window.location.href = "tel:+970566252561";
              }}
            >
              +970566252561
            </p>
          </div>
        </div>
        <p>
          <hr className='vr' />
        </p>
        <div
          className='footer-sub'
          onClick={() => {
            window.location.href = "mailto:yousef@qawasmeh.com";
          }}
        >
          <img className='icon-footer' src={iconMail} />
          <p>yousef@qawasmeh.com</p>
          <p></p>
        </div>
      </div>
      <hr className='hr' />
      <div className='copy-right'>
        <p>© Yousef Qawasmeh - 2020</p>
      </div>
    </div>
  );
};

export default Footer;
