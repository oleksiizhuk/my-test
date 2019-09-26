import React, { Component } from 'react';
import AboutView from './AbountView';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0
    };
  }

  render() {
    const { currentValue } = this.state;
    return (
      <AboutView
        currentValue={currentValue}
      />
    );
  }
}
