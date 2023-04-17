import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import BlogPostCardFinal from '../components/blog-post-card-final'
import Testimonial from '../components/testimonial'

const TokenGatingSolutions = (props) => {
  return (
    <>
      <div className="token-gating-solutions-container">
        <Head>
          <title>
            Token Gating Solutions | Create Web3-Connected Experiences | Gateful
          </title>
          <meta
            name="description"
            content="Gateful is the best token gating solution for brands, e-commerce stores, creators, and developers to create web3-connected experiences."
          />
          <meta
            property="og:title"
            content="Token Gating Solutions | Create Web3-Connected Experiences | Gateful"
          />
          <meta
            property="og:description"
            content="Gateful is the best token gating solution for brands, e-commerce stores, creators, and developers to create web3-connected experiences."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <header id="header" className="token-gating-solutions-hero">
          <div className="token-gating-solutions-menu">
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
              className="token-gating-solutions-desktop-navigation"
            >
              <nav className="token-gating-solutions-centered-desktop">
                <div className="token-gating-solutions-left">
                  <Link href="/">
                    <a className="token-gating-solutions-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="token-gating-solutions-logo"
                      />
                    </a>
                  </Link>
                  <div className="token-gating-solutions-links">
                    <Link href="/token-gating-platform">
                      <a className="token-gating-solutions-link01 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="token-gating-solutions-link02 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="token-gating-solutions-link03 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="token-gating-solutions-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="token-gating-solutions-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="token-gating-solutions-link04">
                      <div className="token-gating-solutions-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="token-gating-solutions-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="token-gating-solutions-text04">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="token-gating-solutions-centered-mobile">
                <div className="token-gating-solutions-left1">
                  <div className="token-gating-solutions-links1">
                    <Link href="/token-gating-platform">
                      <a className="token-gating-solutions-link05 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="token-gating-solutions-link06 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="token-gating-solutions-link07 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="token-gating-solutions-header">
            <h1 className="token-gating-solutions-text09">
              Token Gating Solutions
            </h1>
            <p className="token-gating-solutions-text10">
              Create epic Web3-connected experiences with Gateful.
            </p>
          </header>
        </header>
        <section className="token-gating-solutions-features">
          <div className="token-gating-solutions-title">
            <span className="token-gating-solutions-text11">
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
            <span className="token-gating-solutions-text15">
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
          <div className="token-gating-solutions-cards">
            <div className="token-gating-solutions-container01">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="token-gating-solutions-icon2"
                />
                <span className="token-gating-solutions-text18">Schedule</span>
                <span className="token-gating-solutions-text19">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="token-gating-solutions-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="token-gating-solutions-icon3"
                />
                <span className="token-gating-solutions-text20">Publish</span>
                <span className="token-gating-solutions-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="token-gating-solutions-container02">
              <div className="card token-gating-solutions-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="token-gating-solutions-icon4"
                />
                <span className="token-gating-solutions-text22">Analyze</span>
                <span className="token-gating-solutions-text23">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="token-gating-solutions-icon5"
                />
                <span className="token-gating-solutions-text24">Get leads</span>
                <span className="token-gating-solutions-text25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="token-gating-solutions-section">
          <section className="token-gating-solutions-content">
            <div className="token-gating-solutions-centered-container">
              <div className="token-gating-solutions-right1">
                <div className="token-gating-solutions-blog">
                  <div className="token-gating-solutions-container03">
                    <div className="token-gating-solutions-blog-post-card">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDcyfHxtYXJrZXRpbmd8ZW58MHx8fHwxNjgxNzUwNTc1&amp;ixlib=rb-4.0.3&amp;w=1300"
                        className="token-gating-solutions-image"
                      />
                      <div className="token-gating-solutions-container04">
                        <h2 className="token-gating-solutions-text26">
                          Brands
                        </h2>
                        <p className="token-gating-solutions-text27">
                          Engage with emerging Web3 consumers by integrating
                          premium gated content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="token-gating-solutions-container05">
                    <div className="token-gating-solutions-blog-post-card1">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMzfHxvbmxpbmUlMjBzdG9yZXxlbnwwfHx8fDE2ODE3NjAyMzM&amp;ixlib=rb-4.0.3&amp;w=1300"
                        className="token-gating-solutions-image1"
                      />
                      <div className="token-gating-solutions-container06">
                        <h2 className="token-gating-solutions-text28">
                          E-Commerce
                        </h2>
                        <p className="token-gating-solutions-text29">
                          Create exclusive gated product pages for specific
                          token holders. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="token-gating-solutions-container07">
                    <div className="token-gating-solutions-blog-post-card2">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNyZWF0b3J8ZW58MHx8fHwxNjgxNzUwNDc5&amp;ixlib=rb-4.0.3&amp;w=1300"
                        className="token-gating-solutions-image2"
                      />
                      <div className="token-gating-solutions-container08">
                        <h2 className="token-gating-solutions-text30">
                          Creators
                        </h2>
                        <p className="token-gating-solutions-text31">
                          Create exclusive token holders experiences for your
                          Web3 community.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="token-gating-solutions-container09">
                    <div className="token-gating-solutions-blog-post-card3">
                      <img
                        alt="image"
                        src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxkZXZlbG9wZXJ8ZW58MHx8fHwxNjgxNzUwNDk5&amp;ixlib=rb-4.0.3&amp;w=1300"
                        className="token-gating-solutions-image3"
                      />
                      <div className="token-gating-solutions-container10">
                        <h2 className="token-gating-solutions-text32">
                          Developers
                        </h2>
                        <p className="token-gating-solutions-text33">
                          <span>
                            Setup token gating for your project quickly with our
                            low-code solution.
                          </span>
                          <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="token-gating-solutions-centered-container1">
              <div className="token-gating-solutions-image-container">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/comment-1300w.png"
                  loading="eager"
                  className="token-gating-solutions-cards-image"
                />
              </div>
              <div className="token-gating-solutions-right2">
                <h2 className="token-gating-solutions-text36 title">
                  Why Gateful?
                </h2>
                <div className="token-gating-solutions-category">
                  <p className="token-gating-solutions-text37">
                    <span>
                      Web3 and blockchain technology have grown quickly, leading
                      to many different blockchain networks, protocols,
                      projects, and frameworks. Unfortunately, this has caused
                      confusion for people trying to enter the space. Our
                      platform aims to fix this by bringing together the best
                      protocols and frameworks, making it easy and safe for
                      brands, creators, and developers to create token gated
                      experiences without any fear or confusion.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      As DApps become the main way users interact with Web3
                      systems, a secure and user-friendly solution is needed for
                      brands to engage with Web3-native consumers.
                    </span>
                    <br className="token-gating-solutions-text42"></br>
                    <br></br>
                    <span>
                      Gateful enables brands, creators, and developers to
                      incorporate Web3 wallet access (token gating) into their
                      existing websites or web applications. With a low-code
                      approach, it simplifies integration with cutting-edge
                      blockchain access protocols.
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
            <h2 className="token-gating-solutions-text46 title">
              Learn more about Web3 and token gating
            </h2>
            <div className="token-gating-solutions-blog1">
              <div className="token-gating-solutions-container11">
                <Link href="/token-gating-for-digital-marketing">
                  <a className="token-gating-solutions-link08">
                    <BlogPostCardFinal
                      title="Integrate Token Gating Into Your Digital Marketing Campaigns"
                      image_src="https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxibG9ja2NoYWlufGVufDB8fHx8MTY4MTc2Mjc4MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                      description="Launching a marketing campaign targeting cryptocurrency holders using token gating involves a series of strategic steps. Token gating is a technique that grants access to exclusive content or experiences only to individuals who hold a certain number of tokens or a specific type of token. This approach can be highly effective in reaching the desired audience and driving engagement."
                      rootClassName="rootClassName20"
                      className="token-gating-solutions-component"
                    ></BlogPostCardFinal>
                  </a>
                </Link>
              </div>
              <div className="token-gating-solutions-container12">
                <Link href="/web3-and-user-adoption">
                  <a className="token-gating-solutions-link09">
                    <BlogPostCardFinal
                      title="A Look at Web3 and User Adoption"
                      image_src="https://images.unsplash.com/photo-1639322537523-abaea1ca9f9c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYzfHxldGhlcmV1bXxlbnwwfHx8fDE2ODE3NjI4MDI&amp;ixlib=rb-4.0.3&amp;w=1500"
                      description="This article explores the concept of Web3, a decentralized and user-centric vision of the internet, and examines how users are adopting this new technology. By understanding the fundamentals of Web3 and the strategies being employed to promote its adoption, businesses and individuals can better navigate and capitalize on the opportunities presented by this innovative shift in the digital landscape."
                      rootClassName="rootClassName21"
                      className="token-gating-solutions-component1"
                    ></BlogPostCardFinal>
                  </a>
                </Link>
              </div>
              <div className="token-gating-solutions-container13">
                <Link href="/steps-to-launch-nft-collection">
                  <a className="token-gating-solutions-link10">
                    <BlogPostCardFinal
                      title="Helpful Tips to Launch Your New NFT Collection"
                      image_src="https://images.unsplash.com/photo-1651130535340-e02c63a43a0a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGJvcmVkJTIwYXBlfGVufDB8fHx8MTY4MTc2Mjg2MQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                      description="Launching an NFT collection can be a complex process that involves several steps, from conceptualizing your collection to marketing it to potential buyers and collectors. It requires a deep understanding of blockchain technology, smart contracts, and digital assets, as well as a strong sense of creativity and innovation to stand out in a crowded market. This article outlines the high-level steps to take to launch your NFT collection."
                      rootClassName="rootClassName22"
                      className="token-gating-solutions-component2"
                    ></BlogPostCardFinal>
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <Testimonial rootClassName="testimonial-root-class-name7"></Testimonial>
        </section>
        <footer className="token-gating-solutions-footer">
          <div className="token-gating-solutions-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="token-gating-solutions-image4"
            />
            <span className="token-gating-solutions-text47">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="token-gating-solutions-text48">
              <span>
                Built by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.openmedium.biz"
                target="_blank"
                rel="noreferrer noopener"
                className="token-gating-solutions-link11"
              >
                OpenMedium, Inc
              </a>
              <span>
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a
                href="https://www.teksun.com"
                target="_blank"
                rel="noreferrer noopener"
                className="token-gating-solutions-link12"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="token-gating-solutions-text51">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="token-gating-solutions-link13"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .token-gating-solutions-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .token-gating-solutions-hero {
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
          .token-gating-solutions-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-solutions-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-solutions-centered-desktop {
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
          .token-gating-solutions-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .token-gating-solutions-link {
            display: contents;
          }
          .token-gating-solutions-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .token-gating-solutions-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .token-gating-solutions-link01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-solutions-link02 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-solutions-link03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-solutions-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-solutions-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .token-gating-solutions-link04 {
            display: contents;
          }
          .token-gating-solutions-get-started {
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
          .token-gating-solutions-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-solutions-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .token-gating-solutions-text04 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-solutions-centered-mobile {
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
          .token-gating-solutions-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .token-gating-solutions-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .token-gating-solutions-link05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-solutions-link06 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-solutions-link07 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-solutions-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .token-gating-solutions-text09 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .token-gating-solutions-text10 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .token-gating-solutions-features {
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
          .token-gating-solutions-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-solutions-text11 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .token-gating-solutions-text15 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .token-gating-solutions-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-solutions-container01 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .token-gating-solutions-icon2 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-solutions-text18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-solutions-text19 {
            line-height: 24px;
          }
          .token-gating-solutions-publish {
            height: initial;
          }
          .token-gating-solutions-icon3 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-solutions-text20 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-solutions-text21 {
            line-height: 24px;
          }
          .token-gating-solutions-container02 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .token-gating-solutions-icon4 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-solutions-text22 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .token-gating-solutions-text23 {
            line-height: 24px;
          }
          .token-gating-solutions-icon5 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-solutions-text24 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-solutions-text25 {
            line-height: 24px;
          }
          .token-gating-solutions-section {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-solutions-content {
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
          .token-gating-solutions-centered-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            justify-content: center;
          }
          .token-gating-solutions-right1 {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-solutions-blog {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            justify-content: space-between;
          }
          .token-gating-solutions-container03 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-solutions-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 0px 1px #03b5aa;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-solutions-blog-post-card:hover {
            transform: scale(1.02);
          }
          .token-gating-solutions-image {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .token-gating-solutions-container04 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: flex-start;
            padding-top: 32px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .token-gating-solutions-text26 {
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .token-gating-solutions-text27 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .token-gating-solutions-container05 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-solutions-blog-post-card1 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 0px 1px #03b5aa;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-solutions-blog-post-card1:hover {
            transform: scale(1.02);
          }
          .token-gating-solutions-image1 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .token-gating-solutions-container06 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .token-gating-solutions-text28 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
          }
          .token-gating-solutions-text29 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .token-gating-solutions-container07 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-solutions-blog-post-card2 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 0px 1px #03b5aa;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-solutions-blog-post-card2:hover {
            transform: scale(1.02);
          }
          .token-gating-solutions-image2 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .token-gating-solutions-container08 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .token-gating-solutions-text30 {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
          }
          .token-gating-solutions-text31 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .token-gating-solutions-container09 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .token-gating-solutions-blog-post-card3 {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 0px 1px #03b5aa;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-solutions-blog-post-card3:hover {
            transform: scale(1.02);
          }
          .token-gating-solutions-image3 {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .token-gating-solutions-container10 {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .token-gating-solutions-text32 {
            font-size: 1.5rem;
            align-self: center;
            font-style: normal;
            font-weight: 700;
          }
          .token-gating-solutions-text33 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 400;
          }
          .token-gating-solutions-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .token-gating-solutions-image-container {
            flex: 1;
            height: auto;
            display: flex;
            justify-content: center;
          }
          .token-gating-solutions-cards-image {
            width: 100%;
            height: auto;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-radius: 20px;
          }
          .token-gating-solutions-right2 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .token-gating-solutions-text36 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .token-gating-solutions-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .token-gating-solutions-text37 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .token-gating-solutions-text42 {
            color: #000000;
            font-size: 18px;
            line-height: 24px;
          }
          .token-gating-solutions-text46 {
            font-size: 30px;
            text-align: left;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .token-gating-solutions-blog1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .token-gating-solutions-container11 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-solutions-link08 {
            display: contents;
          }
          .token-gating-solutions-component {
            text-decoration: none;
          }
          .token-gating-solutions-container12 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-solutions-link09 {
            display: contents;
          }
          .token-gating-solutions-component1 {
            text-decoration: none;
          }
          .token-gating-solutions-container13 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .token-gating-solutions-link10 {
            display: contents;
          }
          .token-gating-solutions-component2 {
            text-decoration: none;
          }
          .token-gating-solutions-footer {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .token-gating-solutions-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .token-gating-solutions-image4 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-solutions-text47 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-solutions-text48 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .token-gating-solutions-link11 {
            text-decoration: underline;
          }
          .token-gating-solutions-link12 {
            text-decoration: underline;
          }
          .token-gating-solutions-text51 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .token-gating-solutions-link13 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .token-gating-solutions-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .token-gating-solutions-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-solutions-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-solutions-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .token-gating-solutions-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .token-gating-solutions-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .token-gating-solutions-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .token-gating-solutions-header {
              width: 100%;
              max-width: 1200px;
            }
            .token-gating-solutions-features {
              padding-top: 260px;
            }
            .token-gating-solutions-title {
              width: 100%;
              max-width: 1200px;
            }
            .token-gating-solutions-text11 {
              font-size: 36px;
              line-height: 40px;
            }
            .token-gating-solutions-text15 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .token-gating-solutions-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .token-gating-solutions-text19 {
              line-height: 21px;
            }
            .token-gating-solutions-text21 {
              line-height: 21px;
            }
            .token-gating-solutions-text23 {
              line-height: 21px;
            }
            .token-gating-solutions-text24 {
              font-size: 24px;
            }
            .token-gating-solutions-text25 {
              line-height: 21px;
            }
            .token-gating-solutions-content {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .token-gating-solutions-blog {
              flex-direction: column;
            }
            .token-gating-solutions-container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-image {
              height: 350px;
            }
            .token-gating-solutions-container05 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-image1 {
              height: 350px;
            }
            .token-gating-solutions-container07 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-image2 {
              height: 350px;
            }
            .token-gating-solutions-image3 {
              height: 350px;
            }
            .token-gating-solutions-text36 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-solutions-text46 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-solutions-blog1 {
              flex-direction: column;
            }
            .token-gating-solutions-container11 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-container12 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .token-gating-solutions-top {
              flex-direction: column;
            }
            .token-gating-solutions-text51 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .token-gating-solutions-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .token-gating-solutions-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .token-gating-solutions-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .token-gating-solutions-left {
              margin-left: var(--dl-space-space-unit);
            }
            .token-gating-solutions-links {
              display: none;
            }
            .token-gating-solutions-right {
              margin-right: var(--dl-space-space-unit);
            }
            .token-gating-solutions-sign-in {
              display: flex;
            }
            .token-gating-solutions-get-started {
              display: flex;
            }
            .token-gating-solutions-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .token-gating-solutions-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .token-gating-solutions-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .token-gating-solutions-text09 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .token-gating-solutions-text10 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .token-gating-solutions-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-solutions-text11 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .token-gating-solutions-container01 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .token-gating-solutions-text18 {
              font-size: 24px;
            }
            .token-gating-solutions-text19 {
              font-size: 14px;
            }
            .token-gating-solutions-publish {
              margin-left: 0px;
            }
            .token-gating-solutions-text20 {
              font-size: 24px;
            }
            .token-gating-solutions-text21 {
              font-size: 14px;
            }
            .token-gating-solutions-container02 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .token-gating-solutions-analyze {
              margin-right: 0px;
            }
            .token-gating-solutions-text22 {
              font-size: 24px;
            }
            .token-gating-solutions-text23 {
              font-size: 14px;
            }
            .token-gating-solutions-text25 {
              font-size: 14px;
            }
            .token-gating-solutions-content {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-centered-container {
              flex-direction: column-reverse;
            }
            .token-gating-solutions-right1 {
              margin-left: 0px;
            }
            .token-gating-solutions-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-centered-container1 {
              flex-direction: column-reverse;
            }
            .token-gating-solutions-right2 {
              margin-left: 0px;
            }
            .token-gating-solutions-text36 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-text37 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-solutions-text46 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-image4 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .token-gating-solutions-hero {
              height: auto;
            }
            .token-gating-solutions-centered-desktop {
              justify-content: center;
            }
            .token-gating-solutions-logo {
              width: 180px;
            }
            .token-gating-solutions-sign-in {
              display: none;
            }
            .token-gating-solutions-get-started {
              display: none;
            }
            .token-gating-solutions-icon {
              display: none;
            }
            .token-gating-solutions-centered-mobile {
              justify-content: center;
            }
            .token-gating-solutions-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .token-gating-solutions-link07 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .token-gating-solutions-text10 {
              color: #eee9fe;
            }
            .token-gating-solutions-features {
              padding-top: 200px;
            }
            .token-gating-solutions-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-container01 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-solutions-container02 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .token-gating-solutions-analyze {
              margin-bottom: 0px;
            }
            .token-gating-solutions-content {
              padding-top: var(--dl-space-space-threeunits);
            }
            .token-gating-solutions-right1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-right2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-text36 {
              align-self: center;
              text-align: center;
            }
            .token-gating-solutions-text46 {
              align-self: center;
              text-align: center;
            }
            .token-gating-solutions-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-solutions-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .token-gating-solutions-text47 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default TokenGatingSolutions
