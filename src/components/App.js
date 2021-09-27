import React, { Component } from "react";
import style from "./App.module.css";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleAddFeedback = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prev) => ({
      total: prev.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prev) => ({
      positiveFeedback: (prev.good * 100) / prev.total,
    }));
  };

  render() {
    return (
      <div className={style.page}>
        {this.state.total ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positiveFeedback}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleAddFeedback} />
        </Section>
      </div>
    );
  }
}

export default App;
