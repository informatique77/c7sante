import * as React from "react"
import { useEffect } from 'react';
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import HeaderHomePage from "../components/HeaderHomePage/HeaderHomePage"
import CardsSection from "../components/HomePage_sections/CardsSection"
import AboutSection from "../components/HomePage_sections/AboutSection"
import PostSection from "../components/HomePage_sections/PostSection"
import PostLink from "../components/PostLink/PostLink"
import RecruitmentSection from "../components/HomePage_sections/RecruitmentSection"
import SEO from "../components/seo"

import { burgerAnimation } from "../utils/burgerAnimation"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const Posts = posts.map((item, index) => <PostLink key={index} post={item} />)

  useEffect(() => {
    window.onpopstate = () => {
      burgerAnimation(); 
    };
  })
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Accueil" />
      <HeaderHomePage />
      <CardsSection />
      <AboutSection />
      <PostSection posts={Posts} />
      <RecruitmentSection />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "dddd Do MMMM YYYY", locale: "fr")
          title
          description
          excerpt
          img {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                quality: 95
              )
              original {
                src
              }
            }
          }
        }
      }
    }
  }
`