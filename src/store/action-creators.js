import 'whatwg-fetch';

export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    INSERT_MONEY: 'INSERT_MONEY',
    ENTER_CODE: 'ENTER_CODE',
    UPDATE_DISPLAY_MESSAGE: 'UPDATE_DISPLAY_MESSAGE',
    UPDATE_MONEY: 'UPDATE_MONEY',
    RESET_CODE: 'RESET_CODE',
    GIVE_PRODUCT: 'GIVE_PRODUCT',
    CANCEL: 'CANCEL',
};

export function getProducts() {
    return {
        type: actionTypes.GET_PRODUCTS,
        payload: fetch('./mock.json').then((response) => {
            return response.json();
        }),
    };
}

export function insertMoney(value) {
    return {
        type: actionTypes.INSERT_MONEY,
        value,
    };
}

export function enterCode(value) {
    return {
        type: actionTypes.ENTER_CODE,
        value,
    }
}

export function updateDisplayMessage(value) {
    return {
        type: actionTypes.UPDATE_DISPLAY_MESSAGE,
        value,
    }
}

export function updateMoney(value) {
    return {
        type: actionTypes.UPDATE_MONEY,
        value,
    }
}

export function resetCode() {
    return {
        type: actionTypes.RESET_CODE,
    }
}

export function giveProduct(value) {
    return {
        type: actionTypes.GIVE_PRODUCT,
        value,
    }
}

export function cancel() {
    return {
        type: actionTypes.CANCEL,
    }
}
