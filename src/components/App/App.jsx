import React, { useState } from 'react';
import FeedbackOptions from '../Feedback/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import Container from './Container';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const increase = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? ((feedback.good / total) * 100).toFixed(0) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const options = [
    { option: 'Good', value: feedback.good, handler: () => increase('good') },
    { option: 'Neutral', value: feedback.neutral, handler: () => increase('neutral') },
    { option: 'Bad', value: feedback.bad, handler: () => increase('bad') },
  ];

  return (
    <div>
      <h1 hidden>User's feedback application</h1>

      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} />
        </Section>
      </Container>

      <Container>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              total={total}
              positivePercentage={positivePercentage}
              options={options}
            />
          ) : (
            <Notification message="There is no feedback yet!" />
          )}
        </Section>
      </Container>
    </div>
  );
};

export default App;
