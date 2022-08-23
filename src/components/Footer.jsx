import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#52544b" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <p>

         {props.children}
        </p>


      </Container>
    </footer>
  );
};

export default Footer;
