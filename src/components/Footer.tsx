import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-minimal">
      <div className="container">
        <div className="footer-minimal__brand">
          <img src="/assets/logo.png" alt="NoorSkyJets" width={40} height={40} />
          <span className="footer-minimal__name">NoorSkyJets</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
