import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <>
    <Layout>
      <Seo title="Home" />

      {/* Headline */}
      <div className="px-2 px-sm-0">
        <h1 className="text-serif text-shine my-3">
          나에게<br/>
          어울리는<br/>
          해리포터 주문은?
        </h1>
        <p className="text-muted">
          3분컷으로 알아보는 나에게 어울리는 해리포터 주문.
        </p>
        <Link to="/question/" className="btn btn-primary font-weight-bold">바로 시작하기</Link> <br />
      </div>

      {/* Images */}
      <div className="d-flex justify-content-end">
        <div className="stack">
          <img src="/images/ring1.png" className="ring" alt="rings"/>
          <img src="/images/ring2.png" className="ring-2" alt="rings"/>
          <img src="/images/tarantell.png" className="blink" alt="a wand"/>
          <img src="/images/alohomora.png" className="blink delay-2" alt="a wand"/>
          <img src="/images/snake.png" className="blink delay-4" alt="a wand"/>
          <img src="/images/wand.png" className="wand" alt="a wand"/>
        </div>
      </div>
      
    </Layout>
    </>
  )
}

export default IndexPage
