import { useState, useCallback} from "react";
import QUESTIONS from "../questions";
import QuestionTimer from "./QuestionTimer";
import Question from "../components/Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex =userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            setUserAnswers((prev) => {
                return [...prev, selectedAnswer];
            });


        },
        []
    )

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    )

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return (

        <div id="quiz">
            <Question
            key={activeQuestionIndex}  
            questionIndex = {activeQuestionIndex}
            answers={QUESTIONS[activeQuestionIndex].answers}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}/>
        </div>

    );
}