import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'

const AnIntroductionToNFTTokenGating = (props) => {
  return (
    <>
      <div className="an-introduction-to-nf-token-gating-container">
        <Head>
          <title>
            Token Gating Platforms: Revolutionizing Web3 Content Monetization
          </title>
          <meta
            name="description"
            content="The easiest way to create token gated digital experiences. Token gate your website or web application. Gateful simplifies Blockchain access management."
          />
          <meta
            property="og:title"
            content="Token Gating Platforms: Revolutionizing Web3 Content Monetization"
          />
          <meta
            property="og:description"
            content="Gateful makes it easy to add Web3 Token Gating functionality to your website or web application. Transform your project into a powerful Web3-connected community without writing any code."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <section
          id="header"
          className="an-introduction-to-nf-token-gating-hero"
        >
          <div className="an-introduction-to-nf-token-gating-menu">
            <div
              id="navigation"
              className="an-introduction-to-nf-token-gating-desktop-navigation"
            >
              <nav className="an-introduction-to-nf-token-gating-centered-desktop">
                <div className="an-introduction-to-nf-token-gating-left">
                  <Link href="/">
                    <a className="an-introduction-to-nf-token-gating-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="an-introduction-to-nf-token-gating-logo"
                      />
                    </a>
                  </Link>
                  <div className="an-introduction-to-nf-token-gating-links">
                    <Link href="/token-gating-platform">
                      <a className="an-introduction-to-nf-token-gating-link01 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="an-introduction-to-nf-token-gating-link02 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="an-introduction-to-nf-token-gating-link03 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="an-introduction-to-nf-token-gating-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="an-introduction-to-nf-token-gating-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="an-introduction-to-nf-token-gating-link04">
                      <div className="an-introduction-to-nf-token-gating-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="an-introduction-to-nf-token-gating-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="an-introduction-to-nf-token-gating-text004">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="an-introduction-to-nf-token-gating-centered-mobile">
                <div className="an-introduction-to-nf-token-gating-left1">
                  <div className="an-introduction-to-nf-token-gating-links1">
                    <Link href="/token-gating-platform">
                      <a className="an-introduction-to-nf-token-gating-link05 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="an-introduction-to-nf-token-gating-link06 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="an-introduction-to-nf-token-gating-link07 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
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
          </div>
          <header className="an-introduction-to-nf-token-gating-header">
            <h1 className="an-introduction-to-nf-token-gating-text009">
              An Introduction to NFT Token Gating
            </h1>
            <p className="an-introduction-to-nf-token-gating-text010">
              Embracing the Future of Web3
            </p>
            <div className="an-introduction-to-nf-token-gating-profile">
              <img
                alt="profile"
                src="/playground_assets/headshot2022bpng-200w.png"
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="an-introduction-to-nf-token-gating-image"
              />
              <span className="an-introduction-to-nf-token-gating-text011">
                <span>J. Eric Hill</span>
                <br></br>
              </span>
            </div>
          </header>
        </section>
        <section className="an-introduction-to-nf-token-gating-features">
          <div className="an-introduction-to-nf-token-gating-title">
            <span className="an-introduction-to-nf-token-gating-text014">
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
            <span className="an-introduction-to-nf-token-gating-text018">
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
          <div className="an-introduction-to-nf-token-gating-cards">
            <div className="an-introduction-to-nf-token-gating-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="an-introduction-to-nf-token-gating-icon02"
                />
                <span className="an-introduction-to-nf-token-gating-text021">
                  Schedule
                </span>
                <span className="an-introduction-to-nf-token-gating-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="an-introduction-to-nf-token-gating-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="an-introduction-to-nf-token-gating-icon03"
                />
                <span className="an-introduction-to-nf-token-gating-text023">
                  Publish
                </span>
                <span className="an-introduction-to-nf-token-gating-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="an-introduction-to-nf-token-gating-container2">
              <div className="card an-introduction-to-nf-token-gating-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="an-introduction-to-nf-token-gating-icon04"
                />
                <span className="an-introduction-to-nf-token-gating-text025">
                  Analyze
                </span>
                <span className="an-introduction-to-nf-token-gating-text026">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="an-introduction-to-nf-token-gating-icon05"
                />
                <span className="an-introduction-to-nf-token-gating-text027">
                  Get leads
                </span>
                <span className="an-introduction-to-nf-token-gating-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="an-introduction-to-nf-token-gating-banners">
          <div className="an-introduction-to-nf-token-gating-blog">
            <h2 className="an-introduction-to-nf-token-gating-text029">
              The world of digital assets and blockchain technology is evolving
              at a rapid pace. With the advent of non-fungible tokens (NFTs) and
              their increasing popularity, a new concept known as &quot;token
              gating&quot; has emerged.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
            <span className="an-introduction-to-nf-token-gating-text030">
              <span>
                The world of digital assets has experienced exponential growth
                in recent years, with non-fungible tokens (NFTs) gaining
                significant traction. As the NFT market expands, innovative
                applications and strategies have emerged to maximize the
                potential of these digital assets. One such strategy is NFT
                token gating, a concept that holds the promise of
                revolutionizing the way digital content is owned, accessed, and
                monetized.
              </span>
              <br></br>
            </span>
            <h2 className="an-introduction-to-nf-token-gating-text033">
              What is NFT Token Gating?
            </h2>
            <span className="an-introduction-to-nf-token-gating-text034">
              <span>
                NFT token gating refers to the process of restricting access to
                digital content or services based on the ownership of specific
                NFTs. This method allows creators to grant exclusive access to
                their work or experiences to individuals who possess a
                particular NFT, essentially creating a digital &quot;key&quot;
                for unlocking gated content.
              </span>
              <br></br>
              <br></br>
              <span>
                Token gating enables creators to monetize their work while
                ensuring a sense of exclusivity and scarcity for consumers. By
                gating content behind NFTs, creators can foster a dedicated
                community of fans who have a vested interest in the long-term
                value of the content.
              </span>
            </span>
            <h2 className="an-introduction-to-nf-token-gating-text039">
              Benefits of NFT Token Gating
            </h2>
            <h3 className="an-introduction-to-nf-token-gating-text040">
              There are several benefits associated with NFT token gating, which
              include:
            </h3>
            <span className="an-introduction-to-nf-token-gating-text041">
              <span className="an-introduction-to-nf-token-gating-text042">
                Monetization and revenue generation:
              </span>
              <span>
                {' '}
                Token gating allows creators to monetize their work in unique
                and innovative ways. By offering exclusive access to content or
                experiences, creators can generate revenue from their fanbase.
              </span>
              <br></br>
              <br></br>
              <span className="an-introduction-to-nf-token-gating-text046">
                Exclusivity and scarcity:
              </span>
              <span>
                {' '}
                NFT token gating creates a sense of exclusivity and scarcity for
                digital content, driving up its value and attracting collectors
                and enthusiasts.
              </span>
              <br></br>
              <br></br>
              <span className="an-introduction-to-nf-token-gating-text050">
                Community building:
              </span>
              <span>
                {' '}
                Token gating can foster a dedicated community of fans who share
                a common interest in the creator&apos;s work, providing a
                platform for networking, collaboration, and engagement.
              </span>
              <br></br>
              <br></br>
              <span className="an-introduction-to-nf-token-gating-text054">
                Flexibility and control:
              </span>
              <span>
                {' '}
                Creators have complete control over the access and distribution
                of their content, enabling them to experiment with various
                monetization strategies and audience engagement techniques.
              </span>
              <br></br>
            </span>
            <h2 className="an-introduction-to-nf-token-gating-text057">
              Use Case Examples for NFT Token Gating
            </h2>
            <span className="an-introduction-to-nf-token-gating-text058">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="an-introduction-to-nf-token-gating-text060">
                Exclusive content access:
              </span>
              <span>
                {' '}
                Musicians can release limited-edition NFTs that grant holders
                access to unreleased tracks, behind-the-scenes footage, or
                personalized experiences such as virtual concerts.
              </span>
              <br></br>
              <br></br>
              <span className="an-introduction-to-nf-token-gating-text064">
                Gaming:
              </span>
              <span>
                {' '}
                Game developers can use NFT token gating to grant access to
                exclusive in-game items, characters, or levels, enhancing the
                player experience and adding value to the gaming ecosystem.
              </span>
              <br></br>
              <br></br>
              <span className="an-introduction-to-nf-token-gating-text068">
                Virtual events:
              </span>
              <span>
                {' '}
                Event organizers can sell NFT tickets that grant holders access
                to exclusive virtual events, such as conferences, seminars, or
                workshops.
              </span>
              <br></br>
              <br></br>
              <span className="an-introduction-to-nf-token-gating-text072">
                Digital art exhibitions:
              </span>
              <span>
                {' '}
                Artists can create digital galleries where NFT holders are
                granted access to view and purchase exclusive artworks or attend
                virtual openings.
              </span>
            </span>
            <h2 className="an-introduction-to-nf-token-gating-text074">
              NFT token gating is revolutionizing the way NFT creators monetize
              their collections and engage with their token holders.
            </h2>
            <span className="an-introduction-to-nf-token-gating-text075">
              NFT token gating is an innovative concept that has the potential
              to revolutionize the way creators monetize and distribute their
              digital content. By harnessing the power of NFTs and token gating,
              creators can generate new revenue streams, foster dedicated
              communities, and redefine the value of digital assets in the
              modern age. As the market for NFTs continues to expand, it is
              essential for businesses and individuals to explore the
              possibilities and applications of NFT token gating.
            </span>
          </div>
          <div className="an-introduction-to-nf-token-gating-blog1">
            <h2 className="an-introduction-to-nf-token-gating-text076">
              Gateful is the easiest way to token gate any website or web
              application.
            </h2>
            <span className="an-introduction-to-nf-token-gating-text077">
              If you&apos;re looking to add Web3 Token Gating functionality to
              your website or web application and do not know where to start,
              contact our Web3 implementation team for a demo.
            </span>
            <Link href="/book-a-demo">
              <a className="an-introduction-to-nf-token-gating-link08">
                <div className="an-introduction-to-nf-token-gating-get-started1">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="an-introduction-to-nf-token-gating-icon06"
                  >
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <span className="an-introduction-to-nf-token-gating-text078">
                    Book a Demo
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="an-introduction-to-nf-token-gating-integrations">
          <div className="an-introduction-to-nf-token-gating-centered-container">
            <div className="an-introduction-to-nf-token-gating-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="an-introduction-to-nf-token-gating-text081">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="an-introduction-to-nf-token-gating-pills-container">
              <div className="an-introduction-to-nf-token-gating-pills">
                <div className="an-introduction-to-nf-token-gating-container3">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="an-introduction-to-nf-token-gating-container4">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="an-introduction-to-nf-token-gating-how-it-works">
          <div className="an-introduction-to-nf-token-gating-centered-container1">
            <div className="an-introduction-to-nf-token-gating-heading1">
              <span className="an-introduction-to-nf-token-gating-text082">
                How it works
              </span>
              <span className="an-introduction-to-nf-token-gating-text083 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="an-introduction-to-nf-token-gating-category">
              <div className="an-introduction-to-nf-token-gating-headng">
                <span className="an-introduction-to-nf-token-gating-text084">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="an-introduction-to-nf-token-gating-text085">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="an-introduction-to-nf-token-gating-get-started2 template-button">
                  <span className="an-introduction-to-nf-token-gating-text086">
                    Get started
                  </span>
                </div>
              </div>
              <div className="an-introduction-to-nf-token-gating-container5">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="an-introduction-to-nf-token-gating-pasted-image"
                />
              </div>
            </div>
            <div className="an-introduction-to-nf-token-gating-row">
              <div className="an-introduction-to-nf-token-gating-category1">
                <div className="an-introduction-to-nf-token-gating-headng1">
                  <span className="an-introduction-to-nf-token-gating-text087">
                    2 — Act
                  </span>
                  <span className="an-introduction-to-nf-token-gating-text088">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="an-introduction-to-nf-token-gating-pasted-image1"
                />
              </div>
              <div className="an-introduction-to-nf-token-gating-category2">
                <div className="an-introduction-to-nf-token-gating-headng2">
                  <span className="an-introduction-to-nf-token-gating-text089">
                    2 — Act
                  </span>
                  <span className="an-introduction-to-nf-token-gating-text090">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="an-introduction-to-nf-token-gating-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="an-introduction-to-nf-token-gating-pricing">
          <div className="an-introduction-to-nf-token-gating-centered-container2">
            <div className="an-introduction-to-nf-token-gating-heading2">
              <span className="an-introduction-to-nf-token-gating-text091 title">
                Pricing for all kind of businesses
              </span>
              <span className="an-introduction-to-nf-token-gating-text092">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="an-introduction-to-nf-token-gating-selection">
                <span className="an-introduction-to-nf-token-gating-text093">
                  Monthly
                </span>
                <span className="an-introduction-to-nf-token-gating-text094">
                  Yearly
                </span>
              </div>
            </div>
            <div className="an-introduction-to-nf-token-gating-cards1">
              <div className="an-introduction-to-nf-token-gating-card">
                <span className="an-introduction-to-nf-token-gating-text095">
                  Free
                </span>
                <span className="an-introduction-to-nf-token-gating-text096">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="an-introduction-to-nf-token-gating-get-started3 template-button">
                  <span className="an-introduction-to-nf-token-gating-text097">
                    Start for free
                  </span>
                </div>
                <span className="an-introduction-to-nf-token-gating-text098">
                  What&apos;s included
                </span>
                <div className="an-introduction-to-nf-token-gating-bullet-points">
                  <div className="an-introduction-to-nf-token-gating-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text099">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text100">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="an-introduction-to-nf-token-gating-card1">
                <span className="an-introduction-to-nf-token-gating-text101">
                  Pay as you go
                </span>
                <span className="an-introduction-to-nf-token-gating-text102">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="an-introduction-to-nf-token-gating-get-started4 template-button">
                  <span className="an-introduction-to-nf-token-gating-text106">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="an-introduction-to-nf-token-gating-text109">
                  What&apos;s included
                </span>
                <div className="an-introduction-to-nf-token-gating-bullet-points1">
                  <div className="an-introduction-to-nf-token-gating-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text110">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text111">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text112">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text113">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="an-introduction-to-nf-token-gating-card2">
                <span className="an-introduction-to-nf-token-gating-text114">
                  Enterprise
                </span>
                <span className="an-introduction-to-nf-token-gating-text115">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="an-introduction-to-nf-token-gating-get-started5 template-button">
                  <span className="an-introduction-to-nf-token-gating-text118">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="an-introduction-to-nf-token-gating-text121">
                  What&apos;s included
                </span>
                <div className="an-introduction-to-nf-token-gating-bullet-points2">
                  <div className="an-introduction-to-nf-token-gating-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text122">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text123">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text124">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="an-introduction-to-nf-token-gating-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="an-introduction-to-nf-token-gating-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="an-introduction-to-nf-token-gating-text125">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="an-introduction-to-nf-token-gating-testimonals">
          <div className="an-introduction-to-nf-token-gating-left2">
            <span className="an-introduction-to-nf-token-gating-text126">
              Testimonals
            </span>
            <span className="an-introduction-to-nf-token-gating-text127 title">
              What people say about Active
            </span>
          </div>
          <div className="an-introduction-to-nf-token-gating-right1">
            <div className="an-introduction-to-nf-token-gating-column">
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
            <div className="an-introduction-to-nf-token-gating-column1">
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
          <span className="an-introduction-to-nf-token-gating-text128">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="an-introduction-to-nf-token-gating-action-bar">
          <div className="an-introduction-to-nf-token-gating-action">
            <div className="an-introduction-to-nf-token-gating-heading3">
              <span className="an-introduction-to-nf-token-gating-text131 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="an-introduction-to-nf-token-gating-text135">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="an-introduction-to-nf-token-gating-get-started6 template-button">
                <span className="an-introduction-to-nf-token-gating-text136">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="an-introduction-to-nf-token-gating-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="an-introduction-to-nf-token-gating-image1"
              />
            </div>
          </div>
        </section>
        <footer className="an-introduction-to-nf-token-gating-footer">
          <div className="an-introduction-to-nf-token-gating-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="an-introduction-to-nf-token-gating-image2"
            />
            <span className="an-introduction-to-nf-token-gating-text139">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="an-introduction-to-nf-token-gating-text140">
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
                className="an-introduction-to-nf-token-gating-link09"
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
                className="an-introduction-to-nf-token-gating-link10"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="an-introduction-to-nf-token-gating-text143">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="an-introduction-to-nf-token-gating-link11"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .an-introduction-to-nf-token-gating-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-hero {
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
                rgba(18, 16, 74, 0.91) 50%,
                rgba(119, 18, 57, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1664022617645-cf71791942e4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUzfHxuZnR8ZW58MHx8fHwxNjgxNTkxNTQy&ixlib=rb-4.0.3&w=1500');
            background-position: top left, center;
          }
          .an-introduction-to-nf-token-gating-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-centered-desktop {
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
          .an-introduction-to-nf-token-gating-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .an-introduction-to-nf-token-gating-link {
            display: contents;
          }
          .an-introduction-to-nf-token-gating-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-link01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-link02 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-link03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-link04 {
            display: contents;
          }
          .an-introduction-to-nf-token-gating-get-started {
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
          .an-introduction-to-nf-token-gating-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .an-introduction-to-nf-token-gating-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-text004 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-centered-mobile {
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
          .an-introduction-to-nf-token-gating-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .an-introduction-to-nf-token-gating-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-link05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-link06 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-link07 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .an-introduction-to-nf-token-gating-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text009 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .an-introduction-to-nf-token-gating-text010 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 24px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .an-introduction-to-nf-token-gating-profile {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .an-introduction-to-nf-token-gating-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .an-introduction-to-nf-token-gating-text011 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-features {
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
          .an-introduction-to-nf-token-gating-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text014 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .an-introduction-to-nf-token-gating-text018 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .an-introduction-to-nf-token-gating-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text022 {
            line-height: 24px;
          }
          .an-introduction-to-nf-token-gating-publish {
            height: initial;
          }
          .an-introduction-to-nf-token-gating-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text024 {
            line-height: 24px;
          }
          .an-introduction-to-nf-token-gating-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text025 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .an-introduction-to-nf-token-gating-text026 {
            line-height: 24px;
          }
          .an-introduction-to-nf-token-gating-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text027 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text028 {
            line-height: 24px;
          }
          .an-introduction-to-nf-token-gating-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-blog {
            width: 100%;
            display: flex;
            max-width: 900px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .an-introduction-to-nf-token-gating-text029 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text030 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text033 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text034 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text039 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text040 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text041 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text042 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text046 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text050 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text054 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text057 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text058 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text060 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text064 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text068 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text072 {
            font-style: normal;
            font-weight: 700;
          }
          .an-introduction-to-nf-token-gating-text074 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text075 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-blog1 {
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
          .an-introduction-to-nf-token-gating-text076 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text077 {
            font-size: 19px;
            text-align: center;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-link08 {
            display: contents;
          }
          .an-introduction-to-nf-token-gating-get-started1 {
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
          .an-introduction-to-nf-token-gating-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .an-introduction-to-nf-token-gating-icon06 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-text078 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .an-introduction-to-nf-token-gating-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text081 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .an-introduction-to-nf-token-gating-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-container3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-container4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-how-it-works {
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
          .an-introduction-to-nf-token-gating-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .an-introduction-to-nf-token-gating-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text082 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .an-introduction-to-nf-token-gating-text083 {
            color: var(--dl-color-gray-white);
          }
          .an-introduction-to-nf-token-gating-category {
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
          .an-introduction-to-nf-token-gating-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-text084 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .an-introduction-to-nf-token-gating-text085 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .an-introduction-to-nf-token-gating-get-started2 {
            margin-bottom: 0px;
          }
          .an-introduction-to-nf-token-gating-get-started2:hover {
            color: black;
            background-color: #ffffff;
          }
          .an-introduction-to-nf-token-gating-text086 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .an-introduction-to-nf-token-gating-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-category1 {
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
          .an-introduction-to-nf-token-gating-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .an-introduction-to-nf-token-gating-text087 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .an-introduction-to-nf-token-gating-text088 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .an-introduction-to-nf-token-gating-pasted-image1 {
            width: 100%;
          }
          .an-introduction-to-nf-token-gating-category2 {
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
          .an-introduction-to-nf-token-gating-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .an-introduction-to-nf-token-gating-text089 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .an-introduction-to-nf-token-gating-text090 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .an-introduction-to-nf-token-gating-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .an-introduction-to-nf-token-gating-pricing {
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
          .an-introduction-to-nf-token-gating-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text091 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .an-introduction-to-nf-token-gating-text092 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .an-introduction-to-nf-token-gating-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-text093 {
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
          .an-introduction-to-nf-token-gating-text094 {
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
          .an-introduction-to-nf-token-gating-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .an-introduction-to-nf-token-gating-card {
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
          .an-introduction-to-nf-token-gating-text095 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text096 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .an-introduction-to-nf-token-gating-get-started3 {
            transition: 0.3s;
          }
          .an-introduction-to-nf-token-gating-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .an-introduction-to-nf-token-gating-text097 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-text098 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text099 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text100 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-card1 {
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
          .an-introduction-to-nf-token-gating-text101 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text102 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .an-introduction-to-nf-token-gating-get-started4 {
            transition: 0.3s;
          }
          .an-introduction-to-nf-token-gating-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .an-introduction-to-nf-token-gating-text106 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-text109 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text110 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text111 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text112 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text113 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-card2 {
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
          .an-introduction-to-nf-token-gating-text114 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-text115 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .an-introduction-to-nf-token-gating-get-started5 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .an-introduction-to-nf-token-gating-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .an-introduction-to-nf-token-gating-text118 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-text121 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .an-introduction-to-nf-token-gating-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text122 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text123 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text124 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .an-introduction-to-nf-token-gating-text125 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .an-introduction-to-nf-token-gating-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-left2 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text126 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .an-introduction-to-nf-token-gating-text127 {
            text-align: left;
          }
          .an-introduction-to-nf-token-gating-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .an-introduction-to-nf-token-gating-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .an-introduction-to-nf-token-gating-text128 {
            cursor: pointer;
            display: none;
          }
          .an-introduction-to-nf-token-gating-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .an-introduction-to-nf-token-gating-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .an-introduction-to-nf-token-gating-text131 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .an-introduction-to-nf-token-gating-text135 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .an-introduction-to-nf-token-gating-get-started6 {
            margin-bottom: 0px;
          }
          .an-introduction-to-nf-token-gating-text136 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .an-introduction-to-nf-token-gating-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .an-introduction-to-nf-token-gating-image1 {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .an-introduction-to-nf-token-gating-footer {
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
          .an-introduction-to-nf-token-gating-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .an-introduction-to-nf-token-gating-image2 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text139 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .an-introduction-to-nf-token-gating-text140 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .an-introduction-to-nf-token-gating-link09 {
            text-decoration: underline;
          }
          .an-introduction-to-nf-token-gating-link10 {
            text-decoration: underline;
          }
          .an-introduction-to-nf-token-gating-text143 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .an-introduction-to-nf-token-gating-link11 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .an-introduction-to-nf-token-gating-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .an-introduction-to-nf-token-gating-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .an-introduction-to-nf-token-gating-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .an-introduction-to-nf-token-gating-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .an-introduction-to-nf-token-gating-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .an-introduction-to-nf-token-gating-header {
              width: 100%;
              max-width: 1200px;
            }
            .an-introduction-to-nf-token-gating-features {
              padding-top: 260px;
            }
            .an-introduction-to-nf-token-gating-title {
              width: 100%;
              max-width: 1200px;
            }
            .an-introduction-to-nf-token-gating-text014 {
              font-size: 36px;
              line-height: 40px;
            }
            .an-introduction-to-nf-token-gating-text018 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .an-introduction-to-nf-token-gating-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .an-introduction-to-nf-token-gating-text022 {
              line-height: 21px;
            }
            .an-introduction-to-nf-token-gating-text024 {
              line-height: 21px;
            }
            .an-introduction-to-nf-token-gating-text026 {
              line-height: 21px;
            }
            .an-introduction-to-nf-token-gating-text027 {
              font-size: 24px;
            }
            .an-introduction-to-nf-token-gating-text028 {
              line-height: 21px;
            }
            .an-introduction-to-nf-token-gating-container4 {
              margin-left: 0px;
            }
            .an-introduction-to-nf-token-gating-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-container5 {
              width: 100%;
            }
            .an-introduction-to-nf-token-gating-pasted-image {
              height: auto;
            }
            .an-introduction-to-nf-token-gating-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-text092 {
              width: 100%;
              max-width: 600px;
            }
            .an-introduction-to-nf-token-gating-cards1 {
              display: flex;
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-text096 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-text098 {
              font-size: 16px;
            }
            .an-introduction-to-nf-token-gating-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .an-introduction-to-nf-token-gating-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .an-introduction-to-nf-token-gating-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-left2 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .an-introduction-to-nf-token-gating-text127 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .an-introduction-to-nf-token-gating-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .an-introduction-to-nf-token-gating-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-action {
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-text131 {
              font-size: 36px;
              line-height: 36px;
            }
            .an-introduction-to-nf-token-gating-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .an-introduction-to-nf-token-gating-top {
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-text143 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .an-introduction-to-nf-token-gating-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .an-introduction-to-nf-token-gating-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .an-introduction-to-nf-token-gating-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .an-introduction-to-nf-token-gating-left {
              margin-left: var(--dl-space-space-unit);
            }
            .an-introduction-to-nf-token-gating-links {
              display: none;
            }
            .an-introduction-to-nf-token-gating-right {
              margin-right: var(--dl-space-space-unit);
            }
            .an-introduction-to-nf-token-gating-sign-in {
              display: flex;
            }
            .an-introduction-to-nf-token-gating-get-started {
              display: flex;
            }
            .an-introduction-to-nf-token-gating-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .an-introduction-to-nf-token-gating-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .an-introduction-to-nf-token-gating-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .an-introduction-to-nf-token-gating-text009 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .an-introduction-to-nf-token-gating-text010 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .an-introduction-to-nf-token-gating-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-text014 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .an-introduction-to-nf-token-gating-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-text021 {
              font-size: 24px;
            }
            .an-introduction-to-nf-token-gating-text022 {
              font-size: 14px;
            }
            .an-introduction-to-nf-token-gating-publish {
              margin-left: 0px;
            }
            .an-introduction-to-nf-token-gating-text023 {
              font-size: 24px;
            }
            .an-introduction-to-nf-token-gating-text024 {
              font-size: 14px;
            }
            .an-introduction-to-nf-token-gating-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-analyze {
              margin-right: 0px;
            }
            .an-introduction-to-nf-token-gating-text025 {
              font-size: 24px;
            }
            .an-introduction-to-nf-token-gating-text026 {
              font-size: 14px;
            }
            .an-introduction-to-nf-token-gating-text028 {
              font-size: 14px;
            }
            .an-introduction-to-nf-token-gating-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-text081 {
              line-height: 24px;
            }
            .an-introduction-to-nf-token-gating-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .an-introduction-to-nf-token-gating-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .an-introduction-to-nf-token-gating-text083 {
              margin-bottom: 0px;
            }
            .an-introduction-to-nf-token-gating-headng {
              padding-bottom: 0px;
            }
            .an-introduction-to-nf-token-gating-get-started2 {
              display: none;
            }
            .an-introduction-to-nf-token-gating-container5 {
              width: 100%;
            }
            .an-introduction-to-nf-token-gating-row {
              height: auto;
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-text095 {
              font-size: 28px;
            }
            .an-introduction-to-nf-token-gating-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .an-introduction-to-nf-token-gating-text101 {
              font-size: 28px;
            }
            .an-introduction-to-nf-token-gating-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .an-introduction-to-nf-token-gating-text114 {
              font-size: 28px;
            }
            .an-introduction-to-nf-token-gating-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .an-introduction-to-nf-token-gating-right1 {
              width: 100%;
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-column1 {
              display: none;
            }
            .an-introduction-to-nf-token-gating-text128 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .an-introduction-to-nf-token-gating-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .an-introduction-to-nf-token-gating-action {
              align-items: center;
            }
            .an-introduction-to-nf-token-gating-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-text131 {
              font-size: 28px;
              text-align: left;
            }
            .an-introduction-to-nf-token-gating-text136 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .an-introduction-to-nf-token-gating-images {
              justify-content: center;
            }
            .an-introduction-to-nf-token-gating-image1 {
              width: 100%;
            }
            .an-introduction-to-nf-token-gating-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-image2 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .an-introduction-to-nf-token-gating-hero {
              height: auto;
            }
            .an-introduction-to-nf-token-gating-centered-desktop {
              justify-content: center;
            }
            .an-introduction-to-nf-token-gating-logo {
              width: 180px;
            }
            .an-introduction-to-nf-token-gating-sign-in {
              display: none;
            }
            .an-introduction-to-nf-token-gating-get-started {
              display: none;
            }
            .an-introduction-to-nf-token-gating-icon {
              display: none;
            }
            .an-introduction-to-nf-token-gating-centered-mobile {
              justify-content: center;
            }
            .an-introduction-to-nf-token-gating-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .an-introduction-to-nf-token-gating-link07 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .an-introduction-to-nf-token-gating-text010 {
              color: #eee9fe;
            }
            .an-introduction-to-nf-token-gating-features {
              padding-top: 200px;
            }
            .an-introduction-to-nf-token-gating-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .an-introduction-to-nf-token-gating-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .an-introduction-to-nf-token-gating-analyze {
              margin-bottom: 0px;
            }
            .an-introduction-to-nf-token-gating-blog {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .an-introduction-to-nf-token-gating-get-started1 {
              background-color: var(--dl-color-primary-700);
            }
            .an-introduction-to-nf-token-gating-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .an-introduction-to-nf-token-gating-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-get-started5 {
              background-color: var(--dl-color-gray-white);
            }
            .an-introduction-to-nf-token-gating-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .an-introduction-to-nf-token-gating-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .an-introduction-to-nf-token-gating-text139 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default AnIntroductionToNFTTokenGating
