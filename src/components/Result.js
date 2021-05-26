import React from "react"
import { Link, graphql } from "gatsby"
import { Container } from 'react-bootstrap'

import Layout from "./Layout"
import Seo from "./seo"

const Result = ({ data, pageContext, location }) => {
  const { urlName, title } = pageContext

  const spell = data.allResultsYaml.edges.filter(item => item.node.name === title)[0].node;
  console.log(spell)
  return (
    <Layout location={location} title={title}>
      <Seo title={title} />

      <div className="d-flex justify-content-center">
        <div className="stack">
            <img src="/images/ring1.png" className="ring" alt="rings"/>
            <img src="/images/ring2.png" className="ring-2" alt="rings"/>
            <img src={`/images/spells/${urlName}.png`} alt={spell.name} />
            <img src="/images/wand.png" className="wand" alt="a wand"/>
        </div>
      </div>

      <h2 className="text-shine text-serif text-center mb-5">
        {spell.headline},<br/>
        <span className="text-yellow text-spell">{spell.name}</span> 을 외쳐보세요
      </h2>

      <p>
          {spell.description}
      </p>
      <p>
          {spell.wiki} <b>(출처: 나무위키)</b>
      </p>

    </Layout>
  )
}
export default Result

export const pageQuery = graphql`
  query {
    allResultsYaml {
        edges {
            node {
                rid
                name
                headline
                description
                wiki
            }
        }
    }
  }
`

