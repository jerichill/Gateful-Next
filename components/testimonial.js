import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <section className={`testimonial-testimonial ${props.rootClassName} `}>
        <img
          alt={props.Avatar_alt}
          src={props.Avatar_src}
          className="testimonial-avatar"
        />
        <div className="testimonial-quote">
          <span className="testimonial-message">{props.Message}</span>
          <div className="testimonial-author">
            <span className="testimonial-quote1">{props.Quote}</span>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .testimonial-testimonial {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-sixunits);
            position: relative;
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
          .testimonial-avatar {
            width: 275px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .testimonial-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-message {
            color: rgb(255, 255, 255);
            font-size: 30px;
            max-width: 800px;
            text-align: center;
            line-height: 1.25;
          }
          .testimonial-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .testimonial-quote1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            font-weight: bold;
            margin-left: var(--dl-space-space-unit);
          }

          @media (max-width: 991px) {
            .testimonial-testimonial {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .testimonial-message {
              width: 100%;
              max-width: 800px;
            }
            .testimonial-author {
              width: 100%;
              max-width: 800px;
            }
          }
          @media (max-width: 767px) {
            .testimonial-testimonial {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .testimonial-avatar {
              width: 180px;
              height: auto;
            }
            .testimonial-message {
              font-size: 24px;
              line-height: 31px;
            }
            .testimonial-author {
              width: 100%;
            }
            .testimonial-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
          }
          @media (max-width: 479px) {
            .testimonial-avatar {
              width: 180px;
              height: auto;
            }
            .testimonial-message {
              font-size: 18px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  Quote: 'J. Eric Hill, Founder',
  Avatar_src: '/playground_assets/2xquote-200h.png',
  Avatar_alt: ' ',
  rootClassName: '',
  Message:
    '“Gateful aims to transform millions of legacy digital experiences into engaging Web3 consumer touch-points.”',
}

Testimonial.propTypes = {
  Quote: PropTypes.string,
  Avatar_src: PropTypes.string,
  Avatar_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Message: PropTypes.string,
}

export default Testimonial
