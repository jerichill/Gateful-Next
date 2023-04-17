import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import BlogPostCardFinal from '../components/blog-post-card-final'
import Testimonial from '../components/testimonial'

const TokenGatingPlatform = (props) => {
  return (
    <>
      <div className="token-gating-platform-container">
        <Head>
          <title>
            Token Gating Platform | Web3 Blockchain Access Management | Gateful
          </title>
          <meta
            name="description"
            content="Gateful token gating platform is the easiest way to token gate your website or web application. Create Web3 experiences with our low-code token gating platform."
          />
          <meta
            property="og:title"
            content="Token Gating Platform | Web3 Blockchain Access Management | Gateful"
          />
          <meta
            property="og:description"
            content="Gateful token gating platform is the easiest way to token gate your website or web application. Create Web3 experiences with our low-code token gating platform."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <header id="header" className="token-gating-platform-hero">
          <div className="token-gating-platform-menu">
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
              className="token-gating-platform-desktop-navigation"
            >
              <nav className="token-gating-platform-centered-desktop">
                <div className="token-gating-platform-left">
                  <Link href="/">
                    <a className="token-gating-platform-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="token-gating-platform-logo"
                      />
                    </a>
                  </Link>
                  <div className="token-gating-platform-links">
                    <Link href="/token-gating-platform">
                      <a className="token-gating-platform-link01 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="token-gating-platform-link02 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="token-gating-platform-link03 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="token-gating-platform-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="token-gating-platform-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="token-gating-platform-link04">
                      <div className="token-gating-platform-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="token-gating-platform-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="token-gating-platform-text04">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="token-gating-platform-centered-mobile">
                <div className="token-gating-platform-left1">
                  <div className="token-gating-platform-links1">
                    <Link href="/token-gating-platform">
                      <a className="token-gating-platform-link05 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="token-gating-platform-link06 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="token-gating-platform-link07 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="token-gating-platform-header">
            <h1 className="token-gating-platform-text09">
              Token Gating Platform
            </h1>
            <p className="token-gating-platform-text10">
              Transform your project into a powerful Web3-connected community.
            </p>
          </header>
        </header>
        <section className="token-gating-platform-banners">
          <section className="token-gating-platform-banner-advanced-analytics">
            <section className="token-gating-platform-frameworks">
              <h2 className="token-gating-platform-text11 title">
                <span>Token gating, simplified</span>
                <br></br>
              </h2>
              <p className="token-gating-platform-text14">
                Add token gated experiences to your website or web application
                using the frameworks you already know and love.
              </p>
              <div className="token-gating-platform-container1">
                <Link href="/token-gating-for-react">
                  <a className="token-gating-platform-link08">
                    <div className="token-gating-platform-active-users metrics">
                      <img
                        alt=" "
                        src="/playground_assets/2xreact-200h.png"
                        className="token-gating-platform-image"
                      />
                      <h3 className="token-gating-platform-text15">React</h3>
                    </div>
                  </a>
                </Link>
                <Link href="/token-gating-for-angular">
                  <a className="token-gating-platform-link09">
                    <div className="token-gating-platform-active-users1 metrics">
                      <img
                        alt=" "
                        src="/playground_assets/2xangular-800h.png"
                        className="token-gating-platform-image1"
                      />
                      <span className="token-gating-platform-text16">
                        Angular
                      </span>
                    </div>
                  </a>
                </Link>
                <Link href="/token-gating-for-nextjs">
                  <a className="token-gating-platform-link10">
                    <div className="token-gating-platform-active-users2 metrics">
                      <img
                        alt=" "
                        src="/playground_assets/2xnext-200h.png"
                        className="token-gating-platform-image2"
                      />
                      <h3 className="token-gating-platform-text17">Next.js</h3>
                    </div>
                  </a>
                </Link>
                <Link href="/token-gating-for-vuejs">
                  <a className="token-gating-platform-link11">
                    <div className="token-gating-platform-active-users3 metrics">
                      <img
                        alt=" "
                        src="/playground_assets/2xvue-200h.png"
                        className="token-gating-platform-image3"
                      />
                      <h3 className="token-gating-platform-text18">Vue.js</h3>
                    </div>
                  </a>
                </Link>
                <Link href="/token-gating-for-php">
                  <a className="token-gating-platform-link12">
                    <div className="token-gating-platform-active-users4 metrics">
                      <img
                        alt=" "
                        src="/playground_assets/2xphp-200h.png"
                        className="token-gating-platform-image4"
                      />
                      <h3 className="token-gating-platform-text19">
                        PHP/HTML5
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>
            </section>
            <div className="token-gating-platform-centered-container">
              <div className="token-gating-platform-image-container">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/2xscreen-1300w.png"
                  loading="eager"
                  className="token-gating-platform-cards-image"
                />
              </div>
              <div className="token-gating-platform-right1">
                <h2 className="token-gating-platform-text20 title">
                  Create unique on-chain conditions
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <div className="token-gating-platform-category">
                  <span className="token-gating-platform-text21">
                    <span>
                      Gateful&apos;s on-chain access control system simplifies
                      the process of creating token gated experiences,
                      transforming any project into a powerful Web3-connected
                      community without requiring any coding knowledge. The
                      platform&apos;s integration with LIT Protocol allows users
                      to create multiple token gates within the same experience
                      and create on-chain conditions unique to their audience
                      and requirements.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Gateful&apos;s compatibility with major blockchain
                      networks, including Ethereum, Binance Smart Chain, Solana,
                      and Polygon, makes it easy for developers to integrate the
                      platform with their favorite web frameworks, including
                      React, Angular, Next.js, Vue.js, and PHP/HTML5.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="token-gating-platform-centered-container1">
              <div className="token-gating-platform-image-container1">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/manage%20domains-1300w.png"
                  loading="eager"
                  className="token-gating-platform-cards-image1"
                />
              </div>
              <div className="token-gating-platform-right2">
                <h2 className="token-gating-platform-text27 title">
                  Manage multiple projects and token gates
                </h2>
                <div className="token-gating-platform-category1">
                  <span className="token-gating-platform-text28">
                    <span>
                      Gateful&apos;s intuitive dashboard streamlines the process
                      of creating and managing multiple domain projects,
                      frameworks, and unique token gates. The platform offers a
                      user-friendly interface for managing token gates, which
                      includes handling project URLs, setting up on-chain
                      conditions, and generating associated scripts tailored to
                      your specific web framework.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      To get started, simply add your project&apos;s Top-Level
                      Domain (TLD), specify the URLs you wish to gate, create
                      the on-chain conditions required for access, and generate
                      a dynamic script. Once you have the script, easily install
                      it within your web application to enhance your digital
                      experience with Web3 Token Gating.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="token-gating-platform-centered-container2">
              <div className="token-gating-platform-image-container2">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/screenshot%202023-04-16%207.49.27%20pm-1300w.png"
                  loading="eager"
                  className="token-gating-platform-cards-image2"
                />
              </div>
              <div className="token-gating-platform-right3">
                <h2 className="token-gating-platform-text34 title">
                  Personalize your token gate splash screen
                </h2>
                <div className="token-gating-platform-category2">
                  <span className="token-gating-platform-text35">
                    <span>
                      Enhance your token gate verification page by personalizing
                      it with your own content, creating a seamless experience
                      for your users. Incorporate your logo, project name, and a
                      compelling project description to establish a strong brand
                      identity. Additionally, adding a custom Privacy Policy
                      link demonstrates transparency and fosters trust with your
                      user base, which is vital for long-term success and user
                      engagement.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <h2 className="token-gating-platform-text38 title">
            Learn more about Web3 and Token Gating
          </h2>
          <div className="token-gating-platform-blog">
            <div className="token-gating-platform-container2">
              <Link href="/about-token-gating-platforms">
                <a className="token-gating-platform-link13">
                  <BlogPostCardFinal
                    title="Token Gating Platforms: Revolutionizing Web3 Content Monetization and Access Control"
                    image_src="https://images.unsplash.com/photo-1676911809746-85d90edbbe4a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDYxfHx3ZWIzfGVufDB8fHx8MTY4MTc0Mjk4OA&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="Token Gating Platforms have emerged as a groundbreaking technology for content monetization and access control solutions. These platforms are becoming increasingly popular among creators, developers, and brands alike, as they offer a new and dynamic way of rewarding and engaging with their audience."
                    rootClassName="rootClassName17"
                    className="token-gating-platform-component"
                  ></BlogPostCardFinal>
                </a>
              </Link>
            </div>
            <div className="token-gating-platform-container3">
              <Link href="/an-introduction-to-nft-token-gating">
                <a className="token-gating-platform-link14">
                  <BlogPostCardFinal
                    title="Embracing the Future of Web3:  An Introduction to NFT Token Gating"
                    image_src="https://images.unsplash.com/photo-1664022617645-cf71791942e4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUzfHxuZnR8ZW58MHx8fHwxNjgxNzQzMzY0&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description='The world of digital assets and blockchain technology is evolving at a rapid pace. With the advent of non-fungible tokens (NFTs) and their increasing popularity, a new concept known as "token gating" has emerged. This white paper aims to introduce the concept of NFT token gating, its benefits, and potential use case examples that can revolutionize various industries.'
                    rootClassName="rootClassName18"
                    className="token-gating-platform-component1"
                  ></BlogPostCardFinal>
                </a>
              </Link>
            </div>
            <div className="token-gating-platform-container4">
              <Link href="/unlock-token-gate-signature-request">
                <a className="token-gating-platform-link15">
                  <BlogPostCardFinal
                    title="Unlocking a Token Gate: The Signature Request Explained"
                    image_src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGJsb2NrY2hhaW58ZW58MHx8fHwxNjgxNzQzNDM3&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="As the world of online communities and digital content continues to grow, creators and platforms are seeking new ways to protect access, validate users, and promote exclusivity. Enter token gating, a novel approach to ensuring only qualified individuals gain entry to specific online spaces. In this article, we will dive into the concept of token gating and, more specifically, demystify the signature request – a crucial component of the process. Let's start by understanding what token gating is and how it works."
                    rootClassName="rootClassName19"
                    className="token-gating-platform-component2"
                  ></BlogPostCardFinal>
                </a>
              </Link>
            </div>
          </div>
          <Testimonial rootClassName="testimonial-root-class-name5"></Testimonial>
        </section>
        <footer className="token-gating-platform-footer">
          <div className="token-gating-platform-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="token-gating-platform-image5"
            />
            <span className="token-gating-platform-text39">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="token-gating-platform-text40">
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
                className="token-gating-platform-link16"
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
                className="token-gating-platform-link17"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="token-gating-platform-text43">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="token-gating-platform-link18"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .token-gating-platform-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .token-gating-platform-hero {
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
          .token-gating-platform-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-platform-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-platform-centered-desktop {
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
          .token-gating-platform-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .token-gating-platform-link {
            display: contents;
          }
          .token-gating-platform-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .token-gating-platform-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .token-gating-platform-link01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-platform-link02 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-platform-link03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-platform-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .token-gating-platform-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .token-gating-platform-link04 {
            display: contents;
          }
          .token-gating-platform-get-started {
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
          .token-gating-platform-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-platform-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .token-gating-platform-text04 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-platform-centered-mobile {
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
          .token-gating-platform-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .token-gating-platform-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .token-gating-platform-link05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-platform-link06 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-platform-link07 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .token-gating-platform-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .token-gating-platform-text09 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .token-gating-platform-text10 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .token-gating-platform-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .token-gating-platform-banner-advanced-analytics {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-platform-frameworks {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-sevenunits);
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .token-gating-platform-text11 {
            font-size: 30px;
            margin-bottom: 0px;
          }
          .token-gating-platform-text14 {
            font-size: 18px;
            font-style: normal;
            margin-top: 0px;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .token-gating-platform-container1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .token-gating-platform-link08 {
            display: contents;
          }
          .token-gating-platform-active-users {
            position: relative;
            text-decoration: none;
          }
          .token-gating-platform-image {
            width: 120px;
            height: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-platform-text15 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-platform-link09 {
            display: contents;
          }
          .token-gating-platform-active-users1 {
            position: relative;
            align-self: center;
            text-decoration: none;
          }
          .token-gating-platform-image1 {
            width: 100px;
            object-fit: cover;
          }
          .token-gating-platform-text16 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
          }
          .token-gating-platform-link10 {
            display: contents;
          }
          .token-gating-platform-active-users2 {
            position: relative;
            text-decoration: none;
          }
          .token-gating-platform-image2 {
            width: 140px;
            height: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-platform-text17 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-platform-link11 {
            display: contents;
          }
          .token-gating-platform-active-users3 {
            position: relative;
            text-decoration: none;
          }
          .token-gating-platform-image3 {
            width: 105px;
            height: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-platform-text18 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-platform-link12 {
            display: contents;
          }
          .token-gating-platform-active-users4 {
            position: relative;
            text-decoration: none;
          }
          .token-gating-platform-image4 {
            width: 140px;
            height: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-platform-text19 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
          }
          .token-gating-platform-centered-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .token-gating-platform-image-container {
            flex: 1;
            height: auto;
            display: flex;
            justify-content: center;
          }
          .token-gating-platform-cards-image {
            width: 100%;
            height: auto;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-radius: 20px;
          }
          .token-gating-platform-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .token-gating-platform-text20 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .token-gating-platform-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .token-gating-platform-text21 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .token-gating-platform-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .token-gating-platform-image-container1 {
            flex: 1;
            height: auto;
            display: flex;
            justify-content: center;
          }
          .token-gating-platform-cards-image1 {
            width: 100%;
            height: auto;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-radius: 20px;
          }
          .token-gating-platform-right2 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .token-gating-platform-text27 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .token-gating-platform-category1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .token-gating-platform-text28 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .token-gating-platform-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .token-gating-platform-image-container2 {
            flex: 1;
            height: auto;
            display: flex;
            justify-content: center;
          }
          .token-gating-platform-cards-image2 {
            width: 100%;
            height: auto;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-radius: 20px;
          }
          .token-gating-platform-right3 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .token-gating-platform-text34 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .token-gating-platform-category2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .token-gating-platform-text35 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .token-gating-platform-text38 {
            font-size: 30px;
            text-align: left;
          }
          .token-gating-platform-blog {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .token-gating-platform-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-platform-link13 {
            display: contents;
          }
          .token-gating-platform-component {
            text-decoration: none;
          }
          .token-gating-platform-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .token-gating-platform-link14 {
            display: contents;
          }
          .token-gating-platform-component1 {
            text-decoration: none;
          }
          .token-gating-platform-container4 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .token-gating-platform-link15 {
            display: contents;
          }
          .token-gating-platform-component2 {
            text-decoration: none;
          }
          .token-gating-platform-footer {
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
          .token-gating-platform-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .token-gating-platform-image5 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-platform-text39 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .token-gating-platform-text40 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .token-gating-platform-link16 {
            text-decoration: underline;
          }
          .token-gating-platform-link17 {
            text-decoration: underline;
          }
          .token-gating-platform-text43 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .token-gating-platform-link18 {
            text-decoration: underline;
          }
          @media (max-width: 1600px) {
            .token-gating-platform-text14 {
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 1200px) {
            .token-gating-platform-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .token-gating-platform-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-platform-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-platform-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .token-gating-platform-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .token-gating-platform-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .token-gating-platform-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .token-gating-platform-header {
              width: 100%;
              max-width: 1200px;
            }
            .token-gating-platform-banner-advanced-analytics {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .token-gating-platform-frameworks {
              height: 800px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-platform-container1 {
              height: 100%;
              align-items: center;
              flex-direction: column;
            }
            .token-gating-platform-active-users1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-platform-text20 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-platform-text27 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-platform-text34 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-platform-text38 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .token-gating-platform-blog {
              flex-direction: column;
            }
            .token-gating-platform-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-platform-container3 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-platform-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .token-gating-platform-top {
              flex-direction: column;
            }
            .token-gating-platform-text43 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .token-gating-platform-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .token-gating-platform-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .token-gating-platform-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .token-gating-platform-left {
              margin-left: var(--dl-space-space-unit);
            }
            .token-gating-platform-links {
              display: none;
            }
            .token-gating-platform-right {
              margin-right: var(--dl-space-space-unit);
            }
            .token-gating-platform-sign-in {
              display: flex;
            }
            .token-gating-platform-get-started {
              display: flex;
            }
            .token-gating-platform-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .token-gating-platform-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .token-gating-platform-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .token-gating-platform-text09 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .token-gating-platform-text10 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .token-gating-platform-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-platform-frameworks {
              height: 100%;
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .token-gating-platform-container1 {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .token-gating-platform-text15 {
              font-size: 14px;
            }
            .token-gating-platform-text16 {
              font-size: 14px;
            }
            .token-gating-platform-text17 {
              font-size: 14px;
            }
            .token-gating-platform-text18 {
              font-size: 14px;
            }
            .token-gating-platform-text19 {
              font-size: 14px;
            }
            .token-gating-platform-centered-container {
              flex-direction: column-reverse;
            }
            .token-gating-platform-right1 {
              margin-left: 0px;
            }
            .token-gating-platform-text20 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-platform-text21 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-platform-centered-container1 {
              flex-direction: column-reverse;
            }
            .token-gating-platform-right2 {
              margin-left: 0px;
            }
            .token-gating-platform-text27 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-platform-text28 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-platform-centered-container2 {
              flex-direction: column-reverse;
            }
            .token-gating-platform-right3 {
              margin-left: 0px;
            }
            .token-gating-platform-text34 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-platform-text35 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .token-gating-platform-text38 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-platform-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .token-gating-platform-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .token-gating-platform-image5 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .token-gating-platform-hero {
              height: auto;
            }
            .token-gating-platform-centered-desktop {
              justify-content: center;
            }
            .token-gating-platform-logo {
              width: 180px;
            }
            .token-gating-platform-sign-in {
              display: none;
            }
            .token-gating-platform-get-started {
              display: none;
            }
            .token-gating-platform-icon {
              display: none;
            }
            .token-gating-platform-centered-mobile {
              justify-content: center;
            }
            .token-gating-platform-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .token-gating-platform-link07 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .token-gating-platform-text10 {
              color: #eee9fe;
            }
            .token-gating-platform-banner-advanced-analytics {
              padding-top: var(--dl-space-space-threeunits);
            }
            .token-gating-platform-frameworks {
              height: auto;
            }
            .token-gating-platform-text15 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .token-gating-platform-text16 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .token-gating-platform-text17 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .token-gating-platform-text18 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .token-gating-platform-text19 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .token-gating-platform-right1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-platform-text20 {
              align-self: center;
              text-align: center;
            }
            .token-gating-platform-right2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-platform-text27 {
              align-self: center;
              text-align: center;
            }
            .token-gating-platform-right3 {
              margin-top: var(--dl-space-space-twounits);
            }
            .token-gating-platform-text34 {
              align-self: center;
              text-align: center;
            }
            .token-gating-platform-text38 {
              align-self: center;
              text-align: center;
            }
            .token-gating-platform-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .token-gating-platform-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .token-gating-platform-text39 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default TokenGatingPlatform
