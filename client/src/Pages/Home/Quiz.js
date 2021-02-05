// Imports:
import React, { Component } from 'react';
import QuizPage from '../../Components/Quiz/QuizPage';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

class Quiz extends Component {
  render() {
    return (
      <div className="col-md-4 m-0 p-0 section-responsive-pr">
        <SectionTitle
          tabColour={this.props.settings.ui.style.sectionTab.featured}
          title="Today's Quiz"
        />
        <QuizPage
          quizAddAnswer={this.props.quizAddAnswer}
          quizCalculateScore={this.props.quizCalculateScore}
          quizId="5f58f9790a27010acad1d82e"
          quizReducer={this.props.quizReducer}
          quizRequestData={this.props.quizRequestData}
          quizReset={this.props.quizReset}
          quizUpdateQNumber={this.props.quizUpdateQNumber}
          quizUpdateScreen={this.props.quizUpdateScreen}
        />
      </div>
    );
  }
}

export default Quiz;
