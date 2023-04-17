import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import BlogPostCard2 from '../components/blog-post-card2'
import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'

const Blog = (props) => {
  return (
    <>
      <div className="blog-container">
        <Head>
          <title>Gateful Blog | Learn about Web3 and Token Gating</title>
          <meta
            name="description"
            content="Read Web3 articles and blogs from the team at Gateful- the easiest way to token gate your website or web application."
          />
          <meta
            property="og:title"
            content="Gateful Blog | Learn about Web3 and Token Gating"
          />
          <meta
            property="og:description"
            content="Read Web3 articles and blogs from the team at Gateful- the easiest way to token gate your website or web application."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b692443f-9226-4a47-945b-4471e2366a37/77019fe6-e6fc-4e47-b1bc-874216c83069?org_if_sml=1"
          />
        </Head>
        <section id="header" className="blog-hero">
          <div className="blog-menu">
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
            <div id="navigation" className="blog-desktop-navigation">
              <nav className="blog-centered-desktop">
                <div className="blog-left">
                  <Link href="/">
                    <a className="blog-link">
                      <img
                        alt="Welcome to Gateful"
                        src="/playground_assets/gateful-logo-wht-200h.png"
                        className="blog-logo"
                      />
                    </a>
                  </Link>
                  <div className="blog-links">
                    <Link href="/token-gating-platform">
                      <a className="blog-link01 Link">Platform</a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="blog-link02 Link">Solutions</a>
                    </Link>
                    <Link href="/blog">
                      <a className="blog-link03 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-right">
                  <a
                    href="https://app.gateful.io"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="blog-sign-in Link"
                  >
                    <span>Login</span>
                    <br></br>
                  </a>
                  <Link href="/book-a-demo">
                    <a className="blog-link04">
                      <div className="blog-get-started">
                        <svg viewBox="0 0 1024 1024" className="blog-icon">
                          <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                        </svg>
                        <span className="blog-text04">
                          <span>Book a Demo</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
              <nav className="blog-centered-mobile">
                <div className="blog-left1">
                  <div className="blog-links1">
                    <Link href="/token-gating-platform">
                      <a className="blog-link05 Link">Platform</a>
                    </Link>
                    <Link href="/token-gating-solutions">
                      <a className="blog-link06 Link">Solutions</a>
                    </Link>
                    <Link href="/blog">
                      <a className="blog-link07 Link">
                        <span>Blog</span>
                        <br></br>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <header className="blog-header">
            <h1 className="blog-text09">Blog</h1>
            <p className="blog-text10">
              Learn more about Web3 and Token Gating.
            </p>
          </header>
        </section>
        <section className="blog-features">
          <div className="blog-title">
            <span className="blog-text11">
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
            <span className="blog-text15">
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
          <div className="blog-cards">
            <div className="blog-container01">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-fii6m-200h.png"
                  className="blog-icon02"
                />
                <span className="blog-text18">Schedule</span>
                <span className="blog-text19">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="blog-publish card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-mimg-200h.png"
                  className="blog-icon03"
                />
                <span className="blog-text20">Publish</span>
                <span className="blog-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </div>
            <div className="blog-container02">
              <div className="card blog-analyze">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-l6p-200h.png"
                  className="blog-icon04"
                />
                <span className="blog-text22">Analyze</span>
                <span className="blog-text23">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-vyi5-200h.png"
                  className="blog-icon05"
                />
                <span className="blog-text24">Get leads</span>
                <span className="blog-text25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-banners">
          <div className="blog-blog">
            <div className="blog-container03">
              <Link href="/about-token-gating-platforms">
                <a className="blog-link08">
                  <BlogPostCard2
                    title="Token Gating Platforms: Revolutionizing Content Monetization and Access Control"
                    image_src="https://images.unsplash.com/photo-1676911809746-85d90edbbe4a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDY2fHx3ZWIzfGVufDB8fHx8MTY4MTU5MTQzOA&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="Token Gating Platforms have emerged as a groundbreaking solution in the world of content monetization and access control. These platforms are becoming increasingly popular among creators, influencers, and businesses alike, as they offer a new and dynamic way of rewarding and engaging with their audience. In this article, we will delve into the concept of token gating, explore its benefits, and examine how it is transforming the digital landscape."
                    profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName3"
                    className="blog-component"
                  ></BlogPostCard2>
                </a>
              </Link>
            </div>
            <div className="blog-container04">
              <Link href="/an-introduction-to-nft-token-gating">
                <a className="blog-link09">
                  <BlogPostCard2
                    title="Embracing the Future of Web3: An Introduction to NFT Token Gating"
                    image_src="https://images.unsplash.com/photo-1664022617645-cf71791942e4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUzfHxuZnR8ZW58MHx8fHwxNjgxNTkxNTQy&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description='The world of digital assets and blockchain technology is evolving at a rapid pace. With the advent of non-fungible tokens (NFTs) and their increasing popularity, a new concept known as "token gating" has emerged. This white paper aims to introduce the concept of NFT token gating, its benefits, and potential use case examples that can revolutionize various industries.'
                    profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName"
                    className="blog-component01"
                  ></BlogPostCard2>
                </a>
              </Link>
            </div>
            <div className="blog-container05">
              <Link href="/token-gating-for-digital-marketing">
                <a className="blog-link10">
                  <BlogPostCard2
                    title="Integrate Token Gating Into Your Digital Marketing Campaigns: Target Cryptocurrency Holders"
                    image_src="https://images.unsplash.com/photo-1639475377520-b256a5d204b1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI1fHxjcnlwdG98ZW58MHx8fHwxNjgxNTkxNzg3&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="Launching a marketing campaign targeting cryptocurrency holders using token gating involves a series of strategic steps. Token gating is a technique that grants access to exclusive content or experiences only to individuals who hold a certain number of tokens or a specific type of token. This approach can be highly effective in reaching the desired audience and driving engagement."
                    profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName2"
                    className="blog-component02"
                  ></BlogPostCard2>
                </a>
              </Link>
            </div>
            <div className="blog-container06">
              <Link href="/web3-and-user-adoption">
                <a className="blog-link11">
                  <BlogPostCard2
                    title="A Look at Web3 and User Adoption"
                    image_src="https://images.unsplash.com/photo-1639322537523-abaea1ca9f9c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHdlYjN8ZW58MHx8fHwxNjgxNTkxNDEz&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="This article explores the concept of Web3, a decentralized and user-centric vision of the internet, and examines how users are adopting this new technology. By understanding the fundamentals of Web3 and the strategies being employed to promote its adoption, businesses and individuals can better navigate and capitalize on the opportunities presented by this innovative shift in the digital landscape."
                    profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName6"
                    className="blog-component03"
                  ></BlogPostCard2>
                </a>
              </Link>
            </div>
            <div className="blog-container07">
              <Link href="/unlock-token-gate-signature-request">
                <a className="blog-link12">
                  <BlogPostCard2
                    title="Unlocking a Token Gate: The Signature Request Explained"
                    image_src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGJsb2NrY2hhaW58ZW58MHx8fHwxNjgxNjEyOTc1&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="As the world of online communities and digital content continues to grow, creators and platforms are seeking new ways to protect access, validate users, and promote exclusivity. Enter token gating, a novel approach to ensuring only qualified individuals gain entry to specific online spaces. In this article, we will dive into the concept of token gating and, more specifically, demystify the signature request – a crucial component of the process. Let's start by understanding what token gating is and how it works."
                    profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName9"
                    className="blog-component04"
                  ></BlogPostCard2>
                </a>
              </Link>
            </div>
            <div className="blog-container08">
              <Link href="/steps-to-launch-nft-collection">
                <a className="blog-link13">
                  <BlogPostCard2
                    title="Helpful Tips to Launch Your New NFT Collection"
                    image_src="https://images.unsplash.com/photo-1651130535340-e02c63a43a0a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxvcGVuc2VhfGVufDB8fHx8MTY4MTYxNDMyOQ&amp;ixlib=rb-4.0.3&amp;w=1500"
                    description="Launching an NFT collection can be a complex process that involves several steps, from conceptualizing your collection to marketing it to potential buyers and collectors. It requires a deep understanding of blockchain technology, smart contracts, and digital assets, as well as a strong sense of creativity and innovation to stand out in a crowded market. This article outlines the high-level steps to take to launch your NFT collection."
                    profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName10"
                    className="blog-component05"
                  ></BlogPostCard2>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="blog-integrations">
          <div className="blog-centered-container">
            <div className="blog-heading">
              <span className="sub-title">Integrations</span>
              <span className="title">
                Integrated with the tools you know and love
              </span>
              <span className="blog-text28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
            </div>
            <div className="blog-pills-container">
              <div className="blog-pills">
                <div className="blog-container09">
                  <YouTube></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201012-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/layer1-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group-200h.png"></YouTube>
                </div>
                <div className="blog-container10">
                  <YouTube pastedImage_src="/playground_assets/pinterest%20logo-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201014-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201015-200h.png"></YouTube>
                  <YouTube pastedImage_src="/playground_assets/group%201017-200h.png"></YouTube>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-how-it-works">
          <div className="blog-centered-container1">
            <div className="blog-heading1">
              <span className="blog-text29">How it works</span>
              <span className="blog-text30 title">
                Being social and getting leads has never been easier
              </span>
            </div>
            <div className="blog-category">
              <div className="blog-headng">
                <span className="blog-text31">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="blog-text32">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="blog-get-started1 template-button">
                  <span className="blog-text33">Get started</span>
                </div>
              </div>
              <div className="blog-container11">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-k5xi%201-1200w.png"
                  className="blog-pasted-image"
                />
              </div>
            </div>
            <div className="blog-row">
              <div className="blog-category1">
                <div className="blog-headng1">
                  <span className="blog-text34">2 — Act</span>
                  <span className="blog-text35">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ibg-1200w.png"
                  className="blog-pasted-image1"
                />
              </div>
              <div className="blog-category2">
                <div className="blog-headng2">
                  <span className="blog-text36">2 — Act</span>
                  <span className="blog-text37">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-3c4o-1200w.png"
                  className="blog-pasted-image2"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="blog-pricing">
          <div className="blog-centered-container2">
            <div className="blog-heading2">
              <span className="blog-text38 title">
                Pricing for all kind of businesses
              </span>
              <span className="blog-text39">
                Create next-generation solutions for small business customers
                with pricing options that accommodate everyone.
              </span>
              <div className="blog-selection">
                <span className="blog-text40">Monthly</span>
                <span className="blog-text41">Yearly</span>
              </div>
            </div>
            <div className="blog-cards1">
              <div className="blog-card">
                <span className="blog-text42">Free</span>
                <span className="blog-text43">
                  Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed doliqua.
                </span>
                <div className="blog-get-started2 template-button">
                  <span className="blog-text44">Start for free</span>
                </div>
                <span className="blog-text45">What&apos;s included</span>
                <div className="blog-bullet-points">
                  <div className="blog-point">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon06"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text46">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point01">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon08"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text47">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="blog-card1">
                <span className="blog-text48">Pay as you go</span>
                <span className="blog-text49">
                  <span>Launch your lorem for $49/mo</span>
                  <br></br>
                  <span>
                    lorem ipsum dolor sit amet, consectetur adipiscing.
                  </span>
                </span>
                <div className="blog-get-started3 template-button">
                  <span className="blog-text53">
                    <span>Upgrade now</span>
                    <br></br>
                  </span>
                </div>
                <span className="blog-text56">What&apos;s included</span>
                <div className="blog-bullet-points1">
                  <div className="blog-point02">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon10"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text57">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point03">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon12"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text58">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point04">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon14"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text59">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point05">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon16"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text60">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
              <div className="blog-card2">
                <span className="blog-text61">Enterprise</span>
                <span className="blog-text62">
                  <span>
                    Custom-built lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed doliqua.
                  </span>
                  <br></br>
                </span>
                <div className="blog-get-started4 template-button">
                  <span className="blog-text65">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
                <span className="blog-text68">What&apos;s included</span>
                <div className="blog-bullet-points2">
                  <div className="blog-point06">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon18"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text69">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point07">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon20"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text70">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point08">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon22"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text71">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                  <div className="blog-point09">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="blog-icon24"
                    >
                      <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="blog-text72">
                      Sed ut pespiciatis unde omnis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-testimonals">
          <div className="blog-left2">
            <span className="blog-text73">Testimonals</span>
            <span className="blog-text74 title">
              What people say about Active
            </span>
          </div>
          <div className="blog-right1">
            <div className="blog-column">
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
            <div className="blog-column1">
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
          <span className="blog-text75">
            <span>Show more</span>
            <br></br>
          </span>
        </section>
        <section className="blog-action-bar">
          <div className="blog-action">
            <div className="blog-heading3">
              <span className="blog-text78 title">
                <span>Get leads now </span>
                <br></br>
                <span>with Active!</span>
              </span>
              <span className="blog-text82">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="blog-get-started5 template-button">
                <span className="blog-text83">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="blog-images">
              <img
                alt="image"
                src="/playground_assets/e564eaa3c4fab71792794d666a281742-1200w.png"
                className="blog-image"
              />
            </div>
          </div>
        </section>
        <footer className="blog-footer">
          <div className="blog-top">
            <img
              alt="image"
              src="/playground_assets/gateful-logo-blk-200h.png"
              className="blog-image1"
            />
            <span className="blog-text86">
              Gateful is the easiest way to create token gated experiences.
            </span>
            <span className="blog-text87">
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
                className="blog-link14"
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
                className="blog-link15"
              >
                TekSun, Inc.
              </a>
            </span>
            <span className="blog-text90">
              <span>
                Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
              </span>
              <a
                href="https://www.openmedium.biz/legal/"
                target="_blank"
                rel="noreferrer noopener"
                className="blog-link16"
              >
                Legal
              </a>
            </span>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .blog-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            flex-direction: column;
          }
          .blog-hero {
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
          .blog-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-desktop-navigation {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-centered-desktop {
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
          .blog-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .blog-link {
            display: contents;
          }
          .blog-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .blog-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .blog-link01 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .blog-link02 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .blog-link03 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .blog-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .blog-link04 {
            display: contents;
          }
          .blog-get-started {
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
          .blog-get-started:hover {
            background-color: var(--dl-color-gray-white);
          }
          .blog-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .blog-text04 {
            color: var(--dl-color-primary-100);
            font-style: normal;
            font-weight: 600;
          }
          .blog-centered-mobile {
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
          .blog-left1 {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .blog-links1 {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .blog-link05 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .blog-link06 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .blog-link07 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .blog-header {
            width: 70%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .blog-text09 {
            color: var(--dl-color-primary-700);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .blog-text10 {
            color: rgb(238, 233, 254);
            width: 90%;
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .blog-features {
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
          .blog-title {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-text11 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .blog-text15 {
            font-size: 20px;
            margin-top: 16px;
            text-align: center;
            line-height: 30px;
          }
          .blog-cards {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: 80px;
            align-items: center;
            flex-direction: column;
          }
          .blog-container01 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .blog-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text18 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-text19 {
            line-height: 24px;
          }
          .blog-publish {
            height: initial;
          }
          .blog-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text20 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-text21 {
            line-height: 24px;
          }
          .blog-container02 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: row;
          }
          .blog-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text22 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .blog-text23 {
            line-height: 24px;
          }
          .blog-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text24 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-text25 {
            line-height: 24px;
          }
          .blog-banners {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-blog {
            width: 100%;
            display: flex;
            max-width: 1280px;
            margin-top: var(--dl-space-space-sixunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-container03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link08 {
            display: contents;
          }
          .blog-component {
            text-decoration: none;
          }
          .blog-container04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link09 {
            display: contents;
          }
          .blog-component01 {
            text-decoration: none;
          }
          .blog-container05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link10 {
            display: contents;
          }
          .blog-component02 {
            text-decoration: none;
          }
          .blog-container06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link11 {
            display: contents;
          }
          .blog-component03 {
            text-decoration: none;
          }
          .blog-container07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link12 {
            display: contents;
          }
          .blog-component04 {
            text-decoration: none;
          }
          .blog-container08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-link13 {
            display: contents;
          }
          .blog-component05 {
            text-decoration: none;
          }
          .blog-integrations {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-sevenunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #eff0f2;
          }
          .blog-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-heading {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-text28 {
            color: rgb(0, 0, 0);
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .blog-pills-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-pills {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-twounits);
            flex-wrap: wrap;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .blog-container09 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: center;
          }
          .blog-container10 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-wrap: wrap;
            margin-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .blog-how-it-works {
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
          .blog-centered-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-heading1 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .blog-text29 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .blog-text30 {
            color: var(--dl-color-gray-white);
          }
          .blog-category {
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
          .blog-headng {
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .blog-text31 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .blog-text32 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: 40px;
          }
          .blog-get-started1 {
            margin-bottom: 0px;
          }
          .blog-get-started1:hover {
            color: black;
            background-color: #ffffff;
          }
          .blog-text33 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .blog-container11 {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: flex-end;
            flex-direction: row;
          }
          .blog-pasted-image {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .blog-row {
            display: flex;
            grid-gap: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: row;
          }
          .blog-category1 {
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
          .blog-headng1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .blog-text34 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .blog-text35 {
            color: #1e1e1e;
            line-height: 24px;
          }
          .blog-pasted-image1 {
            width: 100%;
          }
          .blog-category2 {
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
          .blog-headng2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: 0px;
          }
          .blog-text36 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .blog-text37 {
            color: rgb(238, 233, 254);
            line-height: 24px;
          }
          .blog-pasted-image2 {
            width: 100%;
            object-fit: contain;
          }
          .blog-pricing {
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
          .blog-centered-container2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .blog-text38 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .blog-text39 {
            color: #eee9fe;
            width: 600px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-selection {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .blog-text40 {
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
          .blog-text41 {
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
          .blog-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .blog-card {
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
          .blog-text42 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text43 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .blog-get-started2 {
            transition: 0.3s;
          }
          .blog-get-started2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .blog-text44 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .blog-text45 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-point {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon06 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text46 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point01 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon08 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text47 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-card1 {
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
          .blog-text48 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text49 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .blog-get-started3 {
            transition: 0.3s;
          }
          .blog-get-started3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .blog-text53 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .blog-text56 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-bullet-points1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-point02 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text57 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point03 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon12 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text58 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon14 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text59 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point05 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon16 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text60 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-card2 {
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
          .blog-text61 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-text62 {
            color: rgb(255, 255, 255);
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .blog-get-started4 {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            background-color: #ffffff;
          }
          .blog-get-started4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .blog-text65 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .blog-text68 {
            color: #ffffff;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-bullet-points2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog-point06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text69 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point07 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon20 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text70 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon22 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text71 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-point09 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
          }
          .blog-icon24 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .blog-text72 {
            color: #ffffff;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-testimonals {
            width: 100%;
            display: none;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .blog-left2 {
            width: 375px;
            display: flex;
            margin-top: 375px;
            align-items: flex-start;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .blog-text73 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .blog-text74 {
            text-align: left;
          }
          .blog-right1 {
            gap: 40px;
            display: flex;
            flex-direction: row;
          }
          .blog-column {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .blog-column1 {
            gap: 40px;
            display: flex;
            flex-direction: column;
          }
          .blog-text75 {
            cursor: pointer;
            display: none;
          }
          .blog-action-bar {
            width: 100%;
            display: none;
            padding: 120px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-action {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-end;
            border-radius: 50px;
            flex-direction: row;
            justify-content: space-between;
            background-color: #5228f5;
          }
          .blog-heading3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
          }
          .blog-text78 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .blog-text82 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .blog-get-started5 {
            margin-bottom: 0px;
          }
          .blog-text83 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .blog-images {
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-image {
            width: 100%;
            object-fit: cover;
            user-select: none;
          }
          .blog-footer {
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
          .blog-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-image1 {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-text86 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog-text87 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .blog-link14 {
            text-decoration: underline;
          }
          .blog-link15 {
            text-decoration: underline;
          }
          .blog-text90 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .blog-link16 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .blog-hero {
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .blog-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-centered-desktop {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .blog-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .blog-centered-mobile {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .blog-left1 {
              margin-left: var(--dl-space-space-halfunit);
            }
            .blog-header {
              width: 100%;
              max-width: 1200px;
            }
            .blog-features {
              padding-top: 260px;
            }
            .blog-title {
              width: 100%;
              max-width: 1200px;
            }
            .blog-text11 {
              font-size: 36px;
              line-height: 40px;
            }
            .blog-text15 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .blog-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .blog-text19 {
              line-height: 21px;
            }
            .blog-text21 {
              line-height: 21px;
            }
            .blog-text23 {
              line-height: 21px;
            }
            .blog-text24 {
              font-size: 24px;
            }
            .blog-text25 {
              line-height: 21px;
            }
            .blog-container10 {
              margin-left: 0px;
            }
            .blog-category {
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .blog-headng {
              margin-left: var(--dl-space-space-fourunits);
            }
            .blog-container11 {
              width: 100%;
            }
            .blog-pasted-image {
              height: auto;
            }
            .blog-headng1 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .blog-headng2 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .blog-text39 {
              width: 100%;
              max-width: 600px;
            }
            .blog-cards1 {
              display: flex;
              flex-direction: column;
            }
            .blog-card {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-text43 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .blog-text45 {
              font-size: 16px;
            }
            .blog-card1 {
              width: 100%;
              align-items: flex-start;
            }
            .blog-card2 {
              width: 100%;
              align-items: flex-start;
            }
            .blog-testimonals {
              align-items: center;
              flex-direction: column;
            }
            .blog-left2 {
              margin-top: 0px;
              align-items: center;
              margin-bottom: ThreeUnits;
            }
            .blog-text74 {
              font-size: 36px;
              text-align: center;
              line-height: 40px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .blog-right1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .blog-column {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .blog-column1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .blog-action {
              flex-direction: column;
            }
            .blog-heading3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blog-text78 {
              font-size: 36px;
              line-height: 36px;
            }
            .blog-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .blog-top {
              flex-direction: column;
            }
            .blog-text90 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .blog-hero {
              height: auto;
              position: relative;
              background-color: var(--dl-color-template-blue-bg);
            }
            .blog-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-centered-desktop {
              padding-left: 0px;
              padding-right: 0px;
            }
            .blog-left {
              margin-left: var(--dl-space-space-unit);
            }
            .blog-links {
              display: none;
            }
            .blog-right {
              margin-right: var(--dl-space-space-unit);
            }
            .blog-sign-in {
              display: flex;
            }
            .blog-get-started {
              display: flex;
            }
            .blog-centered-mobile {
              display: flex;
              padding-left: 0px;
              padding-right: 0px;
              justify-content: center;
            }
            .blog-left1 {
              margin-left: var(--dl-space-space-unit);
            }
            .blog-header {
              height: 100%;
              margin-top: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .blog-text09 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .blog-text10 {
              color: rgb(238, 233, 254);
              font-size: 16px;
              margin-top: var(--dl-space-space-unit);
              line-height: 24px;
            }
            .blog-features {
              padding-top: 350px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-text11 {
              font-size: 36px;
              font-style: normal;
              font-weight: 700;
              line-height: 40px;
            }
            .blog-container01 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .blog-text18 {
              font-size: 24px;
            }
            .blog-text19 {
              font-size: 14px;
            }
            .blog-publish {
              margin-left: 0px;
            }
            .blog-text20 {
              font-size: 24px;
            }
            .blog-text21 {
              font-size: 14px;
            }
            .blog-container02 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .blog-analyze {
              margin-right: 0px;
            }
            .blog-text22 {
              font-size: 24px;
            }
            .blog-text23 {
              font-size: 14px;
            }
            .blog-text25 {
              font-size: 14px;
            }
            .blog-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog-integrations {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-text28 {
              line-height: 24px;
            }
            .blog-pills {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .blog-how-it-works {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-heading1 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .blog-text30 {
              margin-bottom: 0px;
            }
            .blog-headng {
              padding-bottom: 0px;
            }
            .blog-get-started1 {
              display: none;
            }
            .blog-container11 {
              width: 100%;
            }
            .blog-row {
              height: auto;
              flex-direction: column;
            }
            .blog-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .blog-card {
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-text42 {
              font-size: 28px;
            }
            .blog-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .blog-text48 {
              font-size: 28px;
            }
            .blog-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .blog-text61 {
              font-size: 28px;
            }
            .blog-testimonals {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: 0px;
            }
            .blog-right1 {
              width: 100%;
              flex-direction: column;
            }
            .blog-column1 {
              display: none;
            }
            .blog-text75 {
              display: flex;
              font-style: normal;
              margin-top: var(--dl-space-space-oneandhalfunits);
              font-weight: 600;
            }
            .blog-action-bar {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .blog-action {
              align-items: center;
            }
            .blog-heading3 {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-text78 {
              font-size: 28px;
              text-align: left;
            }
            .blog-text83 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
            }
            .blog-images {
              justify-content: center;
            }
            .blog-image {
              width: 100%;
            }
            .blog-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog-image1 {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .blog-hero {
              height: auto;
            }
            .blog-centered-desktop {
              justify-content: center;
            }
            .blog-logo {
              width: 180px;
            }
            .blog-sign-in {
              display: none;
            }
            .blog-get-started {
              display: none;
            }
            .blog-icon {
              display: none;
            }
            .blog-centered-mobile {
              justify-content: center;
            }
            .blog-left1 {
              margin-left: 0px;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .blog-link07 {
              color: var(--dl-color-gray-white);
              font-size: 18px;
              text-decoration: none;
            }
            .blog-text10 {
              color: #eee9fe;
            }
            .blog-features {
              padding-top: 200px;
            }
            .blog-cards {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .blog-container01 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blog-container02 {
              gap: var(--dl-space-space-oneandhalfunits);
              margin-bottom: 0px;
            }
            .blog-analyze {
              margin-bottom: 0px;
            }
            .blog-blog {
              margin-top: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog-category {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .blog-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-get-started4 {
              background-color: var(--dl-color-gray-white);
            }
            .blog-testimonals {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-action-bar {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .blog-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .blog-text86 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
