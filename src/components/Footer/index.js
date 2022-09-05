import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap, 
  FooterLinkContainer, 
  FooterLinkWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink, 
  SocialMedia, 
  SocialMediaWrap, 
  SocialLogo, 
  WebsiteRights, 
  SocialIcons, 
  SocialIconLink
} from './FooterElements';


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Servicess</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Servicess</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Servicess</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">About us</FooterLink>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Servicess</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              File
            </SocialLogo>
            <WebsiteRights>file copyright {new Date().getFullYear()} All rights reversed.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" taret="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="/" taret="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="/" taret="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href="/" taret="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href="/" taret="_blank" aria-label="Linkedin">
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
};

export default Footer;