import React, { Component } from 'react';
import SectionTitlePostsTitle from '../SectionTitle/SectionTitlePostsTitle';
import Question from './Question';
import FontIcon from '../FontIcon/FontIcon';

class Quiz extends Component {
  componentDidMount() {
    this.props.quizRequestData();
  }
  render() {
    var quizData = [
      {
        question: "What is Captain America's real name?",
        answers: [
          'Steven Rogers',
          'Brian Braddock',
          'Billy Batson',
          'Major Dan Stone',
        ],
        correct: 0,
      },
    ];
    return (
      <React.Fragment>
        <div className="rounded" style={{ height: 300, width: '100%' }}>
          <div className="col-12 p-0 m-0">
            <SectionTitlePostsTitle text="Quiz #000001" />
          </div>

          <Question
            question={quizData[0].question}
            quizLength={quizData.length}
            answers={quizData[0].answers}
            correct={quizData[0].correct}
            index={0}
          />
          <div className="col-12 m-0 p-0 row">
            <div className="m-0 p-0 col-10">
              <progress style={{ height: 5, width: '100%' }}></progress>
            </div>
            <div
              className="m-0 p-0 col-2 text-center text-muted vertical-center"
              style={{ fontSize: 14 }}
            >
              85%
            </div>
          </div>
        </div>

        <div className="rounded" style={{ height: 300, width: '100%' }}>
          <div className="col-12 p-0 m-0 row">
            <div className="col-6 p-0 m-0">
              <button className="btn btn-sm btn-light disabled form-control">
                {FontIcon('faChevronLeft')}&nbsp;Prev
              </button>
            </div>
            <div className="col-6 p-0 m-0">
              <button className="btn btn-sm btn-light form-control">
                Next&nbsp;{FontIcon('faChevronRight')}
              </button>
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <br />
            <SectionTitlePostsTitle text="Quiz Archives" />
          </div>
          <ul className="font-weight-light">
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
            <li>
              <a href="#">Quiz #000001</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Quiz;
