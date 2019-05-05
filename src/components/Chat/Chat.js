import React, { Component } from 'react';

export default class Chat extends Component {
  render() {
    return (
      <div className="chat">
        { this.props.children }
      </div>
    )
  }
}
