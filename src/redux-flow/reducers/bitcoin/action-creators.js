import axios from 'axios'

import {
	FETCH_BITCOIN,
	FETCH_BITCOIN_SUCCESS,
	FETCH_BITCOIN_FAIL
} from './actions'

import {API, calcDailyPrice, calcRate} from '../../../utils'
import moment from "moment"

export const requestApi = (dispatch, limit, timestamp, amount) => {
	axios.get(API(limit, timestamp))
		.then(res => {
			let values = res.data.Data
			for(let i = 0; i < values.length; i++){
				const rate = calcRate(values[i].open, values[i].close)
				values[i] = (i === 0)?
					[moment().subtract(values.length - i, 'days').format("MM/DD/YYYY"), amount] :
					[moment().subtract(values.length - i, 'days').format("MM/DD/YYYY"), calcDailyPrice(rate, values[i-1][1]).toFixed(2)]
			}
			dispatch({ type: FETCH_BITCOIN_SUCCESS, payload: values })
		})
		.catch(err => dispatch({ type: FETCH_BITCOIN_FAIL, payload: err }))
}

export const fetchBitcoin = ({ limit, timestamp, amount },dispatch) => {
	dispatch({ type: FETCH_BITCOIN })
	requestApi(dispatch, limit, timestamp, amount)
}
