import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'react-bootstrap'

import Layout from "./Layout"
import Seo from "./seo"

const Result = ({ data, pageContext, location }) => {
  const { urlName, title } = pageContext

  const spell = data.allResultsYaml.edges.filter(item => item.node.name === title)[0].node;

  const restart = () => {
    if (typeof window !== 'undefined') {
      const ok = window.confirm('정말 다시 시작하시겠습니까?');
      localStorage.removeItem("scores");
      localStorage.removeItem("question");
      if (ok) {
        window.location.replace("/");
      }
    }
  }

  return (
    <Layout location={location} title={title}>
      <Seo title={`나에게 어울리는 주문은 ${spell.name}`} />

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
        {spell.wiki} <b>(출처: 나무위키 &#38; <a href="https://harrypotter.fandom.com/wiki/Main_Page" target="_blank" rel="noreferrer">해리포터위키</a>)</b>
      </p>

      <div className="spell-image text-center mb-3">
        <img src={`/images/spells/${urlName}.gif`} alt={spell.name} />
      </div>

      <p className="text-center quote">
        <i>{spell.quote}</i> <br/> {"- 미란다 고쇼크의 <Book of Spells> 중"}
      </p>

      {/* Abilities */}
      <Row className="abilities my-5 pt-2">
        <Col className="flex-column align-items-center d-flex" xs={6}>
          <h4 className="text-shine text-serif mb-5 pb-1">
            {spell.abilities[0]}
          </h4>
          <div className="diamond">
            <img src="/images/abilities/crystals.png" alt="ability"/>
          </div>
        </Col>
        <Col className="flex-column align-items-center d-flex" xs={6}>
          <h4 className="text-shine text-serif mb-5 pb-1">
            {spell.abilities[1]}
          </h4>
          <div className="diamond">
            <img src="/images/abilities/magic.png" alt="ability"/>
          </div>
        </Col>
      </Row>

      

      <p className="text-muted text-center pt-3">
        <small>
          Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer">www.flaticon.com</a>
        </small>
        <br /><br />
        <b className="restart" onClick={restart}>처음부터 다시 하기</b>
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
                quote
                abilities
            }
        }
    }
  }
`

