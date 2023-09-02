import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { index, numQuestions, dispatch, answer } = useQuiz();

  const ansIndex = answer.at(index);
  if (ansIndex === undefined) return;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
