import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import Button from '../src/components/Buttons'
import Header from '../src/components/Header'
import MaxWidthWrapper from '../src/components/MaxWidthWrapper'
import COLORS from '../src/constants/colors'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Davi Nakano - UX Designer</title>
        <meta name="description" content="Davi Nakano's UX Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer />

      <MaxWidthWrapper>
        <Header />
      </MaxWidthWrapper>

      <CloudsContainer />

      <MaxWidthWrapper>
        <HeroImageContainer>
          <Image src="/assets/clay-illustration.png" width="560px" height="603px" alt="A cloud head with HTML, CSS, JS, React, Figma and InVision logos coming out of it." />
        </HeroImageContainer>
        <HeroTextContainer>
          <h1>Hello! I am Davi.</h1>
          <p>A curiosity-driven, serial-listener and question-asker <b>UX Designer</b>, aiming to be the people channel for creating <b>delightful experiences</b>.</p>
          <HeroCTA variant="fill" size="md">Check my work</HeroCTA>
        </HeroTextContainer>
      </MaxWidthWrapper>
    </Container>
  )
}

const Spacer = styled.div`
  min-height: 48px;
`

const Container = styled.div`
  position: relative;
  background: ${COLORS.mainLinearGradient};
  height: 760px;
  color: ${COLORS.white};

  @media (max-width: 600px) {
    height: 660px;
  }
`

const HeroImageContainer = styled.div`
  position: absolute;
  right: -24px;

  @media (max-width: 1150px) {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    right: 0px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 603px;
  width: 45%;

  h1 {
    font-size: ${48 / 16}rem;
    position: relative;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.725rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 400px;
  }
`

const CloudsContainer = styled.div`
  position: absolute;
  height: 213px;
  bottom: -115px;
  left: 0;
  right: 0;
  background: url("/assets/clouds.svg") bottom center;
`

const HeroCTA = styled(Button)`
  align-self: flex-start;
`

export default Home
