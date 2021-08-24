import React, { useState, useEffect, useRef } from 'react'
import Layout from "../../components/Layout"
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Navbar from "../../components/Navbar"
import Button from "../../components/Button"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ArrowReturn from "../../components/SvgComponents/icon_arrow-return_svg.js"
import ArrowUp from "../../components/SvgComponents/icon_arrow-up_svg.js"
import { motion } from "framer-motion"
// import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperCore, { Navigation, Thumbs } from "swiper/core"

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css"
// import "swiper/components/thumbs/thumbs.min.css"

// SwiperCore.use([Navigation, Thumbs]);

const ProjectPage = ({ data }) => {

  //Swiper
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //Scrolls
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="projects">
      <Layout>
        <Navbar />
        <div className="content container-md">
          <article className="project">
            {/* Header */}
            <motion.div layout className={`project-heading-section ${scrollPosition >= 8 ? "away-from-top" : ""}`}
            >
              <motion.div layout className="button-container">
                <Button type="secondary" href="/" layout classes="text-with-icon return-btn">
                  <p>Return</p>
                  <ArrowReturn />
                </Button>
                <Button type="secondary" href="#" layout classes="icon up-btn">
                  <ArrowUp />
                </Button>
              </motion.div>
              <div className="heading-title">
                <h2 className="projectHeading">{data.mdx.frontmatter.title}</h2>
                <svg id="heading-bg" width="544" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <filter id="blurMe">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
                  </filter>
                  <g opacity="0.8" filter="url(#blurMe)">
                    <ellipse cx="12" cy="-26.5" rx="140" ry="140" fill="#F572EF" />
                    <ellipse cx="480  " cy="140" rx="140" ry="140" fill="#FBF59B" />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body"> */}
            {/* Swiper instance */}
            {/* <div className="swiper-gallery">
              <Swiper style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#000"
              }}
                spaceBetween={10}
                navigation
                init={true}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => { console.log(swiper) }}
                className="mySwiper2">
                {data.allFile.nodes.map(node =>
                  <SwiperSlide>
                    <GatsbyImage
                      image={node.childImageSharp.gatsbyImageData}
                      alt={node.name}
                      key={node.id}
                    />
                  </SwiperSlide>
                )}

              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                className="mySwiper"
              >
                {data.allFile.nodes.map(node =>
                  <SwiperSlide
                  >
                    <GatsbyImage
                      image={node.childImageSharp.gatsbyImageData}
                      alt={node.name}
                      key={node.id}
                    />
                  </SwiperSlide>
                )}

              </Swiper> */}

            {/* </div> */}
            {/* </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
            {/* Content */}
            <div className="main-text">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
          </article>
        </div>
      </Layout>
    </div >
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        url
      }
      body
    }
    allFile(filter: {extension: {in: ["png", "webp"]}} sort: {fields: name}) {
      nodes {
        publicURL
        name
        id
        extension
        relativeDirectory
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export default ProjectPage