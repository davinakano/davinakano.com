import styled from "styled-components";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import COLORS from "../constants/colors";

const Footer = () => {
  return (
    <Wrapper>
      <IconLink href="https://www.linkedin.com/in/daviycnakano/" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </IconLink>
      <IconLink href="https://twitter.com/davinotdavid" rel="noreferrer" target="_blank">
        <BsTwitter />
      </IconLink>
      <IconLink href="https://www.instagram.com/davinotdavid/" rel="noreferrer" target="_blank">
        <BsInstagram />
      </IconLink>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: ${28 / 16}rem;
  color: ${COLORS.primary};
  margin-top: 106px;

  @media (max-width: 1024px) {
    margin-top: 165px;
  }
`

const IconLink = styled.a`
  color: ${COLORS.primary};

  :not(:last-of-type) {
    margin-right: 32px;
  }
`

export default Footer;