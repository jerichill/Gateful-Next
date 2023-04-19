import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'
import Footer from '../components/footer'

const AboutTokenGatingPlatforms = (props) => {
  return (
    <>
      <div className="about-token-gating-platforms-container">
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
        <section id="header" className="about-token-gating-platforms-hero">
          <div className="about-token-gating-platforms-menu">
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
              className="about-token-gating-platforms-desktop-navigation"
            >
              <nav className="about-token-gating-platforms-centered-desktop">
                <div className="about-token-gating-platforms-left">
                  <Link href="/">
                    <a className="about-token-gating-platforms-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="about-token-gating-platforms-logo"
                      />
                    </a>
                  </Link>
                  <div className="about-token-gating-platforms-links">
                    <Link href="/token-gating-platform">
                      <a className="about-token-gating-platforms-link1 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="about-token-gating-platforms-link2 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="about-token-gating-platforms-link3 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="about-token-gating-platforms-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-token-gating-platforms-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="about-token-gating-platforms-link4">
                      <div className="about-token-gating-platforms-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="about-token-gating-platforms-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="about-token-gating-platforms-text004">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="about-token-gating-platforms-centered-mobile">
                <div className="about-token-gating-platforms-left1">
                  <div className="about-token-gating-platforms-links1">
                    <Link href="/token-gating-platform">
                      <a className="about-token-gating-platforms-link5 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="about-token-gating-platforms-link6 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="about-token-gating-platforms-link7 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="about-token-gating-platforms-header">
            <h1 className="about-token-gating-platforms-text009">
              About Token Gating Platforms
            </h1>
            <p className="about-token-gating-platforms-text010">
              Revolutionizing Web3 Content Monetization and Access Control
            </p>
            <div className="about-token-gating-platforms-profile">
              <img
                alt="profile"
                src="/playground_assets/headshot2022bpng-200w.png"
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="about-token-gating-platforms-image"
              />
              <span className="about-token-gating-platforms-text011">
                <span>J. Eric Hill</span>
                <br></br>
              </span>
            </div>
          </header>
        </section>
        <section className="about-token-gating-platforms-features">
          <div className="about-token-gating-platforms-title">
            <span className="about-token-gating-platforms-text014">
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
            <span className="about-token-gating-platforms-text018">
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
          <div className="about-token-gating-platforms-cards">
            <div className="about-token-gating-platforms-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="about-token-gating-platforms-icon02"
                />
                <span className="about-token-gating-platforms-text021">
                  Schedule
                </span>
                <span className="about-token-gating-platforms-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="about-token-gating-platforms-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="about-token-gating-platforms-icon03"
                />
                <span className="about-token-gating-platforms-text023">
                  Publish
                </span>
                <span className="about-token-gating-platforms-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="about-token-gating-platforms-container2">
              <div className="card about-token-gating-platforms-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="about-token-gating-platforms-icon04"
                />
                <span className="about-token-gating-platforms-text025">
                  Analyze
                </span>
                <span className="about-token-gating-platforms-text026">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="about-token-gating-platforms-icon05"
                />
                <span className="about-token-gating-platforms-text027">
                  Get leads
                </span>
                <span className="about-token-gating-platforms-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-token-gating-platforms-banners">
          <div className="about-token-gating-platforms-blog">
            <h2 className="about-token-gating-platforms-text029">
              Token Gating Platforms have emerged as a groundbreaking technology
              for content monetization and access control solutions.
            </h2>
            <span className="about-token-gating-platforms-text030">
              <span>
                These platforms are becoming increasingly popular among
                creators, developers, and brands alike, as they offer a new and
                dynamic way of rewarding and engaging with their audience.
              </span>
              <br></br>
            </span>
            <h2 className="about-token-gating-platforms-text033">
              What is a Token Gating Platform?
            </h2>
            <span className="about-token-gating-platforms-text034">
              A Token Gating Platform is a technology that allows content
              creators to restrict access to their content based on a specific
              on-chain criteria, such as holding a certain amount of tokens or
              completing a specific action. These platforms utilize blockchain
              access management technology and to create an automated and secure
              way of gating content while rewarding users who meet the required
              on-chain conditions.
            </span>
            <h2 className="about-token-gating-platforms-text035">
              Benefits of Token Gating Platforms
            </h2>
            <h3 className="about-token-gating-platforms-text036">
              Enhanced Monetization Options
            </h3>
            <span className="about-token-gating-platforms-text037">
              <span>
                Token gating platforms offer a unique monetization model for
                creators, allowing them to charge users for access to premium
                content, membership tiers, or exclusive perks. This empowers
                creators to diversify their income streams while increasing the
                value of their content.
              </span>
              <br></br>
            </span>
            <h3 className="about-token-gating-platforms-text040">
              Improved Audience Engagement
            </h3>
            <span className="about-token-gating-platforms-text041">
              <span>
                Token gating incentives users to engage more with the content,
                as they need to acquire and hold tokens to access gated content.
                This creates a sense of commitment and loyalty among users,
                leading to increased engagement, feedback, and community
                participation.
              </span>
              <br></br>
            </span>
            <h3 className="about-token-gating-platforms-text044">
              Greater Control Over Content Distribution
            </h3>
            <span className="about-token-gating-platforms-text045">
              <span>
                Token gating platforms enable creators to have more control over
                their content and its distribution. By setting specific criteria
                for access, creators can protect their intellectual property and
                ensure that their content is only consumed by a dedicated and
                loyal audience.
              </span>
              <br></br>
            </span>
            <h3 className="about-token-gating-platforms-text048">
              Decentralization and Transparency
            </h3>
            <span className="about-token-gating-platforms-text049">
              <span>
                Token gating platforms are built on blockchain technology, which
                ensures decentralization, transparency, and security. This
                removes the need for intermediaries, such as traditional content
                sharing platforms, and allows creators and users to interact
                directly with each other in a trustless environment.
              </span>
              <br></br>
            </span>
            <h3 className="about-token-gating-platforms-text052">
              Scalability and Interoperability
            </h3>
            <span className="about-token-gating-platforms-text053">
              Token gating platforms are designed to be scalable and
              interoperable with other blockchain networks and services. This
              allows for seamless integration with various decentralized
              applications, such as decentralized finance (DeFi) platforms,
              non-fungible token (NFT) marketplaces, and more.
            </span>
            <h2 className="about-token-gating-platforms-text054">
              Three Examples of Token Gating Platforms
            </h2>
            <h3 className="about-token-gating-platforms-text055">Gateful</h3>
            <span className="about-token-gating-platforms-text056">
              Gateful is a platform that provides an easy way to add Web3 Token
              Gating functionality to your website or web application. With
              Gateful, you can transform your project into a powerful
              Web3-connected community without writing any code.
            </span>
            <h3 className="about-token-gating-platforms-text057">
              Unlock Protocol
            </h3>
            <span className="about-token-gating-platforms-text058">
              Unlock Protocol is a decentralized access control protocol that
              enables creators to monetize their content by selling memberships
              as NFTs. Users can purchase these NFTs to unlock access to
              exclusive content, events, or services.
            </span>
            <h3 className="about-token-gating-platforms-text059">RabbitHole</h3>
            <span className="about-token-gating-platforms-text060">
              RabbitHole is a token gating platform that rewards users for
              completing tasks and engaging with decentralized applications.
              Users earn tokens by participating in various actions, such as
              voting on governance proposals, providing liquidity to DeFi
              platforms, or minting NFTs.
            </span>
            <h2 className="about-token-gating-platforms-text061">
              Token Gating Platforms are revolutionizing the way content
              creators monetize their work and engage with their audience.
            </h2>
            <span className="about-token-gating-platforms-text062">
              By leveraging blockchain technology and token-based access
              control, these platforms offer a more transparent, decentralized,
              and scalable solution for content distribution and monetization.
              As the adoption of token gating platforms continues to grow, we
              can expect to see even more innovative use cases and applications
              in the near future.
            </span>
          </div>
          <div className="about-token-gating-platforms-blog1">
            <h2 className="about-token-gating-platforms-text063">
              Gateful is the easiest way to token gate any website or web
              application.
            </h2>
            <span className="about-token-gating-platforms-text064">
              If you&apos;re looking to add Web3 Token Gating functionality to
              your website or web application and do not know where to start,
              contact our Web3 implementation team for a demo.
            </span>
            <Link href="/book-a-demo">
              <a className="about-token-gating-platforms-link8">
                <div className="about-token-gating-platforms-get-started1">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="about-token-gating-platforms-icon06"
                  >
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <span className="about-token-gating-platforms-text065">
                    Book a Demo
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="about-token-gating-platforms-integrations">
          <div className="about-token-gating-platforms-centered-container">
            <div className="about-token-gating-platforms-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="about-token-gating-platforms-text068">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="about-token-gating-platforms-pills-container">
              <div className="about-token-gating-platforms-pills">
                <div className="about-token-gating-platforms-container3">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="about-token-gating-platforms-container4">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-token-gating-platforms-how-it-works">
          <div className="about-token-gating-platforms-centered-container1">
            <div className="about-token-gating-platforms-heading1">
              <span className="about-token-gating-platforms-text069">
                How it works
              </span>
              <span className="about-token-gating-platforms-text070 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="about-token-gating-platforms-category">
              <div className="about-token-gating-platforms-headng">
                <span className="about-token-gating-platforms-text071">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-token-gating-platforms-text072">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="about-token-gating-platforms-get-started2 template-button">
                  <span className="about-token-gating-platforms-text073">
                    Get started
                  </span>
                </div>
              </div>
              <div className="about-token-gating-platforms-container5">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="about-token-gating-platforms-pasted-image"
                />
              </div>
            </div>
            <div className="about-token-gating-platforms-row">
              <div className="about-token-gating-platforms-category1">
                <div className="about-token-gating-platforms-headng1">
                  <span className="about-token-gating-platforms-text074">
                    2 — Act
                  </span>
                  <span className="about-token-gating-platforms-text075">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="about-token-gating-platforms-pasted-image1"
                />
              </div>
              <div className="about-token-gating-platforms-category2">
                <div className="about-token-gating-platforms-headng2">
                  <span className="about-token-gating-platforms-text076">
                    2 — Act
                  </span>
                  <span className="about-token-gating-platforms-text077">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="about-token-gating-platforms-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about-token-gating-platforms-pricing">
          <div className="about-token-gating-platforms-centered-container2">
            <div className="about-token-gating-platforms-heading2">
              <span className="about-token-gating-platforms-text078 title">
                Pricing for all kind of businesses
              </span>
              <span className="about-token-gating-platforms-text079">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="about-token-gating-platforms-selection">
                <span className="about-token-gating-platforms-text080">
                  Monthly
                </span>
                <span className="about-token-gating-platforms-text081">
                  Yearly
                </span>
              </div>
            </div>
            <div className="about-token-gating-platforms-cards1">
              <div className="about-token-gating-platforms-card">
                <span className="about-token-gating-platforms-text082">
                  Free
                </span>
                <span className="about-token-gating-platforms-text083">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="about-token-gating-platforms-get-started3 template-button">
                  <span className="about-token-gating-platforms-text084">
                    Start for free
                  </span>
                </div>
                <span className="about-token-gating-platforms-text085">
                  What&apos;s included
                </span>
                <div className="about-token-gating-platforms-bullet-points">
                  <div className="about-token-gating-platforms-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text086">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text087">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-token-gating-platforms-card1">
                <span className="about-token-gating-platforms-text088">
                  Pay as you go
                </span>
                <span className="about-token-gating-platforms-text089">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="about-token-gating-platforms-get-started4 template-button">
                  <span className="about-token-gating-platforms-text093">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="about-token-gating-platforms-text096">
                  What&apos;s included
                </span>
                <div className="about-token-gating-platforms-bullet-points1">
                  <div className="about-token-gating-platforms-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text097">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text098">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text099">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text100">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-token-gating-platforms-card2">
                <span className="about-token-gating-platforms-text101">
                  Enterprise
                </span>
                <span className="about-token-gating-platforms-text102">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="about-token-gating-platforms-get-started5 template-button">
                  <span className="about-token-gating-platforms-text105">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="about-token-gating-platforms-text108">
                  What&apos;s included
                </span>
                <div className="about-token-gating-platforms-bullet-points2">
                  <div className="about-token-gating-platforms-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text109">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text110">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text111">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-token-gating-platforms-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-token-gating-platforms-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-token-gating-platforms-text112">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-token-gating-platforms-testimonals">
          <div className="about-token-gating-platforms-left2">
            <span className="about-token-gating-platforms-text113">
              Testimonals
            </span>
            <span className="about-token-gating-platforms-text114 title">
              What people say about Active
            </span>
          </div>
          <div className="about-token-gating-platforms-right1">
            <div className="about-token-gating-platforms-column">
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
            <div className="about-token-gating-platforms-column1">
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
          <span className="about-token-gating-platforms-text115">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="about-token-gating-platforms-action-bar">
          <div className="about-token-gating-platforms-action">
            <div className="about-token-gating-platforms-heading3">
              <span className="about-token-gating-platforms-text118 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="about-token-gating-platforms-text122">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="about-token-gating-platforms-get-started6 template-button">
                <span className="about-token-gating-platforms-text123">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="about-token-gating-platforms-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="about-token-gating-platforms-image1"
              />
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .about-token-gating-platforms-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .about-token-gating-platforms-hero {
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
                rgba(18, 16, 74, 0.9) 49%,
                rgba(119, 18, 57, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1676911809746-85d90edbbe4a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY2fHx3ZWIzfGVufDB8fHx8MTY4MTU5MTQzOA&ixlib=rb-4.0.3&w=1500');
            background-position: top left, center;
          }
          .about-token-gating-platforms-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-centered-desktop {
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
          .about-token-gating-platforms-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .about-token-gating-platforms-link {
            display: contents;
          }
          .about-token-gating-platforms-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-token-gating-platforms-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .about-token-gating-platforms-link1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-token-gating-platforms-link2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-token-gating-platforms-link3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-token-gating-platforms-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .about-token-gating-platforms-link4 {
            display: contents;
          }
          .about-token-gating-platforms-get-started {
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
          .about-token-gating-platforms-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .about-token-gating-platforms-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-text004 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .about-token-gating-platforms-centered-mobile {
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
          .about-token-gating-platforms-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .about-token-gating-platforms-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .about-token-gating-platforms-link5 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-token-gating-platforms-link6 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-token-gating-platforms-link7 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-token-gating-platforms-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .about-token-gating-platforms-text009 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .about-token-gating-platforms-text010 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 24px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .about-token-gating-platforms-profile {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-token-gating-platforms-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .about-token-gating-platforms-text011 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-features {
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
          .about-token-gating-platforms-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-text014 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .about-token-gating-platforms-text018 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .about-token-gating-platforms-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text022 {
            line-height: 24px;
          }
          .about-token-gating-platforms-publish {
            height: initial;
          }
          .about-token-gating-platforms-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text024 {
            line-height: 24px;
          }
          .about-token-gating-platforms-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text025 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .about-token-gating-platforms-text026 {
            line-height: 24px;
          }
          .about-token-gating-platforms-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text027 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text028 {
            line-height: 24px;
          }
          .about-token-gating-platforms-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-blog {
            width: 100%;
            display: flex;
            max-width: 900px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .about-token-gating-platforms-text029 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text030 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text033 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text034 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text035 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text036 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text037 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text040 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text041 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text044 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text045 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text048 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text049 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text052 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text053 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text054 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text055 {
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text056 {
            font-size: 19px;
            line-height: 1.5;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text057 {
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text058 {
            font-size: 19px;
            line-height: 1.5;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text059 {
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text060 {
            font-size: 19px;
            line-height: 1.5;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text061 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text062 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-blog1 {
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
          .about-token-gating-platforms-text063 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-token-gating-platforms-text064 {
            font-size: 19px;
            text-align: center;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-link8 {
            display: contents;
          }
          .about-token-gating-platforms-get-started1 {
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
          .about-token-gating-platforms-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .about-token-gating-platforms-icon06 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-text065 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-token-gating-platforms-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .about-token-gating-platforms-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-token-gating-platforms-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-text068 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .about-token-gating-platforms-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-token-gating-platforms-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .about-token-gating-platforms-container3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .about-token-gating-platforms-container4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .about-token-gating-platforms-how-it-works {
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
          .about-token-gating-platforms-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-token-gating-platforms-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .about-token-gating-platforms-text069 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-token-gating-platforms-text070 {
            color: var(--dl-color-gray-white);
          }
          .about-token-gating-platforms-category {
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
          .about-token-gating-platforms-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .about-token-gating-platforms-text071 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-token-gating-platforms-text072 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .about-token-gating-platforms-get-started2 {
            margin-bottom: 0px;
          }
          .about-token-gating-platforms-get-started2:hover {
            color: black;
            background-color: #ffffff;
          }
          .about-token-gating-platforms-text073 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-token-gating-platforms-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .about-token-gating-platforms-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .about-token-gating-platforms-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .about-token-gating-platforms-category1 {
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
          .about-token-gating-platforms-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .about-token-gating-platforms-text074 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-token-gating-platforms-text075 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .about-token-gating-platforms-pasted-image1 {
            width: 100%;
          }
          .about-token-gating-platforms-category2 {
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
          .about-token-gating-platforms-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .about-token-gating-platforms-text076 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-token-gating-platforms-text077 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .about-token-gating-platforms-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .about-token-gating-platforms-pricing {
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
          .about-token-gating-platforms-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-token-gating-platforms-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-token-gating-platforms-text078 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .about-token-gating-platforms-text079 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-token-gating-platforms-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-token-gating-platforms-text080 {
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
          .about-token-gating-platforms-text081 {
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
          .about-token-gating-platforms-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .about-token-gating-platforms-card {
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
          .about-token-gating-platforms-text082 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text083 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .about-token-gating-platforms-get-started3 {
            transition: 0.3s;
          }
          .about-token-gating-platforms-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-token-gating-platforms-text084 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-token-gating-platforms-text085 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-token-gating-platforms-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text086 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text087 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-card1 {
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
          .about-token-gating-platforms-text088 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text089 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .about-token-gating-platforms-get-started4 {
            transition: 0.3s;
          }
          .about-token-gating-platforms-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-token-gating-platforms-text093 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-token-gating-platforms-text096 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-token-gating-platforms-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text097 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text098 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text099 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text100 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-card2 {
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
          .about-token-gating-platforms-text101 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-text102 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .about-token-gating-platforms-get-started5 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .about-token-gating-platforms-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-token-gating-platforms-text105 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-token-gating-platforms-text108 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-token-gating-platforms-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-token-gating-platforms-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text109 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text110 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text111 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-token-gating-platforms-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-token-gating-platforms-text112 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-token-gating-platforms-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .about-token-gating-platforms-left2 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .about-token-gating-platforms-text113 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-token-gating-platforms-text114 {
            text-align: left;
          }
          .about-token-gating-platforms-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .about-token-gating-platforms-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .about-token-gating-platforms-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .about-token-gating-platforms-text115 {
            cursor: pointer;
            display: none;
          }
          .about-token-gating-platforms-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-token-gating-platforms-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .about-token-gating-platforms-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .about-token-gating-platforms-text118 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .about-token-gating-platforms-text122 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-token-gating-platforms-get-started6 {
            margin-bottom: 0px;
          }
          .about-token-gating-platforms-text123 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-token-gating-platforms-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-token-gating-platforms-image1 {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          @media (max-width: 1200px) {
            .about-token-gating-platforms-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .about-token-gating-platforms-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .about-token-gating-platforms-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .about-token-gating-platforms-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .about-token-gating-platforms-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .about-token-gating-platforms-header {
              width: 100%;
              max-width: 1200px;
            }
            .about-token-gating-platforms-features {
              padding-top: 260px;
            }
            .about-token-gating-platforms-title {
              width: 100%;
              max-width: 1200px;
            }
            .about-token-gating-platforms-text014 {
              font-size: 36px;
              line-height: 40px;
            }
            .about-token-gating-platforms-text018 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .about-token-gating-platforms-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .about-token-gating-platforms-text022 {
              line-height: 21px;
            }
            .about-token-gating-platforms-text024 {
              line-height: 21px;
            }
            .about-token-gating-platforms-text026 {
              line-height: 21px;
            }
            .about-token-gating-platforms-text027 {
              font-size: 24px;
            }
            .about-token-gating-platforms-text028 {
              line-height: 21px;
            }
            .about-token-gating-platforms-container4 {
              margin-left: 0px;
            }
            .about-token-gating-platforms-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .about-token-gating-platforms-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-container5 {
              width: 100%;
            }
            .about-token-gating-platforms-pasted-image {
              height: auto;
            }
            .about-token-gating-platforms-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-text079 {
              width: 100%;
              max-width: 600px;
            }
            .about-token-gating-platforms-cards1 {
              display: flex;
              flex-direction: column;
            }
            .about-token-gating-platforms-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-text083 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-text085 {
              font-size: 16px;
            }
            .about-token-gating-platforms-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .about-token-gating-platforms-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .about-token-gating-platforms-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .about-token-gating-platforms-left2 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .about-token-gating-platforms-text114 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-token-gating-platforms-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .about-token-gating-platforms-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-action {
              flex-direction: column;
            }
            .about-token-gating-platforms-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-text118 {
              font-size: 36px;
              line-height: 36px;
            }
          }
          @media (max-width: 767px) {
            .about-token-gating-platforms-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .about-token-gating-platforms-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-token-gating-platforms-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-token-gating-platforms-left {
              margin-left: var(--dl-space-space-unit);
            }
            .about-token-gating-platforms-links {
              display: none;
            }
            .about-token-gating-platforms-right {
              margin-right: var(--dl-space-space-unit);
            }
            .about-token-gating-platforms-sign-in {
              display: flex;
            }
            .about-token-gating-platforms-get-started {
              display: flex;
            }
            .about-token-gating-platforms-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .about-token-gating-platforms-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .about-token-gating-platforms-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .about-token-gating-platforms-text009 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .about-token-gating-platforms-text010 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .about-token-gating-platforms-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-text014 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .about-token-gating-platforms-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .about-token-gating-platforms-text021 {
              font-size: 24px;
            }
            .about-token-gating-platforms-text022 {
              font-size: 14px;
            }
            .about-token-gating-platforms-publish {
              margin-left: 0px;
            }
            .about-token-gating-platforms-text023 {
              font-size: 24px;
            }
            .about-token-gating-platforms-text024 {
              font-size: 14px;
            }
            .about-token-gating-platforms-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .about-token-gating-platforms-analyze {
              margin-right: 0px;
            }
            .about-token-gating-platforms-text025 {
              font-size: 24px;
            }
            .about-token-gating-platforms-text026 {
              font-size: 14px;
            }
            .about-token-gating-platforms-text028 {
              font-size: 14px;
            }
            .about-token-gating-platforms-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-text068 {
              line-height: 24px;
            }
            .about-token-gating-platforms-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-token-gating-platforms-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-token-gating-platforms-text070 {
              margin-bottom: 0px;
            }
            .about-token-gating-platforms-headng {
              padding-bottom: 0px;
            }
            .about-token-gating-platforms-get-started2 {
              display: none;
            }
            .about-token-gating-platforms-container5 {
              width: 100%;
            }
            .about-token-gating-platforms-row {
              height: auto;
              flex-direction: column;
            }
            .about-token-gating-platforms-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-text082 {
              font-size: 28px;
            }
            .about-token-gating-platforms-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-token-gating-platforms-text088 {
              font-size: 28px;
            }
            .about-token-gating-platforms-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-token-gating-platforms-text101 {
              font-size: 28px;
            }
            .about-token-gating-platforms-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .about-token-gating-platforms-right1 {
              width: 100%;
              flex-direction: column;
            }
            .about-token-gating-platforms-column1 {
              display: none;
            }
            .about-token-gating-platforms-text115 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .about-token-gating-platforms-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-token-gating-platforms-action {
              align-items: center;
            }
            .about-token-gating-platforms-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-text118 {
              font-size: 28px;
              text-align: left;
            }
            .about-token-gating-platforms-text123 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .about-token-gating-platforms-images {
              justify-content: center;
            }
            .about-token-gating-platforms-image1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .about-token-gating-platforms-hero {
              height: auto;
            }
            .about-token-gating-platforms-centered-desktop {
              justify-content: center;
            }
            .about-token-gating-platforms-logo {
              width: 180px;
            }
            .about-token-gating-platforms-sign-in {
              display: none;
            }
            .about-token-gating-platforms-get-started {
              display: none;
            }
            .about-token-gating-platforms-icon {
              display: none;
            }
            .about-token-gating-platforms-centered-mobile {
              justify-content: center;
            }
            .about-token-gating-platforms-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .about-token-gating-platforms-link7 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .about-token-gating-platforms-text010 {
              color: #eee9fe;
            }
            .about-token-gating-platforms-features {
              padding-top: 200px;
            }
            .about-token-gating-platforms-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-token-gating-platforms-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .about-token-gating-platforms-analyze {
              margin-bottom: 0px;
            }
            .about-token-gating-platforms-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-token-gating-platforms-get-started1 {
              background-color: var(--dl-color-primary-700);
            }
            .about-token-gating-platforms-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .about-token-gating-platforms-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-get-started5 {
              background-color: var(--dl-color-gray-white);
            }
            .about-token-gating-platforms-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-token-gating-platforms-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutTokenGatingPlatforms
