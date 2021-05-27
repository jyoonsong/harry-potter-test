import React from "react"
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import QuestionItem from "../components/QuestionItem";
import Seo from "../components/seo"

const Question = ({ data }) => {
  const questions = data.allQuestionsYaml.edges;
  
  const restart = () => {
    if (typeof window !== 'undefined') {
      window.location.replace("/timeturner");
    }
  }
  
  return (
    <Layout>
      <Seo title="테스트중" />
      <QuestionItem questions={questions} />

      <div className="text-muted text-center mt-5 text-light restart">
        <small onClick={restart}>처음부터 다시 하기</small>
      </div>
    </Layout>
  )
}

export default Question


export const pageQuery = graphql`
  query {
    allQuestionsYaml {
        edges {
            node {
                qid
                question
                options {
                  answer
                  rids
                }
            }
        }
    }
  }
`
