import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'

const Demo = (props) => {
  return (
    <>
      <div className="demo-container">
        <Head>
          <title>
            Demo - Gateful | Token Gating Platform | Token Gate Your Website
          </title>
          <meta
            name="description"
            content="The easiest way to create token gated digital experiences. Token gate your website or web application. Gateful simplifies Blockchain access management."
          />
          <meta
            property="og:title"
            content="Zombies Demo - Gateful | Token Gating Platform | Token Gate Your Website"
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
        <section id="header" className="demo-hero">
          <div className="demo-menu">
            <div id="navigation" className="demo-desktop-navigation">
              <nav className="demo-centered">
                <div className="demo-left">
                  <img
                    alt="Welcome to Gateful"
                    src="/playground_assets/gateful-logo-wht-200h.png"
                    className="demo-logo"
                  />
                  <div className="demo-links">
                    <span className="Link">Solutions</span>
                    <span className="Link">How it works</span>
                    <span className="Link">Prices</span>
                  </div>
                </div>
                <div className="demo-right">
                  <svg viewBox="0 0 1024 1024" className="demo-icon">
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <a
                    href="https://ondemand.openmedium.biz/#/customer/4313645000001425224"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="demo-sign-in Link"
                  >
                    <span>Book a Demo</span>
                    <br></br>
                  </a>
                  <a
                    href="https://zfrmz.com/MtUWiQJfSPjHpXrfUYIh"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="demo-link"
                  >
                    <div className="demo-get-started">
                      <svg viewBox="0 0 1024 1024" className="demo-icon02">
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                      <span className="demo-text005">
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
          <header className="demo-header">
            <h1 className="demo-text008">Welcome, Zombie NFT Holders</h1>
            <p className="demo-text009">Shop exclusive Zombie merchandise.</p>
          </header>
        </section>
        <section className="demo-features">
          <div className="demo-title">
            <span className="demo-text010">
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
            <span className="demo-text014">
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
          <div className="demo-cards">
            <div className="demo-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="demo-icon04"
                />
                <span className="demo-text017">Schedule</span>
                <span className="demo-text018">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="demo-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="demo-icon05"
                />
                <span className="demo-text019">Publish</span>
                <span className="demo-text020">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="demo-container2">
              <div className="card demo-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="demo-icon06"
                />
                <span className="demo-text021">Analyze</span>
                <span className="demo-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="demo-icon07"
                />
                <span className="demo-text023">Get leads</span>
                <span className="demo-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="demo-banners">
          <div className="demo-banner-advanced-analytics">
            <div className="demo-centered-container">
              <div className="demo-image-container">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="https://assets.website-files.com/624141216034a627653a119d/624141216034a6f48b3a11c3_Zombie-Collective-Logo.png"
                  loading="eager"
                  className="demo-cards-image"
                />
              </div>
              <div className="demo-right1">
                <h2 className="demo-text025 title">
                  Exclusive Stay Rich T-Shirt
                </h2>
                <div className="demo-category">
                  <span className="demo-text026">
                    <span className="demo-text027">
                      Look great in our stay rich t-shirt created exclusively
                      for ETH token holders. Made from 100% organic cotton, this
                      shirt will keep you looking fresh all day.
                    </span>
                    <br></br>
                    <br></br>
                    <span className="demo-text030">1 ETH</span>
                    <br></br>
                  </span>
                </div>
                <div className="demo-category1">
                  <button className="demo-button button">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="demo-banner-manage">
            <div className="demo-container3">
              <div className="demo-left1">
                <span className="sub-title">Content Management</span>
                <span className="demo-text033 title">
                  Manage all your platforms in just one place.
                </span>
                <span className="demo-text034">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="demo-get-started1 template-button">
                  <span className="demo-text035">Get started</span>
                </div>
              </div>
              <div className="demo-image-container1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-wvmq%201-1200w.png"
                  className="demo-cards-image1"
                />
              </div>
            </div>
          </div>
          <div className="demo-banner">
            <div className="demo-container4">
              <div className="demo-left2">
                <span className="demo-text036">Improve Scheduling</span>
                <h2 className="demo-text037 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="demo-text038">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="demo-get-started2 template-button">
                  <span className="demo-text039">Get started</span>
                </div>
              </div>
              <div className="demo-image-container2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                  className="demo-cards-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="demo-integrations">
          <div className="demo-centered-container1">
            <div className="demo-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="demo-text042">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="demo-pills-container">
              <div className="demo-pills">
                <div className="demo-container5">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="demo-container6">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="demo-how-it-works">
          <div className="demo-centered-container2">
            <div className="demo-heading1">
              <span className="demo-text043">How it works</span>
              <span className="demo-text044 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="demo-category2">
              <div className="demo-headng">
                <span className="demo-text045">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="demo-text046">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="demo-get-started3 template-button">
                  <span className="demo-text047">Get started</span>
                </div>
              </div>
              <div className="demo-container7">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="demo-pasted-image"
                />
              </div>
            </div>
            <div className="demo-row">
              <div className="demo-category3">
                <div className="demo-headng1">
                  <span className="demo-text048">2 — Act</span>
                  <span className="demo-text049">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="demo-pasted-image1"
                />
              </div>
              <div className="demo-category4">
                <div className="demo-headng2">
                  <span className="demo-text050">2 — Act</span>
                  <span className="demo-text051">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="demo-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="demo-pricing">
          <div className="demo-centered-container3">
            <div className="demo-heading2">
              <span className="demo-text052 title">
                Pricing for all kind of businesses
              </span>
              <span className="demo-text053">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="demo-selection">
                <span className="demo-text054">Monthly</span>
                <span className="demo-text055">Yearly</span>
              </div>
            </div>
            <div className="demo-cards1">
              <div className="demo-card">
                <span className="demo-text056">Free</span>
                <span className="demo-text057">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="demo-get-started4 template-button">
                  <span className="demo-text058">Start for free</span>
                </div>
                <span className="demo-text059">What&apos;s included</span>
                <div className="demo-bullet-points">
                  <div className="demo-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text060">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text061">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="demo-card1">
                <span className="demo-text062">Pay as you go</span>
                <span className="demo-text063">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="demo-get-started5 template-button">
                  <span className="demo-text067">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="demo-text070">What&apos;s included</span>
                <div className="demo-bullet-points1">
                  <div className="demo-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text071">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text072">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text073">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text074">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="demo-card2">
                <span className="demo-text075">Enterprise</span>
                <span className="demo-text076">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="demo-get-started6 template-button">
                  <span className="demo-text079">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="demo-text082">What&apos;s included</span>
                <div className="demo-bullet-points2">
                  <div className="demo-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text083">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text084">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text085">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="demo-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="demo-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="demo-text086">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="demo-testimonals">
          <div className="demo-left3">
            <span className="demo-text087">Testimonals</span>
            <span className="demo-text088 title">
              What people say about Active
            </span>
          </div>
          <div className="demo-right2">
            <div className="demo-column">
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
            <div className="demo-column1">
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
          <span className="demo-text089">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="demo-action-bar">
          <div className="demo-action">
            <div className="demo-heading3">
              <span className="demo-text092 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="demo-text096">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="demo-get-started7 template-button">
                <span className="demo-text097">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="demo-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="demo-image"
              />
            </div>
          </div>
        </section>
        <section className="demo-faq">
          <div className="demo-heading4">
            <span className="demo-text100 title">
              Frequently asked questions
            </span>
            <span className="demo-text101">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="demo-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="demo-header1">
                <span className="demo-text102">
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
                <span className="demo-text103">
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
              <div className="demo-header2">
                <span className="demo-text104">
                  — Why is dolore magna aliqua excepteur sint
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="demo-text105">
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
              <div className="demo-header3">
                <span className="demo-text106">
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
                <span className="demo-text107">
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
              <div className="demo-header4">
                <span className="demo-text108">
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
                <span className="demo-text109">
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
              <div className="demo-header5">
                <span className="demo-text110">
                  — Is minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </span>
                <svg viewBox="0 0 1024 1024" className="accordionIcon">
                  <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                </svg>
              </div>
              <div className="accordionContent">
                <span className="demo-text111">
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
        <footer className="demo-footer">
          <div className="demo-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="demo-image1"
            />
            <span className="demo-text112">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="demo-text113">
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
                className="demo-link1"
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
                className="demo-link2"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="demo-text116">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="demo-link3"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .demo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .demo-hero {
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
          .demo-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .demo-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .demo-centered {
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
          .demo-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .demo-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-links {
            display: none;
            align-items: center;
            margin-left: 33px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
          }
          .demo-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .demo-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .demo-link {
            display: contents;
          }
          .demo-get-started {
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
          .demo-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .demo-icon02 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .demo-text005 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .demo-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .demo-text008 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .demo-text009 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .demo-features {
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
          .demo-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .demo-text010 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .demo-text014 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .demo-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .demo-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .demo-icon04 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text017 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .demo-text018 {
            line-height: 24px;
          }
          .demo-publish {
            height: initial;
          }
          .demo-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text019 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .demo-text020 {
            line-height: 24px;
          }
          .demo-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .demo-icon06 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .demo-text022 {
            line-height: 24px;
          }
          .demo-icon07 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .demo-text024 {
            line-height: 24px;
          }
          .demo-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .demo-banner-advanced-analytics {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .demo-centered-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            justify-content: center;
          }
          .demo-image-container {
            flex: 1;
            display: flex;
            justify-content: center;
          }
          .demo-cards-image {
            width: 433px;
            height: 589px;
            object-fit: contain;
            border-radius: 20px;
          }
          .demo-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .demo-text025 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .demo-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .demo-text026 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .demo-text030 {
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
          }
          .demo-category1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .demo-button {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .demo-banner-manage {
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
          .demo-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .demo-left1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .demo-text033 {
            text-align: left;
          }
          .demo-text034 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .demo-get-started1 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .demo-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .demo-text035 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .demo-image-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .demo-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .demo-banner {
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
          .demo-container4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .demo-left2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .demo-text036 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .demo-text037 {
            text-align: left;
          }
          .demo-text038 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .demo-get-started2 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .demo-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .demo-text039 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .demo-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .demo-cards-image2 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .demo-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .demo-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .demo-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .demo-text042 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .demo-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .demo-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .demo-container5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .demo-container6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .demo-how-it-works {
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
          .demo-centered-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .demo-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .demo-text043 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .demo-text044 {
            color: var(--dl-color-gray-white);
          }
          .demo-category2 {
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
          .demo-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .demo-text045 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .demo-text046 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .demo-get-started3 {
            margin-bottom: 0px;
          }
          .demo-get-started3:hover {
            color: black;
            background-color: #ffffff;
          }
          .demo-text047 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .demo-container7 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .demo-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .demo-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .demo-category3 {
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
          .demo-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .demo-text048 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .demo-text049 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .demo-pasted-image1 {
            width: 100%;
          }
          .demo-category4 {
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
          .demo-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .demo-text050 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .demo-text051 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .demo-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .demo-pricing {
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
          .demo-centered-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .demo-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .demo-text052 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .demo-text053 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .demo-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .demo-text054 {
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
          .demo-text055 {
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
          .demo-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .demo-card {
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
          .demo-text056 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text057 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .demo-get-started4 {
            transition: 0.3s;
          }
          .demo-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .demo-text058 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .demo-text059 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .demo-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text060 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text061 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-card1 {
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
          .demo-text062 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text063 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .demo-get-started5 {
            transition: 0.3s;
          }
          .demo-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .demo-text067 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .demo-text070 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .demo-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text071 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text072 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text073 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text074 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-card2 {
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
          .demo-text075 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-text076 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .demo-get-started6 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .demo-get-started6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .demo-text079 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .demo-text082 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .demo-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .demo-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text083 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text084 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text085 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .demo-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .demo-text086 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .demo-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .demo-left3 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .demo-text087 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .demo-text088 {
            text-align: left;
          }
          .demo-right2 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .demo-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .demo-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .demo-text089 {
            cursor: pointer;
            display: none;
          }
          .demo-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .demo-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .demo-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .demo-text092 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .demo-text096 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .demo-get-started7 {
            margin-bottom: 0px;
          }
          .demo-text097 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .demo-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .demo-image {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .demo-faq {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: #eff0f2;
          }
          .demo-heading4 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            flex-direction: column;
          }
          .demo-text100 {
            text-align: center;
          }
          .demo-text101 {
            color: rgb(0, 0, 0);
            width: 100%;
            max-width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .demo-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .demo-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .demo-text102 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .demo-text103 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .demo-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .demo-text104 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .demo-text105 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .demo-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .demo-text106 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .demo-text107 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .demo-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .demo-text108 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .demo-text109 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .demo-header5 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .demo-text110 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .demo-text111 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .demo-footer {
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
          .demo-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .demo-image1 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .demo-text112 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .demo-text113 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .demo-link1 {
            text-decoration: underline;
          }
          .demo-link2 {
            text-decoration: underline;
          }
          .demo-text116 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .demo-link3 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .demo-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .demo-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .demo-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .demo-links {
              display: none;
            }
            .demo-header {
              width: 100%;
              max-width: 1200px;
            }
            .demo-features {
              padding-top: 260px;
            }
            .demo-title {
              width: 100%;
              max-width: 1200px;
            }
            .demo-text010 {
              font-size: 36px;
              line-height: 40px;
            }
            .demo-text014 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .demo-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .demo-text018 {
              line-height: 21px;
            }
            .demo-text020 {
              line-height: 21px;
            }
            .demo-text022 {
              line-height: 21px;
            }
            .demo-text023 {
              font-size: 24px;
            }
            .demo-text024 {
              line-height: 21px;
            }
            .demo-banner-advanced-analytics {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .demo-text025 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .demo-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .demo-left1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .demo-cards-image1 {
              width: 360px;
            }
            .demo-container6 {
              margin-left: 0px;
            }
            .demo-category2 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .demo-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .demo-container7 {
              width: 100%;
            }
            .demo-pasted-image {
              height: auto;
            }
            .demo-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .demo-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .demo-text053 {
              width: 100%;
              max-width: 600px;
            }
            .demo-cards1 {
              display: flex;
              flex-direction: column;
            }
            .demo-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .demo-text057 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .demo-text059 {
              font-size: 16px;
            }
            .demo-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .demo-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .demo-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .demo-left3 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .demo-text088 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .demo-right2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .demo-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .demo-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .demo-action {
              flex-direction: column;
            }
            .demo-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .demo-text092 {
              font-size: 36px;
              line-height: 36px;
            }
            .demo-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .demo-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .demo-top {
              flex-direction: column;
            }
            .demo-text116 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .demo-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .demo-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .demo-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .demo-left {
              margin-left: var(--dl-space-space-unit);
            }
            .demo-right {
              margin-right: var(--dl-space-space-unit);
            }
            .demo-sign-in {
              display: flex;
            }
            .demo-get-started {
              display: flex;
            }
            .demo-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .demo-text008 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .demo-text009 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .demo-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-text010 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .demo-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .demo-text017 {
              font-size: 24px;
            }
            .demo-text018 {
              font-size: 14px;
            }
            .demo-publish {
              margin-left: 0px;
            }
            .demo-text019 {
              font-size: 24px;
            }
            .demo-text020 {
              font-size: 14px;
            }
            .demo-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .demo-analyze {
              margin-right: 0px;
            }
            .demo-text021 {
              font-size: 24px;
            }
            .demo-text022 {
              font-size: 14px;
            }
            .demo-text024 {
              font-size: 14px;
            }
            .demo-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .demo-centered-container {
              flex-direction: column-reverse;
            }
            .demo-right1 {
              margin-left: 0px;
            }
            .demo-text025 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .demo-text026 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .demo-text027 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .demo-category1 {
              align-self: center;
              align-items: center;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .demo-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .demo-container3 {
              flex-direction: column;
            }
            .demo-left1 {
              margin-right: 0px;
            }
            .demo-text033 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .demo-text034 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .demo-text035 {
              font-size: 16px;
            }
            .demo-image-container1 {
              justify-content: center;
            }
            .demo-cards-image1 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .demo-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .demo-container4 {
              flex-direction: column;
            }
            .demo-left2 {
              margin-right: 0px;
            }
            .demo-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .demo-text042 {
              line-height: 24px;
            }
            .demo-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .demo-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .demo-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .demo-text044 {
              margin-bottom: 0px;
            }
            .demo-headng {
              padding-bottom: 0px;
            }
            .demo-get-started3 {
              display: none;
            }
            .demo-container7 {
              width: 100%;
            }
            .demo-row {
              height: auto;
              flex-direction: column;
            }
            .demo-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .demo-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .demo-text056 {
              font-size: 28px;
            }
            .demo-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .demo-text062 {
              font-size: 28px;
            }
            .demo-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .demo-text075 {
              font-size: 28px;
            }
            .demo-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .demo-right2 {
              width: 100%;
              flex-direction: column;
            }
            .demo-column1 {
              display: none;
            }
            .demo-text089 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .demo-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .demo-action {
              align-items: center;
            }
            .demo-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-text092 {
              font-size: 28px;
              text-align: left;
            }
            .demo-text097 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .demo-images {
              justify-content: center;
            }
            .demo-image {
              width: 100%;
            }
            .demo-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .demo-heading4 {
              width: 100%;
            }
            .demo-text100 {
              font-size: 36px;
              line-height: 36px;
            }
            .demo-text101 {
              width: 100%;
              max-width: 600p;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .demo-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .demo-image1 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .demo-hero {
              height: auto;
            }
            .demo-centered {
              justify-content: center;
            }
            .demo-logo {
              width: 180px;
            }
            .demo-icon {
              display: none;
            }
            .demo-sign-in {
              display: none;
            }
            .demo-get-started {
              display: none;
            }
            .demo-text009 {
              color: #eee9fe;
            }
            .demo-features {
              padding-top: 200px;
            }
            .demo-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .demo-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .demo-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .demo-analyze {
              margin-bottom: 0px;
            }
            .demo-right1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .demo-text025 {
              align-self: center;
              text-align: center;
            }
            .demo-text034 {
              line-height: 24px;
            }
            .demo-cards-image1 {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .demo-category2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .demo-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-get-started6 {
              background-color: var(--dl-color-gray-white);
            }
            .demo-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .demo-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .demo-text112 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Demo
