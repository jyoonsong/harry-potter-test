import * as React from "react"
import { Link } from "gatsby"

const QuestionItem = ({ question, options }) => {

    return (
        <>
            <div>{question}</div>
            {options.map((option, i) => 
                <div key={i}>{option}</div>
            )}
        </>
    )
}

export default QuestionItem
