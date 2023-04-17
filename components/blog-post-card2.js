import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard2 = (props) => {
  return (
    <>
      <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="blog-post-card2-image"
        />
        <div className="blog-post-card2-container">
          <h2 className="blog-post-card2-text">{props.title}</h2>
          <span className="blog-post-card2-text1">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card2-blog-post-card {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 0px 1px #dbfe87;
            transition: 0.3s;
            align-items: stretch;
            border-color: var(--dl-color-primary-700);
            border-width: 1px;
            border-radius: 20px;
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card2-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card2-image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 20px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .blog-post-card2-container {
            display: flex;
            padding: 58px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog-post-card2-text {
            font-size: 26px;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .blog-post-card2-text1 {
            color: var(--dl-color-gray-500);
            font-size: 16px;
            line-height: 1.5rem;
          }

          @media (max-width: 991px) {
            .blog-post-card2-blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card2-blog-post-card {
              flex-direction: column;
            }
            .blog-post-card2-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard2.defaultProps = {
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing.',
  author: 'Jane Doe',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  button: 'Button',
  rootClassName: '',
  profile_alt: 'profile',
  when: '3 days ago',
  Button: 'Read More',
  label: 'ENTERPRISE',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
}

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  image_src: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_alt: PropTypes.string,
  when: PropTypes.string,
  Button: PropTypes.string,
  label: PropTypes.string,
  profile_src: PropTypes.string,
}

export default BlogPostCard2
