import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-12 p-0 m-0 mb-2 vertical-center">
          <p className="font-weight-light text-left p-0 m-0">
            Q{this.props.index + 1}/{this.props.quizLength}.{' '}
            {this.props.question}
          </p>
        </div>

        <div className="col-12 p-0 m-0">
          <button className="btn btn-sm btn-light form-control">
            A. {this.props.answers.a}
          </button>
        </div>

        <div className="col-12 p-0 m-0">
          <button className="btn btn-sm btn-light form-control">
            B. {this.props.answers.b}
          </button>
        </div>

        <div className="col-12 p-0 m-0">
          <button className="btn btn-sm btn-light form-control">
            C. {this.props.answers.c}
          </button>
        </div>

        <div className="col-12 p-0 m-0">
          <button className="btn btn-sm btn-light form-control">
            D. {this.props.answers.d}
          </button>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default Question;
