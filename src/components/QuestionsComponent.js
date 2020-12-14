import React, { Component } from 'react';

export default class QuestionsComponent extends Component {
    render () {
        return (
            this.props.visible ?
                (<div className="help-answer">
                    <div className="help-container">
                        <p>Consider all the money your household made and spent.</p>
                    </div>

                    <div id="question-answers-container" className="content-container">
                        <p className="question-size">
                            In the last 12 months, my household <span className="strong-word">spent</span>...
                        </p>

                        <div className="answer-container">
                            <div className="answer-box">
                                <div className="answer-number">5</div>
                                <p className="answer-option">Much less than our income</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">4</div>
                                <p className="answer-option">A little less than our income</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">3</div>
                                <p className="answer-option">About equal to our income</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">2</div>
                                <p className="answer-option">A little more than our income</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">1</div>
                                <p className="answer-option">Much more than our income</p>
                            </div>
                        </div>
                    </div>
                </div>)
                : (<div style={{visibility: "hidden"}}/>)
        );
    };
}