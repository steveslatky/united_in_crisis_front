import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        { this.props.children }
      </div>
    )
  }
}
