import './App.css';
import { Component } from 'react';
import QuizComponent from "./components/QuizComponent";

export default class App extends Component {
    render () {
        return (
            <div className="App">
                <QuizComponent />
            </div>
        );
    }
}

