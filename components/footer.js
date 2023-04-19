import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <div className="footer-top">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer-image"
          />
          <span className="footer-text">{props.text}</span>
          <span className="footer-text1">
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
              className="footer-link"
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
              className="footer-link1"
            >
              TekSun, Inc.
            </a>
          </span>
          <span className="footer-text4">
            <span>
              Copyright © 2023 OpenMedium, Inc. All rights reserved.   |   
            </span>
            <a
              href="https://www.openmedium.biz/legal/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              Legal
            </a>
          </span>
          <div>
            <DangerousHTML
              html={`<a href="//www.dmca.com/Protection/Status.aspx?ID=8f67b3b8-d9ea-4bbc-82b3-585687add94f" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/dmca_protected_sml_120l.png?ID=8f67b3b8-d9ea-4bbc-82b3-585687add94f"  alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>`}
            ></DangerousHTML>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: center;
            border-color: var(--dl-color-primary-100);
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .footer-top {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-image {
            width: 240px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer-text1 {
            color: var(--dl-color-gray-black);
            font-size: 14px;
            font-style: italic;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .footer-link {
            text-decoration: underline;
          }
          .footer-link1 {
            text-decoration: underline;
          }
          .footer-text4 {
            color: rgb(104, 104, 104);
            font-size: 12px;
            align-self: center;
            line-height: 30px;
          }
          .footer-link2 {
            text-decoration: underline;
          }

          @media (max-width: 991px) {
            .footer-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .footer-top {
              flex-direction: column;
            }
            .footer-text4 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-image {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .footer-text {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  image_src: '/playground_assets/gateful-logo-blk-200h.png',
  image_alt: 'image',
  text: 'Gateful is the easiest way to create token gated experiences.',
  rootClassName: '',
}

Footer.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
