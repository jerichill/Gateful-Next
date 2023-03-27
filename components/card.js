import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className={`card-card ${props.rootClassName} `}>
        <span className="card-text">{props.text}</span>
        <span className="card-text01">
          <span>Unlimited sandbox testing and</span>
          <br className="card-text03"></br>
          <br></br>
          <span>production access for up to 25</span>
          <br className="card-text06"></br>
          <br></br>
          <span>connected businesses for life.</span>
        </span>
        <div className="card-get-started">
          <span className="card-text09">{props.text2}</span>
        </div>
        <span className="card-text10">{props.text1}</span>
        <div className="card-bullet-points">
          <div className="card-point">
            <svg viewBox="0 0 877.7142857142857 1024" className="card-icon">
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="card-text11">{props.text3}</span>
          </div>
          <div className="card-point1">
            <svg viewBox="0 0 877.7142857142857 1024" className="card-icon2">
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="card-text12">{props.text4}</span>
          </div>
          <div className="card-point2">
            <svg viewBox="0 0 877.7142857142857 1024" className="card-icon4">
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="card-text13">{props.text5}</span>
          </div>
          <div className="card-point3">
            <svg viewBox="0 0 877.7142857142857 1024" className="card-icon6">
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
            </svg>
            <span className="card-text14">{props.text6}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card-card {
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
          .card-text {
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 23px;
          }
          .card-text01 {
            color: rgb(0, 0, 0);
            line-height: 24px;
            margin-bottom: 67px;
          }
          .card-text03 {
            color: #000000;
          }
          .card-text06 {
            color: #000000;
          }
          .card-get-started {
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: 18px;
            padding-left: 32px;
            border-radius: 56px;
            margin-bottom: 40px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 18px;
            background-color: #000000;
          }
          .card-get-started:hover {
            color: black;
            background-color: #ffffff;
          }
          .card-text09 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
          }
          .card-text10 {
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: 27px;
            margin-bottom: 23px;
          }
          .card-bullet-points {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .card-point {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            flex-direction: row;
          }
          .card-icon {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .card-text11 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: 8px;
          }
          .card-point1 {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            flex-direction: row;
          }
          .card-icon2 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .card-text12 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: 8px;
          }
          .card-point2 {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            flex-direction: row;
          }
          .card-icon4 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .card-text13 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: 8px;
          }
          .card-point3 {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            flex-direction: row;
          }
          .card-icon6 {
            fill: #5228f5;
            width: 8px;
            height: 8px;
          }
          .card-text14 {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            margin-left: 8px;
          }
          @media (max-width: 991px) {
            .card-card {
              width: 100%;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  text1: "What's included",
  text3: 'Sed ut pespiciatis unde omnis',
  text5: 'Sed ut pespiciatis unde omnis',
  text: 'Pay as you go',
  text6: 'Sed ut pespiciatis unde omnis',
  text2: 'Start for free',
  rootClassName: '',
  text4: 'Sed ut pespiciatis unde omnis',
}

Card.propTypes = {
  text1: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text6: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default Card
