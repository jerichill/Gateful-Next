import React from 'react'

import PropTypes from 'prop-types'

const ActiveUsers = (props) => {
  return (
    <>
      <div
        className={`active-users-active-users metrics ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="active-users-image"
        />
        <h3 className="active-users-text">{props.Name}</h3>
      </div>
      <style jsx>
        {`
          .active-users-active-users {
            position: relative;
          }
          .active-users-image {
            width: 120px;
            height: auto;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .active-users-text {
            color: var(--dl-color-gray-black);
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
          }

          @media (max-width: 991px) {
            .active-users-root-class-name {
              margin-bottom: var(--dl-space-space-unit);
            }
            .active-users-root-class-name1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .active-users-root-class-name2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .active-users-root-class-name3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .active-users-root-class-name4 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .active-users-root-class-name5 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .active-users-text {
              font-size: 14px;
            }
          }
          @media (max-width: 479px) {
            .active-users-text {
              color: var(--dl-color-gray-black);
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

ActiveUsers.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Name: 'Jane Doe',
  Title: 'Founder',
  rootClassName: '',
  image_alt: 'image',
}

ActiveUsers.propTypes = {
  image_src: PropTypes.string,
  Name: PropTypes.string,
  Title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ActiveUsers
