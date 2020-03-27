import form, {initialState} from './index'

import {
	UPDATE_FORM
} from './actions'

import deepFreeze from 'deep-freeze'

describe('form reducer', () => {

	describe('Smoke Test', () => {
		it('should form be a function', () => {
			expect(typeof form).toBe('function')
		})
	})

	describe('Initial State', () => {
		it('should return initial state when state is undefined', () => {
			const before = undefined
			const action = deepFreeze({type: ''})
			expect(form(before, action)).toEqual(initialState)
		})

		it('should return state when action is undefined', () => {
			const before = deepFreeze([])
			const action = deepFreeze({
				type: ''
			})
			const after = []
			expect(form(before, action)).toEqual(after)
		})
	})
	describe('UPDATE_FORM', () => {
		it('should return the field on state changed', () => {
			const action = deepFreeze({
				type: UPDATE_FORM,
				payload: {
					field: 'amount',
					value: 10
				}
			})
			const after = deepFreeze({
				...initialState,
				amount: 10
			})
			expect(form(initialState, action)).toEqual(after)
		})
		it('should return the field on state changed - different field', () => {
			const action = deepFreeze({
				type: UPDATE_FORM,
				payload: {
					field: 'dateType',
					value: 1
				}
			})
			const after = deepFreeze({
				...initialState,
				dateType: 1
			})
			expect(form(initialState, action)).toEqual(after)
		})
		it('should not change the state if the field dont exists', () => {
			const action = deepFreeze({
				type: UPDATE_FORM,
				payload: {
					field: 'randomField',
					value: 1
				}
			})
			expect(form(initialState, action)).toEqual(initialState)
		})
	})
})