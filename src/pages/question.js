import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const Question = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">다시 하기</Link>
  </Layout>
)

export default Question
