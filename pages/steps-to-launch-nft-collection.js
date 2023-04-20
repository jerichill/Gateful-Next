import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'
import Footer from '../components/footer'

const StepsToLaunchNFTCollection = (props) => {
  return (
    <>
      <div className="steps-to-launch-nf-collection-container">
        <Head>
          <title>Basic Steps to Launch Your New NFT Collection</title>
          <meta
            name="description"
            content="Launching an NFT collection can be overwhelming. Here are the basic steps to help you plan your collection launch."
          />
          <meta
            property="og:title"
            content="Basic Steps to Launch Your New NFT Collection"
          />
          <meta
            property="og:description"
            content="Launching an NFT collection can be overwhelming. Here are the basic steps to help you plan your collection launch."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <section id="header" className="steps-to-launch-nf-collection-hero">
          <div className="steps-to-launch-nf-collection-menu">
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
              className="steps-to-launch-nf-collection-desktop-navigation"
            >
              <nav className="steps-to-launch-nf-collection-centered-desktop">
                <div className="steps-to-launch-nf-collection-left">
                  <Link href="/">
                    <a className="steps-to-launch-nf-collection-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="steps-to-launch-nf-collection-logo"
                      />
                    </a>
                  </Link>
                  <div className="steps-to-launch-nf-collection-links">
                    <Link href="/token-gating-platform">
                      <a className="steps-to-launch-nf-collection-link1 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="steps-to-launch-nf-collection-link2 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="steps-to-launch-nf-collection-link3 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="steps-to-launch-nf-collection-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="steps-to-launch-nf-collection-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="steps-to-launch-nf-collection-link4">
                      <div className="steps-to-launch-nf-collection-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="steps-to-launch-nf-collection-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="steps-to-launch-nf-collection-text004">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="steps-to-launch-nf-collection-centered-mobile">
                <div className="steps-to-launch-nf-collection-left1">
                  <div className="steps-to-launch-nf-collection-links1">
                    <Link href="/token-gating-platform">
                      <a className="steps-to-launch-nf-collection-link5 Link">
                        Platform
                      </a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="steps-to-launch-nf-collection-link6 Link">
                        Solutions
                      </a>
                    </Link>
                    <Link href="/blog">
                      <a className="steps-to-launch-nf-collection-link7 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="steps-to-launch-nf-collection-header">
            <h1 className="steps-to-launch-nf-collection-text009">
              Basic Steps to Launch Your New NFT Collection
            </h1>
            <p className="steps-to-launch-nf-collection-text010">
              Planning Your Web3 Project
            </p>
            <div className="steps-to-launch-nf-collection-profile">
              <img
                alt="profile"
                src="/playground_assets/headshot2022bpng-200w.png"
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="steps-to-launch-nf-collection-image"
              />
              <span className="steps-to-launch-nf-collection-text011">
                <span>J. Eric Hill</span>
                <br></br>
              </span>
            </div>
          </header>
        </section>
        <section className="steps-to-launch-nf-collection-features">
          <div className="steps-to-launch-nf-collection-title">
            <span className="steps-to-launch-nf-collection-text014">
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
            <span className="steps-to-launch-nf-collection-text018">
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
          <div className="steps-to-launch-nf-collection-cards">
            <div className="steps-to-launch-nf-collection-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="steps-to-launch-nf-collection-icon02"
                />
                <span className="steps-to-launch-nf-collection-text021">
                  Schedule
                </span>
                <span className="steps-to-launch-nf-collection-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="steps-to-launch-nf-collection-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="steps-to-launch-nf-collection-icon03"
                />
                <span className="steps-to-launch-nf-collection-text023">
                  Publish
                </span>
                <span className="steps-to-launch-nf-collection-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="steps-to-launch-nf-collection-container2">
              <div className="card steps-to-launch-nf-collection-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="steps-to-launch-nf-collection-icon04"
                />
                <span className="steps-to-launch-nf-collection-text025">
                  Analyze
                </span>
                <span className="steps-to-launch-nf-collection-text026">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="steps-to-launch-nf-collection-icon05"
                />
                <span className="steps-to-launch-nf-collection-text027">
                  Get leads
                </span>
                <span className="steps-to-launch-nf-collection-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="steps-to-launch-nf-collection-banners">
          <div className="steps-to-launch-nf-collection-blog">
            <h2 className="steps-to-launch-nf-collection-text029">
              Launching an NFT collection can be overwhelming. Here are the
              basic steps to help you plan your collection launch.
            </h2>
            <h3 className="steps-to-launch-nf-collection-text030">
              Step 1: Conceptualize your NFT collection
            </h3>
            <span className="steps-to-launch-nf-collection-text031">
              Before you begin with the technical aspects, brainstorm ideas for
              your collection. Consider the target audience and the unique value
              proposition of your NFTs. This could be a series of digital art
              pieces, collectibles, or even virtual real estate. Think about the
              theme, design, rarity, and utility of your NFT collection.
            </span>
            <h3 className="steps-to-launch-nf-collection-text032">
              Step 2: Choose a blockchain platform
            </h3>
            <span className="steps-to-launch-nf-collection-text033">
              <span>
                Select a blockchain platform to build your NFT collection on.
                Popular choices include Ethereum, Binance Smart Chain, and Flow.
                Consider factors such as transaction fees, network speed, and
                community support when making your decision.
              </span>
              <br></br>
            </span>
            <h3 className="steps-to-launch-nf-collection-text036">
              Step 3: Create your digital assets
            </h3>
            <span className="steps-to-launch-nf-collection-text037">
              Design and create the digital assets for your NFT collection. This
              could be images, videos, music, or other multimedia content. Make
              sure that your assets are high-quality and unique, as this will
              help attract buyers and investors.
            </span>
            <h3 className="steps-to-launch-nf-collection-text038">
              Step 4: Mint your NFTs
            </h3>
            <span className="steps-to-launch-nf-collection-text039">
              Minting is the process of creating NFTs by converting your digital
              assets into tokens on the blockchain. You can use platforms like
              OpenSea, Rarible, and Mintable to mint your NFTs. Follow the
              specific instructions provided by the platform of your choice,
              which will typically involve uploading your digital assets and
              setting metadata such as rarity, descriptions, and other
              attributes.
            </span>
            <h3 className="steps-to-launch-nf-collection-text040">
              Step 5: Set up a smart contract
            </h3>
            <span className="steps-to-launch-nf-collection-text041">
              Create a smart contract for your NFT collection that will handle
              the sale, ownership, and transfer of your NFTs. You can use
              platforms like Remix if you&apos;re working with Ethereum, or find
              a developer to help you create the smart contract for your chosen
              blockchain.
            </span>
            <h3 className="steps-to-launch-nf-collection-text042">
              Step 6: Market your NFT collection
            </h3>
            <span className="steps-to-launch-nf-collection-text043">
              Promote your NFT collection through various marketing channels
              such as social media, email marketing, and influencer
              partnerships. Build a community around your collection by engaging
              with potential buyers and collectors on platforms like Discord and
              Twitter.
            </span>
            <h3 className="steps-to-launch-nf-collection-text044">
              Step 7: Launch your NFT collection
            </h3>
            <span className="steps-to-launch-nf-collection-text045">
              Once you&apos;re ready to launch, set a date and time for your NFT
              collection to go live. Make sure your community is aware of the
              launch details and create hype around the event. You can choose to
              release your NFTs all at once or stagger the release to create a
              sense of urgency and exclusivity.
            </span>
            <h3 className="steps-to-launch-nf-collection-text046">
              Step 8: Token gate your NFT collection
            </h3>
            <span className="steps-to-launch-nf-collection-text047">
              To token gate your NFT collection, you&apos;ll need to restrict
              access to specific content, experiences, or benefits based on NFT
              ownership. You can use platforms like Gateful to easily set up
              token-gating.
            </span>
            <h3 className="steps-to-launch-nf-collection-text048">
              Step 9: Monitor and engage with your community
            </h3>
            <span className="steps-to-launch-nf-collection-text049">
              After launching your NFT collection, continue to engage with your
              community and provide support to buyers and collectors. Listen to
              feedback and make improvements as necessary. Organize events,
              contests, or giveaways to keep the momentum going and add value to
              your NFT collection.
            </span>
            <h3 className="steps-to-launch-nf-collection-text050">
              Step 10: Plan for the future
            </h3>
            <span className="steps-to-launch-nf-collection-text051">
              Consider the long-term growth and sustainability of your NFT
              collection. You can add additional NFTs over time, collaborate
              with other artists or creators, or develop additional utility and
              benefits for NFT holders. Keep your community engaged and excited
              about the future of your collection.
            </span>
          </div>
          <div className="steps-to-launch-nf-collection-blog1">
            <h2 className="steps-to-launch-nf-collection-text052">
              Gateful is the easiest way to token gate any website or web
              application.
            </h2>
            <span className="steps-to-launch-nf-collection-text053">
              If you&apos;re looking to add Web3 Token Gating functionality to
              your website or web application and do not know where to start,
              contact our Web3 implementation team for a demo.
            </span>
            <Link href="/book-a-demo">
              <a className="steps-to-launch-nf-collection-link8">
                <div className="steps-to-launch-nf-collection-get-started1">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="steps-to-launch-nf-collection-icon06"
                  >
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <span className="steps-to-launch-nf-collection-text054">
                    Book a Demo
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </section>
        <section className="steps-to-launch-nf-collection-integrations">
          <div className="steps-to-launch-nf-collection-centered-container">
            <div className="steps-to-launch-nf-collection-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="steps-to-launch-nf-collection-text057">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="steps-to-launch-nf-collection-pills-container">
              <div className="steps-to-launch-nf-collection-pills">
                <div className="steps-to-launch-nf-collection-container3">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="steps-to-launch-nf-collection-container4">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="steps-to-launch-nf-collection-how-it-works">
          <div className="steps-to-launch-nf-collection-centered-container1">
            <div className="steps-to-launch-nf-collection-heading1">
              <span className="steps-to-launch-nf-collection-text058">
                How it works
              </span>
              <span className="steps-to-launch-nf-collection-text059 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="steps-to-launch-nf-collection-category">
              <div className="steps-to-launch-nf-collection-headng">
                <span className="steps-to-launch-nf-collection-text060">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="steps-to-launch-nf-collection-text061">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="steps-to-launch-nf-collection-get-started2 template-button">
                  <span className="steps-to-launch-nf-collection-text062">
                    Get started
                  </span>
                </div>
              </div>
              <div className="steps-to-launch-nf-collection-container5">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="steps-to-launch-nf-collection-pasted-image"
                />
              </div>
            </div>
            <div className="steps-to-launch-nf-collection-row">
              <div className="steps-to-launch-nf-collection-category1">
                <div className="steps-to-launch-nf-collection-headng1">
                  <span className="steps-to-launch-nf-collection-text063">
                    2 — Act
                  </span>
                  <span className="steps-to-launch-nf-collection-text064">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="steps-to-launch-nf-collection-pasted-image1"
                />
              </div>
              <div className="steps-to-launch-nf-collection-category2">
                <div className="steps-to-launch-nf-collection-headng2">
                  <span className="steps-to-launch-nf-collection-text065">
                    2 — Act
                  </span>
                  <span className="steps-to-launch-nf-collection-text066">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="steps-to-launch-nf-collection-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="steps-to-launch-nf-collection-pricing">
          <div className="steps-to-launch-nf-collection-centered-container2">
            <div className="steps-to-launch-nf-collection-heading2">
              <span className="steps-to-launch-nf-collection-text067 title">
                Pricing for all kind of businesses
              </span>
              <span className="steps-to-launch-nf-collection-text068">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="steps-to-launch-nf-collection-selection">
                <span className="steps-to-launch-nf-collection-text069">
                  Monthly
                </span>
                <span className="steps-to-launch-nf-collection-text070">
                  Yearly
                </span>
              </div>
            </div>
            <div className="steps-to-launch-nf-collection-cards1">
              <div className="steps-to-launch-nf-collection-card">
                <span className="steps-to-launch-nf-collection-text071">
                  Free
                </span>
                <span className="steps-to-launch-nf-collection-text072">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="steps-to-launch-nf-collection-get-started3 template-button">
                  <span className="steps-to-launch-nf-collection-text073">
                    Start for free
                  </span>
                </div>
                <span className="steps-to-launch-nf-collection-text074">
                  What&apos;s included
                </span>
                <div className="steps-to-launch-nf-collection-bullet-points">
                  <div className="steps-to-launch-nf-collection-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text075">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text076">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="steps-to-launch-nf-collection-card1">
                <span className="steps-to-launch-nf-collection-text077">
                  Pay as you go
                </span>
                <span className="steps-to-launch-nf-collection-text078">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="steps-to-launch-nf-collection-get-started4 template-button">
                  <span className="steps-to-launch-nf-collection-text082">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="steps-to-launch-nf-collection-text085">
                  What&apos;s included
                </span>
                <div className="steps-to-launch-nf-collection-bullet-points1">
                  <div className="steps-to-launch-nf-collection-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text086">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text087">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text088">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text089">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="steps-to-launch-nf-collection-card2">
                <span className="steps-to-launch-nf-collection-text090">
                  Enterprise
                </span>
                <span className="steps-to-launch-nf-collection-text091">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="steps-to-launch-nf-collection-get-started5 template-button">
                  <span className="steps-to-launch-nf-collection-text094">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="steps-to-launch-nf-collection-text097">
                  What&apos;s included
                </span>
                <div className="steps-to-launch-nf-collection-bullet-points2">
                  <div className="steps-to-launch-nf-collection-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text098">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text099">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text100">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="steps-to-launch-nf-collection-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="steps-to-launch-nf-collection-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="steps-to-launch-nf-collection-text101">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="steps-to-launch-nf-collection-testimonals">
          <div className="steps-to-launch-nf-collection-left2">
            <span className="steps-to-launch-nf-collection-text102">
              Testimonals
            </span>
            <span className="steps-to-launch-nf-collection-text103 title">
              What people say about Active
            </span>
          </div>
          <div className="steps-to-launch-nf-collection-right1">
            <div className="steps-to-launch-nf-collection-column">
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
            <div className="steps-to-launch-nf-collection-column1">
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
          <span className="steps-to-launch-nf-collection-text104">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="steps-to-launch-nf-collection-action-bar">
          <div className="steps-to-launch-nf-collection-action">
            <div className="steps-to-launch-nf-collection-heading3">
              <span className="steps-to-launch-nf-collection-text107 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="steps-to-launch-nf-collection-text111">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="steps-to-launch-nf-collection-get-started6 template-button">
                <span className="steps-to-launch-nf-collection-text112">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="steps-to-launch-nf-collection-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="steps-to-launch-nf-collection-image1"
              />
            </div>
          </div>
        </section>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
      <style jsx>
        {`
          .steps-to-launch-nf-collection-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-hero {
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
                rgba(16, 138, 130, 0.85) 0%,
                rgba(18, 16, 74, 0.95) 46%,
                rgba(119, 18, 57, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1651130535340-e02c63a43a0a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxvcGVuc2VhfGVufDB8fHx8MTY4MTYxNDMyOQ&ixlib=rb-4.0.3&w=1500');
            background-position: top left, center;
          }
          .steps-to-launch-nf-collection-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-centered-desktop {
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
          .steps-to-launch-nf-collection-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .steps-to-launch-nf-collection-link {
            display: contents;
          }
          .steps-to-launch-nf-collection-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-link1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-link2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-link3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-link4 {
            display: contents;
          }
          .steps-to-launch-nf-collection-get-started {
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
          .steps-to-launch-nf-collection-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .steps-to-launch-nf-collection-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-text004 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-centered-mobile {
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
          .steps-to-launch-nf-collection-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .steps-to-launch-nf-collection-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-link5 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-link6 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-link7 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .steps-to-launch-nf-collection-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text009 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .steps-to-launch-nf-collection-text010 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 24px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .steps-to-launch-nf-collection-profile {
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .steps-to-launch-nf-collection-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .steps-to-launch-nf-collection-text011 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-features {
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
          .steps-to-launch-nf-collection-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text014 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .steps-to-launch-nf-collection-text018 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .steps-to-launch-nf-collection-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text022 {
            line-height: 24px;
          }
          .steps-to-launch-nf-collection-publish {
            height: initial;
          }
          .steps-to-launch-nf-collection-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text024 {
            line-height: 24px;
          }
          .steps-to-launch-nf-collection-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text025 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .steps-to-launch-nf-collection-text026 {
            line-height: 24px;
          }
          .steps-to-launch-nf-collection-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text027 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text028 {
            line-height: 24px;
          }
          .steps-to-launch-nf-collection-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-blog {
            width: 100%;
            display: flex;
            max-width: 900px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .steps-to-launch-nf-collection-text029 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text030 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text031 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text032 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text033 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text036 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text037 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text038 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text039 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text040 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text041 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text042 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text043 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text044 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text045 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text046 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text047 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text048 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text049 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text050 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text051 {
            font-size: 19px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-blog1 {
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
          .steps-to-launch-nf-collection-text052 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .steps-to-launch-nf-collection-text053 {
            font-size: 19px;
            text-align: center;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-link8 {
            display: contents;
          }
          .steps-to-launch-nf-collection-get-started1 {
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
          .steps-to-launch-nf-collection-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .steps-to-launch-nf-collection-icon06 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-text054 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .steps-to-launch-nf-collection-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text057 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .steps-to-launch-nf-collection-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-container3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-container4 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-how-it-works {
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
          .steps-to-launch-nf-collection-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .steps-to-launch-nf-collection-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text058 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .steps-to-launch-nf-collection-text059 {
            color: var(--dl-color-gray-white);
          }
          .steps-to-launch-nf-collection-category {
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
          .steps-to-launch-nf-collection-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .steps-to-launch-nf-collection-text060 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .steps-to-launch-nf-collection-text061 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .steps-to-launch-nf-collection-get-started2 {
            margin-bottom: 0px;
          }
          .steps-to-launch-nf-collection-get-started2:hover {
            color: black;
            background-color: #ffffff;
          }
          .steps-to-launch-nf-collection-text062 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-container5 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .steps-to-launch-nf-collection-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-category1 {
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
          .steps-to-launch-nf-collection-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .steps-to-launch-nf-collection-text063 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .steps-to-launch-nf-collection-text064 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .steps-to-launch-nf-collection-pasted-image1 {
            width: 100%;
          }
          .steps-to-launch-nf-collection-category2 {
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
          .steps-to-launch-nf-collection-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .steps-to-launch-nf-collection-text065 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .steps-to-launch-nf-collection-text066 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .steps-to-launch-nf-collection-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .steps-to-launch-nf-collection-pricing {
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
          .steps-to-launch-nf-collection-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text067 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .steps-to-launch-nf-collection-text068 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .steps-to-launch-nf-collection-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-text069 {
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
          .steps-to-launch-nf-collection-text070 {
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
          .steps-to-launch-nf-collection-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .steps-to-launch-nf-collection-card {
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
          .steps-to-launch-nf-collection-text071 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text072 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .steps-to-launch-nf-collection-get-started3 {
            transition: 0.3s;
          }
          .steps-to-launch-nf-collection-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .steps-to-launch-nf-collection-text073 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-text074 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text075 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text076 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-card1 {
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
          .steps-to-launch-nf-collection-text077 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text078 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .steps-to-launch-nf-collection-get-started4 {
            transition: 0.3s;
          }
          .steps-to-launch-nf-collection-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .steps-to-launch-nf-collection-text082 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-text085 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text086 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text087 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text088 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text089 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-card2 {
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
          .steps-to-launch-nf-collection-text090 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-text091 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .steps-to-launch-nf-collection-get-started5 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .steps-to-launch-nf-collection-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .steps-to-launch-nf-collection-text094 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-text097 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .steps-to-launch-nf-collection-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text098 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text099 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text100 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .steps-to-launch-nf-collection-text101 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .steps-to-launch-nf-collection-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .steps-to-launch-nf-collection-left2 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text102 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .steps-to-launch-nf-collection-text103 {
            text-align: left;
          }
          .steps-to-launch-nf-collection-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .steps-to-launch-nf-collection-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .steps-to-launch-nf-collection-text104 {
            cursor: pointer;
            display: none;
          }
          .steps-to-launch-nf-collection-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-to-launch-nf-collection-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .steps-to-launch-nf-collection-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .steps-to-launch-nf-collection-text107 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .steps-to-launch-nf-collection-text111 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .steps-to-launch-nf-collection-get-started6 {
            margin-bottom: 0px;
          }
          .steps-to-launch-nf-collection-text112 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .steps-to-launch-nf-collection-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .steps-to-launch-nf-collection-image1 {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          @media (max-width: 1200px) {
            .steps-to-launch-nf-collection-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .steps-to-launch-nf-collection-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .steps-to-launch-nf-collection-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .steps-to-launch-nf-collection-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .steps-to-launch-nf-collection-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .steps-to-launch-nf-collection-header {
              width: 100%;
              max-width: 1200px;
            }
            .steps-to-launch-nf-collection-features {
              padding-top: 260px;
            }
            .steps-to-launch-nf-collection-title {
              width: 100%;
              max-width: 1200px;
            }
            .steps-to-launch-nf-collection-text014 {
              font-size: 36px;
              line-height: 40px;
            }
            .steps-to-launch-nf-collection-text018 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .steps-to-launch-nf-collection-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .steps-to-launch-nf-collection-text022 {
              line-height: 21px;
            }
            .steps-to-launch-nf-collection-text024 {
              line-height: 21px;
            }
            .steps-to-launch-nf-collection-text026 {
              line-height: 21px;
            }
            .steps-to-launch-nf-collection-text027 {
              font-size: 24px;
            }
            .steps-to-launch-nf-collection-text028 {
              line-height: 21px;
            }
            .steps-to-launch-nf-collection-container4 {
              margin-left: 0px;
            }
            .steps-to-launch-nf-collection-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-container5 {
              width: 100%;
            }
            .steps-to-launch-nf-collection-pasted-image {
              height: auto;
            }
            .steps-to-launch-nf-collection-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-text068 {
              width: 100%;
              max-width: 600px;
            }
            .steps-to-launch-nf-collection-cards1 {
              display: flex;
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-text072 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-text074 {
              font-size: 16px;
            }
            .steps-to-launch-nf-collection-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .steps-to-launch-nf-collection-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .steps-to-launch-nf-collection-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-left2 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .steps-to-launch-nf-collection-text103 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .steps-to-launch-nf-collection-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .steps-to-launch-nf-collection-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-action {
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-text107 {
              font-size: 36px;
              line-height: 36px;
            }
          }
          @media (max-width: 767px) {
            .steps-to-launch-nf-collection-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .steps-to-launch-nf-collection-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .steps-to-launch-nf-collection-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .steps-to-launch-nf-collection-left {
              margin-left: var(--dl-space-space-unit);
            }
            .steps-to-launch-nf-collection-links {
              display: none;
            }
            .steps-to-launch-nf-collection-right {
              margin-right: var(--dl-space-space-unit);
            }
            .steps-to-launch-nf-collection-sign-in {
              display: flex;
            }
            .steps-to-launch-nf-collection-get-started {
              display: flex;
            }
            .steps-to-launch-nf-collection-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .steps-to-launch-nf-collection-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .steps-to-launch-nf-collection-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .steps-to-launch-nf-collection-text009 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .steps-to-launch-nf-collection-text010 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .steps-to-launch-nf-collection-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-text014 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .steps-to-launch-nf-collection-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-text021 {
              font-size: 24px;
            }
            .steps-to-launch-nf-collection-text022 {
              font-size: 14px;
            }
            .steps-to-launch-nf-collection-publish {
              margin-left: 0px;
            }
            .steps-to-launch-nf-collection-text023 {
              font-size: 24px;
            }
            .steps-to-launch-nf-collection-text024 {
              font-size: 14px;
            }
            .steps-to-launch-nf-collection-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-analyze {
              margin-right: 0px;
            }
            .steps-to-launch-nf-collection-text025 {
              font-size: 24px;
            }
            .steps-to-launch-nf-collection-text026 {
              font-size: 14px;
            }
            .steps-to-launch-nf-collection-text028 {
              font-size: 14px;
            }
            .steps-to-launch-nf-collection-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-get-started1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-text057 {
              line-height: 24px;
            }
            .steps-to-launch-nf-collection-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .steps-to-launch-nf-collection-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .steps-to-launch-nf-collection-text059 {
              margin-bottom: 0px;
            }
            .steps-to-launch-nf-collection-headng {
              padding-bottom: 0px;
            }
            .steps-to-launch-nf-collection-get-started2 {
              display: none;
            }
            .steps-to-launch-nf-collection-container5 {
              width: 100%;
            }
            .steps-to-launch-nf-collection-row {
              height: auto;
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-text071 {
              font-size: 28px;
            }
            .steps-to-launch-nf-collection-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .steps-to-launch-nf-collection-text077 {
              font-size: 28px;
            }
            .steps-to-launch-nf-collection-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .steps-to-launch-nf-collection-text090 {
              font-size: 28px;
            }
            .steps-to-launch-nf-collection-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .steps-to-launch-nf-collection-right1 {
              width: 100%;
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-column1 {
              display: none;
            }
            .steps-to-launch-nf-collection-text104 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .steps-to-launch-nf-collection-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .steps-to-launch-nf-collection-action {
              align-items: center;
            }
            .steps-to-launch-nf-collection-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-text107 {
              font-size: 28px;
              text-align: left;
            }
            .steps-to-launch-nf-collection-text112 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .steps-to-launch-nf-collection-images {
              justify-content: center;
            }
            .steps-to-launch-nf-collection-image1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps-to-launch-nf-collection-hero {
              height: auto;
            }
            .steps-to-launch-nf-collection-centered-desktop {
              justify-content: center;
            }
            .steps-to-launch-nf-collection-logo {
              width: 180px;
            }
            .steps-to-launch-nf-collection-sign-in {
              display: none;
            }
            .steps-to-launch-nf-collection-get-started {
              display: none;
            }
            .steps-to-launch-nf-collection-icon {
              display: none;
            }
            .steps-to-launch-nf-collection-centered-mobile {
              justify-content: center;
            }
            .steps-to-launch-nf-collection-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .steps-to-launch-nf-collection-link7 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .steps-to-launch-nf-collection-text010 {
              color: #eee9fe;
            }
            .steps-to-launch-nf-collection-features {
              padding-top: 200px;
            }
            .steps-to-launch-nf-collection-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .steps-to-launch-nf-collection-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .steps-to-launch-nf-collection-analyze {
              margin-bottom: 0px;
            }
            .steps-to-launch-nf-collection-blog {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .steps-to-launch-nf-collection-get-started1 {
              background-color: var(--dl-color-primary-700);
            }
            .steps-to-launch-nf-collection-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .steps-to-launch-nf-collection-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-get-started5 {
              background-color: var(--dl-color-gray-white);
            }
            .steps-to-launch-nf-collection-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steps-to-launch-nf-collection-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default StepsToLaunchNFTCollection
