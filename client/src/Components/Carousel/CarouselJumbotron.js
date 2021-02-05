import React, { Component } from 'react';
import CarouselLoggedIn from './CarouselLoggedIn';
import CarouselNotLoggedIn from './CarouselNotLoggedIn';
import localData from '../../config/localData';

class CarouselJumbotron extends Component {
  render() {
    const checkLoggedIn = (o) => {
      if (!this.props.usersReducer.authenticationPending) {
        if (this.props.usersReducer.id) {
          localData.loginItems.credentials.set({
            id: this.props.usersReducer.id,
            username: this.props.usersReducer.username,
          });
        }
        return this.props.usersReducer.loggedIn &&
          this.props.usersReducer.username
          ? o.loggedIn
          : o.notLoggedIn;
      }
    };
    return (
      <React.Fragment>
        {this.props.usersReducer
          ? checkLoggedIn({
              loggedIn: <CarouselLoggedIn />,
              notLoggedIn: <CarouselNotLoggedIn items={this.props.items} />,
            })
          : null}
      </React.Fragment>
    );
  }
}

export default CarouselJumbotron;
