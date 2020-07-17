import React from 'react'
import { graphql } from 'gatsby'
import Timeline from '~components/common/timeline'
import Layout from '~components/layout'
import ContentfulContent from '~components/common/contentful-content'
import Container from '~components/common/container'

export default ({ data }) => (
  <Layout title="Timeline">
    <Container centered>
      <ContentfulContent content="[CONTENT GOES HERE]" id="" />
    </Container>
    <Timeline timeline={data.allContentfulEvent.nodes} />
  </Layout>
)

export const query = graphql`
  {
    allContentfulEvent(filter: { displayTimeline: { eq: true } }) {
      nodes {
        title
        timeline
        description {
          childMarkdownRemark {
            html
          }
        }
        mediaCaption
        mediaCredit
        media {
          media
        }
        date
        dateEnd
        image {
          file {
            url
          }
        }
      }
    }
    contentfulSnippet(slug: { eq: "timeline-preamble-outside-events" }) {
      contentful_id
      childContentfulSnippetContentTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
