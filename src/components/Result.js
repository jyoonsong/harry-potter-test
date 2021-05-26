import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

import Layout from "./Layout"
import Seo from "./seo"

const Result = ({ data, pageContext, location }) => {
  const { urlName, title } = pageContext

  const spell = data.allResultsYaml.edges.filter(item => item.node.name === title)[0].node;

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
        {spell.wiki} <b>(출처: 나무위키)</b>
      </p>

      <p>
        <i>{spell.quote}</i> {"- 미란다 고쇼크의 <Book of Spells> 중"}
      </p>

      {/* Abilities */}
      <Row className="abilities my-5 pt-2">
        <Col className="flex-column align-items-center d-flex" xs={6}>
          <h4 className="text-shine text-serif mb-5 pb-1">
            {spell.abilities[0]}
          </h4>
          <div className="diamond"></div>
        </Col>
        <Col className="flex-column align-items-center d-flex" xs={6}>
          <h4 className="text-shine text-serif mb-5 pb-1">
            {spell.abilities[1]}
          </h4>
          <div className="diamond"></div>
        </Col>
      </Row>

      <p className="pt-5">
          {spell.description}
      </p>

      <p className="text-muted text-center">
        <small>
          Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </small>
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
                abilities
            }
        }
    }
  }
`

