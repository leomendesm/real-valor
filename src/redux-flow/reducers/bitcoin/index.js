import {
	FETCH_BITCOIN,
	FETCH_BITCOIN_SUCCESS,
	FETCH_BITCOIN_FAIL } from './actions'

export const initialState = {
	isFetching: null,
	data: [],
	hasError: false,
	errorMessage: null
}
const bitcoin = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_BITCOIN:
			return {
				isFetching: true,
				data: [],
				hasError: false,
				errorMessage: null
			}
		case FETCH_BITCOIN_SUCCESS:
			return {
				isFetching: false,
				data: action.payload,
				hasError: false,
				errorMessage: null
			}
		case FETCH_BITCOIN_FAIL:
			return {
				isFetching: false,
				data: [],
				hasError: true,
				errorMessage: action.err
			}
		default: {
			return state
		}
	}
}

export default bitcoin
