import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import{ fetchBitcoin, requestApi } from './action-creators'
import { API } from '../../../utils'

describe('Bitcoin action creators', () => {
	it('should call dispatch when called', done => {
		const mock = new MockAdapter(axios)
		const data = { response: true }
		mock.onGet(API(1,1)).reply(200, data)
		const mockCallback = jest.fn()
		fetchBitcoin({limit: 1, timestamp: 1, amount: 1, investmentType: 'bitcoin'},mockCallback)
		expect(mockCallback.mock.calls.length).toBe(1)
		done()
	})
	it('should call dispatch when request success', done => {
		const mock = new MockAdapter(axios)
		const mockCallback = jest.fn()
		const data = { response: true }

		mock.onGet(API(1,1)).reply(200, data)
		requestApi(mockCallback, 1, 1, 1, 'bitcoin')

		done()
		expect(mockCallback.mock.calls.length).toBe(0)
	})

	it('should call dispatch when request fail', done => {
		const mock = new MockAdapter(axios)
		const mockCallback = jest.fn()
		const data = { response: true }
		mock.onGet(API(1,1)).reply(500, data)
		requestApi(mockCallback, 1, 1, 1, 'bitcoin')
		done()
		expect(mockCallback.mock.calls.length).toBe(0)
	})
})
