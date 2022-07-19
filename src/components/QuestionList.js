import React from "react";
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/questions")
            .then((response) => response.json())
            .then((data) => setQuestions(data));
    }, []);

    function deleteQuestion(number) {
        fetch(`http://localhost:4000/questions/${number}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                const updatedQuestions = questions.filter(
                    (q) => q.id !== number
                );
                setQuestions(updatedQuestions);
            });
    }
    return (
        <section>
            <h1>Quiz Questions</h1>
            <ul>
                {questions.map((question) => (
                    <QuestionItem
                        question={question}
                        deleteQuestion={deleteQuestion}
                    />
                ))}
            </ul>
        </section>
    );
}