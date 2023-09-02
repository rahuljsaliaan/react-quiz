import { useQuiz } from "../contexts/QuizContext";

function PreviousButton() {
  const { index, dispatch } = useQuiz();

  if (index === 0) return;
  return (
    <button
      onClick={() => dispatch({ type: "previousQuestion" })}
      className="btn btn-ui"
    >
      Previous
    </button>
  );
}

export default PreviousButton;
