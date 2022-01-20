import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <div style={{ cursor: "pointer" }}>
          <Image
            src="/assets/logo.svg"
            width="72px"
            height="72px"
            alt="Website's Logo"
          ></Image>
        </div>
      </Link>
      <nav>
        <NavList>
          <NavListItem>
            <Link href="/work">Work</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/about">About</Link>
          </NavListItem>
          <NavListItem>
            <a
              href="https://drive.google.com/file/d/1JtzLvKF4KUHCRrgKWSWQTmBtog0vU0xM/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </NavListItem>
        </NavList>
      </nav>
    </Wrapper>
  );
};

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
`;

const NavList = styled.ul`
  display: flex;

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavListItem = styled.li`
  list-style-type: none;

  :not(:last-of-type) {
    margin-right: 80px;
  }
`;

export default Header;
