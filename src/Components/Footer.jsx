import React from 'react'
import { useDentistState } from '../Components/utils/global.context';

const Footer = () => {
  const { state } = useDentistState();

  return (
    <footer className={state.theme}>
      <div className="footer-text">
        <p><b>Powered by Solymar Quiaro y Cristian Ovalles</b></p>
      </div>
      <div className="footer-images">
        <div className="footer-images-left">
          <img src="/images/DH.png" alt="DH-logo" />
        </div>
        <div className="footer-images-right social-icons">
          <img src="/images/ico-facebook.png" alt="Facebook" />
          <img src="/images/ico-instagram.png" alt="Instagram" />
          <img src="/images/ico-whatsapp.png" alt="WhatsApp" />
          <img src="/images/ico-tiktok.png" alt="TikTok" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;