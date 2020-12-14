import React, { Component } from 'react';

export default class LastComponent extends Component {
    render () {
        return (
            this.props.visible ?
                (<div className="content-container">
                    <h1 className="header-last-container">Final Score: 600</h1>
                    <div>
                        <p className="text-question">
                            In the last 12 months, my household <span className="bold-text">
                    spent</span>...
                        </p>
                        <p className="text-answer">
                            Much less than our income
                        </p>
                    </div>
                    <div>
                        <p className="text-question">
                            If our household stopped earning money, the cash we have now would support us for…
                        </p>
                        <p className="text-answer">
                            All you had was what you have now in cash, checking, and savings accounts.
                        </p>
                    </div>
                    <div>
                        <p className="text-question">
                            In the last 12 months, my household <span className="bold-text">
                    spent</span>...
                        </p>
                        <p className="text-answer">
                            Much less than our income
                        </p>
                    </div>
                </div>)
                : (<div style={{visibility: "hidden"}}/>)
        );
    };
}