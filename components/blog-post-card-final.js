import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCardFinal = (props) => {
  return (
    <>
      <div
        className={`blog-post-card-final-blog-post-card ${props.rootClassName} `}
      >
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card-final-image"
        />
        <div className="blog-post-card-final-container">
          <h3 className="blog-post-card-final-text">{props.title}</h3>
          <p className="blog-post-card-final-text1">{props.description}</p>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card-final-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 0px 1px #dbfe87;
            min-height: 655px;
            transition: 0.3s;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .blog-post-card-final-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card-final-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .blog-post-card-final-container {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card-final-text {
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card-final-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }

          @media (max-width: 991px) {
            .blog-post-card-final-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCardFinal.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  label: 'ENTERPRISE',
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  author: 'Jon Doe',
  time: '5 min read',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  profile_alt: 'profile',
}

BlogPostCardFinal.propTypes = {
  image_src: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  profile_src: PropTypes.string,
  profile_alt: PropTypes.string,
}

export default BlogPostCardFinal
