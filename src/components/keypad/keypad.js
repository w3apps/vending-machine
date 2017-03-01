import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import find from 'lodash.find';

import { enterCode, updateDisplayMessage, updateMoney, resetCode, giveProduct, cancel } from '../../store/action-creators';

import './keypad.scss';

export class KeyPad extends Component {

    componentWillReceiveProps(nextProps) {

        if (nextProps.enteredCode.length === 2) {

            let i = 0;
            const productRows = this.props.products.length;
            let foundSlot;
            for (; i < productRows; i++) {
                foundSlot = find(this.props.products[i], { 'code': nextProps.enteredCode });
                if (foundSlot) {
                    break;
                }
            }

            // cleanup the entered code as we only support 2 digits codes
            this.props.resetCode();

            if (!foundSlot) {
                return this.props.updateDisplayMessage('Choose a different product');
            }
            else if (foundSlot.amount < 1) {
                return this.props.updateDisplayMessage('Choose a different product');
            }
            else if (foundSlot.price > nextProps.insertedMoneyAmount) {
                return this.props.updateDisplayMessage('You need more money');
            }

            this.props.updateMoney(foundSlot.price);
            return this.props.giveProduct(nextProps.enteredCode);

        }

    }

    enterCode = (value) => {

        // enter the code only if the user has money
        if (this.props.insertedMoneyAmount > 0) {
            this.props.enterCode(value);
        }

    }

    cancel = () => {
        this.props.cancel();
    }

    render() {

        // create an array to be able to iterate through it in order to render the numeric keys
        const numericKeys = new Array(10).fill(1);

        return (
            <div className="KeyPad">
                {
                    numericKeys.map((item, i) => {
                        return (
                            <button
                                key={i}
                                className="KeyPad-Button Numeric"
                                onClick={() => this.enterCode(i)}
                            >
                                {i}
                            </button>
                        )
                    })
                }
                <button className="KeyPad-Button Action" onClick={this.cancel}>Cancel</button>
            </div>
        );

    }

}

export default connect(
    (state) => ({
        enteredCode: state.enteredCode,
        products: state.products,
        insertedMoneyAmount: state.insertedMoneyAmount,
    }),
    (dispatch) => bindActionCreators({
        enterCode,
        updateDisplayMessage,
        updateMoney,
        resetCode,
        giveProduct,
        cancel,
    }, dispatch),
)(KeyPad);
