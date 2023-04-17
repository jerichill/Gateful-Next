import React from 'react'

import PropTypes from 'prop-types'

const TestimonalBLurb = (props) => {
  return (
    <>
      <div className="testimonal-b-lurb-testimonal testimonal">
        <span className="testimonal-b-lurb-text">{props.Quote}</span>
        <div className="testimonal-b-lurb-author">
          <div className="testimonal-b-lurb-avatar">
            <img
              alt={props.Avatar_alt}
              src={props.Avatar_src}
              className="testimonal-b-lurb-image"
            />
          </div>
          <div className="testimonal-b-lurb-user">
            <span className="testimonal-b-lurb-name">{props.Name}</span>
            <span className="testimonal-b-lurb-divider">—</span>
            <span className="testimonal-b-lurb-from">{props.From}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonal-b-lurb-testimonal {
            position: relative;
          }
          .testimonal-b-lurb-text {
            line-height: 24px;
          }
          .testimonal-b-lurb-author {
            gap: var(--dl-space-space-unit);
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .testimonal-b-lurb-avatar {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonal-b-lurb-image {
            width: 40px;
            height: 40px;
            display: flex;
            object-fit: cover;
            border-radius: 50%;
          }
          .testimonal-b-lurb-user {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .testimonal-b-lurb-name {
            color: rgb(0, 0, 0);
            font-style: normal;
            font-weight: 600;
          }
          .testimonal-b-lurb-divider {
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .testimonal-b-lurb-from {
            color: rgb(0, 0, 0);
          }
          @media (max-width: 767px) {
            .testimonal-b-lurb-text {
              font-size: 14px;
              line-height: 21px;
            }
            .testimonal-b-lurb-image {
              width: 28px;
              height: 28px;
            }
            .testimonal-b-lurb-name {
              font-size: 14px;
            }
            .testimonal-b-lurb-from {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

TestimonalBLurb.defaultProps = {
  From: 'Vista Social',
  Avatar_alt: 'image',
  Avatar_src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&ixlib=rb-1.2.1&w=200',
  Name: 'Andy Smith',
  Quote:
    '"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”',
}

TestimonalBLurb.propTypes = {
  From: PropTypes.string,
  Avatar_alt: PropTypes.string,
  Avatar_src: PropTypes.string,
  Name: PropTypes.string,
  Quote: PropTypes.string,
}

export default TestimonalBLurb
