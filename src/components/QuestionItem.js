import React, { useEffect, useState } from "react"

const QuestionItem = ({ questions }) => {

    const [question, setQuestion] = useState(null);
    const [scores, setScores] = useState(window.localStorage.getItem("scores") || [0, 0, 0, 0, 0, 0, 0, 0]);
    const [show, setShow] = useState(true);
    const [options, setOptions] = useState(null);
    const results = ["reparo", "lumos", "incendio", "expecto_patronum", "aqua_eructo", "diffindo", "tarantallegra", "incarcerous"];
    
    useEffect(() => {
      setQuestion(JSON.parse(window.localStorage.getItem("question")) || questions[0].node);
      console.log(questions)
    }, [questions]);
    
    const onAnswerClick = (event) => {
      setShow(false);

      const {target: {id}} = event;
      const optionIndex = parseInt(id.substring(7,))
      
      // calculate new scores
      let newScores = [...scores];
      
      if (question.qid < 7) {
        question.options[optionIndex].rids.map(rid => {
          newScores[rid] += 1;
          return true;
        })
      }
      else {
        newScores[optionIndex] += 1;
      }

      
      // select new question
      let newQuestion = question;
      if (question.qid <= 6)
        newQuestion = questions[question.qid + 1].node;

      if (question.qid >= 6) {
        const maxIndices = max(newScores)
        console.log(maxIndices)
        if (question.qid === 7 || maxIndices.length <= 1) {
          // end the test
          window.location.replace(`/result/${results[maxIndices[0]]}`)
        }
        else {
          let newOptions = []
          newQuestion.options.forEach((option, i) => {
            if (maxIndices.includes(i)) {
               newOptions.push({answer: option, index: i});
            }
          })
          console.log(newOptions)
          setOptions(newOptions);
        }
      }

      window.localStorage.setItem("question", JSON.stringify(newQuestion));
      window.localStorage.setItem("scores", newScores);

      setTimeout(() => {
        setQuestion(newQuestion);
        setScores(newScores);
        setShow(true);
      }, 605)
    }

    const max = (arr) => {
      var max = -Infinity;
      var maxIndices = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] === max) {
            maxIndices.push(i);
          } else if (arr[i] > max) {
              maxIndices = [i];
              max = arr[i];
          }
      }
      return maxIndices;
   }

    const breakLine = (text) => {
        var br = React.createElement('br');
        var regex = /(<br \/>)/g;
        return text.split(regex).map(function(line, index) {
            return line.match(regex) ? <br key={"key_" + index} /> : line;
        });
    }

    return (
      <>
      { question ?
        <div className={`question-item text-center ${show ? "" : "hide"}`}>
            <h4><span role="img" aria-label="star">💫</span></h4>
            <h3 className="px-3 mb-5 text-shine text-serif">
            {breakLine(question.question)}
            </h3>
            <form>
            { question.qid < 7 ?
                <>
                {question.options.map((option, i) => 
                  <div className="radio mb-2" key={question.qid + "-" + i}>
                    <input type="radio" name="answer" id={`answer${question.qid}-${i}`} value={i} />
                    <label onClick={onAnswerClick} htmlFor={`answer${question.qid}-${i}`} id={`label${question.qid}-${i}`}>{option.answer}</label>
                  </div>
                )}
                </>
              :
                <>
                {options.map((option, i) => 
                  <div className="radio mb-2" key={question.qid + "-" + option.index}>
                    <input type="radio" name="answer" id={`answer${question.qid}-${option.index}`} value={i} />
                    <label onClick={onAnswerClick} htmlFor={`answer${question.qid}-${option.index}`} id={`label${question.qid}-${option.index}`}>{option.answer.answer}</label>
                  </div>
                )}
                </>
            }
            </form>
        </div>
        :
        "Loading ..."
      }
      </>
    )
}

export default QuestionItem
