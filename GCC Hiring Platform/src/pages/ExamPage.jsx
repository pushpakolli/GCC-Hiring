import React, { useState, useEffect } from 'react';
import './ExamPage.css';

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(50 * 60 + 20);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3000/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          alert("Time's up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleOptionSelect = (option) => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  const handleTextAnswer = (e) => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: e.target.value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleMarkForReview = () => {
    if (!currentQuestion) return;
    setMarkedQuestions((prev) => [...new Set([...prev, currentQuestion.id])]);
  };

  const handleClearResponse = () => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: undefined,
    }));
  };

  const submitAnswer = async () => {
    if (!currentQuestion) return;
    const answerData = {
      questionId: currentQuestion.id,
      answer: userAnswers[currentQuestion.id],
    };
    try {
      const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerData),
      });
      if (response.ok) {
        alert('Answer submitted successfully');
      } else {
        alert('Failed to submit answer');
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  const handleSubmit = () => {
    alert('Exam submitted!');
    // Additional submit logic here
  };

  return (
    <div className="quiz-app">
      <header className="header">
        <h1 className="title">GCC Entrance Test</h1>
        <div className="timer">Time Left: {formatTime(timeLeft)}</div>
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </header>

      <div className="main-content">
        {currentQuestion ? (
          <>
            <div className="question-section">
              <h2>{currentQuestionIndex + 1}. {currentQuestion.title}</h2>
              <p>{currentQuestion.description}</p>
              {currentQuestion.codeSnippet && (
                <pre className="code-snippet">{currentQuestion.codeSnippet}</pre>
              )}

              <div className="options">
                {currentQuestion.options && currentQuestion.options.length > 0 ? (
                  currentQuestion.options.map((option, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={userAnswers[currentQuestion.id] === option}
                        onChange={() => handleOptionSelect(option)}
                      />
                      {option}
                    </label>
                  ))
                ) : (
                  <textarea
                    placeholder="Write your answer here..."
                    rows="5"
                    style={{ width: '100%', marginTop: '20px' }}
                    value={userAnswers[currentQuestion.id] || ''}
                    onChange={handleTextAnswer}
                  />
                )}
              </div>
            </div>

            <div className="sidebar">
              <div className="status">
                <div className="status-item answered">Answered</div>
                <div className="status-item marked">Marked</div>
                <div className="status-item not-answered">Not Answered</div>
                <div className="status-item not-visited">Not Visited</div>
              </div>
              <div className="question-nav">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    className={`question-number ${
                      userAnswers[question.id] ? "answered" :
                      markedQuestions.includes(question.id) ? "marked" : "not-visited"
                    }`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>Loading questions...</p>
        )}
      </div>

      <div className="footer-buttons">
        <button onClick={handleMarkForReview}>Mark for review</button>
        <button onClick={handleClearResponse}>Clear response</button>
        <button onClick={handleNext}>Save & Next</button>
        <button onClick={submitAnswer}>Submit Answer</button>
        <button onClick={handleSubmit} className="submit">Submit Exam</button>
      </div>
    </div>
  );
};

export default Exam;
