import React from 'react'

import PropTypes from 'prop-types'

const AuthorMeta = (props) => {
  return (
    <>
      <div className="author-meta-author-meta">
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="author-meta-image"
        />
        <span className="author-meta-text">
          <span>J. Eric Hill</span>
          <br></br>
        </span>
      </div>
      <style jsx>
        {`
          .author-meta-author-meta {
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .author-meta-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .author-meta-text {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            font-weight: 300;
            margin-left: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

AuthorMeta.defaultProps = {
  image_src: '/playground_assets/headshot2022bpng-200w.png',
  image_alt: 'profile',
}

AuthorMeta.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default AuthorMeta
