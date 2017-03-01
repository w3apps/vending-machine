import update from 'react-addons-update';

import { actionTypes } from './action-creators';

const defaultState = {
    products: [],
    fetchingProducts: false,
    insertedMoneyAmount: 0,
    enteredCode: '',
    displayMessage: '',
};

export default function products(state = defaultState, action = {}) {
    switch (action.type) {
        case (`${actionTypes.GET_PRODUCTS}_PENDING`): {
            return update(state, {
                fetchingProducts: { $set: true },
            });
        }
        case (`${actionTypes.GET_PRODUCTS}_FULFILLED`): {
            return update(state, {
                products: { $set: action.payload },
                fetchingProducts: { $set: false },
            });
        }
        case (actionTypes.INSERT_MONEY): {
            return update(state, {
                insertedMoneyAmount: { $set: state.insertedMoneyAmount + action.value },
                displayMessage: { $set: defaultState.displayMessage },
            });
        }
        case (actionTypes.ENTER_CODE): {
            return update(state, {
                enteredCode: { $set: `${state.enteredCode}${action.value}` },
                displayMessage: { $set: defaultState.displayMessage },
            });
        }
        case (actionTypes.UPDATE_DISPLAY_MESSAGE): {
            return update(state, {
                displayMessage: { $set: action.value },
            });
        }
        case (actionTypes.UPDATE_MONEY): {
            const newAmount = state.insertedMoneyAmount - action.value;
            const updatedAmount = (newAmount > 0) ? newAmount : 0;

            return update(state, {
                insertedMoneyAmount: { $set: updatedAmount },
                displayMessage: { $set: defaultState.displayMessage },
            });
        }
        case (actionTypes.RESET_CODE): {
            return update(state, {
                enteredCode: { $set: '' },
                displayMessage: { $set: defaultState.displayMessage },
            });
        }
        case (actionTypes.GIVE_PRODUCT): {
            const newProducts = state.products.map((row, i) => {
                return row.map((cell, j) => {
                    if (cell.code === action.value) {
                        const newAmount = cell.amount - 1;
                        return Object.assign({}, cell, {
                            amount: (newAmount > 0) ? newAmount : 0,
                        });
                    }
                    return cell;
                });
            });

            return update(state, {
                products: { $set: newProducts },
                displayMessage: { $set: defaultState.displayMessage },
            });
        }
        case (actionTypes.CANCEL): {
            return update(state, {
                insertedMoneyAmount: { $set: defaultState.insertedMoneyAmount },
                enteredCode: { $set: defaultState.enteredCode },
                displayMessage: { $set: defaultState.displayMessage },
            });
        }
        default: {
            return state;
        }
    }
}
