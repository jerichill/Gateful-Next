import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'

const BookADemo = (props) => {
  return (
    <>
      <div className="book--demo-container">
        <Head>
          <title>
            Book-a-Demo - Gateful | Token Gating Platform | Token Gate Your
            Website
          </title>
          <meta
            name="description"
            content="The easiest way to create token gated digital experiences. Token gate your website or web application. Gateful simplifies Blockchain access management."
          />
          <meta
            property="og:title"
            content="Book-a-Demo - Gateful | Token Gating Platform | Token Gate Your Website"
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
        <header id="header" className="book--demo-hero">
          <div className="book--demo-menu">
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
            <div id="navigation" className="book--demo-desktop-navigation">
              <nav className="book--demo-centered-desktop">
                <div className="book--demo-left">
                  <Link href="/">
                    <a className="book--demo-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="book--demo-logo"
                      />
                    </a>
                  </Link>
                  <div className="book--demo-links">
                    <Link href="/token-gating-platform">
                      <a className="book--demo-link01 Link">Platform</a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="book--demo-link02 Link">Solutions</a>
                    </Link>
                    <Link href="/blog">
                      <a className="book--demo-link03 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="book--demo-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="book--demo-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="book--demo-link04">
                      <div className="book--demo-get-started">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="book--demo-icon"
                        >
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="book--demo-text004">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="book--demo-centered-mobile">
                <div className="book--demo-left1">
                  <div className="book--demo-links1">
                    <Link href="/token-gating-platform">
                      <a className="book--demo-link05 Link">Platform</a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="book--demo-link06 Link">Solutions</a>
                    </Link>
                    <Link href="/blog">
                      <a className="book--demo-link07 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="book--demo-header">
            <h1 className="book--demo-text009">Book a Demo</h1>
            <p className="book--demo-text010">
              Let&apos;s discuss your token gating project.
            </p>
          </header>
        </header>
        <section className="book--demo-features">
          <div className="book--demo-title">
            <span className="book--demo-text011">
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
            <span className="book--demo-text015">
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
          <div className="book--demo-cards">
            <div className="book--demo-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="book--demo-icon02"
                />
                <span className="book--demo-text018">Schedule</span>
                <span className="book--demo-text019">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="book--demo-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="book--demo-icon03"
                />
                <span className="book--demo-text020">Publish</span>
                <span className="book--demo-text021">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="book--demo-container2">
              <div className="card book--demo-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="book--demo-icon04"
                />
                <span className="book--demo-text022">Analyze</span>
                <span className="book--demo-text023">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="book--demo-icon05"
                />
                <span className="book--demo-text024">Get leads</span>
                <span className="book--demo-text025">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="book--demo-banners">
          <section className="book--demo-banner-advanced-analytics">
            <div className="book--demo-centered-container">
              <div className="book--demo-div">
                <DangerousHTML
                  html={`<iframe width='100%' height='750px' src='https://ondemand.openmedium.biz/portal-embed#/customer/4313645000001425224' frameborder='0' allowfullscreen='' > </iframe>`}
                ></DangerousHTML>
              </div>
            </div>
          </section>
          <div className="book--demo-banner-manage">
            <div className="book--demo-container3">
              <div className="book--demo-left2">
                <span className="sub-title">Content Management</span>
                <span className="book--demo-text027 title">
                  Manage all your platforms in just one place.
                </span>
                <span className="book--demo-text028">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="book--demo-get-started1 template-button">
                  <span className="book--demo-text029">Get started</span>
                </div>
              </div>
              <div className="book--demo-image-container">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-wvmq%201-1200w.png"
                  className="book--demo-cards-image"
                />
              </div>
            </div>
          </div>
          <div className="book--demo-banner">
            <div className="book--demo-container4">
              <div className="book--demo-left3">
                <span className="book--demo-text030">Improve Scheduling</span>
                <h2 className="book--demo-text031 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="book--demo-text032">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="book--demo-get-started2 template-button">
                  <span className="book--demo-text033">Get started</span>
                </div>
              </div>
              <div className="book--demo-image-container1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                  className="book--demo-cards-image1"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="book--demo-integrations">
          <div className="book--demo-centered-container1">
            <div className="book--demo-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="book--demo-text036">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="book--demo-pills-container">
              <div className="book--demo-pills">
                <div className="book--demo-container5">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="book--demo-container6">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="book--demo-how-it-works">
          <div className="book--demo-centered-container2">
            <div className="book--demo-heading1">
              <span className="book--demo-text037">How it works</span>
              <span className="book--demo-text038 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="book--demo-category">
              <div className="book--demo-headng">
                <span className="book--demo-text039">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="book--demo-text040">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="book--demo-get-started3 template-button">
                  <span className="book--demo-text041">Get started</span>
                </div>
              </div>
              <div className="book--demo-container7">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="book--demo-pasted-image"
                />
              </div>
            </div>
            <div className="book--demo-row">
              <div className="book--demo-category1">
                <div className="book--demo-headng1">
                  <span className="book--demo-text042">2 — Act</span>
                  <span className="book--demo-text043">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="book--demo-pasted-image1"
                />
              </div>
              <div className="book--demo-category2">
                <div className="book--demo-headng2">
                  <span className="book--demo-text044">2 — Act</span>
                  <span className="book--demo-text045">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="book--demo-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="book--demo-pricing">
          <div className="book--demo-centered-container3">
            <div className="book--demo-heading2">
              <span className="book--demo-text046 title">
                Pricing for all kind of businesses
              </span>
              <span className="book--demo-text047">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="book--demo-selection">
                <span className="book--demo-text048">Monthly</span>
                <span className="book--demo-text049">Yearly</span>
              </div>
            </div>
            <div className="book--demo-cards1">
              <div className="book--demo-card">
                <span className="book--demo-text050">Free</span>
                <span className="book--demo-text051">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="book--demo-get-started4 template-button">
                  <span className="book--demo-text052">Start for free</span>
                </div>
                <span className="book--demo-text053">What&apos;s included</span>
                <div className="book--demo-bullet-points">
                  <div className="book--demo-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon06"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text054">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text055">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="book--demo-card1">
                <span className="book--demo-text056">Pay as you go</span>
                <span className="book--demo-text057">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="book--demo-get-started5 template-button">
                  <span className="book--demo-text061">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="book--demo-text064">What&apos;s included</span>
                <div className="book--demo-bullet-points1">
                  <div className="book--demo-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text065">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text066">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text067">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text068">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="book--demo-card2">
                <span className="book--demo-text069">Enterprise</span>
                <span className="book--demo-text070">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="book--demo-get-started6 template-button">
                  <span className="book--demo-text073">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="book--demo-text076">What&apos;s included</span>
                <div className="book--demo-bullet-points2">
                  <div className="book--demo-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text077">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text078">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text079">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="book--demo-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="book--demo-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="book--demo-text080">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="book--demo-testimonals">
          <div className="book--demo-left4">
            <span className="book--demo-text081">Testimonals</span>
            <span className="book--demo-text082 title">
              What people say about Active
            </span>
          </div>
          <div className="book--demo-right1">
            <div className="book--demo-column">
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
            <div className="book--demo-column1">
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
          <span className="book--demo-text083">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="book--demo-action-bar">
          <div className="book--demo-action">
            <div className="book--demo-heading3">
              <span className="book--demo-text086 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="book--demo-text090">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="book--demo-get-started7 template-button">
                <span className="book--demo-text091">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="book--demo-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="book--demo-image"
              />
            </div>
          </div>
        </section>
        <footer className="book--demo-footer">
          <div className="book--demo-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="book--demo-image1"
            />
            <span className="book--demo-text094">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="book--demo-text095">
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
                className="book--demo-link08"
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
                className="book--demo-link09"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="book--demo-text098">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="book--demo-link10"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .book--demo-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .book--demo-hero {
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
          .book--demo-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-centered-desktop {
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
          .book--demo-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .book--demo-link {
            display: contents;
          }
          .book--demo-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .book--demo-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .book--demo-link01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .book--demo-link02 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .book--demo-link03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .book--demo-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .book--demo-link04 {
            display: contents;
          }
          .book--demo-get-started {
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
          .book--demo-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .book--demo-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .book--demo-text004 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .book--demo-centered-mobile {
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
          .book--demo-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .book--demo-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .book--demo-link05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .book--demo-link06 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .book--demo-link07 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .book--demo-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .book--demo-text009 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .book--demo-text010 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .book--demo-features {
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
          .book--demo-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-text011 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .book--demo-text015 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .book--demo-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .book--demo-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text018 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .book--demo-text019 {
            line-height: 24px;
          }
          .book--demo-publish {
            height: initial;
          }
          .book--demo-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text020 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .book--demo-text021 {
            line-height: 24px;
          }
          .book--demo-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .book--demo-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text022 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .book--demo-text023 {
            line-height: 24px;
          }
          .book--demo-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text024 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .book--demo-text025 {
            line-height: 24px;
          }
          .book--demo-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-banner-advanced-analytics {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .book--demo-centered-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .book--demo-div {
            width: 100%;
          }
          .book--demo-banner-manage {
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
          .book--demo-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .book--demo-left2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .book--demo-text027 {
            text-align: left;
          }
          .book--demo-text028 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .book--demo-get-started1 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .book--demo-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .book--demo-text029 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .book--demo-image-container {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .book--demo-cards-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .book--demo-banner {
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
          .book--demo-container4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .book--demo-left3 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .book--demo-text030 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .book--demo-text031 {
            text-align: left;
          }
          .book--demo-text032 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .book--demo-get-started2 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .book--demo-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .book--demo-text033 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .book--demo-image-container1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .book--demo-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .book--demo-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .book--demo-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .book--demo-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-text036 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .book--demo-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .book--demo-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .book--demo-container5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .book--demo-container6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .book--demo-how-it-works {
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
          .book--demo-centered-container2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .book--demo-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .book--demo-text037 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .book--demo-text038 {
            color: var(--dl-color-gray-white);
          }
          .book--demo-category {
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
          .book--demo-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .book--demo-text039 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .book--demo-text040 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .book--demo-get-started3 {
            margin-bottom: 0px;
          }
          .book--demo-get-started3:hover {
            color: black;
            background-color: #ffffff;
          }
          .book--demo-text041 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .book--demo-container7 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .book--demo-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .book--demo-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .book--demo-category1 {
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
          .book--demo-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .book--demo-text042 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .book--demo-text043 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .book--demo-pasted-image1 {
            width: 100%;
          }
          .book--demo-category2 {
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
          .book--demo-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .book--demo-text044 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .book--demo-text045 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .book--demo-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .book--demo-pricing {
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
          .book--demo-centered-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .book--demo-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .book--demo-text046 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .book--demo-text047 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .book--demo-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .book--demo-text048 {
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
          .book--demo-text049 {
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
          .book--demo-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .book--demo-card {
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
          .book--demo-text050 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text051 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .book--demo-get-started4 {
            transition: 0.3s;
          }
          .book--demo-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .book--demo-text052 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .book--demo-text053 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .book--demo-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon06 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text054 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text055 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-card1 {
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
          .book--demo-text056 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text057 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .book--demo-get-started5 {
            transition: 0.3s;
          }
          .book--demo-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .book--demo-text061 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .book--demo-text064 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .book--demo-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text065 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text066 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text067 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text068 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-card2 {
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
          .book--demo-text069 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-text070 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .book--demo-get-started6 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .book--demo-get-started6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .book--demo-text073 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .book--demo-text076 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .book--demo-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .book--demo-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text077 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text078 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text079 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .book--demo-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .book--demo-text080 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .book--demo-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .book--demo-left4 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .book--demo-text081 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .book--demo-text082 {
            text-align: left;
          }
          .book--demo-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .book--demo-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .book--demo-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .book--demo-text083 {
            cursor: pointer;
            display: none;
          }
          .book--demo-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .book--demo-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .book--demo-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .book--demo-text086 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .book--demo-text090 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .book--demo-get-started7 {
            margin-bottom: 0px;
          }
          .book--demo-text091 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .book--demo-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .book--demo-image {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .book--demo-footer {
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
          .book--demo-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .book--demo-image1 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .book--demo-text094 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .book--demo-text095 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .book--demo-link08 {
            text-decoration: underline;
          }
          .book--demo-link09 {
            text-decoration: underline;
          }
          .book--demo-text098 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .book--demo-link10 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .book--demo-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .book--demo-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .book--demo-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .book--demo-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .book--demo-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .book--demo-header {
              width: 100%;
              max-width: 1200px;
            }
            .book--demo-features {
              padding-top: 260px;
            }
            .book--demo-title {
              width: 100%;
              max-width: 1200px;
            }
            .book--demo-text011 {
              font-size: 36px;
              line-height: 40px;
            }
            .book--demo-text015 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .book--demo-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .book--demo-text019 {
              line-height: 21px;
            }
            .book--demo-text021 {
              line-height: 21px;
            }
            .book--demo-text023 {
              line-height: 21px;
            }
            .book--demo-text024 {
              font-size: 24px;
            }
            .book--demo-text025 {
              line-height: 21px;
            }
            .book--demo-banner-advanced-analytics {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .book--demo-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-left2 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .book--demo-cards-image {
              width: 360px;
            }
            .book--demo-container6 {
              margin-left: 0px;
            }
            .book--demo-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .book--demo-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .book--demo-container7 {
              width: 100%;
            }
            .book--demo-pasted-image {
              height: auto;
            }
            .book--demo-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .book--demo-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .book--demo-text047 {
              width: 100%;
              max-width: 600px;
            }
            .book--demo-cards1 {
              display: flex;
              flex-direction: column;
            }
            .book--demo-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .book--demo-text051 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .book--demo-text053 {
              font-size: 16px;
            }
            .book--demo-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .book--demo-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .book--demo-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .book--demo-left4 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .book--demo-text082 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .book--demo-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-action {
              flex-direction: column;
            }
            .book--demo-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-text086 {
              font-size: 36px;
              line-height: 36px;
            }
            .book--demo-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .book--demo-top {
              flex-direction: column;
            }
            .book--demo-text098 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .book--demo-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .book--demo-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .book--demo-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .book--demo-left {
              margin-left: var(--dl-space-space-unit);
            }
            .book--demo-links {
              display: none;
            }
            .book--demo-right {
              margin-right: var(--dl-space-space-unit);
            }
            .book--demo-sign-in {
              display: flex;
            }
            .book--demo-get-started {
              display: flex;
            }
            .book--demo-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .book--demo-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .book--demo-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .book--demo-text009 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .book--demo-text010 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .book--demo-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-text011 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .book--demo-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .book--demo-text018 {
              font-size: 24px;
            }
            .book--demo-text019 {
              font-size: 14px;
            }
            .book--demo-publish {
              margin-left: 0px;
            }
            .book--demo-text020 {
              font-size: 24px;
            }
            .book--demo-text021 {
              font-size: 14px;
            }
            .book--demo-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .book--demo-analyze {
              margin-right: 0px;
            }
            .book--demo-text022 {
              font-size: 24px;
            }
            .book--demo-text023 {
              font-size: 14px;
            }
            .book--demo-text025 {
              font-size: 14px;
            }
            .book--demo-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .book--demo-centered-container {
              flex-direction: column-reverse;
            }
            .book--demo-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .book--demo-container3 {
              flex-direction: column;
            }
            .book--demo-left2 {
              margin-right: 0px;
            }
            .book--demo-text027 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .book--demo-text028 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .book--demo-text029 {
              font-size: 16px;
            }
            .book--demo-image-container {
              justify-content: center;
            }
            .book--demo-cards-image {
              margin-top: var(--dl-space-space-threeunits);
            }
            .book--demo-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .book--demo-container4 {
              flex-direction: column;
            }
            .book--demo-left3 {
              margin-right: 0px;
            }
            .book--demo-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .book--demo-text036 {
              line-height: 24px;
            }
            .book--demo-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .book--demo-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-text038 {
              margin-bottom: 0px;
            }
            .book--demo-headng {
              padding-bottom: 0px;
            }
            .book--demo-get-started3 {
              display: none;
            }
            .book--demo-container7 {
              width: 100%;
            }
            .book--demo-row {
              height: auto;
              flex-direction: column;
            }
            .book--demo-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .book--demo-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .book--demo-text050 {
              font-size: 28px;
            }
            .book--demo-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-text056 {
              font-size: 28px;
            }
            .book--demo-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-text069 {
              font-size: 28px;
            }
            .book--demo-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .book--demo-right1 {
              width: 100%;
              flex-direction: column;
            }
            .book--demo-column1 {
              display: none;
            }
            .book--demo-text083 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .book--demo-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .book--demo-action {
              align-items: center;
            }
            .book--demo-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-text086 {
              font-size: 28px;
              text-align: left;
            }
            .book--demo-text091 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .book--demo-images {
              justify-content: center;
            }
            .book--demo-image {
              width: 100%;
            }
            .book--demo-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .book--demo-image1 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .book--demo-hero {
              height: auto;
            }
            .book--demo-centered-desktop {
              justify-content: center;
            }
            .book--demo-logo {
              width: 180px;
            }
            .book--demo-sign-in {
              display: none;
            }
            .book--demo-get-started {
              display: none;
            }
            .book--demo-icon {
              display: none;
            }
            .book--demo-centered-mobile {
              justify-content: center;
            }
            .book--demo-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .book--demo-link07 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .book--demo-text010 {
              color: #eee9fe;
            }
            .book--demo-features {
              padding-top: 200px;
            }
            .book--demo-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .book--demo-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .book--demo-analyze {
              margin-bottom: 0px;
            }
            .book--demo-banner-advanced-analytics {
              padding-top: var(--dl-space-space-threeunits);
            }
            .book--demo-text028 {
              line-height: 24px;
            }
            .book--demo-cards-image {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .book--demo-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .book--demo-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-get-started6 {
              background-color: var(--dl-color-gray-white);
            }
            .book--demo-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .book--demo-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .book--demo-text094 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default BookADemo
