import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { insertMoney } from '../../store/action-creators';

import './wallet.scss';

export class Wallet extends Component {

    insertMoney = (value) => {

        this.props.insertMoney(value);

    }

    render() {

        return (
            <div className="Wallet">
                <span>Click one of the coins and notes bellow to add money to the machine</span>
                <img className="CurrencyImg Coin" src="./1euro.png" onClick={() => this.insertMoney(1)} />
                <img className="CurrencyImg Coin" src="./2euro.png" onClick={() => this.insertMoney(2)} />
                <img className="CurrencyImg Note" src="./5euro.png" onClick={() => this.insertMoney(5)} />
                <img className="CurrencyImg Note" src="./10euro.png" onClick={() => this.insertMoney(10)}/>
                <img className="CurrencyImg Note" src="./20euro.png" onClick={() => this.insertMoney(20)} />
            </div>
        )

    }

}


export default connect(
    (state) => ({
        insertedMoneyAmount: state.insertedMoneyAmount,
    }),
    (dispatch) => bindActionCreators({
        insertMoney,
    }, dispatch),
)(Wallet);

