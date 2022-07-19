import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
function QuestionItem({ question, deleteQuestion }) {
    const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
    const options = answers.map((answer, index) => (
        <option key={index} value={index}>
            {answer}
        </option>
    ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button>Delete Question</button>
    </li>
  );
    function changeAnswer(newAnswer) {
        fetch(`http://localhost:4000/questions/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ newAnswer }),
        });
    }
    return (
        <li>
            <h4>Question {id}</h4>
            <h5>Prompt: {prompt}</h5>
            <label>
                Correct Answer:
                <select
                    defaultValue={correctIndex}
                    onChange={(e) => changeAnswer(parseInt(e.target.value))}
                >
                    {options}
                </select>
            </label>
            <button onClick={() => deleteQuestion(id)}>Delete Question</button>
        </li>
    );
}
