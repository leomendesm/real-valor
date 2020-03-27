import updateForm from './action-creators'
import { UPDATE_FORM } from "./actions"
import moment from "moment"

describe('Form action creators', () => {
	it('should call dispatch once when normal field is updated', () => {
		const dispatch = jest.fn()
		const call = {value: '1', field:'amount'}
		updateForm(call, dispatch)
		expect(dispatch.mock.calls.length).toBe(1)
		expect(dispatch.mock.calls[0][0]).toStrictEqual({type: UPDATE_FORM, payload: call})
	})

	it('should call dispatch twice when date field is updated', () => {
		const dispatch = jest.fn()
		const date = new Date()
		const datetimestamp = moment(date).format('X')
		updateForm({value: date, field:'date'}, dispatch)
		expect(dispatch.mock.calls.length).toBe(2)
		expect(dispatch.mock.calls[0][0]).toStrictEqual({type: UPDATE_FORM, payload: {field: 'limit', value: 0}})
		expect(dispatch.mock.calls[1][0]).toStrictEqual({type: UPDATE_FORM, payload: {field: 'date', value: datetimestamp}})
	})

	it('should call dispatch three times when dateType field is updated', () => {
		const dispatch = jest.fn()
		const yearTimestamp = moment().subtract(1, 'years').format('X')
		updateForm({value: '1', field:'dateType'}, dispatch)
		expect(dispatch.mock.calls.length).toBe(3)
		expect(dispatch.mock.calls[0][0]).toStrictEqual({type: UPDATE_FORM, payload: {field: 'date', value: yearTimestamp}})
		expect(dispatch.mock.calls[1][0]).toStrictEqual({type: UPDATE_FORM, payload: {field: 'limit', value: 364}})
		expect(dispatch.mock.calls[2][0]).toStrictEqual({type: UPDATE_FORM, payload: {value: '1', field:'dateType'}})
	})

})
