import axios from 'axios'

import {
	FETCH_BITCOIN,
	FETCH_BITCOIN_SUCCESS,
	FETCH_BITCOIN_FAIL
} from './actions'

import {API, calcDailyPrice, calcRate} from '../../../utils'
import moment from "moment"

export const requestApi = (dispatch, limit, timestamp, amount, investmentType) => {
	if(investmentType === "bitcoin") {
		axios.get(API(limit, timestamp))
		.then(res => {
			let values = res.data.Data
			for (let i = 0; i < values.length; i++) {
				let rate
				rate = calcRate(values[i].open, values[i].close)
				values[i] = (i === 0) ?
					[moment().subtract(values.length - i, 'days').format("MM/DD/YYYY"), amount] :
					[moment().subtract(values.length - i, 'days').format("MM/DD/YYYY"), calcDailyPrice(rate, values[i - 1][1]).toFixed(2)]
			}
			dispatch({type: FETCH_BITCOIN_SUCCESS, payload: values})
		})
		.catch(err => dispatch({type: FETCH_BITCOIN_FAIL, payload: err}))
	}
	else {
		const profit = amount * 0.00027397260274
		const totalProfit = amount + (profit * limit+1)
		const values = [[moment().subtract(limit, 'days').format("MM/DD/YYYY"), amount.toFixed(2)]]
		values.push([moment().format("MM/DD/YYYY"), totalProfit.toFixed(2)])
		dispatch({type: FETCH_BITCOIN_SUCCESS, payload: values})
	}
}

export const fetchBitcoin = ({ limit, timestamp, amount, investmentType},dispatch) => {
	dispatch({ type: FETCH_BITCOIN })
	requestApi(dispatch, limit, timestamp, amount, investmentType)
}
