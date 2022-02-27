import React from "react";

function Footer() {
  let footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MytodosList.com</p>
    </footer>
  );
}

export default Footer;
