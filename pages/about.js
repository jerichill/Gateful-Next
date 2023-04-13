import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>
            About - Gateful | Token Gating Platform | Token Gate Your Website
          </title>
          <meta
            name="description"
            content="The easiest way to create token gated digital experiences. Token gate your website or web application. Gateful simplifies Blockchain access management."
          />
          <meta
            property="og:title"
            content="About - Gateful | Token Gating Platform | Token Gate Your Website"
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
        <section id="header" className="about-hero">
          <div className="about-menu">
            <div id="navigation" className="about-desktop-navigation">
              <nav className="about-centered">
                <div className="about-left">
                  <img
                    alt="Welcome to Gateful"
                    src="/playground_assets/gateful-logo-wht-200h.png"
                    className="about-logo"
                  />
                  <div className="about-links">
                    <span className="Link">Solutions</span>
                    <span className="Link">How it works</span>
                    <span className="Link">Prices</span>
                  </div>
                </div>
                <div className="about-right">
                  <svg viewBox="0 0 1024 1024" className="about-icon">
                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                  </svg>
                  <a
                    href="https://ondemand.openmedium.biz/#/customer/4313645000001425224"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-sign-in Link"
                  >
                    <span>Book a Demo</span>
                    <br></br>
                  </a>
                  <a
                    href="https://zfrmz.com/MtUWiQJfSPjHpXrfUYIh"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-link"
                  >
                    <div className="about-get-started">
                      <svg viewBox="0 0 1024 1024" className="about-icon02">
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                      <span className="about-text005">
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
          <header className="about-header">
            <h1 className="about-text008">About</h1>
            <p className="about-text009">Learn more about Gateful.</p>
          </header>
        </section>
        <section className="about-features">
          <div className="about-title">
            <span className="about-text010">
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
            <span className="about-text014">
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
          <div className="about-cards">
            <div className="about-container1">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="about-icon04"
                />
                <span className="about-text017">Schedule</span>
                <span className="about-text018">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="about-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="about-icon05"
                />
                <span className="about-text019">Publish</span>
                <span className="about-text020">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="about-container2">
              <div className="card about-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="about-icon06"
                />
                <span className="about-text021">Analyze</span>
                <span className="about-text022">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="about-icon07"
                />
                <span className="about-text023">Get leads</span>
                <span className="about-text024">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-banners">
          <div className="about-banner-advanced-analytics">
            <div className="about-centered-container">
              <div className="about-image-container">
                <img
                  alt="Manage on-chain access control with Gateful "
                  src="/playground_assets/comment-1300w.png"
                  loading="eager"
                  className="about-cards-image"
                />
              </div>
              <div className="about-right1">
                <h2 className="about-text025 title">What is Gateful?</h2>
                <div className="about-category">
                  <span className="about-text026">
                    <span>
                      Gateful is a platform that provides an easy way to add
                      Web3 Token Gating functionality to your website or web
                      application. With Gateful, you can transform your project
                      into a powerful Web3-connected community without writing
                      any code. The platform integrates with major blockchain
                      networks, allowing you to create on-chain conditions
                      unique to your audience and requirements. Gateful&apos;s
                      simple interface allows you to create multiple token gates
                      within the same digital experience.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Top brands, developers, and creators trust Gateful for its
                      on-chain access control and token gating script
                      management. The platform is backed by OpenMedium, Inc. and
                      TekSun, Inc. and aims to transform millions of legacy
                      digital experiences into engaging Web3 consumer
                      touch-points.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      If you&apos;re looking to add Web3 Token Gating
                      functionality to your website or web application, Gateful
                      is the easiest way to do so.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="about-centered-container1">
              <div className="about-right2">
                <h2 className="about-text035 title">
                  <span>Management Team</span>
                  <br></br>
                </h2>
                <span className="about-text038">
                  <span>
                    Gateful is backed and delivered by experienced Founders and
                    Technologists.
                  </span>
                  <br></br>
                </span>
                <div className="about-category1">
                  <div className="about-active-users metrics">
                    <img
                      alt="image"
                      src="/playground_assets/headshot2022bpng-300w.png"
                      className="about-image"
                    />
                    <h3 className="about-text041">J. Eric Hill</h3>
                    <span>OpenMedium, Inc.</span>
                  </div>
                  <div className="about-active-users1 metrics">
                    <img
                      alt="image"
                      src="/playground_assets/sv-300h.jpeg"
                      className="about-image1"
                    />
                    <h3 className="about-text042">Sherwood Vane</h3>
                    <span>Sherwood X</span>
                  </div>
                  <div className="about-active-users2 metrics">
                    <img
                      alt="image"
                      src="/playground_assets/bk-300h.png"
                      className="about-image2"
                    />
                    <h3 className="about-text043">Brijesh Kamani</h3>
                    <span>TekSun, Inc.</span>
                  </div>
                  <div className="about-active-users3 metrics">
                    <img
                      alt="image"
                      src="/playground_assets/bj-300h.png"
                      className="about-image3"
                    />
                    <h3 className="about-text044">Brijesh Jagani</h3>
                    <span>TekSun, Inc.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-banner-manage">
            <div className="about-container3">
              <div className="about-left1">
                <span className="sub-title">Content Management</span>
                <span className="about-text046 title">
                  Manage all your platforms in just one place.
                </span>
                <span className="about-text047">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="about-get-started1 template-button">
                  <span className="about-text048">Get started</span>
                </div>
              </div>
              <div className="about-image-container1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-wvmq%201-1200w.png"
                  className="about-cards-image1"
                />
              </div>
            </div>
          </div>
          <div className="about-banner">
            <div className="about-container4">
              <div className="about-left2">
                <span className="about-text049">Improve Scheduling</span>
                <h2 className="about-text050 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="about-text051">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="about-get-started2 template-button">
                  <span className="about-text052">Get started</span>
                </div>
              </div>
              <div className="about-image-container2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
                  className="about-cards-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about-integrations">
          <div className="about-centered-container2">
            <div className="about-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="about-text055">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="about-pills-container">
              <div className="about-pills">
                <div className="about-container5">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="about-container6">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-how-it-works">
          <div className="about-centered-container3">
            <div className="about-heading1">
              <span className="about-text056">How it works</span>
              <span className="about-text057 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="about-category2">
              <div className="about-headng">
                <span className="about-text058">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-text059">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="about-get-started3 template-button">
                  <span className="about-text060">Get started</span>
                </div>
              </div>
              <div className="about-container7">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="about-pasted-image"
                />
              </div>
            </div>
            <div className="about-row">
              <div className="about-category3">
                <div className="about-headng1">
                  <span className="about-text061">2 — Act</span>
                  <span className="about-text062">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="about-pasted-image1"
                />
              </div>
              <div className="about-category4">
                <div className="about-headng2">
                  <span className="about-text063">2 — Act</span>
                  <span className="about-text064">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="about-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="about-pricing">
          <div className="about-centered-container4">
            <div className="about-heading2">
              <span className="about-text065 title">
                Pricing for all kind of businesses
              </span>
              <span className="about-text066">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="about-selection">
                <span className="about-text067">Monthly</span>
                <span className="about-text068">Yearly</span>
              </div>
            </div>
            <div className="about-cards1">
              <div className="about-card">
                <span className="about-text069">Free</span>
                <span className="about-text070">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="about-get-started4 template-button">
                  <span className="about-text071">Start for free</span>
                </div>
                <span className="about-text072">What&apos;s included</span>
                <div className="about-bullet-points">
                  <div className="about-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text073">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text074">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-card1">
                <span className="about-text075">Pay as you go</span>
                <span className="about-text076">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="about-get-started5 template-button">
                  <span className="about-text080">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="about-text083">What&apos;s included</span>
                <div className="about-bullet-points1">
                  <div className="about-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text084">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text085">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text086">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text087">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-card2">
                <span className="about-text088">Enterprise</span>
                <span className="about-text089">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="about-get-started6 template-button">
                  <span className="about-text092">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="about-text095">What&apos;s included</span>
                <div className="about-bullet-points2">
                  <div className="about-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text096">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text097">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text098">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="about-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-icon26"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="about-text099">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-testimonals">
          <div className="about-left3">
            <span className="about-text100">Testimonals</span>
            <span className="about-text101 title">
              What people say about Active
            </span>
          </div>
          <div className="about-right3">
            <div className="about-column">
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
            <div className="about-column1">
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
          <span className="about-text102">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="about-action-bar">
          <div className="about-action">
            <div className="about-heading3">
              <span className="about-text105 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="about-text109">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="about-get-started7 template-button">
                <span className="about-text110">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="about-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="about-image4"
              />
            </div>
          </div>
        </section>
        <section className="about-faq">
          <div className="about-heading4">
            <h2 className="about-text113">Frequently asked questions</h2>
          </div>
          <div className="about-accordion">
            <div data-faq="closed" className="accordionContainer">
              <div className="about-header1">
                <h3 className="about-text114">
                  Does Gateful have a token or cryptocurrency?
                </h3>
              </div>
              <div className="accordionContent">
                <span className="about-text115">
                  No, Gateful does not offer a token or cryptocurrency at this
                  time.
                </span>
              </div>
            </div>
            <div className="accordionContainer">
              <div className="about-header2">
                <h3 className="about-text116">How much does Gateful cost?</h3>
              </div>
              <div className="accordionContent">
                <span className="about-text117">
                  Currently, Gateful is in private beta and accepting new
                  clients for custom integrations. We are working on our SaaS
                  self-service platform and pricing model. Check back soon for
                  updates.
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="about-header3">
                <h3 className="about-text118">What can I token gate?</h3>
              </div>
              <div className="accordionContent">
                <span className="about-text119">
                  Gateful can be used to token gate any non-sensitive content
                  hosted on the internet and accessible to users through a web
                  browser. Please review our Terms of Use located at
                  openmedium.biz/legal/ for additional information about
                  sensitive content policies.
                </span>
              </div>
            </div>
            <div data-faq="closed" className="accordionContainer">
              <div className="about-header4">
                <h3 className="about-text120">
                  Can Gateful be used to replace authentication services for
                  website customer accounts?
                </h3>
              </div>
              <div className="accordionContent">
                <span className="about-text121">
                  <span>
                    No, Gateful should not be used to create and manage customer
                    account access. Gateful provides a simple way to verify
                    token ownership so you can create exclusive content
                    experiences or promotional offers for token holders. Gateful
                    verifies ownership of a token to &quot;unlock content&quot;.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Gateful should not be used to protect sensitive data
                    including but not limited to payments, user account data,
                    and related customer account functionalities.
                  </span>
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
        <footer className="about-footer">
          <div className="about-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="about-image5"
            />
            <span className="about-text126">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="about-text127">
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
                className="about-link1"
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
                className="about-link2"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="about-text130">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="about-link3"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .about-hero {
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
          .about-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-centered {
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
          .about-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .about-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-links {
            display: none;
            align-items: center;
            margin-left: 33px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
          }
          .about-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .about-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .about-link {
            display: contents;
          }
          .about-get-started {
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
          .about-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .about-icon02 {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .about-text005 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .about-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .about-text008 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .about-text009 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .about-features {
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
          .about-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-text010 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .about-text014 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .about-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .about-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .about-icon04 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text017 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text018 {
            line-height: 24px;
          }
          .about-publish {
            height: initial;
          }
          .about-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text019 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text020 {
            line-height: 24px;
          }
          .about-container2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .about-icon06 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text021 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .about-text022 {
            line-height: 24px;
          }
          .about-icon07 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text023 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text024 {
            line-height: 24px;
          }
          .about-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-banner-advanced-analytics {
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
          .about-centered-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .about-image-container {
            flex: 1;
            height: auto;
            display: flex;
            justify-content: center;
          }
          .about-cards-image {
            width: 100%;
            height: auto;
            box-shadow: 5px 5px 0px 1px #dbfe87;
            object-fit: contain;
            border-radius: 20px;
          }
          .about-right1 {
            flex: 1;
            display: flex;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .about-text025 {
            font-size: 30px;
            text-align: left;
            margin-bottom: 0px;
          }
          .about-category {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .about-text026 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .about-centered-container1 {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            justify-content: center;
          }
          .about-right2 {
            flex: 1;
            display: flex;
            box-shadow: 5px 5px 0px 1px #03b5aa;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-primary-500);
            border-width: 2px;
            border-radius: 20px;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .about-text035 {
            font-size: 30px;
            align-self: center;
            text-align: left;
            margin-bottom: 0px;
          }
          .about-text038 {
            color: rgb(0, 0, 0);
            font-size: 18px;
            align-self: center;
            line-height: 24px;
            margin-bottom: 0px;
          }
          .about-category1 {
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .about-active-users {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-image {
            width: 260px;
            height: 260px;
            background: white;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text041 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
            margin-bottom: 13px;
          }
          .about-active-users1 {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-image1 {
            width: 260px;
            height: 260px;
            background: white;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text042 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
            margin-bottom: 13px;
          }
          .about-active-users2 {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-image2 {
            width: 260px;
            height: 260px;
            background: white;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text043 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
            margin-bottom: 13px;
          }
          .about-active-users3 {
            position: relative;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .about-image3 {
            width: 260px;
            height: 260px;
            background: white;
            object-fit: cover;
            border-radius: 20px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text044 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
            margin-bottom: 13px;
          }
          .about-banner-manage {
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
          .about-container3 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-left1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .about-text046 {
            text-align: left;
          }
          .about-text047 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-get-started1 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .about-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-text048 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-image-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-cards-image1 {
            width: 100%;
            height: 100%;
            object-fit: contain;
            user-select: none;
          }
          .about-banner {
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
          .about-container4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-left2 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .about-text049 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-text050 {
            text-align: left;
          }
          .about-text051 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-get-started2 {
            transition: 0.3s;
            margin-bottom: 0;
          }
          .about-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-text052 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-image-container2 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-cards-image2 {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .about-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .about-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-text055 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .about-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .about-container5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .about-container6 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .about-how-it-works {
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
          .about-centered-container3 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .about-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .about-text056 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-text057 {
            color: var(--dl-color-gray-white);
          }
          .about-category2 {
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
          .about-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .about-text058 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-text059 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .about-get-started3 {
            margin-bottom: 0px;
          }
          .about-get-started3:hover {
            color: black;
            background-color: #ffffff;
          }
          .about-text060 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-container7 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .about-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .about-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .about-category3 {
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
          .about-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .about-text061 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-text062 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .about-pasted-image1 {
            width: 100%;
          }
          .about-category4 {
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
          .about-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .about-text063 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-text064 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .about-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .about-pricing {
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
          .about-centered-container4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .about-text065 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .about-text066 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-text067 {
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
          .about-text068 {
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
          .about-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .about-card {
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
          .about-text069 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text070 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .about-get-started4 {
            transition: 0.3s;
          }
          .about-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-text071 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-text072 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text073 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text074 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-card1 {
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
          .about-text075 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text076 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .about-get-started5 {
            transition: 0.3s;
          }
          .about-get-started5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-text080 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-text083 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text084 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text085 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text086 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text087 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-card2 {
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
          .about-text088 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text089 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .about-get-started6 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .about-get-started6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .about-text092 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-text095 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text096 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text097 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text098 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .about-icon26 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text099 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .about-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .about-left3 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .about-text100 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-text101 {
            text-align: left;
          }
          .about-right3 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .about-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .about-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .about-text102 {
            cursor: pointer;
            display: none;
          }
          .about-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .about-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .about-text105 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .about-text109 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-get-started7 {
            margin-bottom: 0px;
          }
          .about-text110 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-image4 {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .about-faq {
            width: 100%;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            background-color: var(--dl-color-primary-bg);
          }
          .about-heading4 {
            width: 100%;
            display: flex;
            align-items: center;
            user-select: none;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .about-text113 {
            font-size: 30px;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .about-accordion {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-header1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text114 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text115 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text116 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text117 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text118 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text119 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text120 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text121 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-footer {
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
          .about-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-image5 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text126 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text127 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-link1 {
            text-decoration: underline;
          }
          .about-link2 {
            text-decoration: underline;
          }
          .about-text130 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .about-link3 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .about-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .about-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .about-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .about-links {
              display: none;
            }
            .about-header {
              width: 100%;
              max-width: 1200px;
            }
            .about-features {
              padding-top: 260px;
            }
            .about-title {
              width: 100%;
              max-width: 1200px;
            }
            .about-text010 {
              font-size: 36px;
              line-height: 40px;
            }
            .about-text014 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .about-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .about-text018 {
              line-height: 21px;
            }
            .about-text020 {
              line-height: 21px;
            }
            .about-text022 {
              line-height: 21px;
            }
            .about-text023 {
              font-size: 24px;
            }
            .about-text024 {
              line-height: 21px;
            }
            .about-banner-advanced-analytics {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .about-text025 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text035 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-category1 {
              flex-direction: column;
            }
            .about-banner-manage {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-left1 {
              margin-right: var(--dl-space-space-threeunits);
            }
            .about-cards-image1 {
              width: 360px;
            }
            .about-container6 {
              margin-left: 0px;
            }
            .about-category2 {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .about-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .about-container7 {
              width: 100%;
            }
            .about-pasted-image {
              height: auto;
            }
            .about-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .about-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .about-text066 {
              width: 100%;
              max-width: 600px;
            }
            .about-cards1 {
              display: flex;
              flex-direction: column;
            }
            .about-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-text070 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text072 {
              font-size: 16px;
            }
            .about-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .about-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .about-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .about-left3 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .about-text101 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-right3 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .about-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .about-action {
              flex-direction: column;
            }
            .about-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text105 {
              font-size: 36px;
              line-height: 36px;
            }
            .about-accordion {
              width: 100%;
              max-width: 1200px;
            }
            .about-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .about-top {
              flex-direction: column;
            }
            .about-text130 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .about-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .about-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-left {
              margin-left: var(--dl-space-space-unit);
            }
            .about-right {
              margin-right: var(--dl-space-space-unit);
            }
            .about-sign-in {
              display: flex;
            }
            .about-get-started {
              display: flex;
            }
            .about-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .about-text008 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .about-text009 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .about-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-text010 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .about-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .about-text017 {
              font-size: 24px;
            }
            .about-text018 {
              font-size: 14px;
            }
            .about-publish {
              margin-left: 0px;
            }
            .about-text019 {
              font-size: 24px;
            }
            .about-text020 {
              font-size: 14px;
            }
            .about-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .about-analyze {
              margin-right: 0px;
            }
            .about-text021 {
              font-size: 24px;
            }
            .about-text022 {
              font-size: 14px;
            }
            .about-text024 {
              font-size: 14px;
            }
            .about-banner-advanced-analytics {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-centered-container {
              flex-direction: column-reverse;
            }
            .about-right1 {
              margin-left: 0px;
            }
            .about-text025 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text026 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-centered-container1 {
              flex-direction: column-reverse;
            }
            .about-right2 {
              margin-left: 0px;
            }
            .about-text035 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text038 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text041 {
              font-size: 14px;
            }
            .about-text042 {
              font-size: 14px;
            }
            .about-text043 {
              font-size: 14px;
            }
            .about-text044 {
              font-size: 14px;
            }
            .about-banner-manage {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-container3 {
              flex-direction: column;
            }
            .about-left1 {
              margin-right: 0px;
            }
            .about-text046 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text047 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text048 {
              font-size: 16px;
            }
            .about-image-container1 {
              justify-content: center;
            }
            .about-cards-image1 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .about-banner {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-container4 {
              flex-direction: column;
            }
            .about-left2 {
              margin-right: 0px;
            }
            .about-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-text055 {
              line-height: 24px;
            }
            .about-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-text057 {
              margin-bottom: 0px;
            }
            .about-headng {
              padding-bottom: 0px;
            }
            .about-get-started3 {
              display: none;
            }
            .about-container7 {
              width: 100%;
            }
            .about-row {
              height: auto;
              flex-direction: column;
            }
            .about-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .about-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-text069 {
              font-size: 28px;
            }
            .about-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-text075 {
              font-size: 28px;
            }
            .about-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-text088 {
              font-size: 28px;
            }
            .about-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .about-right3 {
              width: 100%;
              flex-direction: column;
            }
            .about-column1 {
              display: none;
            }
            .about-text102 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .about-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .about-action {
              align-items: center;
            }
            .about-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-text105 {
              font-size: 28px;
              text-align: left;
            }
            .about-text110 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .about-images {
              justify-content: center;
            }
            .about-image4 {
              width: 100%;
            }
            .about-faq {
              padding: var(--dl-space-space-fourunits);
            }
            .about-heading4 {
              width: 100%;
            }
            .about-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-image5 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .about-hero {
              height: auto;
            }
            .about-centered {
              justify-content: center;
            }
            .about-logo {
              width: 180px;
            }
            .about-icon {
              display: none;
            }
            .about-sign-in {
              display: none;
            }
            .about-get-started {
              display: none;
            }
            .about-text009 {
              color: #eee9fe;
            }
            .about-features {
              padding-top: 200px;
            }
            .about-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .about-container1 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .about-analyze {
              margin-bottom: 0px;
            }
            .about-right1 {
              margin-top: var(--dl-space-space-twounits);
            }
            .about-text025 {
              align-self: center;
              text-align: center;
            }
            .about-right2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .about-text035 {
              align-self: center;
              text-align: center;
            }
            .about-text041 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .about-text042 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .about-text043 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .about-text044 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
            .about-text047 {
              line-height: 24px;
            }
            .about-cards-image1 {
              width: 100%;
              margin-top: var(--dl-space-space-twounits);
            }
            .about-category2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .about-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-get-started6 {
              background-color: var(--dl-color-gray-white);
            }
            .about-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .about-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .about-text126 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default About
