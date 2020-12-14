import React, { Component } from 'react';
import {connect} from "react-redux";
import StartComponent from "./StartComponent";
import QuestionsComponent from "./QuestionsComponent";
import LastComponent from "./LastComponent";
import {goToLastComponentAction, goToQuestionsComponentAction, goToStartComponentAction} from "../actions/actions";

class QuizComponent extends Component {

    goToStart = () => {
        this.props.goToStart();
    }

    goToQuestions = () => {
        this.props.goToQuestions();
    }

    goToLast = () => {
        this.props.goToLast();
    }

    render () {

        const challenges =  this.props.quiz.filter(function(challenge) {
            return challenge.id === 'challenge1';
        });

        console.log(challenges);
        console.log("Help " + challenges[0].help);
        console.log("Text " + challenges[0].text);
        console.log("Answers " + (challenges[0].answers[0].text));

        return (
            <div>
                <StartComponent goToQuestions={this.goToQuestions} visible={this.props.startComponentVisibility}/>

                <QuestionsComponent goToStart={this.goToStart} goToLast={this.goToLast}
                                    visible={this.props.questionsComponentVisibility}
                                    textChallenge={challenges[0].text}
                                    helpChallenge={challenges[0].help}
                                    answersChallenge={challenges[0].answers}/>
                <LastComponent visible={this.props.lastComponentVisibility}/>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        startComponentVisibility: state.startComponentVisibility,
        questionsComponentVisibility: state.questionsComponentVisibility,
        lastComponentVisibility: state.lastComponentVisibility,
        quiz: state.quiz
    };
}

const mapDispatchToProps = {
    goToStart: goToStartComponentAction,
    goToQuestions: goToQuestionsComponentAction,
    goToLast: goToLastComponentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);
