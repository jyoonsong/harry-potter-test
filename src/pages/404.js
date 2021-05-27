import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="text-center notfound my-4">
      <h1>404: 페이지가 없습니다</h1>
      <img src="/images/reducto.jpg" alt="reducto spell" />
      <p>누군가 ㄹㄹㄹㄹㄹ리덕토(reducto) 주문으로 이 페이지를 고장낸 것 같습니다. <br/>다른 페이지를 이용해주세요.</p>
      <Link to="/"><b>홈으로 가기</b></Link>
    </div>
  </Layout>
)

export default NotFoundPage
