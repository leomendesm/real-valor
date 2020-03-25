import bitcoin, {initialState} from './index'

import {
	FETCH_BITCOIN,
	FETCH_BITCOIN_SUCCESS,
	FETCH_BITCOIN_FAIL
} from './actions'

import deepFreeze from 'deep-freeze'

describe('bitcoin reducer', () => {

	describe('Smoke Test', () => {
		it('should bitcoin be a function', () => {
			expect(typeof bitcoin).toBe('function')
		})
	})

	describe('Initial State', () => {
		it('should return initial state when state is undefined', () => {
			const before = undefined
			const action = deepFreeze({type: ''})
			expect(bitcoin(before, action)).toEqual(initialState)
		})

		it('should return state when action is undefined', () => {
			const before = deepFreeze([])
			const action = deepFreeze({
				type: ''
			})
			const after = []
			expect(bitcoin(before, action)).toEqual(after)
		})
	})

	describe('Fetch bitcoin data', () => {
		it('should return isFetching true when action type is FETCH_BITCOIN', () => {
			const before = deepFreeze({
				isFetching: null,
				data: [],
				hasError: false,
				errorMessage: null
			})

			const action = deepFreeze({
				type: FETCH_BITCOIN
			})

			const after = {
				isFetching: true,
				data: [],
				hasError: false,
				errorMessage: null
			}

			expect(bitcoin(before, action)).toEqual(after)
		})
	})

	describe('Fetch book list data responses', () => {

		it('should set data equal to payload and isFetching false when action type is FETCH_BITCOIN_SUCCESS', () => {
			const before = deepFreeze({
				isFetching: null,
				data: [],
				hasError: false,
				errorMessage: null
			})

			const action = deepFreeze({
				type: FETCH_BITCOIN_SUCCESS,
				payload: [{value: 123}, {value: 123312}]
			})

			const after = {
				isFetching: false,
				data: [{value: 123}, {value: 123312}],
				hasError: false,
				errorMessage: null
			}

			expect(bitcoin(before, action)).toEqual(after)
		})

		it('should set errorMessage equal to payload, hasError true and isFetching false when action type is FETCH_BITCOIN_FAIL', () => {
			const before = deepFreeze({
				isFetching: null,
				data: [],
				hasError: false,
				errorMessage: null
			})

			const action = deepFreeze({
				type: FETCH_BITCOIN_FAIL,
				err: 'fail'
			})

			const after = {
				isFetching: false,
				data: [],
				hasError: true,
				errorMessage: 'fail'
			}

			expect(bitcoin(before, action)).toEqual(after)
		})

	})
})
