import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Header from "./Header";
import Footer from "./Footer";
import COLORS from "../constants/colors";

const CaseStudyLayout: NextPage = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>Davi Nakano - UX Designer</title>
        <meta name="description" content="Davi Nakano's UX Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer />

      <CloudsContainer />

      <MaxWidthWrapper>
        <Header />
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <CloudsSpacer>{children}</CloudsSpacer>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <Footer />
      </MaxWidthWrapper>
    </Container>
  );
};

const CloudsSpacer = styled.div`
  padding-top: 130px;

  /* Vertically align with the tilted logo on the left */
  padding-left: 11px;

  color: black;
`;

const Spacer = styled.div`
  min-height: 48px;
`;

const Container = styled.div`
  position: relative;
  background: ${COLORS.mainLinearGradient};
  height: 235px;
  color: ${COLORS.white};

  h2 {
    max-width: 756px;
    margin: 0 auto;
  }

  ul {
    max-width: 645px;
    margin: 0 auto;
  }
`;

const CloudsContainer = styled.div`
  position: absolute;
  height: 213px;
  bottom: -115px;
  left: 0;
  right: 0;
  background: url("/assets/clouds.svg") bottom center;
`;

export default CaseStudyLayout;
