import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard1 = (props) => {
  return (
    <>
      <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="blog-post-card1-image"
        />
        <div className="blog-post-card1-container">
          <span className="blog-post-card1-text">{props.label}</span>
          <span className="blog-post-card1-text1">{props.title}</span>
          <span className="blog-post-card1-text2">{props.description}</span>
          <div className="blog-post-card1-container1">
            <div className="blog-post-card1-profile">
              <img
                alt={props.profile_alt}
                src={props.profile_src}
                image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
                className="blog-post-card1-image1"
              />
              <span className="blog-post-card1-text3">{props.author}</span>
            </div>
            <span className="blog-post-card1-text4">{props.time}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card1-blog-post-card {
            width: 100%;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-post-card1-blog-post-card:hover {
            transform: scale(1.02);
          }
          .blog-post-card1-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .blog-post-card1-container {
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog-post-card1-text {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .blog-post-card1-text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-text2 {
            color: var(--dl-color-gray-500);
            font-weight: 400;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog-post-card1-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .blog-post-card1-profile {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .blog-post-card1-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .blog-post-card1-text3 {
            font-weight: 300;
            margin-left: var(--dl-space-space-halfunit);
          }
          .blog-post-card1-text4 {
            color: var(--dl-color-gray-700);
            font-weight: 300;
          }

          @media (max-width: 991px) {
            .blog-post-card1-image {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard1.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  label: 'ENTERPRISE',
  image_alt: 'image',
  profile_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  author: 'Jon Doe',
  profile_alt: 'profile',
  title: 'Lorem ipsum dolor sit amet',
  time: '5 min read',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard1.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  profile_src: PropTypes.string,
  author: PropTypes.string,
  profile_alt: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard1
