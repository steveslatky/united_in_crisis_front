import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About the project:</h1>
        <p>
          United in Crisis was created in response to the Opioid Crisis.
          Our aim is to create a community based service that allows its users
          to receive support from other users, find resources and spread support
          for other members facing additions. We strive to be community focused.
        </p>
        <p>
          This project was created for the 2019 Philadelphia Codefest.
        </p>
        <p>
          Hackers: <a href="https://github.com/aliayeszhanova">Alia Yeszhanova</a>
          , <a href="https://www.github.com/vlek">Derek McCammond</a>
          , <a href="https://github.com/jlpjr1999">James Poindexter</a>
          , and <a href="https://github.com/steveslatky">Steve Slatky</a>
        </p>
      </div>
    )
  }
}
