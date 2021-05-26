/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const showStars = () => {
    let stars = document.querySelectorAll(".stars div");
    let scatterStar = function(star, index) {
      let n = Math.floor( 35 * Math.random() + 5),
          a = Math.floor( 90 * Math.random() + 5),
          i = Math.random(),
          r = Math.floor( -5e3 * Math.random() + 7500);
      if (index % 2 === 0)
        star.style.right = n+"%"
      else {
        star.style.left=n+"%";
      }
      star.style.top=a+"%";
      star.style.transform="scale("+i+")";
      star.style.animationDuration=r+"ms";
    };
    stars.forEach(scatterStar);
  }

  useEffect(() => {
    showStars();
  })

  return (
    <>
      <Container>
        {/* Header */}
        <Row>
          <Col xs={12} md={{span: 6, offset: 3}}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          </Col>
        </Row>

        {/* Main */}
        <Row>
          <Col xs={12} md={{span: 6, offset: 3}}>
            {children}
          </Col>
        </Row>

        {/* Footer */}
        <Row>
          <Col xs={12} sm={{span: 8, offset: 2}} md={{span: 6, offset: 3}}>
            <footer className="text-right py-4 mt-4 text-muted">
              © {new Date().getFullYear()} <a href="https://nomadcoders.co/" target="_blank" rel="noreferrer"><b>Nomad Coders 🏔</b> 사이드 프로젝트</a>
            </footer>
          </Col>
        </Row>
      </Container>

      {/* Stars */}
      <aside>
        <div className="shoot"></div>
        <div className="shoot"></div>
        <div className="stars">
          {[...Array(140)].map((x, i) => <div key={i}></div>)}
        </div>
      </aside>
      
    </>
  )
}

export default Layout
