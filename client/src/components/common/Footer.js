// const Footer = () => {
// 	const year = new Date().getFullYear();
  
// 	return (
	


// 			<footer>
// 			{`Copyright © Woodfire ${year}`}</footer>



// 	);
//   };
  
//   export default Footer;
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h3 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-20px" }}>
Woodfire Restaurants       </h3>
      <Container>
        <Row>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Staff Managment</FooterLink>
            <FooterLink href="#">Item Managment</FooterLink>
            <FooterLink href="#">Table Reservation</FooterLink>
            <FooterLink href="#">Food Promotions</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Malaysia</FooterLink>
            <FooterLink href="#">Johor Bahru</FooterLink>
            <FooterLink href="#">Skudai</FooterLink>
            <FooterLink href="#">JDT</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="www.facebook.com">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="www.instagram.com">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="www.twitter.com">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="www.youtube.com">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;