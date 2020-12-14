import React, { Component } from 'react';

export default class StartComponent extends Component {
    render () {
        return (
            this.props.visible ?
                (<div className="start-container">
                    <i className="fa fa-university icon-start" />
                    <p className="size-title">
                        How are you doing with your money? Take a 2-minute quiz.
                    </p>
                    <button className="start-button"
                            onClick={this.props.goToQuestions}>Let's Do This</button>
                </div>)
                : (<div style={{visibility: "hidden"}}/>)
        )};
}