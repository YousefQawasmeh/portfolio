import React from "react";
import "./style.css";
import logo from "./../../images/logo.png";
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
          <img
            className='icon-footer'
            src='https://cdn1.iconfinder.com/data/icons/free-98-icons/32/call-512.png'
          />
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
          <img
            className='icon-footer'
            src='https://cdn0.iconfinder.com/data/icons/ui-for-commercial/32/email_mail_gmail-512.png'
          />
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
