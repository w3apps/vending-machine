import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getProducts } from '../../store/action-creators';

import InfoBlock from '../info-block/info-block';
import DigitalDisplay from '../digital-display/digital-display';
import Wallet from '../wallet/wallet';
import KeyPad from '../keypad/keypad';

import './vending-machine.scss';

export class VendingMachine extends Component {

    static propTypes = {
        products: PropTypes.array,
        fetchingProducts: PropTypes.bool,
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {

        const { fetchingProducts, products } = this.props;

        if (fetchingProducts === true) {
            return (
                <div>Loading Vending Machine ...</div>
            )
        }

        return (
            <div className="VendingMachine">
                <div className="VendingMachine-Products">
                {
                    products.map((row, i) => {
                        return (
                            <div className="VendingMachine-Row" key={`row-${i}`}>
                                {
                                    row.map((cell, j) => {
                                        return (
                                            <div className="VendingMachine-Cell" key={`cell-${i}-${j}`}>
                                                <div className="ProductImageContainer">
                                                    {
                                                        (cell.amount > 0) ?
                                                            (
                                                                <img className="ProductImage" src={`./${cell.product}.png`} />
                                                            ) :
                                                            null
                                                    }
                                                </div>
                                                <div className="ProductInfoContainer">
                                                    <div className="ProductInfo Code">Code: {cell.code}</div>
                                                    <div className="ProductInfo Price">Price: {cell.price} EUR</div>
                                                    <div className="ProductInfo Amount">Amount: {cell.amount}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        );
                    })
                }
                </div>
                <div className="VendingMachine-ControlContainer">
                    <InfoBlock />
                    <DigitalDisplay />
                    <KeyPad />
                    <Wallet />
                </div>
            </div>
        )

    }

}

export default connect(
    (state) => ({
        products: state.products,
        fetchingProducts: state.fetchingProducts,
    }),
    (dispatch) => bindActionCreators({
        getProducts,
    }, dispatch),
)(VendingMachine);
