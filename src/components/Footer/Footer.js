import React from "react";

function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          © {year} Story Rent. All rigth reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
