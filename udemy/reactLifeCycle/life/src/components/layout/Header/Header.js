import React, { Component } from 'react';
import HeaderView from './HeaderView';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookVerification: {
        logging: undefined,
        name: undefined,
        email: undefined,
        id: undefined
      }
    };
  }

  checkFaceboolVerification = (info) => {
    // eslint-disable-next-line no-console
    console.log(info);
  };

  render() {
    return (
      <HeaderView
      />
    );
  }
}
