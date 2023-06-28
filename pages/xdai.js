import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import YouTube from '../components/you-tube'
import TestimonalBLurb from '../components/testimonal-b-lurb'
import Footer from '../components/footer'

const Xdai = (props) => {
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
                <header id="header" className="about-hero">
                    <div className="about-menu">
                        <div id="navigation" className="about-desktop-navigation">
                            <nav className="about-centered">
                                <div className="about-left">
                                    <Link href="/">
                                        <a className="about-link">
                                            <img
                                                alt="Welcome to Gateful"
                                                src="/playground_assets/gateful-logo-wht-200h.png"
                                                className="about-logo"
                                            />
                                        </a>
                                    </Link>
                                    <div className="about-links">
                                        <Link href="/token-gating-platform">
                                            <a className="about-link1 Link">Platform</a>
                                        </Link>
                                        <Link href="/token-gating-solutions">
                                            <a className="about-link2 Link">Solutions</a>
                                        </Link>
                                        <Link href="/blog">
                                            <a className="about-link3 Link">
                                                <span>Blog</span>
                                                <br></br>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="about-right">
                                    <a
                                        href="https://app.gateful.io"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="about-sign-in Link"
                                    >
                                        <span>Login</span>
                                        <br></br>
                                    </a>
                                    <Link href="/book-a-demo">
                                        <a className="about-link4">
                                            <div className="about-get-started">
                                                <svg viewBox="0 0 1024 1024" className="about-icon">
                                                    <path d="M768 768v-42q0-58-88-95t-168-37-168 37-88 95v42h512zM512 256q-52 0-90 38t-38 90 38 90 90 38 90-38 38-90-38-90-90-38zM810 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h42v-86h86v86h340v-86h86v86h42z"></path>
                                                </svg>
                                                <span className="about-text004">
                                                    <span>Book a Demo</span>
                                                    <br></br>
                                                </span>
                                            </div>
                                        </a>
                                    </Link>
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
                        <h1 className="about-text007">xDai</h1>
                        <p className="about-text008">Learn more about Gateful.</p>
                    </header>
                </header>
                <section className="about-features">
                    <div className="about-title">
                        <span className="about-text009">
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
                        <span className="about-text013">
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
                                    className="about-icon02"
                                />
                                <span className="about-text016">Schedule</span>
                                <span className="about-text017">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                </span>
                            </div>
                            <div className="about-publish card">
                                <img
                                    alt="pastedImage"
                                    src="/playground_assets/pastedimage-mimg-200h.png"
                                    className="about-icon03"
                                />
                                <span className="about-text018">Publish</span>
                                <span className="about-text019">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                                </span>
                            </div>
                        </div>
                        <div className="about-container2">
                            <div className="card about-analyze">
                                <img
                                    alt="pastedImage"
                                    src="/playground_assets/pastedimage-l6p-200h.png"
                                    className="about-icon04"
                                />
                                <span className="about-text020">Analyze</span>
                                <span className="about-text021">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                </span>
                            </div>
                            <div className="card">
                                <img
                                    alt="pastedImage"
                                    src="/playground_assets/pastedimage-vyi5-200h.png"
                                    className="about-icon05"
                                />
                                <span className="about-text022">Get leads</span>
                                <span className="about-text023">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer rootClassName="footer-root-class-name"></Footer>
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
          .about-link {
            display: contents;
          }
          .about-logo {
            width: 200px;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .about-links {
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .about-link1 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-link2 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-link3 {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            text-decoration: none;
          }
          .about-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-sign-in {
            color: var(--dl-color-gray-white);
            font-size: 18px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .about-link4 {
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
          .about-icon {
            fill: var(--dl-color-primary-100);
            width: 20px;
            height: 20px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .about-text004 {
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
          .about-text007 {
            color: var(--dl-color-gray-white);
            font-size: 60px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 80px;
          }
          .about-text008 {
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
          .about-text009 {
            font-size: 56px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 72px;
          }
          .about-text013 {
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
          .about-icon02 {
            width: 32px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text016 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text017 {
            line-height: 24px;
          }
          .about-publish {
            height: initial;
          }
          .about-icon03 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text018 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text019 {
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
          .about-icon04 {
            width: 35px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text020 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: 16px;
          }
          .about-text021 {
            line-height: 24px;
          }
          .about-icon05 {
            width: 30px;
            height: 30px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text022 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: 33px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-text023 {
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
          .about-text024 {
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
          .about-text025 {
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
          .about-text034 {
            font-size: 30px;
            align-self: center;
            text-align: left;
            margin-bottom: 0px;
          }
          .about-text037 {
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
          .about-text040 {
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
          .about-text041 {
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
          .about-text042 {
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
          .about-text043 {
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
          .about-text045 {
            text-align: left;
          }
          .about-text046 {
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
          .about-text047 {
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
          .about-text048 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-text049 {
            text-align: left;
          }
          .about-text050 {
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
          .about-text051 {
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
          .about-text054 {
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
          .about-text055 {
            color: rgb(220, 212, 253);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-text056 {
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
          .about-text057 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-text058 {
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
          .about-text059 {
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
          .about-text060 {
            color: rgb(0, 0, 0);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-text061 {
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
          .about-text062 {
            color: #ffffff;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 16px;
          }
          .about-text063 {
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
          .about-text064 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .about-text065 {
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
          .about-text066 {
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
          .about-text067 {
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
          .about-text068 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text069 {
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
          .about-text070 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-text071 {
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
          .about-icon06 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text072 {
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
          .about-text074 {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text075 {
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
          .about-text079 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .about-text082 {
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
          .about-icon10 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text083 {
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
          .about-point04 {
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
          .about-point05 {
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
          .about-text087 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text088 {
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
          .about-text091 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .about-text094 {
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
          .about-icon18 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .about-text095 {
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
          .about-point08 {
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
          .about-point09 {
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
          .about-text099 {
            color: rgb(82, 40, 245);
            font-style: normal;
            font-weight: 600;
            margin-bottom: 24px;
          }
          .about-text100 {
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
          .about-text101 {
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
          .about-text104 {
            color: var(--dl-color-gray-white);
            text-align: left;
          }
          .about-text108 {
            color: #eee9fe;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .about-get-started7 {
            margin-bottom: 0px;
          }
          .about-text109 {
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
          .about-text112 {
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
          .about-text113 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text114 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-header2 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text115 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text116 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-header3 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text117 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text118 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
          }
          .about-header4 {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .about-text119 {
            width: 100%;
            font-size: 20px;
            max-width: 760px;
            font-style: normal;
            font-weight: 500;
          }
          .about-text120 {
            width: 100%;
            max-width: 760px;
            line-height: 24px;
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
            .about-text009 {
              font-size: 36px;
              line-height: 40px;
            }
            .about-text013 {
              font-size: 20px;
              margin-top: var(--dl-space-space-unit);
              line-height: 30px;
            }
            .about-cards {
              margin-top: var(--dl-space-space-fiveunits);
            }
            .about-text017 {
              line-height: 21px;
            }
            .about-text019 {
              line-height: 21px;
            }
            .about-text021 {
              line-height: 21px;
            }
            .about-text022 {
              font-size: 24px;
            }
            .about-text023 {
              line-height: 21px;
            }
            .about-banner-advanced-analytics {
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .about-text024 {
              line-height: 1.25em;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-text034 {
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
            .about-text065 {
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
            .about-text069 {
              font-size: 16px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text071 {
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
            .about-text100 {
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
            .about-text104 {
              font-size: 36px;
              line-height: 36px;
            }
            .about-accordion {
              width: 100%;
              max-width: 1200px;
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
            .about-text007 {
              color: rgb(255, 255, 255);
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
            }
            .about-text008 {
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
            .about-text009 {
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
            .about-text016 {
              font-size: 24px;
            }
            .about-text017 {
              font-size: 14px;
            }
            .about-publish {
              margin-left: 0px;
            }
            .about-text018 {
              font-size: 24px;
            }
            .about-text019 {
              font-size: 14px;
            }
            .about-container2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .about-analyze {
              margin-right: 0px;
            }
            .about-text020 {
              font-size: 24px;
            }
            .about-text021 {
              font-size: 14px;
            }
            .about-text023 {
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
            .about-text024 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text025 {
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
            .about-text034 {
              font-size: 28px;
              align-self: center;
              text-align: left;
              line-height: 26px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text037 {
              align-self: center;
              text-align: center;
              line-height: 24px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text040 {
              font-size: 14px;
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
            .about-text045 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-text046 {
              line-height: 24px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .about-text047 {
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
            .about-text054 {
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
            .about-text056 {
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
            .about-text068 {
              font-size: 28px;
            }
            .about-card1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-text074 {
              font-size: 28px;
            }
            .about-card2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .about-text087 {
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
            .about-text101 {
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
            .about-text104 {
              font-size: 28px;
              text-align: left;
            }
            .about-text109 {
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
            .about-sign-in {
              display: none;
            }
            .about-get-started {
              display: none;
            }
            .about-icon {
              display: none;
            }
            .about-text008 {
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
            .about-text024 {
              align-self: center;
              text-align: center;
            }
            .about-right2 {
              margin-top: var(--dl-space-space-twounits);
            }
            .about-text034 {
              align-self: center;
              text-align: center;
            }
            .about-text040 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
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
            .about-text046 {
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
          }
        `}
            </style>
        </>
    )
}

export default Xdai
