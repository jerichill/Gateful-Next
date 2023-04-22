import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'
import Footer from '../components/footer'

const HowToTokenGateAWebsite = (props) => {
  return (
    <>
      <div className="how-to-token-gate--website-container">
        <Head>
          <title>
            How to Token Gate a Website with Gateful's Token Gating Platform
          </title>
          <meta
            name="description"
            content="Learn how to token gate a website using Gateful's low-code token gating platform. Create a token gated website without writing any code."
          />
          <meta
            property="og:title"
            content="How to Token Gate a Website with Gateful's Token Gating Platform"
          />
          <meta
            property="og:description"
            content="Learn how to token gate a website using Gateful's low-code token gating platform. Create a token gated website without writing any code."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <section id="header" className="how-to-token-gate--website-hero">
          <div className="how-to-token-gate--website-menu">
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
              className="how-to-token-gate--website-desktop-navigation"
            >
              <nav className="how-to-token-gate--website-centered-desktop">
                <div className="how-to-token-gate--website-left">
                  <Link href="/">
                    <a className="how-to-token-gate--website-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="how-to-token-gate--website-logo"
                      />
                    </a>
                  </Link>
                  <div className="how-to-token-gate--website-links">
                    <Link href="/token-gating-platform">
                      <a className="how-to-token-gate--website-link1 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="how-to-token-gate--website-link2 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="how-to-token-gate--website-link3 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="how-to-token-gate--website-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="how-to-token-gate--website-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="how-to-token-gate--website-link4">
                      <div className="how-to-token-gate--website-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="how-to-token-gate--website-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="how-to-token-gate--website-text004">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="how-to-token-gate--website-centered-mobile">
                <div className="how-to-token-gate--website-left1">
                  <div className="how-to-token-gate--website-links1">
                    <Link href="/token-gating-platform">
                      <a className="how-to-token-gate--website-link5 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="how-to-token-gate--website-link6 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="how-to-token-gate--website-link7 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="how-to-token-gate--website-header">
            <h1 className="how-to-token-gate--website-text009">
              How to Token Gate a Website
            </h1>
            <p className="how-to-token-gate--website-text010">
              Learn how to token gate your website using Gateful.
            </p>
            <div className="how-to-token-gate--website-profile">
              <img
                alt="profile"
                src="/playground_assets/headshot2022bpng-200w.png"
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="how-to-token-gate--website-image"
              />
              <span className="how-to-token-gate--website-text011">
                <span>J. Eric Hill</span>
                <br></br>
              </span>
            </div>
          </header>
        </section>
        <section className="how-to-token-gate--website-features">
          <div className="how-to-token-gate--website-title">
            <span className="how-to-token-gate--website-text014">
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
            <span className="how-to-token-gate--website-text018">
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
          <div className="how-to-token-gate--website-cards">
            <div className="how-to-token-gate--website-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="how-to-token-gate--website-icon02"
                />
                <span className="how-to-token-gate--website-text021">
                  Schedule
                </span>
                <span className="how-to-token-gate--website-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="how-to-token-gate--website-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="how-to-token-gate--website-icon03"
                />
                <span className="how-to-token-gate--website-text023">
                  Publish
                </span>
                <span className="how-to-token-gate--website-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="how-to-token-gate--website-container2">
              <div className="card how-to-token-gate--website-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="how-to-token-gate--website-icon04"
                />
                <span className="how-to-token-gate--website-text025">
                  Analyze
                </span>
                <span className="how-to-token-gate--website-text026">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="how-to-token-gate--website-icon05"
                />
                <span className="how-to-token-gate--website-text027">
                  Get leads
                </span>
                <span className="how-to-token-gate--website-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="how-to-token-gate--website-banners">
          <div className="how-to-token-gate--website-blog">
            <h2 className="how-to-token-gate--website-text029">
              As the world of online communities and digital content continues
              to grow, creators and platforms are seeking new ways to protect
              access, validate users, and promote exclusivity.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <span className="how-to-token-gate--website-text030">
              <span>
                Token gating is a novel approach to ensuring only qualified
                individuals gain entry to specific online spaces. In this
                article, we will dive into the concept of token gating and how
                to implement it using Gateful&apos;s Token Gating Platform.
              </span>
              <br></br>
            </span>
            <h2 className="how-to-token-gate--website-text033">
              What is Token Gating?
            </h2>
            <span className="how-to-token-gate--website-text034">
              <span>
                Token gating is a method of access control that requires users
                to hold a specific token in order to access certain content or
                features. This token can be a cryptocurrency or a non-fungible
                token (NFT), and it can be used to verify a user&apos;s
                identity, grant access to exclusive content, or reward users for
                their engagement.
              </span>
              <br></br>
              <br></br>
              <span>
                Gateful&apos;s Token Gating Platform simplifies the process of
                creating token gated experiences, transforming any project into
                a powerful Web3-connected community without requiring any coding
                knowledge. The platform&apos;s integration with LIT Protocol
                allows users to create multiple token gates within the same
                experience and create on-chain conditions unique to their
                audience and requirements. Gateful&apos;s compatibility with
                major blockchain networks, including Ethereum, Binance Smart
                Chain, Solana, and Polygon, makes it easy for developers to
                integrate the platform with their favorite web frameworks,
                including React, Angular, Next.js, Vue.js, and PHP/HTML5.
              </span>
            </span>
            <h2 className="how-to-token-gate--website-text039">
              How to Token Gate a Website with Gateful
            </h2>
            <span className="how-to-token-gate--website-text040">
              <span>
                1. Sign up for a Gateful account and log in to the dashboard.
              </span>
              <br></br>
              <br></br>
              <span>
                2. Create a new project by clicking on the &quot;New
                Project&quot; button and entering your project&apos;s Top-Level
                Domain (TLD). Personalize your token gate splash screen by
                incorporating your logo, project name, and a compelling project
                description to establish a strong brand identity. Add a custom
                Privacy Policy link to demonstrate transparency and build trust
                with your user base, which is vital for long-term success and
                user engage
              </span>
              <br></br>
              <br></br>
              <span>
                3. Specify the URLs you wish to gate by clicking on the
                &quot;Add URL&quot; button and entering the URLs.
              </span>
              <br></br>
              <br></br>
              <span>
                4. Select your website framework or code library. Gateful
                supports React, Angular, Next.js, Vue.js, and PHP/HTML.
              </span>
              <br></br>
              <br></br>
              <span>
                5. Create the on-chain conditions required for access by
                clicking on the &quot;Add Condition&quot; button and selecting
                the conditions you want to set.
              </span>
              <br></br>
              <br></br>
              <span>
                6. Generate a dynamic script by clicking on the &quot;Generate
                Script&quot; button. This script will be tailored to your
                specific web framework and can be easily installed within your
                web application to enhance your digital experience with Web3
                Token Gating.
              </span>
              <br></br>
              <br></br>
              <span>
                7. Install the generated script within your web application to
                enable token gating. This can be done by following the
                instructions provided by Gateful in the dashboard.
              </span>
            </span>
          </div>
          <div className="how-to-token-gate--website-blog1">
            <h2 className="how-to-token-gate--website-text060">
              Gateful is the easiest way to token gate any website or web
              application.
            </h2>
            <span className="how-to-token-gate--website-text061">
              If you&apos;re looking to add Web3 Token Gating functionality to
              your website or web application and do not know where to start,
              contact our Web3 implementation team for a demo.
            </span>
            <Link href="/book-a-demo">
              <a className="how-to-token-gate--website-link8">
                <div className="how-to-token-gate--website-get-started1">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="how-to-token-gate--website-icon06"
                  >
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <span className="how-to-token-gate--website-text062">
                    Book a Demo
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="how-to-token-gate--website-integrations">
          <div className="how-to-token-gate--website-centered-container">
            <div className="how-to-token-gate--website-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="how-to-token-gate--website-text065">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="how-to-token-gate--website-pills-container">
              <div className="how-to-token-gate--website-pills">
                <div className="how-to-token-gate--website-container3">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="how-to-token-gate--website-container4">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-to-token-gate--website-how-it-works">
          <div className="how-to-token-gate--website-centered-container1">
            <div className="how-to-token-gate--website-heading1">
              <span className="how-to-token-gate--website-text066">
                How it works
              </span>
              <span className="how-to-token-gate--website-text067 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="how-to-token-gate--website-category">
              <div className="how-to-token-gate--website-headng">
                <span className="how-to-token-gate--website-text068">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="how-to-token-gate--website-text069">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="how-to-token-gate--website-get-started2 template-button">
                  <span className="how-to-token-gate--website-text070">
                    Get started
                  </span>
                </div>
              </div>
              <div className="how-to-token-gate--website-container5">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="how-to-token-gate--website-pasted-image"
                />
              </div>
            </div>
            <div className="how-to-token-gate--website-row">
              <div className="how-to-token-gate--website-category1">
                <div className="how-to-token-gate--website-headng1">
                  <span className="how-to-token-gate--website-text071">
                    2 — Act
                  </span>
                  <span className="how-to-token-gate--website-text072">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="how-to-token-gate--website-pasted-image1"
                />
              </div>
              <div className="how-to-token-gate--website-category2">
                <div className="how-to-token-gate--website-headng2">
                  <span className="how-to-token-gate--website-text073">
                    2 — Act
                  </span>
                  <span className="how-to-token-gate--website-text074">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="how-to-token-gate--website-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="how-to-token-gate--website-pricing">
          <div className="how-to-token-gate--website-centered-container2">
            <div className="how-to-token-gate--website-heading2">
              <span className="how-to-token-gate--website-text075 title">
                Pricing for all kind of businesses
              </span>
              <span className="how-to-token-gate--website-text076">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="how-to-token-gate--website-selection">
                <span className="how-to-token-gate--website-text077">
                  Monthly
                </span>
                <span className="how-to-token-gate--website-text078">
                  Yearly
                </span>
              </div>
            </div>
            <div className="how-to-token-gate--website-cards1">
              <div className="how-to-token-gate--website-card">
                <span className="how-to-token-gate--website-text079">Free</span>
                <span className="how-to-token-gate--website-text080">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="how-to-token-gate--website-get-started3 template-button">
                  <span className="how-to-token-gate--website-text081">
                    Start for free
                  </span>
                </div>
                <span className="how-to-token-gate--website-text082">
                  What&apos;s included
                </span>
                <div className="how-to-token-gate--website-bullet-points">
                  <div className="how-to-token-gate--website-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text083">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text084">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="how-to-token-gate--website-card1">
                <span className="how-to-token-gate--website-text085">
                  Pay as you go
                </span>
                <span className="how-to-token-gate--website-text086">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="how-to-token-gate--website-get-started4 template-button">
                  <span className="how-to-token-gate--website-text090">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="how-to-token-gate--website-text093">
                  What&apos;s included
                </span>
                <div className="how-to-token-gate--website-bullet-points1">
                  <div className="how-to-token-gate--website-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text094">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text095">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text096">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text097">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="how-to-token-gate--website-card2">
                <span className="how-to-token-gate--website-text098">
                  Enterprise
                </span>
                <span className="how-to-token-gate--website-text099">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="how-to-token-gate--website-get-started5 template-button">
                  <span className="how-to-token-gate--website-text102">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="how-to-token-gate--website-text105">
                  What&apos;s included
                </span>
                <div className="how-to-token-gate--website-bullet-points2">
                  <div className="how-to-token-gate--website-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text106">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text107">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text108">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="how-to-token-gate--website-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="how-to-token-gate--website-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="how-to-token-gate--website-text109">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-to-token-gate--website-testimonals">
          <div className="how-to-token-gate--website-left2">
            <span className="how-to-token-gate--website-text110">
              Testimonals
            </span>
            <span className="how-to-token-gate--website-text111 title">
              What people say about Active
            </span>
          </div>
          <div className="how-to-token-gate--website-right1">
            <div className="how-to-token-gate--website-column">
              <TestimonalBLurb
                Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
                Avatar_src="/playground_assets/image552912-e3yq-200h.png"
              ></TestimonalBLurb>
              <TestimonalBLurb
                From="Social Club"
                Name="Jessica Smith"
                Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
                Avatar_src="/playground_assets/image312912-mvsg-200h.png"
              ></TestimonalBLurb>
              <TestimonalBLurb
                From="BeMe"
                Name="Logan Boy"
                Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
                Avatar_src="/playground_assets/image502912-6wy-200h.png"
              ></TestimonalBLurb>
              <TestimonalBLurb
                From="Hello W."
                Name="Laraine Summers"
                Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
                Avatar_src="/playground_assets/image202912-zekh-200h.png"
              ></TestimonalBLurb>
            </div>
            <div className="how-to-token-gate--website-column1">
              <TestimonalBLurb
                From="Handsly"
                Name="William McPau"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                Avatar_src="/playground_assets/image572912-0d3-200h.png"
              ></TestimonalBLurb>
              <TestimonalBLurb
                From="Share"
                Name="Mariah Mae"
                Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                Avatar_src="/playground_assets/image632913-swij-200h.png"
              ></TestimonalBLurb>
              <TestimonalBLurb
                From="Gather"
                Name="John Finati"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
                Avatar_src="/playground_assets/image102913-x4z8-200h.png"
              ></TestimonalBLurb>
              <TestimonalBLurb
                From="Zigo"
                Name="Mary Pau"
                Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
                Avatar_src="/playground_assets/image562913-ycff-200h.png"
              ></TestimonalBLurb>
            </div>
          </div>
          <span className="how-to-token-gate--website-text112">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="how-to-token-gate--website-action-bar">
          <div className="how-to-token-gate--website-action">
            <div className="how-to-token-gate--website-heading3">
              <span className="how-to-token-gate--website-text115 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="how-to-token-gate--website-text119">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="how-to-token-gate--website-get-started6 template-button">
                <span className="how-to-token-gate--website-text120">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="how-to-token-gate--website-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="how-to-token-gate--website-image1"
              />
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name17"></Footer>
      </div>
      <style jsx>
        {`
          .how-to-token-gate--website-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .how-to-token-gate--website-hero {
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
                rgba(18, 16, 74, 0.85) 50%,
                rgba(119, 18, 57, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI1fHxjcnlwdG98ZW58MHx8fHwxNjgxNTkxNzg3&ixlib=rb-4.0.3&w=1500');
            background-position: top left, center;
          }
          .how-to-token-gate--website-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-centered-desktop {
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
          .how-to-token-gate--website-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .how-to-token-gate--website-link {
            display: contents;
          }
          .how-to-token-gate--website-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .how-to-token-gate--website-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .how-to-token-gate--website-link1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .how-to-token-gate--website-link2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .how-to-token-gate--website-link3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .how-to-token-gate--website-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .how-to-token-gate--website-link4 {
            display: contents;
          }
          .how-to-token-gate--website-get-started {
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
          .how-to-token-gate--website-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .how-to-token-gate--website-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-text004 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .how-to-token-gate--website-centered-mobile {
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
          .how-to-token-gate--website-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .how-to-token-gate--website-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .how-to-token-gate--website-link5 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .how-to-token-gate--website-link6 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .how-to-token-gate--website-link7 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .how-to-token-gate--website-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .how-to-token-gate--website-text009 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .how-to-token-gate--website-text010 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 24px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .how-to-token-gate--website-profile {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .how-to-token-gate--website-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .how-to-token-gate--website-text011 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-features {
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
          .how-to-token-gate--website-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-text014 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .how-to-token-gate--website-text018 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .how-to-token-gate--website-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text022 {
            line-height: 24px;
          }
          .how-to-token-gate--website-publish {
            height: initial;
          }
          .how-to-token-gate--website-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text024 {
            line-height: 24px;
          }
          .how-to-token-gate--website-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text025 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .how-to-token-gate--website-text026 {
            line-height: 24px;
          }
          .how-to-token-gate--website-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text027 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text028 {
            line-height: 24px;
          }
          .how-to-token-gate--website-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-blog {
            width: 100%;
            display: flex;
            max-width: 900px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .how-to-token-gate--website-text029 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text030 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text033 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text034 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text039 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text040 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 900px;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            align-items: center;
            border-color: var(--dl-color-primary-700);
            border-width: 1px;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .how-to-token-gate--website-text060 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .how-to-token-gate--website-text061 {
            font-size: 19px;
            text-align: center;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-link8 {
            display: contents;
          }
          .how-to-token-gate--website-get-started1 {
            color: white;
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
          .how-to-token-gate--website-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .how-to-token-gate--website-icon06 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-text062 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .how-to-token-gate--website-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .how-to-token-gate--website-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .how-to-token-gate--website-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-text065 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .how-to-token-gate--website-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .how-to-token-gate--website-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .how-to-token-gate--website-container3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .how-to-token-gate--website-container4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .how-to-token-gate--website-how-it-works {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #211062;
          }
          .how-to-token-gate--website-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .how-to-token-gate--website-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .how-to-token-gate--website-text066 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .how-to-token-gate--website-text067 {
            color: var(--dl-color-gray-white);
          }
          .how-to-token-gate--website-category {
            color: white;
            width: 100%;
            display: flex;
            overflow: hidden;
            padding-left: var(--dl-space-space-fourunits);
            border-radius: 50px;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: #5228f5;
          }
          .how-to-token-gate--website-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .how-to-token-gate--website-text068 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-to-token-gate--website-text069 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .how-to-token-gate--website-get-started2 {
            margin-bottom: 0px;
          }
          .how-to-token-gate--website-get-started2:hover {
            color: black;
            background-color: #ffffff;
          }
          .how-to-token-gate--website-text070 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .how-to-token-gate--website-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .how-to-token-gate--website-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .how-to-token-gate--website-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .how-to-token-gate--website-category1 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .how-to-token-gate--website-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-to-token-gate--website-text071 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-to-token-gate--website-text072 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .how-to-token-gate--website-pasted-image1 {
            width: 100%;
          }
          .how-to-token-gate--website-category2 {
            flex: 1;
            color: white;
            height: 555px;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: #000000;
          }
          .how-to-token-gate--website-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-to-token-gate--website-text073 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .how-to-token-gate--website-text074 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .how-to-token-gate--website-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .how-to-token-gate--website-pricing {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #5228f5;
          }
          .how-to-token-gate--website-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .how-to-token-gate--website-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .how-to-token-gate--website-text075 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .how-to-token-gate--website-text076 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .how-to-token-gate--website-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .how-to-token-gate--website-text077 {
            color: #eee9fe;
            width: 128px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 2px;
          }
          .how-to-token-gate--website-text078 {
            color: #ffffff;
            width: 128px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #ffffff;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            border-bottom-width: 2px;
          }
          .how-to-token-gate--website-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .how-to-token-gate--website-card {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .how-to-token-gate--website-text079 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text080 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .how-to-token-gate--website-get-started3 {
            transition: 0.3s;
          }
          .how-to-token-gate--website-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .how-to-token-gate--website-text081 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .how-to-token-gate--website-text082 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .how-to-token-gate--website-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text083 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text084 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-card1 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .how-to-token-gate--website-text085 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text086 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .how-to-token-gate--website-get-started4 {
            transition: 0.3s;
          }
          .how-to-token-gate--website-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .how-to-token-gate--website-text090 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .how-to-token-gate--website-text093 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .how-to-token-gate--website-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text094 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text095 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text096 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text097 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-card2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #000000;
          }
          .how-to-token-gate--website-text098 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-text099 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .how-to-token-gate--website-get-started5 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .how-to-token-gate--website-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .how-to-token-gate--website-text102 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .how-to-token-gate--website-text105 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .how-to-token-gate--website-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .how-to-token-gate--website-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text106 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text107 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text108 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .how-to-token-gate--website-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .how-to-token-gate--website-text109 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .how-to-token-gate--website-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .how-to-token-gate--website-left2 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .how-to-token-gate--website-text110 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .how-to-token-gate--website-text111 {
            text-align: left;
          }
          .how-to-token-gate--website-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .how-to-token-gate--website-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .how-to-token-gate--website-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .how-to-token-gate--website-text112 {
            cursor: pointer;
            display: none;
          }
          .how-to-token-gate--website-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .how-to-token-gate--website-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .how-to-token-gate--website-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .how-to-token-gate--website-text115 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .how-to-token-gate--website-text119 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .how-to-token-gate--website-get-started6 {
            margin-bottom: 0px;
          }
          .how-to-token-gate--website-text120 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .how-to-token-gate--website-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .how-to-token-gate--website-image1 {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          @media (max-width: 1200px) {
            .how-to-token-gate--website-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .how-to-token-gate--website-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .how-to-token-gate--website-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .how-to-token-gate--website-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .how-to-token-gate--website-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .how-to-token-gate--website-header {
              width: 100%;
              max-width: 1200px;
            }
            .how-to-token-gate--website-features {
              padding-top: 260px;
            }
            .how-to-token-gate--website-title {
              width: 100%;
              max-width: 1200px;
            }
            .how-to-token-gate--website-text014 {
              font-size: 36px;
              line-height: 40px;
            }
            .how-to-token-gate--website-text018 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .how-to-token-gate--website-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .how-to-token-gate--website-text022 {
              line-height: 21px;
            }
            .how-to-token-gate--website-text024 {
              line-height: 21px;
            }
            .how-to-token-gate--website-text026 {
              line-height: 21px;
            }
            .how-to-token-gate--website-text027 {
              font-size: 24px;
            }
            .how-to-token-gate--website-text028 {
              line-height: 21px;
            }
            .how-to-token-gate--website-container4 {
              margin-left: 0px;
            }
            .how-to-token-gate--website-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .how-to-token-gate--website-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-container5 {
              width: 100%;
            }
            .how-to-token-gate--website-pasted-image {
              height: auto;
            }
            .how-to-token-gate--website-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-text076 {
              width: 100%;
              max-width: 600px;
            }
            .how-to-token-gate--website-cards1 {
              display: flex;
              flex-direction: column;
            }
            .how-to-token-gate--website-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-text080 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-text082 {
              font-size: 16px;
            }
            .how-to-token-gate--website-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .how-to-token-gate--website-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .how-to-token-gate--website-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .how-to-token-gate--website-left2 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .how-to-token-gate--website-text111 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .how-to-token-gate--website-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .how-to-token-gate--website-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-action {
              flex-direction: column;
            }
            .how-to-token-gate--website-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-text115 {
              font-size: 36px;
              line-height: 36px;
            }
          }
          @media (max-width: 767px) {
            .how-to-token-gate--website-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .how-to-token-gate--website-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .how-to-token-gate--website-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .how-to-token-gate--website-left {
              margin-left: var(--dl-space-space-unit);
            }
            .how-to-token-gate--website-links {
              display: none;
            }
            .how-to-token-gate--website-right {
              margin-right: var(--dl-space-space-unit);
            }
            .how-to-token-gate--website-sign-in {
              display: flex;
            }
            .how-to-token-gate--website-get-started {
              display: flex;
            }
            .how-to-token-gate--website-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .how-to-token-gate--website-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .how-to-token-gate--website-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .how-to-token-gate--website-text009 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .how-to-token-gate--website-text010 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .how-to-token-gate--website-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-text014 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .how-to-token-gate--website-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .how-to-token-gate--website-text021 {
              font-size: 24px;
            }
            .how-to-token-gate--website-text022 {
              font-size: 14px;
            }
            .how-to-token-gate--website-publish {
              margin-left: 0px;
            }
            .how-to-token-gate--website-text023 {
              font-size: 24px;
            }
            .how-to-token-gate--website-text024 {
              font-size: 14px;
            }
            .how-to-token-gate--website-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .how-to-token-gate--website-analyze {
              margin-right: 0px;
            }
            .how-to-token-gate--website-text025 {
              font-size: 24px;
            }
            .how-to-token-gate--website-text026 {
              font-size: 14px;
            }
            .how-to-token-gate--website-text028 {
              font-size: 14px;
            }
            .how-to-token-gate--website-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-text065 {
              line-height: 24px;
            }
            .how-to-token-gate--website-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .how-to-token-gate--website-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .how-to-token-gate--website-text067 {
              margin-bottom: 0px;
            }
            .how-to-token-gate--website-headng {
              padding-bottom: 0px;
            }
            .how-to-token-gate--website-get-started2 {
              display: none;
            }
            .how-to-token-gate--website-container5 {
              width: 100%;
            }
            .how-to-token-gate--website-row {
              height: auto;
              flex-direction: column;
            }
            .how-to-token-gate--website-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-text079 {
              font-size: 28px;
            }
            .how-to-token-gate--website-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .how-to-token-gate--website-text085 {
              font-size: 28px;
            }
            .how-to-token-gate--website-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .how-to-token-gate--website-text098 {
              font-size: 28px;
            }
            .how-to-token-gate--website-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .how-to-token-gate--website-right1 {
              width: 100%;
              flex-direction: column;
            }
            .how-to-token-gate--website-column1 {
              display: none;
            }
            .how-to-token-gate--website-text112 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .how-to-token-gate--website-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .how-to-token-gate--website-action {
              align-items: center;
            }
            .how-to-token-gate--website-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-text115 {
              font-size: 28px;
              text-align: left;
            }
            .how-to-token-gate--website-text120 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .how-to-token-gate--website-images {
              justify-content: center;
            }
            .how-to-token-gate--website-image1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .how-to-token-gate--website-hero {
              height: auto;
            }
            .how-to-token-gate--website-centered-desktop {
              justify-content: center;
            }
            .how-to-token-gate--website-logo {
              width: 180px;
            }
            .how-to-token-gate--website-sign-in {
              display: none;
            }
            .how-to-token-gate--website-get-started {
              display: none;
            }
            .how-to-token-gate--website-icon {
              display: none;
            }
            .how-to-token-gate--website-centered-mobile {
              justify-content: center;
            }
            .how-to-token-gate--website-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .how-to-token-gate--website-link7 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .how-to-token-gate--website-text010 {
              color: #eee9fe;
            }
            .how-to-token-gate--website-features {
              padding-top: 200px;
            }
            .how-to-token-gate--website-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .how-to-token-gate--website-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .how-to-token-gate--website-analyze {
              margin-bottom: 0px;
            }
            .how-to-token-gate--website-blog {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .how-to-token-gate--website-get-started1 {
              background-color: var(--dl-color-primary-700);
            }
            .how-to-token-gate--website-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .how-to-token-gate--website-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-get-started5 {
              background-color: var(--dl-color-gray-white);
            }
            .how-to-token-gate--website-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .how-to-token-gate--website-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default HowToTokenGateAWebsite
