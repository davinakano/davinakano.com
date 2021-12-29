import Image from "next/image";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <a>
        <Image src="/assets/logo.svg" width="72px" height="72px" alt="Website's Logo"/>
      </a>
      <nav>
        <NavList>
          {/* <NavListItem>Work</NavListItem>
          <NavListItem>About</NavListItem>
          <NavListItem>Resume</NavListItem> */}
        </NavList>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 32px;

  /* Overriding NextJS's Image component inline styles */
  a img {
    left: -28px !important;
  }
`

const NavList = styled.ul`
  display: flex;

  @media (max-width: 480px) {
    display: none;
  }
`

const NavListItem = styled.li`
  list-style-type: none;

  :not(:last-of-type) {
    margin-right: 80px;
  }
`

export default Header;