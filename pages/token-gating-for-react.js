import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import BlogPostCardFinal from '../components/blog-post-card-final'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'

const TokenGatingForReact = (props) => {
  return (
    <>
      <div className="token-gating-for-react-container">
        <Head>
          <title>Token Gating for React | Gateful Token Gating Platform</title>
          <meta
            name="description"
            content="Gateful is the easiest way to token gate your React website or web application. Transform your React project into a Web3-connected community."
          />
          <meta
            property="og:title"
            content="Token Gating for React | Gateful Token Gating Platform"
          />
          <meta
            property="og:description"
            content="Gateful is the easiest way to token gate your React website or web application. Transform your React project into a Web3-connected community."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <header id="header" className="token-gating-for-react-hero">
          <div className="token-gating-for-react-menu">
            <div>
              <DangerousHTML
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></DangerousHTML>
            </div>
            <div
              id="navigation"
              className="token-gating-for-react-desktop-navigation"
            >
              <nav className="token-gating-for-react-centered-desktop">
                <div className="token-gating-for-react-left">
                  <Link href="/">
                    <a className="token-gating-for-react-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="token-gating-for-react-logo"
                      />
                    </a>
                  </Link>
                  <div className="token-gating-for-react-links">
                    <Link href="/token-gating-platform">
                      <a className="token-gating-for-react-link01 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="token-gating-for-react-link02 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="token-gating-for-react-link03 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="token-gating-for-react-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="token-gating-for-react-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="token-gating-for-react-link04">
                      <div className="token-gating-for-react-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="token-gating-for-react-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="token-gating-for-react-text04">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="token-gating-for-react-centered-mobile">
                <div className="token-gating-for-react-left1">
                  <div className="token-gating-for-react-links1">
                    <Link href="/token-gating-platform">
                      <a className="token-gating-for-react-link05 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="token-gating-for-react-link06 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="token-gating-for-react-link07 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="token-gating-for-react-header">
            <h1 className="token-gating-for-react-text09">
              Token Gating for React
            </h1>
            <p className="token-gating-for-react-text10">
              Add Gateful to Your React Project
            </p>
          </header>
        </header>
        <section className="token-gating-for-react-features">
          <div className="token-gating-for-react-title">
            <span className="token-gating-for-react-text11">
              <span>
                Let&apos;s grow your social media
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>presence</span>
            </span>
            <span className="token-gating-for-react-text15">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>eiusmod tempor incididunt.</span>
            </span>
          </div>
          <div className="token-gating-for-react-cards">
            <div className="token-gating-for-react-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="token-gating-for-react-icon2"
                />
                <span className="token-gating-for-react-text18">Schedule</span>
                <span className="token-gating-for-react-text19">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="token-gating-for-react-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="token-gating-for-react-icon3"
                />
                <span className="token-gating-for-react-text20">Publish</span>
                <span className="token-gating-for-react-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="token-gating-for-react-container2">
              <div className="card token-gating-for-react-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="token-gating-for-react-icon4"
                />
                <span className="token-gating-for-react-text22">Analyze</span>
                <span className="token-gating-for-react-text23">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="token-gating-for-react-icon5"
                />
                <span className="token-gating-for-react-text24">Get leads</span>
                <span className="token-gating-for-react-text25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="token-gating-for-react-section">
          <section className="token-gating-for-react-content">
            <div className="token-gating-for-react-centered-container">
              <div className="token-gating-for-react-image-container">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/reactgate1-1300w.png"
                  loading="eager"
                  className="token-gating-for-react-cards-image"
                />
              </div>
              <div className="token-gating-for-react-right1">
                <h2 className="token-gating-for-react-text26 title">
                  <span>
                    Deploy Web3 token gates faster with Gateful and React
                  </span>
                  <br></br>
                </h2>
                <div className="token-gating-for-react-category">
                  <span className="token-gating-for-react-text29">
                    <span>
                      Token gating is a powerful tool for React developers that
                      brings an innovative layer of access control to Web3 and
                      decentralized applications. By leveraging token gating,
                      developers can create exclusive content and features
                      within their applications, granting access only to users
                      holding specific tokens or meeting certain criteria. This
                      not only enhances user engagement by incentivizing token
                      ownership, but also opens up new revenue streams and
                      fosters a sense of community among users. Ultimately,
                      token gating elevates the user experience in React-based
                      applications and unlocks the full potential of
                      decentralized ecosystems.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <h2 className="token-gating-for-react-text32 title">
              Create on-chain conditions for React
            </h2>
            <div className="token-gating-for-react-centered-container1">
              <div className="token-gating-for-react-right2">
                <div className="token-gating-for-react-category1">
                  <span className="token-gating-for-react-text33">
                    Add Web3 Token Gating functionality to your React project
                    without writing code. Our integration with LIT Protocol
                    allows you to create multiple token gates within the same
                    experience. Create on-chain conditions unique to your
                    audience and requirements. Gateful works with Ethereum,
                    Polygon, Binance, and Solana.
                  </span>
                  <img
                    alt="image"
                    src="/playground_assets/networks-200h.png"
                    className="token-gating-for-react-image"
                  />
                </div>
              </div>
            </div>
            <div className="token-gating-for-react-centered-container2">
              <h2 className="token-gating-for-react-text34 title">
                Benefits of React for Web3 development
              </h2>
              <div className="token-gating-for-react-right3">
                <div className="token-gating-for-react-category2">
                  <span className="token-gating-for-react-text35">
                    The main benefit of using React for Web3 projects is its
                    ability to handle data storage efficiently. This makes it
                    easier for developers who are working on smart contracts or
                    decentralized applications (DApps). With other libraries
                    such as AngularJS or VueJS there are issues with performance
                    when it comes down to storing large amounts of information
                    in memory because these libraries rely heavily on creating
                    new objects every time something changes which takes up more
                    space than necessary on your computer&apos;s hard drive.
                    Using React enables you not only save space but also speed
                    up your application&apos;s response time so users don&apos;t
                    have wait long periods before seeing anything happen after
                    clicking buttons.
                  </span>
                </div>
              </div>
            </div>
            <h2 className="token-gating-for-react-text36 title">
              Learn more about Web3 and Token Gating
            </h2>
            <div className="token-gating-for-react-blog">
              <div className="token-gating-for-react-container3">
                <Link href="/about-token-gating-platforms">
                  <a className="token-gating-for-react-link08">
                    <BlogPostCardFinal
                      title="Token Gating Platforms: Revolutionizing Web3 Content Monetization and Access Control"
                      image_src="https://images.unsplash.com/photo-1676911809746-85d90edbbe4a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYxfHx3ZWIzfGVufDB8fHx8MTY4MTc0Mjk4OA&amp;ixlib=rb-4.0.3&amp;w=1500"
                      description="Token Gating Platforms have emerged as a groundbreaking technology for content monetization and access control solutions. These platforms are becoming increasingly popular among creators, developers, and brands alike, as they offer a new and dynamic way of rewarding and engaging with their audience."
                      rootClassName="rootClassName3"
                      className="token-gating-for-react-component"
                    ></BlogPostCardFinal>
                  </a>
                </Link>
              </div>
              <div className="token-gating-for-react-container4">
                <Link href="/an-introduction-to-nft-token-gating">
                  <a className="token-gating-for-react-link09">
                    <BlogPostCardFinal
                      title="Embracing the Future of Web3:  An Introduction to NFT Token Gating"
                      image_src="https://images.unsplash.com/photo-1664022617645-cf71791942e4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUzfHxuZnR8ZW58MHx8fHwxNjgxNzQzMzY0&amp;ixlib=rb-4.0.3&amp;w=1500"
                      description='The world of digital assets and blockchain technology is evolving at a rapid pace. With the advent of non-fungible tokens (NFTs) and their increasing popularity, a new concept known as "token gating" has emerged. This white paper aims to introduce the concept of NFT token gating, its benefits, and potential use case examples that can revolutionize various industries.'
                      rootClassName="rootClassName2"
                      className="token-gating-for-react-component1"
                    ></BlogPostCardFinal>
                  </a>
                </Link>
              </div>
              <div className="token-gating-for-react-container5">
                <Link href="/unlock-token-gate-signature-request">
                  <a className="token-gating-for-react-link10">
                    <BlogPostCardFinal
                      title="Unlocking a Token Gate: The Signature Request Explained"
                      image_src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGJsb2NrY2hhaW58ZW58MHx8fHwxNjgxNzQzNDM3&amp;ixlib=rb-4.0.3&amp;w=1500"
                      description="As the world of online communities and digital content continues to grow, creators and platforms are seeking new ways to protect access, validate users, and promote exclusivity. Enter token gating, a novel approach to ensuring only qualified individuals gain entry to specific online spaces. In this article, we will dive into the concept of token gating and, more specifically, demystify the signature request – a crucial component of the process. Let's start by understanding what token gating is and how it works."
                      rootClassName="rootClassName1"
                      className="token-gating-for-react-component2"
                    ></BlogPostCardFinal>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </section>
        <Testimonial rootClassName="testimonial-root-class-name"></Testimonial>
        <Footer rootClassName="footer-root-class-name11"></Footer>
      </div>
      <style jsx>
        {`
          .token-gating-for-react-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .token-gating-for-react-hero {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-size: cover;
            background-image: linear-gradient(
                135deg,
                rgba(16, 138, 130, 0.75) 0%,
                rgba(18, 16, 74, 0.8) 50%,
                rgba(119, 18, 57, 0.8) 100%
              ),
              url('/playground_assets/fractal%20image%209-1500w.png');
            background-position: top left, center;
          }
          .token-gating-for-react-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-for-react-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-for-react-centered-desktop {
            width: 100%;
            display: flex;
            max-width: 1280px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .token-gating-for-react-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .token-gating-for-react-link {
            display: contents;
          }
          .token-gating-for-react-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .token-gating-for-react-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .token-gating-for-react-link01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-for-react-link02 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-for-react-link03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-for-react-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-for-react-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .token-gating-for-react-link04 {
            display: contents;
          }
          .token-gating-for-react-get-started {
            cursor: pointer;
            display: flex;
            box-shadow: 5px 5px 0px 1px #db2763;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 10px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-primary-700);
          }
          .token-gating-for-react-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-for-react-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .token-gating-for-react-text04 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-for-react-centered-mobile {
            width: 100%;
            display: none;
            max-width: 1280px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .token-gating-for-react-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .token-gating-for-react-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .token-gating-for-react-link05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-for-react-link06 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-for-react-link07 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-for-react-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .token-gating-for-react-text09 {
            color: var(--dl-color-gray-white);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .token-gating-for-react-text10 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .token-gating-for-react-features {
            width: 100%;
            height: 1388px;
            display: none;
            z-index: 0;
            align-items: center;
            padding-top: 200px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            background-color: EFF0F2;
          }
          .token-gating-for-react-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-for-react-text11 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .token-gating-for-react-text15 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .token-gating-for-react-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-for-react-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .token-gating-for-react-icon2 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-for-react-text18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-for-react-text19 {
            line-height: 24px;
          }
          .token-gating-for-react-publish {
            height: initial;
          }
          .token-gating-for-react-icon3 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-for-react-text20 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-for-react-text21 {
            line-height: 24px;
          }
          .token-gating-for-react-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .token-gating-for-react-icon4 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-for-react-text22 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .token-gating-for-react-text23 {
            line-height: 24px;
          }
          .token-gating-for-react-icon5 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-for-react-text24 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-for-react-text25 {
            line-height: 24px;
          }
          .token-gating-for-react-section {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .token-gating-for-react-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-for-react-centered-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .token-gating-for-react-image-container {
            flex: 1;
            height: auto;
            display: flex;
            justify-content: center;
          }
          .token-gating-for-react-cards-image {
            width: 100%;
            height: auto;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-color: var(--dl-color-primary-700);
            border-width: 1px;
            border-radius: 20px;
          }
          .token-gating-for-react-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .token-gating-for-react-text26 {
            font-size: 30px;
            text-align: left;
            line-height: 1.25em;
          }
          .token-gating-for-react-category {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .token-gating-for-react-text29 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .token-gating-for-react-text32 {
            font-size: 30px;
            text-align: left;
          }
          .token-gating-for-react-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: center;
          }
          .token-gating-for-react-right2 {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .token-gating-for-react-category1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .token-gating-for-react-text33 {
            color: rgb(0, 0, 0);
            font-size: 20px;
            text-align: center;
            line-height: 30px;
            margin-bottom: 0px;
          }
          .token-gating-for-react-image {
            width: auto;
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            object-fit: cover;
          }
          .token-gating-for-react-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: var(--dl-color-primary-100);
          }
          .token-gating-for-react-text34 {
            color: var(--dl-color-gray-white);
            font-size: 30px;
            text-align: left;
          }
          .token-gating-for-react-right3 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-for-react-category2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .token-gating-for-react-text35 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            text-align: center;
            line-height: 30px;
          }
          .token-gating-for-react-text36 {
            font-size: 30px;
            text-align: left;
          }
          .token-gating-for-react-blog {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .token-gating-for-react-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-for-react-link08 {
            display: contents;
          }
          .token-gating-for-react-component {
            text-decoration: none;
          }
          .token-gating-for-react-container4 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-for-react-link09 {
            display: contents;
          }
          .token-gating-for-react-component1 {
            text-decoration: none;
          }
          .token-gating-for-react-container5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .token-gating-for-react-link10 {
            display: contents;
          }
          .token-gating-for-react-component2 {
            text-decoration: none;
          }
          @media (max-width: 1200px) {
            .token-gating-for-react-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .token-gating-for-react-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .token-gating-for-react-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .token-gating-for-react-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .token-gating-for-react-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .token-gating-for-react-header {
              width: 100%;
              max-width: 1200px;
            }
            .token-gating-for-react-features {
              padding-top: 260px;
            }
            .token-gating-for-react-title {
              width: 100%;
              max-width: 1200px;
            }
            .token-gating-for-react-text11 {
              font-size: 36px;
              line-height: 40px;
            }
            .token-gating-for-react-text15 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .token-gating-for-react-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .token-gating-for-react-text19 {
              line-height: 21px;
            }
            .token-gating-for-react-text21 {
              line-height: 21px;
            }
            .token-gating-for-react-text23 {
              line-height: 21px;
            }
            .token-gating-for-react-text24 {
              font-size: 24px;
            }
            .token-gating-for-react-text25 {
              line-height: 21px;
            }
            .token-gating-for-react-content {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .token-gating-for-react-text26 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-text32 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-text34 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-text36 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-blog {
              flex-direction: column;
            }
            .token-gating-for-react-container3 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-for-react-container4 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .token-gating-for-react-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .token-gating-for-react-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .token-gating-for-react-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .token-gating-for-react-left {
              margin-left: var(--dl-space-space-unit);
            }
            .token-gating-for-react-links {
              display: none;
            }
            .token-gating-for-react-right {
              margin-right: var(--dl-space-space-unit);
            }
            .token-gating-for-react-sign-in {
              display: flex;
            }
            .token-gating-for-react-get-started {
              display: flex;
            }
            .token-gating-for-react-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .token-gating-for-react-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .token-gating-for-react-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .token-gating-for-react-text09 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .token-gating-for-react-text10 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .token-gating-for-react-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-text11 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .token-gating-for-react-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .token-gating-for-react-text18 {
              font-size: 24px;
            }
            .token-gating-for-react-text19 {
              font-size: 14px;
            }
            .token-gating-for-react-publish {
              margin-left: 0px;
            }
            .token-gating-for-react-text20 {
              font-size: 24px;
            }
            .token-gating-for-react-text21 {
              font-size: 14px;
            }
            .token-gating-for-react-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .token-gating-for-react-analyze {
              margin-right: 0px;
            }
            .token-gating-for-react-text22 {
              font-size: 24px;
            }
            .token-gating-for-react-text23 {
              font-size: 14px;
            }
            .token-gating-for-react-text25 {
              font-size: 14px;
            }
            .token-gating-for-react-content {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-centered-container {
              flex-direction: column-reverse;
            }
            .token-gating-for-react-right1 {
              margin-left: 0px;
            }
            .token-gating-for-react-text26 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-text29 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-for-react-text32 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-centered-container1 {
              flex-direction: column-reverse;
            }
            .token-gating-for-react-right2 {
              margin-left: 0px;
            }
            .token-gating-for-react-text33 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-for-react-centered-container2 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .token-gating-for-react-text34 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-right3 {
              margin-left: 0px;
            }
            .token-gating-for-react-text35 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-for-react-text36 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .token-gating-for-react-hero {
              height: auto;
            }
            .token-gating-for-react-centered-desktop {
              justify-content: center;
            }
            .token-gating-for-react-logo {
              width: 180px;
            }
            .token-gating-for-react-sign-in {
              display: none;
            }
            .token-gating-for-react-get-started {
              display: none;
            }
            .token-gating-for-react-icon {
              display: none;
            }
            .token-gating-for-react-centered-mobile {
              justify-content: center;
            }
            .token-gating-for-react-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .token-gating-for-react-link07 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .token-gating-for-react-text10 {
              color: #eee9fe;
            }
            .token-gating-for-react-features {
              padding-top: 200px;
            }
            .token-gating-for-react-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-for-react-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-for-react-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .token-gating-for-react-analyze {
              margin-bottom: 0px;
            }
            .token-gating-for-react-content {
              padding-top: var(--dl-space-space-threeunits);
            }
            .token-gating-for-react-right1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-text26 {
              align-self: center;
              text-align: center;
            }
            .token-gating-for-react-text32 {
              align-self: center;
              text-align: center;
            }
            .token-gating-for-react-centered-container1 {
              width: auto;
            }
            .token-gating-for-react-right2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-text33 {
              width: auto;
            }
            .token-gating-for-react-text34 {
              align-self: center;
              text-align: center;
            }
            .token-gating-for-react-right3 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-for-react-text36 {
              align-self: center;
              text-align: center;
            }
            .token-gating-for-react-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default TokenGatingForReact
