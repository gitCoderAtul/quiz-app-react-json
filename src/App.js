import { useEffect, useState } from "react";
import "./App.css";
import { nextQuestion } from "./redux/slices/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { answerStore } from "./redux/slices/answerSlice";

function App() {
  const [radioValue, setRadioValue] = useState(0);
  // const prevCount = usePrevious(radioValue);

  const [list, setList] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionNext = useSelector((state) => state.question.value);
  const storeAnswer = useSelector((state) => state.answers.value);

  let dispatch = useDispatch();

  function nextQuestionClick(id, question, answer) {
    // console.log("click");

    console.log(id, question, answer);
    const userAnsDetails = [{ id, question, answer }];
    dispatch(nextQuestion());
    // setRadioValue(e.target.value)
    dispatch(answerStore(userAnsDetails));
  }

  const onOptionChange = (e) => {
    console.log(e);
    console.log(e.target.checked, e.target.parentNode.parentNode);

    // if(e.target.checked == false){
    // // console.log(false);
    // // Object.values(document.getElementsByTagName('li')).forEach(e=> e.classList.remove('bg-success'))
    // //   e.target.parentNode.parentNode.classList.remove('bg-success')
    // }else{
    // // console.log(true);
    //   // Object.values(document.getElementsByTagName('li')).forEach(e=>console.log(e.classList.remove('bg-success')))
    // // e.target.parentNode.parentNode.style.backgroundColor='white'
    // // e.target.parentNode.parentNode.style.color='black'
    // }

    console.log(e.target.value);
    setRadioValue(e.target.value);
    Object.values(document.getElementsByTagName("li")).forEach((e) =>
      e.classList.remove("bg-success")
    );
    e.target.parentNode.parentNode.classList.add("bg-success");
  };

  function fetchData() {
    fetch("http://localhost:3004/interviewList")
      .then((res) => res.json())
      .then((result) => {
        setList(result);
        // console.log("result -", result);
        console.log("list -", list);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5  mt-5">
          <div className="box ">
            <div>
              <div className="question-card">
                <h5 className="question-text">
                  {
                    // console.log("---", list[currentQuestion])

                    list && list.length > 0 && list[questionNext].question
                  }
                </h5>
                <ul className="answer-list">
                  {list &&
                    list.length > 0 &&
                    list[questionNext].option.map(({ id, text, isCorrect }) => (
                      <li key={id} className={text}>
                        <div className="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="ansValue"
                            value={text}
                            id="regular"
                            checked={radioValue === text}
                            onChange={onOptionChange}
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            {" "}
                            {text}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <p> Submit Answer : {radioValue}</p>
              <button
                className="btn btn-primary"
                onClick={() =>
                  nextQuestionClick(
                    list[questionNext].id,
                    list[questionNext].question,
                    radioValue
                  )
                }
              >
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
