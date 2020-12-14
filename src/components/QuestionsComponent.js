import React, { Component } from 'react';

export default class QuestionsComponent extends Component {
    render () {
        return (
            this.props.visible ?
                (<div className="help-answer">
                    <div className="help-container">
                        <p>{this.props.helpChallenge}</p>
                    </div>

                    <div id="question-answers-container" className="content-container">
                        <p className="question-size">
                            {this.props.textChallenge}
                        </p>

                        <div className="answer-container">
                            <div className="answer-box">
                                <div className="answer-number">5</div>
                                <p className="answer-option">{this.props.answersChallenge[0].text}</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">4</div>
                                <p className="answer-option">{this.props.answersChallenge[1].text}</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">3</div>
                                <p className="answer-option">{this.props.answersChallenge[2].text}</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">2</div>
                                <p className="answer-option">{this.props.answersChallenge[3].text}</p>
                            </div>
                            <div className="answer-box">
                                <div className="answer-number">1</div>
                                <p className="answer-option">{this.props.answersChallenge[4].text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="change-page-container">
                        <i className="fa fa-arrow-left back-style" onClick={this.props.goToStart} />
                        <i className="fa fa-arrow-right next-style" onClick={this.props.goToLast} />
                    </div>
                </div>)
                : (<div style={{visibility: "hidden"}}/>)
        );
    };
}