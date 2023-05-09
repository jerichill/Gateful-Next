import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'
import Footer from '../components/footer'

const Web3AndUserAdoption = (props) => {
  return (
    <>
      <div className="web-and-user-adoption-container">
        <Head>
          <title>
            Realization of the Web3 Vision: A Look at Web3 and User Adoption
          </title>
          <meta
            name="description"
            content="Understanding the concept of Web3, a decentralized and user-centric vision of the internet, and how users are adopting this new technology."
          />
          <meta
            property="og:title"
            content="Realization of the Web3 Vision: A Look at Web3 and User Adoption"
          />
          <meta
            property="og:description"
            content="Understanding the concept of Web3, a decentralized and user-centric vision of the internet, and how users are adopting this new technology."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <section id="header" className="web-and-user-adoption-hero">
          <div className="web-and-user-adoption-menu">
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
              className="web-and-user-adoption-desktop-navigation"
            >
              <nav className="web-and-user-adoption-centered-desktop">
                <div className="web-and-user-adoption-left">
                  <Link href="/">
                    <a className="web-and-user-adoption-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="web-and-user-adoption-logo"
                      />
                    </a>
                  </Link>
                  <div className="web-and-user-adoption-links">
                    <Link href="/token-gating-platform">
                      <a className="web-and-user-adoption-link1 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="web-and-user-adoption-link2 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="web-and-user-adoption-link3 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="web-and-user-adoption-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="web-and-user-adoption-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="web-and-user-adoption-link4">
                      <div className="web-and-user-adoption-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="web-and-user-adoption-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="web-and-user-adoption-text004">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="web-and-user-adoption-centered-mobile">
                <div className="web-and-user-adoption-left1">
                  <div className="web-and-user-adoption-links1">
                    <Link href="/token-gating-platform">
                      <a className="web-and-user-adoption-link5 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="web-and-user-adoption-link6 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="web-and-user-adoption-link7 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="web-and-user-adoption-header">
            <h1 className="web-and-user-adoption-text009">
              A Look at Web3 and User Adoption
            </h1>
            <p className="web-and-user-adoption-text010">
              Realization of the Web3 Vision
            </p>
          </header>
        </section>
        <section className="web-and-user-adoption-features">
          <div className="web-and-user-adoption-title">
            <span className="web-and-user-adoption-text011">
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
            <span className="web-and-user-adoption-text015">
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
          <div className="web-and-user-adoption-cards">
            <div className="web-and-user-adoption-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="web-and-user-adoption-icon02"
                />
                <span className="web-and-user-adoption-text018">Schedule</span>
                <span className="web-and-user-adoption-text019">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="web-and-user-adoption-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="web-and-user-adoption-icon03"
                />
                <span className="web-and-user-adoption-text020">Publish</span>
                <span className="web-and-user-adoption-text021">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="web-and-user-adoption-container2">
              <div className="card web-and-user-adoption-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="web-and-user-adoption-icon04"
                />
                <span className="web-and-user-adoption-text022">Analyze</span>
                <span className="web-and-user-adoption-text023">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="web-and-user-adoption-icon05"
                />
                <span className="web-and-user-adoption-text024">Get leads</span>
                <span className="web-and-user-adoption-text025">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="web-and-user-adoption-banners">
          <div className="web-and-user-adoption-blog">
            <h2 className="web-and-user-adoption-text026">
              Understanding the concept of Web3, a decentralized and
              user-centric vision of the internet, and how users are adopting
              this new technology.
            </h2>
            <span className="web-and-user-adoption-text027">
              <span>
                By understanding the fundamentals of Web3 and the strategies
                being employed to promote its adoption, businesses and
                individuals can better navigate and capitalize on the
                opportunities presented by this innovative shift in the digital
                landscape.
              </span>
              <br></br>
              <br></br>
              <span>
                The internet has gone through a series of transformations since
                its inception. In the span of a few decades, it has evolved from
                a static, one-way information distribution system to a dynamic,
                interactive platform. As we stand on the cusp of another major
                shift in the digital landscape, understanding the concept of
                Web3 and how users are adopting this new technology is crucial
                for businesses and individuals looking to stay ahead of the
                curve.
              </span>
              <br></br>
            </span>
            <h2 className="web-and-user-adoption-text033">What is Web3</h2>
            <h3 className="web-and-user-adoption-text034">
              The Evolution of the Internet: Web1 to Web3
            </h3>
            <span className="web-and-user-adoption-text035">
              Web1, or the first iteration of the internet, was characterized by
              static web pages and one-way information flow. With the advent of
              Web2, the internet became more interactive and user-generated
              content became the norm. Web3 is the next evolutionary step,
              focusing on decentralization, user ownership, and improved
              security.
            </span>
            <h3 className="web-and-user-adoption-text036">
              The Evolution of the Internet: Web1 to Web3
            </h3>
            <span className="web-and-user-adoption-text037">
              <span className="web-and-user-adoption-text038">
                Web3 is built on several key components, including:
              </span>
              <br className="web-and-user-adoption-text039"></br>
              <br></br>
              <span className="web-and-user-adoption-text041">
                Decentralization:
              </span>
              <span>
                {' '}
                Web3 aims to eliminate reliance on central authorities and
                intermediaries, enabling users to directly interact with each
                other through peer-to-peer networks.
              </span>
              <br></br>
              <br></br>
              <span className="web-and-user-adoption-text045">
                User Ownership:
              </span>
              <span>
                {' '}
                Web3 promotes the concept of user ownership of data and digital
                assets, allowing individuals to maintain control over their
                online presence and monetize their contributions.
              </span>
              <br></br>
              <br></br>
              <span className="web-and-user-adoption-text049">
                Improved Security:
              </span>
              <span>
                {' '}
                Web3 leverages advanced cryptographic techniques and blockchain
                technology to enhance security, privacy, and trust in online
                interactions.
              </span>
              <br></br>
            </span>
            <h2 className="web-and-user-adoption-text052">
              How are Users Adopting New Web3 Technology?
            </h2>
            <h3 className="web-and-user-adoption-text053">
              Decentralized Applications (DApps)
            </h3>
            <span className="web-and-user-adoption-text054">
              Users are increasingly using DApps, which are applications built
              on decentralized platforms. These applications offer improved
              security, privacy, and control compared to their centralized
              counterparts.
            </span>
            <h3 className="web-and-user-adoption-text055">
              Cryptocurrencies and Digital Assets
            </h3>
            <span className="web-and-user-adoption-text056">
              Cryptocurrencies, such as Bitcoin and Ethereum, have gained
              significant traction as users adopt them for various use cases,
              including transactions, investments, and as a hedge against
              traditional financial systems.
            </span>
            <h3 className="web-and-user-adoption-text057">
              Non-Fungible Tokens (NFTs)
            </h3>
            <span className="web-and-user-adoption-text058">
              NFTs have exploded in popularity as users embrace their potential
              to represent digital art, collectibles, and other unique digital
              assets, enabling individuals to own and trade them with ease.
            </span>
            <h3 className="web-and-user-adoption-text059">
              Decentralized Finance (DeFi)
            </h3>
            <span className="web-and-user-adoption-text060">
              DeFi platforms offer users access to financial services, such as
              lending, borrowing, and trading, without the need for traditional
              intermediaries like banks, thereby democratizing access to
              financial tools.
            </span>
            <h3 className="web-and-user-adoption-text061">
              Governance and Decentralized Autonomous Organizations (DAOs)
            </h3>
            <span className="web-and-user-adoption-text062">
              Users are participating in governance processes and joining DAOs,
              which are community-driven organizations that operate on
              decentralized platforms, enabling transparent decision-making and
              resource allocation.
            </span>
            <h2 className="web-and-user-adoption-text063">
              Challenges and Barriers to Adoption
            </h2>
            <span className="web-and-user-adoption-text064">
              <span className="web-and-user-adoption-text065">
                Despite the promise of Web3, there are challenges and barriers
                that must be addressed to facilitate widespread adoption, such
                as:
              </span>
              <br></br>
              <br></br>
              <span className="web-and-user-adoption-text068">
                Scalability:
              </span>
              <span>
                {' '}
                Decentralized platforms must be able to handle increased traffic
                and transactions as user adoption grows.
              </span>
              <br></br>
              <br></br>
              <span className="web-and-user-adoption-text072">Usability:</span>
              <span>
                {' '}
                Interfaces and user experiences must be improved to make Web3
                technologies more accessible to non-technical users.
              </span>
              <br></br>
              <br></br>
              <span className="web-and-user-adoption-text076">Regulation:</span>
              <span>
                {' '}
                Regulatory frameworks must evolve to accommodate the unique
                aspects of Web3 without stifling innovation.
              </span>
            </span>
            <span className="web-and-user-adoption-text078">
              Web3 represents a significant shift in the way users interact with
              the internet, emphasizing decentralization, ownership, and
              security. By understanding the core components of Web3 and
              examining how users are adopting these new technologies,
              businesses and individuals can better position themselves to
              capitalize on the opportunities presented by this digital
              transformation. However, addressing the challenges and barriers to
              adoption will be critical in ensuring the successful realization
              of the Web3 vision.
            </span>
          </div>
          <div className="web-and-user-adoption-blog1">
            <h2 className="web-and-user-adoption-text079">
              Gateful is the easiest way to token gate any website or web
              application.
            </h2>
            <span className="web-and-user-adoption-text080">
              If you&apos;re looking to add Web3 Token Gating functionality to
              your website or web application and do not know where to start,
              contact our Web3 implementation team for a demo.
            </span>
            <Link href="/book-a-demo">
              <a className="web-and-user-adoption-link8">
                <div className="web-and-user-adoption-get-started1">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="web-and-user-adoption-icon06"
                  >
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <span className="web-and-user-adoption-text081">
                    Book a Demo
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="web-and-user-adoption-integrations">
          <div className="web-and-user-adoption-centered-container">
            <div className="web-and-user-adoption-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="web-and-user-adoption-text084">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="web-and-user-adoption-pills-container">
              <div className="web-and-user-adoption-pills">
                <div className="web-and-user-adoption-container3">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="web-and-user-adoption-container4">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="web-and-user-adoption-how-it-works">
          <div className="web-and-user-adoption-centered-container1">
            <div className="web-and-user-adoption-heading1">
              <span className="web-and-user-adoption-text085">
                How it works
              </span>
              <span className="web-and-user-adoption-text086 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="web-and-user-adoption-category">
              <div className="web-and-user-adoption-headng">
                <span className="web-and-user-adoption-text087">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="web-and-user-adoption-text088">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="web-and-user-adoption-get-started2 template-button">
                  <span className="web-and-user-adoption-text089">
                    Get started
                  </span>
                </div>
              </div>
              <div className="web-and-user-adoption-container5">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="web-and-user-adoption-pasted-image"
                />
              </div>
            </div>
            <div className="web-and-user-adoption-row">
              <div className="web-and-user-adoption-category1">
                <div className="web-and-user-adoption-headng1">
                  <span className="web-and-user-adoption-text090">2 — Act</span>
                  <span className="web-and-user-adoption-text091">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="web-and-user-adoption-pasted-image1"
                />
              </div>
              <div className="web-and-user-adoption-category2">
                <div className="web-and-user-adoption-headng2">
                  <span className="web-and-user-adoption-text092">2 — Act</span>
                  <span className="web-and-user-adoption-text093">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="web-and-user-adoption-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="web-and-user-adoption-pricing">
          <div className="web-and-user-adoption-centered-container2">
            <div className="web-and-user-adoption-heading2">
              <span className="web-and-user-adoption-text094 title">
                Pricing for all kind of businesses
              </span>
              <span className="web-and-user-adoption-text095">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="web-and-user-adoption-selection">
                <span className="web-and-user-adoption-text096">Monthly</span>
                <span className="web-and-user-adoption-text097">Yearly</span>
              </div>
            </div>
            <div className="web-and-user-adoption-cards1">
              <div className="web-and-user-adoption-card">
                <span className="web-and-user-adoption-text098">Free</span>
                <span className="web-and-user-adoption-text099">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="web-and-user-adoption-get-started3 template-button">
                  <span className="web-and-user-adoption-text100">
                    Start for free
                  </span>
                </div>
                <span className="web-and-user-adoption-text101">
                  What&apos;s included
                </span>
                <div className="web-and-user-adoption-bullet-points">
                  <div className="web-and-user-adoption-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text102">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text103">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="web-and-user-adoption-card1">
                <span className="web-and-user-adoption-text104">
                  Pay as you go
                </span>
                <span className="web-and-user-adoption-text105">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="web-and-user-adoption-get-started4 template-button">
                  <span className="web-and-user-adoption-text109">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="web-and-user-adoption-text112">
                  What&apos;s included
                </span>
                <div className="web-and-user-adoption-bullet-points1">
                  <div className="web-and-user-adoption-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text113">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text114">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text115">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text116">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="web-and-user-adoption-card2">
                <span className="web-and-user-adoption-text117">
                  Enterprise
                </span>
                <span className="web-and-user-adoption-text118">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="web-and-user-adoption-get-started5 template-button">
                  <span className="web-and-user-adoption-text121">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="web-and-user-adoption-text124">
                  What&apos;s included
                </span>
                <div className="web-and-user-adoption-bullet-points2">
                  <div className="web-and-user-adoption-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text125">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text126">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text127">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="web-and-user-adoption-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="web-and-user-adoption-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="web-and-user-adoption-text128">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="web-and-user-adoption-testimonals">
          <div className="web-and-user-adoption-left2">
            <span className="web-and-user-adoption-text129">Testimonals</span>
            <span className="web-and-user-adoption-text130 title">
              What people say about Active
            </span>
          </div>
          <div className="web-and-user-adoption-right1">
            <div className="web-and-user-adoption-column">
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
            <div className="web-and-user-adoption-column1">
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
          <span className="web-and-user-adoption-text131">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="web-and-user-adoption-action-bar">
          <div className="web-and-user-adoption-action">
            <div className="web-and-user-adoption-heading3">
              <span className="web-and-user-adoption-text134 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="web-and-user-adoption-text138">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="web-and-user-adoption-get-started6 template-button">
                <span className="web-and-user-adoption-text139">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="web-and-user-adoption-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="web-and-user-adoption-image"
              />
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name16"></Footer>
      </div>
      <style jsx>
        {`
          .web-and-user-adoption-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .web-and-user-adoption-hero {
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
                rgba(18, 16, 74, 0.9) 48%,
                rgba(119, 18, 57, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1639322537523-abaea1ca9f9c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHdlYjN8ZW58MHx8fHwxNjgxNTkxNDEz&ixlib=rb-4.0.3&w=1500');
            background-position: top left, center;
          }
          .web-and-user-adoption-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-centered-desktop {
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
          .web-and-user-adoption-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .web-and-user-adoption-link {
            display: contents;
          }
          .web-and-user-adoption-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .web-and-user-adoption-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .web-and-user-adoption-link1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .web-and-user-adoption-link2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .web-and-user-adoption-link3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .web-and-user-adoption-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .web-and-user-adoption-link4 {
            display: contents;
          }
          .web-and-user-adoption-get-started {
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
          .web-and-user-adoption-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .web-and-user-adoption-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-text004 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .web-and-user-adoption-centered-mobile {
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
          .web-and-user-adoption-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .web-and-user-adoption-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .web-and-user-adoption-link5 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .web-and-user-adoption-link6 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .web-and-user-adoption-link7 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .web-and-user-adoption-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .web-and-user-adoption-text009 {
            color: var(--dl-color-gray-white);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .web-and-user-adoption-text010 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 24px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .web-and-user-adoption-features {
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
          .web-and-user-adoption-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-text011 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .web-and-user-adoption-text015 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .web-and-user-adoption-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .web-and-user-adoption-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text018 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text019 {
            line-height: 24px;
          }
          .web-and-user-adoption-publish {
            height: initial;
          }
          .web-and-user-adoption-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text020 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text021 {
            line-height: 24px;
          }
          .web-and-user-adoption-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .web-and-user-adoption-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text022 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .web-and-user-adoption-text023 {
            line-height: 24px;
          }
          .web-and-user-adoption-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text024 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text025 {
            line-height: 24px;
          }
          .web-and-user-adoption-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-blog {
            width: 100%;
            display: flex;
            max-width: 900px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .web-and-user-adoption-text026 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text027 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text033 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text034 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text035 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text036 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text037 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text038 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text039 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text041 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text045 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text049 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text052 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text053 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text054 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text055 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text056 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text057 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text058 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text059 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text060 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text061 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text062 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text063 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text064 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text065 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text068 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text072 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text076 {
            font-style: normal;
            font-weight: 700;
          }
          .web-and-user-adoption-text078 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-blog1 {
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
          .web-and-user-adoption-text079 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .web-and-user-adoption-text080 {
            font-size: 19px;
            text-align: center;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-link8 {
            display: contents;
          }
          .web-and-user-adoption-get-started1 {
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
          .web-and-user-adoption-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .web-and-user-adoption-icon06 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-text081 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .web-and-user-adoption-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .web-and-user-adoption-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .web-and-user-adoption-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-text084 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .web-and-user-adoption-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .web-and-user-adoption-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .web-and-user-adoption-container3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .web-and-user-adoption-container4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .web-and-user-adoption-how-it-works {
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
          .web-and-user-adoption-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .web-and-user-adoption-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .web-and-user-adoption-text085 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .web-and-user-adoption-text086 {
            color: var(--dl-color-gray-white);
          }
          .web-and-user-adoption-category {
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
          .web-and-user-adoption-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .web-and-user-adoption-text087 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .web-and-user-adoption-text088 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .web-and-user-adoption-get-started2 {
            margin-bottom: 0px;
          }
          .web-and-user-adoption-get-started2:hover {
            color: black;
            background-color: #ffffff;
          }
          .web-and-user-adoption-text089 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .web-and-user-adoption-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .web-and-user-adoption-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .web-and-user-adoption-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .web-and-user-adoption-category1 {
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
          .web-and-user-adoption-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .web-and-user-adoption-text090 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .web-and-user-adoption-text091 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .web-and-user-adoption-pasted-image1 {
            width: 100%;
          }
          .web-and-user-adoption-category2 {
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
          .web-and-user-adoption-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .web-and-user-adoption-text092 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .web-and-user-adoption-text093 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .web-and-user-adoption-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .web-and-user-adoption-pricing {
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
          .web-and-user-adoption-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .web-and-user-adoption-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .web-and-user-adoption-text094 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .web-and-user-adoption-text095 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .web-and-user-adoption-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .web-and-user-adoption-text096 {
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
          .web-and-user-adoption-text097 {
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
          .web-and-user-adoption-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .web-and-user-adoption-card {
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
          .web-and-user-adoption-text098 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text099 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .web-and-user-adoption-get-started3 {
            transition: 0.3s;
          }
          .web-and-user-adoption-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .web-and-user-adoption-text100 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .web-and-user-adoption-text101 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-and-user-adoption-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text102 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text103 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-card1 {
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
          .web-and-user-adoption-text104 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text105 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .web-and-user-adoption-get-started4 {
            transition: 0.3s;
          }
          .web-and-user-adoption-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .web-and-user-adoption-text109 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .web-and-user-adoption-text112 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-and-user-adoption-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text113 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text114 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text115 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text116 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-card2 {
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
          .web-and-user-adoption-text117 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-text118 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .web-and-user-adoption-get-started5 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .web-and-user-adoption-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .web-and-user-adoption-text121 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .web-and-user-adoption-text124 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .web-and-user-adoption-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .web-and-user-adoption-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text125 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text126 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text127 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .web-and-user-adoption-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .web-and-user-adoption-text128 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .web-and-user-adoption-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .web-and-user-adoption-left2 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .web-and-user-adoption-text129 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .web-and-user-adoption-text130 {
            text-align: left;
          }
          .web-and-user-adoption-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .web-and-user-adoption-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .web-and-user-adoption-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .web-and-user-adoption-text131 {
            cursor: pointer;
            display: none;
          }
          .web-and-user-adoption-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .web-and-user-adoption-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .web-and-user-adoption-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .web-and-user-adoption-text134 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .web-and-user-adoption-text138 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .web-and-user-adoption-get-started6 {
            margin-bottom: 0px;
          }
          .web-and-user-adoption-text139 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .web-and-user-adoption-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .web-and-user-adoption-image {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          @media (max-width: 1200px) {
            .web-and-user-adoption-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .web-and-user-adoption-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .web-and-user-adoption-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .web-and-user-adoption-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .web-and-user-adoption-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .web-and-user-adoption-header {
              width: 100%;
              max-width: 1200px;
            }
            .web-and-user-adoption-features {
              padding-top: 260px;
            }
            .web-and-user-adoption-title {
              width: 100%;
              max-width: 1200px;
            }
            .web-and-user-adoption-text011 {
              font-size: 36px;
              line-height: 40px;
            }
            .web-and-user-adoption-text015 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .web-and-user-adoption-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .web-and-user-adoption-text019 {
              line-height: 21px;
            }
            .web-and-user-adoption-text021 {
              line-height: 21px;
            }
            .web-and-user-adoption-text023 {
              line-height: 21px;
            }
            .web-and-user-adoption-text024 {
              font-size: 24px;
            }
            .web-and-user-adoption-text025 {
              line-height: 21px;
            }
            .web-and-user-adoption-container4 {
              margin-left: 0px;
            }
            .web-and-user-adoption-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .web-and-user-adoption-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-container5 {
              width: 100%;
            }
            .web-and-user-adoption-pasted-image {
              height: auto;
            }
            .web-and-user-adoption-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-text095 {
              width: 100%;
              max-width: 600px;
            }
            .web-and-user-adoption-cards1 {
              display: flex;
              flex-direction: column;
            }
            .web-and-user-adoption-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-text099 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-text101 {
              font-size: 16px;
            }
            .web-and-user-adoption-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .web-and-user-adoption-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .web-and-user-adoption-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .web-and-user-adoption-left2 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .web-and-user-adoption-text130 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .web-and-user-adoption-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .web-and-user-adoption-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-action {
              flex-direction: column;
            }
            .web-and-user-adoption-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-text134 {
              font-size: 36px;
              line-height: 36px;
            }
          }
          @media (max-width: 767px) {
            .web-and-user-adoption-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .web-and-user-adoption-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .web-and-user-adoption-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .web-and-user-adoption-left {
              margin-left: var(--dl-space-space-unit);
            }
            .web-and-user-adoption-links {
              display: none;
            }
            .web-and-user-adoption-right {
              margin-right: var(--dl-space-space-unit);
            }
            .web-and-user-adoption-sign-in {
              display: flex;
            }
            .web-and-user-adoption-get-started {
              display: flex;
            }
            .web-and-user-adoption-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .web-and-user-adoption-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .web-and-user-adoption-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .web-and-user-adoption-text009 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .web-and-user-adoption-text010 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .web-and-user-adoption-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-text011 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .web-and-user-adoption-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .web-and-user-adoption-text018 {
              font-size: 24px;
            }
            .web-and-user-adoption-text019 {
              font-size: 14px;
            }
            .web-and-user-adoption-publish {
              margin-left: 0px;
            }
            .web-and-user-adoption-text020 {
              font-size: 24px;
            }
            .web-and-user-adoption-text021 {
              font-size: 14px;
            }
            .web-and-user-adoption-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .web-and-user-adoption-analyze {
              margin-right: 0px;
            }
            .web-and-user-adoption-text022 {
              font-size: 24px;
            }
            .web-and-user-adoption-text023 {
              font-size: 14px;
            }
            .web-and-user-adoption-text025 {
              font-size: 14px;
            }
            .web-and-user-adoption-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-text084 {
              line-height: 24px;
            }
            .web-and-user-adoption-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .web-and-user-adoption-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .web-and-user-adoption-text086 {
              margin-bottom: 0px;
            }
            .web-and-user-adoption-headng {
              padding-bottom: 0px;
            }
            .web-and-user-adoption-get-started2 {
              display: none;
            }
            .web-and-user-adoption-container5 {
              width: 100%;
            }
            .web-and-user-adoption-row {
              height: auto;
              flex-direction: column;
            }
            .web-and-user-adoption-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-text098 {
              font-size: 28px;
            }
            .web-and-user-adoption-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .web-and-user-adoption-text104 {
              font-size: 28px;
            }
            .web-and-user-adoption-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .web-and-user-adoption-text117 {
              font-size: 28px;
            }
            .web-and-user-adoption-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .web-and-user-adoption-right1 {
              width: 100%;
              flex-direction: column;
            }
            .web-and-user-adoption-column1 {
              display: none;
            }
            .web-and-user-adoption-text131 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .web-and-user-adoption-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .web-and-user-adoption-action {
              align-items: center;
            }
            .web-and-user-adoption-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-text134 {
              font-size: 28px;
              text-align: left;
            }
            .web-and-user-adoption-text139 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .web-and-user-adoption-images {
              justify-content: center;
            }
            .web-and-user-adoption-image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .web-and-user-adoption-hero {
              height: auto;
            }
            .web-and-user-adoption-centered-desktop {
              justify-content: center;
            }
            .web-and-user-adoption-logo {
              width: 180px;
            }
            .web-and-user-adoption-sign-in {
              display: none;
            }
            .web-and-user-adoption-get-started {
              display: none;
            }
            .web-and-user-adoption-icon {
              display: none;
            }
            .web-and-user-adoption-centered-mobile {
              justify-content: center;
            }
            .web-and-user-adoption-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .web-and-user-adoption-link7 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .web-and-user-adoption-text010 {
              color: #eee9fe;
            }
            .web-and-user-adoption-features {
              padding-top: 200px;
            }
            .web-and-user-adoption-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .web-and-user-adoption-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .web-and-user-adoption-analyze {
              margin-bottom: 0px;
            }
            .web-and-user-adoption-blog {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .web-and-user-adoption-get-started1 {
              background-color: var(--dl-color-primary-700);
            }
            .web-and-user-adoption-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .web-and-user-adoption-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-get-started5 {
              background-color: var(--dl-color-gray-white);
            }
            .web-and-user-adoption-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .web-and-user-adoption-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Web3AndUserAdoption
