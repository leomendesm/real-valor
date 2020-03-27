import axios from 'axios'

import {
	FETCH_BITCOIN,
	FETCH_BITCOIN_SUCCESS,
	FETCH_BITCOIN_FAIL
} from './actions'

import { API } from '../../../utils'

export const requestApi = (dispatch, limit, timestamp) => {
	return axios.get(API(limit, timestamp))
		.then(res => dispatch({ type: FETCH_BITCOIN_SUCCESS, payload: res.data.items }))
		.catch(err => dispatch({ type: FETCH_BITCOIN_FAIL, payload: err }))
}

export const fetchBitcoin = ({ limit, timestamp },dispatch) => {
	dispatch({ type: FETCH_BITCOIN })
	return () => requestApi(dispatch,limit, timestamp)
}
