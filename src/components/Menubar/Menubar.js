import React, { Component } from 'react';

export class Menubar extends Component {
  render() {
    return (
      <div className="menubar">
        { this.props.children }
      </div>
    )
  }
}
