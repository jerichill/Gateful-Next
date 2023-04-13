import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Gateful | Token Gating Platform | Token Gate Your Website
          </title>
          <meta
            name="description"
            content="The easiest way to create token gated digital experiences. Token gate your website or web application. Gateful simplifies Blockchain access management."
          />
          <meta
            property="og:title"
            content="Gateful | Token Gating Platform | Token Gate Your Website"
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
        <section id="header" className="home-hero">
          <div className="home-menu">
            <div id="navigation" className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <img
                    alt="Welcome to Gateful"
                    src="/playground_assets/gateful-logo-wht-200h.png"
                    className="home-logo"
                  />
                  <div className="home-links">
                    <span className="Link">Solutions</span>
                    <span className="Link">How it works</span>
                    <span className="Link">Prices</span>
                  </div>
                </div>
                <div className="home-right">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <a
                    href="https://ondemand.openmedium.biz/#/customer/4313645000001425224"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-sign-in Link"
                  >
                    <span>Book a Demo</span>
                    <br></br>
                  </a>
                  <a
                    href="https://zfrmz.com/MtUWiQJfSPjHpXrfUYIh"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <div className="home-get-started">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                      <span className="home-text005">
                        <span>Early access</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
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
          <header className="home-header">
            <h1 className="home-text008">
              The Easiest Way to Create Token Gated Digital Experiences
            </h1>
            <p className="home-text009">
              Gateful makes it easy to add Web3 Token Gating functionality to
              your website or web application. Transform your project into a
              powerful Web3-connected community without writing any code.
            </p>
            <a
              href="https://zfrmz.com/MtUWiQJfSPjHpXrfUYIh"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link1"
            >
              <div className="home-get-started01">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="home-text010">Early access</span>
              </div>
            </a>
          </header>
          <div className="home-dashboard-preview">
            <div className="home-outline">
              <h2 className="home-text011">
                <span>
                  Top
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text013">brands</span>
                <span>
                  ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text015">developers</span>
                <span>
                  , and
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text017">creators</span>
                <span> trust Gateful.</span>
              </h2>
              <img
                alt="TekSun, RareOrb, OpenMedium, RadPup, and TurboVirtual trust Gateful."
                src="/playground_assets/brands-200h.png"
                loading="eager"
                className="home-image"
              />
            </div>
          </div>
        </section>
        <section className="home-features">
          <div className="home-title">
            <span className="home-text019">
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
            <span className="home-text023">
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
          <div className="home-cards">
            <div className="home-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="home-icon06"
                />
                <span className="home-text026">Schedule</span>
                <span className="home-text027">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="home-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="home-icon07"
                />
                <span className="home-text028">Publish</span>
                <span className="home-text029">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="home-container2">
              <div className="card home-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="home-icon08"
                />
                <span className="home-text030">Analyze</span>
                <span className="home-text031">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="home-icon09"
                />
                <span className="home-text032">Get leads</span>
                <span className="home-text033">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="home-banners">
          <div className="home-banner-advanced-analytics">
            <div className="home-centered-container">
              <div className="home-image-container">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/2xscreen-1300w.png"
                  loading="eager"
                  className="home-cards-image"
                />
              </div>
              <div className="home-right1">
                <h2 className="home-text034 title">
                  On-chain access control, simplified
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h2>
                <div className="home-category">
                  <span className="home-text035">
                    Add Web3 Token Gating functionality to your existing website
                    or web application without writing code. Our integration
                    with LIT Protocol allows you to create multiple token gates
                    within the same experience. Create on-chain conditions
                    unique to your audience and requirements. Integrate with
                    major blockchain networks.
                  </span>
                </div>
                <div className="home-category1">
                  <img
                    alt="Gateful Supports Ethereum, Polygon, Binance, and Solana"
                    src="/playground_assets/2xblockchains-1100w.png"
                    className="home-image1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="home-banner-manage">
            <div className="home-container3">
              <div className="home-left1">
                <span className="sub-title">Content Management</span>
                <span className="home-text037 title">
                  Manage all your platforms in just one place.
                </span>
                <span className="home-text038">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started02 template-button">
                  <span className="home-text039">Get started</span>
                </div>
              </div>
              <div className="home-image-container1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-wvmq%201-1200w.png"
                  className="home-cards-image1"
                />
              </div>
            </div>
          </div>
          <div className="home-banner">
            <div className="home-container4">
              <div className="home-left2">
                <span className="home-text040">Improve Scheduling</span>
                <h2 className="home-text041 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="home-text042">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started03 template-button">
                  <span className="home-text043">Get started</span>
                </div>
              </div>
              <div className="home-image-container2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                  className="home-cards-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-statistics">
          <h2 className="home-text044 title">
            Gateful works with your favorite web framework
          </h2>
          <div className="home-container5">
            <ActiveUsers
              Name="React"
              Statistic="React"
              image_alt=" "
              image_src="/playground_assets/2xreact-200h.png"
              rootClassName="active-users-root-class-name"
            ></ActiveUsers>
            <div className="home-active-users metrics">
              <img
                alt=" "
                src="/playground_assets/2xangular-800h.png"
                className="home-image2"
              />
              <span className="home-text045">Angular</span>
            </div>
            <ActiveUsers
              Name="Next.js"
              Statistic="Next.js"
              image_alt=" "
              image_src="/playground_assets/2xnext-200h.png"
              rootClassName="active-users-root-class-name1"
            ></ActiveUsers>
            <ActiveUsers
              Name="Vue.js"
              Statistic="Vue.js"
              image_alt=" "
              image_src="/playground_assets/2xvue-200h.png"
              rootClassName="active-users-root-class-name2"
            ></ActiveUsers>
            <ActiveUsers
              Name="PHP/HTML5"
              Statistic="PHP"
              image_alt=" "
              image_src="/playground_assets/2xphp-200h.png"
            ></ActiveUsers>
          </div>
          <a
            href="https://zfrmz.com/MtUWiQJfSPjHpXrfUYIh"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <div className="home-get-started04">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className="home-text046">Early access</span>
            </div>
          </a>
        </section>
        <section className="home-integrations">
          <div className="home-centered-container1">
            <div className="home-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="home-text049">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="home-pills-container">
              <div className="home-pills">
                <div className="home-container6">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="home-container7">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-quote-container">
          <img
            alt=" "
            src="/playground_assets/2xquote-200h.png"
            className="home-avatar"
          />
          <div className="home-quote">
            <span className="home-message">
              “Gateful aims to transform millions of legacy digital experiences
              into engaging Web3 consumer touch-points.”
            </span>
            <div className="home-author">
              <span className="home-quote1">J. Eric Hill, Founder</span>
            </div>
          </div>
        </section>
        <section className="home-how-it-works">
          <div className="home-centered-container2">
            <div className="home-heading1">
              <span className="home-text050">How it works</span>
              <span className="home-text051 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="home-category2">
              <div className="home-headng">
                <span className="home-text052">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text053">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started05 template-button">
                  <span className="home-text054">Get started</span>
                </div>
              </div>
              <div className="home-container8">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-row">
              <div className="home-category3">
                <div className="home-headng1">
                  <span className="home-text055">2 — Act</span>
                  <span className="home-text056">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="home-pasted-image1"
                />
              </div>
              <div className="home-category4">
                <div className="home-headng2">
                  <span className="home-text057">2 — Act</span>
                  <span className="home-text058">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="home-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="home-pricing">
          <div className="home-centered-container3">
            <div className="home-heading2">
              <span className="home-text059 title">
                Pricing for all kind of businesses
              </span>
              <span className="home-text060">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="home-selection">
                <span className="home-text061">Monthly</span>
                <span className="home-text062">Yearly</span>
              </div>
            </div>
            <div className="home-cards1">
              <div className="home-card">
                <span className="home-text063">Free</span>
                <span className="home-text064">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="home-get-started06 template-button">
                  <span className="home-text065">Start for free</span>
                </div>
                <span className="home-text066">What&apos;s included</span>
                <div className="home-bullet-points">
                  <div className="home-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text067">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text068">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card1">
                <span className="home-text069">Pay as you go</span>
                <span className="home-text070">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="home-get-started07 template-button">
                  <span className="home-text074">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text077">What&apos;s included</span>
                <div className="home-bullet-points1">
                  <div className="home-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text078">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text079">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text080">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text081">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="home-card2">
                <span className="home-text082">Enterprise</span>
                <span className="home-text083">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="home-get-started08 template-button">
                  <span className="home-text086">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="home-text089">What&apos;s included</span>
                <div className="home-bullet-points2">
                  <div className="home-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text090">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text091">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon28"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text092">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="home-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon30"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text093">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-testimonals">
          <div className="home-left3">
            <span className="home-text094">Testimonals</span>
            <span className="home-text095 title">
              What people say about Active
            </span>
          </div>
          <div className="home-right2">
            <div className="home-column">
              <Testimonal
                Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
                Avatar_src="/playground_assets/image552912-e3yq-200h.png"
              ></Testimonal>
              <Testimonal
                From="Social Club"
                Name="Jessica Smith"
                Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
                Avatar_src="/playground_assets/image312912-mvsg-200h.png"
              ></Testimonal>
              <Testimonal
                From="BeMe"
                Name="Logan Boy"
                Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
                Avatar_src="/playground_assets/image502912-6wy-200h.png"
              ></Testimonal>
              <Testimonal
                From="Hello W."
                Name="Laraine Summers"
                Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
                Avatar_src="/playground_assets/image202912-zekh-200h.png"
              ></Testimonal>
            </div>
            <div className="home-column1">
              <Testimonal
                From="Handsly"
                Name="William McPau"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
                Avatar_src="/playground_assets/image572912-0d3-200h.png"
              ></Testimonal>
              <Testimonal
                From="Share"
                Name="Mariah Mae"
                Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
                Avatar_src="/playground_assets/image632913-swij-200h.png"
              ></Testimonal>
              <Testimonal
                From="Gather"
                Name="John Finati"
                Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
                Avatar_src="/playground_assets/image102913-x4z8-200h.png"
              ></Testimonal>
              <Testimonal
                From="Zigo"
                Name="Mary Pau"
                Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
                Avatar_src="/playground_assets/image562913-ycff-200h.png"
              ></Testimonal>
            </div>
          </div>
          <span className="home-text096">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="home-action-bar">
          <div className="home-action">
            <div className="home-heading3">
              <span className="home-text099 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="home-text103">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="home-get-started09 template-button">
                <span className="home-text104">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="home-image3"
              />
            </div>
          </div>
        </section>
        <section className="home-faq">
          <div className="home-heading4">
            <span className="home-text107 title">
              Frequently asked questions
            </span>
            <span className="home-text108">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header1">
                <span className="home-text109">
                  — What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text110">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="home-header2">
                <span className="home-text111">
                  — Why is dolore magna aliqua excepteur sint
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text112">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header3">
                <span className="home-text113">
                  — Is excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text114">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header4">
                <span className="home-text115">
                  — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text116">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="home-header5">
                <span className="home-text117">
                  — Is minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="home-text118">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></DangerousHTML>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="home-image4"
            />
            <span className="home-text119">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="home-text120">
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
                className="home-link3"
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
                className="home-link4"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="home-text123">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 716px;
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
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
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
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-links {
            display: none;
            align-items: center;
            margin-left: 33px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link {
            display: contents;
          }
          .home-get-started {
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
          .home-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .home-icon02 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text005 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .home-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text008 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .home-text009 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-link1 {
            display: contents;
          }
          .home-get-started01 {
            color: white;
            cursor: pointer;
            display: flex;
            box-shadow: 5px 5px 0px 1px #db2763;
            margin-top: 40px;
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
          .home-get-started01:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-icon04 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text010 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-dashboard-preview {
            width: 100%;
            height: 182px;
            display: flex;
            z-index: 1;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
          }
          .home-outline {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-primary-100);
            border-width: 2px;
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .home-text011 {
            color: var(--dl-color-primary-100);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text013 {
            color: var(--dl-color-primary-300);
          }
          .home-text015 {
            color: var(--dl-color-primary-300);
          }
          .home-text017 {
            color: var(--dl-color-primary-300);
          }
          .home-image {
            width: 90%;
            margin-top: var(--dl-space-space-oneandhalfunits);
            object-fit: cover;
          }
          .home-features {
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
          .home-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text019 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .home-text023 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .home-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-icon06 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text026 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text027 {
            line-height: 24px;
          }
          .home-publish {
            height: initial;
          }
          .home-icon07 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text028 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text029 {
            line-height: 24px;
          }
          .home-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .home-icon08 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text030 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .home-text031 {
            line-height: 24px;
          }
          .home-icon09 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text032 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text033 {
            line-height: 24px;
          }
          .home-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-banner-advanced-analytics {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 180px;
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-centered-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            justify-content: center;
          }
          .home-image-container {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .home-cards-image {
            width: 100%;
            height: 100%;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-radius: 20px;
          }
          .home-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text034 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .home-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text035 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .home-category1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image1 {
            width: 80%;
            object-fit: cover;
          }
          .home-banner-manage {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text037 {
            text-align: left;
          }
          .home-text038 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started02 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started02:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text039 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-image-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .home-banner {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-container4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-left2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text040 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text041 {
            text-align: left;
          }
          .home-text042 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started03 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .home-get-started03:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text043 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-cards-image2 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-statistics {
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-left: var(--dl-space-space-sevenunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-text044 {
            font-size: 30px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container5 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-active-users {
            position: relative;
            align-self: center;
          }
          .home-image2 {
            width: 100px;
            object-fit: cover;
          }
          .home-text045 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
          }
          .home-link2 {
            display: contents;
          }
          .home-get-started04 {
            color: white;
            cursor: pointer;
            display: flex;
            box-shadow: 5px 5px 0px 1px #db2763;
            margin-top: var(--dl-space-space-threeunits);
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
          .home-get-started04:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-icon10 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text046 {
            color: var(--dl-color-primary-100);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text049 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-container6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .home-container7 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-quote-container {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.4) 2%,
                rgba(0, 0, 0, 0.4) 100%
              ),
              url('/playground_assets/quotebg-1500w.png');
          }
          .home-avatar {
            width: 275px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-message {
            color: rgb(255, 255, 255);
            font-size: 30px;
            max-width: 800px;
            text-align: center;
            line-height: 1.25;
          }
          .home-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-quote1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            font-weight: bold;
            margin-left: var(--dl-space-space-unit);
          }
          .home-how-it-works {
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
          .home-centered-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text050 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text051 {
            color: var(--dl-color-gray-white);
          }
          .home-category2 {
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
          .home-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text052 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text053 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .home-get-started05 {
            margin-bottom: 0px;
          }
          .home-get-started05:hover {
            color: black;
            background-color: #ffffff;
          }
          .home-text054 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-container8 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .home-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .home-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .home-category3 {
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
          .home-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text055 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text056 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .home-pasted-image1 {
            width: 100%;
          }
          .home-category4 {
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
          .home-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .home-text057 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .home-text058 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .home-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .home-pricing {
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
          .home-centered-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text059 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text060 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text061 {
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
          .home-text062 {
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
          .home-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-card {
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
          .home-text063 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text064 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started06 {
            transition: 0.3s;
          }
          .home-get-started06:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text065 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text066 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text067 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text068 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card1 {
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
          .home-text069 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text070 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started07 {
            transition: 0.3s;
          }
          .home-get-started07:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text074 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text077 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text078 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text079 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text080 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text081 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-card2 {
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
          .home-text082 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text083 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started08 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .home-get-started08:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text086 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text089 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text090 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text091 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon28 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text092 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .home-icon30 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .home-text093 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-left3 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text094 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .home-text095 {
            text-align: left;
          }
          .home-right2 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .home-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .home-text096 {
            cursor: pointer;
            display: none;
          }
          .home-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .home-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .home-text099 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .home-text103 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-get-started09 {
            margin-bottom: 0px;
          }
          .home-text104 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .home-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image3 {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .home-faq {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .home-heading4 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .home-text107 {
            text-align: center;
          }
          .home-text108 {
            color: rgb(0, 0, 0);
            width: 100%;
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text109 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text110 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text111 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text112 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text113 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text114 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text115 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text116 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-text117 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text118 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image4 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text119 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text120 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-link3 {
            text-decoration: underline;
          }
          .home-link4 {
            text-decoration: underline;
          }
          .home-text123 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .home-link5 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .home-hero {
              height: 788px;
            }
          }
          @media (max-width: 991px) {
            .home-hero {
              height: 660px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-links {
              display: none;
            }
            .home-header {
              width: 100%;
              max-width: 1200px;
            }
            .home-outline {
              width: auto;
            }
            .home-text011 {
              font-size: 22px;
            }
            .home-image {
              width: 100%;
            }
            .home-features {
              padding-top: 260px;
            }
            .home-title {
              width: 100%;
              max-width: 1200px;
            }
            .home-text019 {
              font-size: 36px;
              line-height: 40px;
            }
            .home-text023 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .home-text027 {
              line-height: 21px;
            }
            .home-text029 {
              line-height: 21px;
            }
            .home-text031 {
              line-height: 21px;
            }
            .home-text032 {
              font-size: 24px;
            }
            .home-text033 {
              line-height: 21px;
            }
            .home-banner-advanced-analytics {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text034 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-left1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .home-cards-image1 {
              width: 360px;
            }
            .home-statistics {
              height: 800px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-container5 {
              height: 100%;
              align-items: center;
              flex-direction: column;
            }
            .home-active-users {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container7 {
              margin-left: 0px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .home-message {
              width: 100%;
              max-width: 800px;
            }
            .home-author {
              width: 100%;
              max-width: 800px;
            }
            .home-category2 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .home-container8 {
              width: 100%;
            }
            .home-pasted-image {
              height: auto;
            }
            .home-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-text060 {
              width: 100%;
              max-width: 600px;
            }
            .home-cards1 {
              display: flex;
              flex-direction: column;
            }
            .home-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text064 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text066 {
              font-size: 16px;
            }
            .home-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .home-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .home-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .home-left3 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .home-text095 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-right2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-action {
              flex-direction: column;
            }
            .home-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text099 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-text123 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 578px;
              position: relative;
              padding-bottom: 180px;
              background-color: var(--dl-color-template-blue-bg);
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-sign-in {
              display: flex;
            }
            .home-get-started {
              display: flex;
            }
            .home-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text008 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .home-text009 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .home-get-started01 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-dashboard-preview {
              top: 520px;
              width: 90%;
            }
            .home-outline {
              border-width: 2px;
              border-radius: 35px;
            }
            .home-text011 {
              font-size: 18px;
              text-align: center;
            }
            .home-image {
              margin-top: var(--dl-space-space-unit);
            }
            .home-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text019 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-text026 {
              font-size: 24px;
            }
            .home-text027 {
              font-size: 14px;
            }
            .home-publish {
              margin-left: 0px;
            }
            .home-text028 {
              font-size: 24px;
            }
            .home-text029 {
              font-size: 14px;
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-analyze {
              margin-right: 0px;
            }
            .home-text030 {
              font-size: 24px;
            }
            .home-text031 {
              font-size: 14px;
            }
            .home-text033 {
              font-size: 14px;
            }
            .home-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-centered-container {
              flex-direction: column-reverse;
            }
            .home-right1 {
              margin-left: 0px;
            }
            .home-text034 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text035 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container3 {
              flex-direction: column;
            }
            .home-left1 {
              margin-right: 0px;
            }
            .home-text037 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text038 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text039 {
              font-size: 16px;
            }
            .home-image-container1 {
              justify-content: center;
            }
            .home-cards-image1 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-container4 {
              flex-direction: column;
            }
            .home-left2 {
              margin-right: 0px;
            }
            .home-statistics {
              height: 100%;
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container5 {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .home-text045 {
              font-size: 14px;
            }
            .home-get-started04 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text049 {
              line-height: 24px;
            }
            .home-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-avatar {
              width: 180px;
              height: auto;
            }
            .home-message {
              font-size: 24px;
              line-height: 31px;
            }
            .home-author {
              width: 100%;
            }
            .home-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-text051 {
              margin-bottom: 0px;
            }
            .home-headng {
              padding-bottom: 0px;
            }
            .home-get-started05 {
              display: none;
            }
            .home-container8 {
              width: 100%;
            }
            .home-row {
              height: auto;
              flex-direction: column;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text063 {
              font-size: 28px;
            }
            .home-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text069 {
              font-size: 28px;
            }
            .home-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text082 {
              font-size: 28px;
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .home-right2 {
              width: 100%;
              flex-direction: column;
            }
            .home-column1 {
              display: none;
            }
            .home-text096 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .home-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-action {
              align-items: center;
            }
            .home-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text099 {
              font-size: 28px;
              text-align: left;
            }
            .home-text104 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .home-images {
              justify-content: center;
            }
            .home-image3 {
              width: 100%;
            }
            .home-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .home-heading4 {
              width: 100%;
            }
            .home-text107 {
              font-size: 36px;
              line-height: 36px;
            }
            .home-text108 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image4 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 600px;
              padding-bottom: 160px;
            }
            .home-centered {
              justify-content: center;
            }
            .home-logo {
              width: 180px;
            }
            .home-icon {
              display: none;
            }
            .home-sign-in {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-text009 {
              color: #eee9fe;
            }
            .home-get-started01 {
              background-color: var(--dl-color-primary-700);
            }
            .home-dashboard-preview {
              top: 500px;
            }
            .home-text011 {
              font-size: 16px;
            }
            .home-image {
              display: none;
            }
            .home-features {
              padding-top: 200px;
            }
            .home-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .home-analyze {
              margin-bottom: 0px;
            }
            .home-right1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .home-text034 {
              align-self: center;
              text-align: center;
            }
            .home-text038 {
              line-height: 24px;
            }
            .home-cards-image1 {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .home-statistics {
              height: auto;
            }
            .home-text045 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .home-avatar {
              width: 180px;
              height: auto;
            }
            .home-message {
              font-size: 18px;
              line-height: 24px;
            }
            .home-category2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-get-started08 {
              background-color: var(--dl-color-gray-white);
            }
            .home-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text119 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
