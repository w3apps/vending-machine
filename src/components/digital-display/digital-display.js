import React, { Component } from 'react';
import { connect } from 'react-redux';

import './digital-display.scss';

export class DigitalDisplay extends Component {

    render() {

        const { insertedMoneyAmount, displayMessage } = this.props;

        const moneyText = insertedMoneyAmount ? `${insertedMoneyAmount} EUR` : 'Insert the money and enter the product code.';

        return (
            <div className="DigitalDisplay">
                <div>{moneyText}</div>
                <div>{displayMessage}</div>
            </div>
        )
    }

}

export default connect(
    (state) => ({
        insertedMoneyAmount: state.insertedMoneyAmount,
        displayMessage: state.displayMessage,
    })
)(DigitalDisplay);
