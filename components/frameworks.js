import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import ActiveUsers from './active-users'

const Frameworks = (props) => {
  return (
    <>
      <section className={`frameworks-frameworks ${props.rootClassName} `}>
        <h2 className="frameworks-text title">{props.heading}</h2>
        <div className="frameworks-container">
          <Link href="/token-gating-for-react">
            <a className="frameworks-link">
              <ActiveUsers
                Name="React"
                Statistic="React"
                image_alt=" "
                image_src="/playground_assets/2xreact-200h.png"
                rootClassName="active-users-root-class-name"
                className="frameworks-component"
              ></ActiveUsers>
            </a>
          </Link>
          <Link href="/token-gating-for-angular">
            <a className="frameworks-link1">
              <div className="frameworks-active-users metrics">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="frameworks-image"
                />
                <span className="frameworks-text1">{props.text1}</span>
              </div>
            </a>
          </Link>
          <Link href="/token-gating-for-nextjs">
            <a className="frameworks-link2">
              <ActiveUsers
                Name="Next.js"
                Statistic="Next.js"
                image_alt=" "
                image_src="/playground_assets/2xnext-200h.png"
                rootClassName="active-users-root-class-name1"
                className="frameworks-component1"
              ></ActiveUsers>
            </a>
          </Link>
          <Link href="/token-gating-for-vuejs">
            <a className="frameworks-link3">
              <ActiveUsers
                Name="Vue.js"
                Statistic="Vue.js"
                image_alt=" "
                image_src="/playground_assets/2xvue-200h.png"
                rootClassName="active-users-root-class-name2"
                className="frameworks-component2"
              ></ActiveUsers>
            </a>
          </Link>
          <ActiveUsers
            Name="PHP/HTML5"
            Statistic="PHP"
            image_alt=" "
            image_src="/playground_assets/2xphp-200h.png"
          ></ActiveUsers>
        </div>
      </section>
      <style jsx>
        {`
          .frameworks-frameworks {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            padding-left: var(--dl-space-space-sevenunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .frameworks-text {
            font-size: 30px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .frameworks-container {
            width: 100%;
            display: flex;
            max-width: 1280px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .frameworks-link {
            display: contents;
          }
          .frameworks-component {
            text-decoration: none;
          }
          .frameworks-link1 {
            display: contents;
          }
          .frameworks-active-users {
            position: relative;
            align-self: center;
            text-decoration: none;
          }
          .frameworks-image {
            width: 100px;
            object-fit: cover;
          }
          .frameworks-text1 {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            margin-top: 13px;
            font-weight: 600;
          }
          .frameworks-link2 {
            display: contents;
          }
          .frameworks-component1 {
            text-decoration: none;
          }
          .frameworks-link3 {
            display: contents;
          }
          .frameworks-component2 {
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .frameworks-frameworks {
              height: 800px;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .frameworks-container {
              height: 100%;
              align-items: center;
              flex-direction: column;
            }
            .frameworks-active-users {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .frameworks-frameworks {
              height: 100%;
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .frameworks-container {
              gap: var(--dl-space-space-fourunits);
              justify-content: center;
            }
            .frameworks-text1 {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .frameworks-frameworks {
              height: auto;
            }
            .frameworks-text1 {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Frameworks.defaultProps = {
  heading: 'Gateful works with your favorite web framework',
  text1: 'Angular',
  image_alt: ' ',
  rootClassName: '',
  text: 'Early access',
  image_src: '/playground_assets/2xangular-1500h.png',
}

Frameworks.propTypes = {
  heading: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Frameworks
