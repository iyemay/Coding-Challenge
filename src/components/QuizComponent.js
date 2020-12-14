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
        return (
            <div>
                <StartComponent goToQuestions={this.goToQuestions} visible={this.props.startComponentVisibility}/>
                <QuestionsComponent goToStart={this.goToStart} goToLast={this.goToLast}
                                    visible={this.props.questionsComponentVisibility}/>
                <LastComponent visible={this.props.lastComponentVisibility}/>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        startComponentVisibility: state.startComponentVisibility,
        questionsComponentVisibility: state.questionsComponentVisibility,
        lastComponentVisibility: state.lastComponentVisibility
    };
}

const mapDispatchToProps = {
    goToStart: goToStartComponentAction,
    goToQuestions: goToQuestionsComponentAction,
    goToLast: goToLastComponentAction
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizComponent);
