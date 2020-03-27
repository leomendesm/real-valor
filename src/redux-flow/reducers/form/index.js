import { UPDATE_FORM } from "./actions"

export const initialState = {
	limit: 0,
	investmentType: 0,
	dateType: 0,
	date: 0,
	amountType: 0,
	amount: 0
}

export default function (state= initialState, action) {
	if (action.type === UPDATE_FORM) {
		let st = {...state}
		if(st.hasOwnProperty(action.payload.field))
			st[action.payload.field] = action.payload.value
		return st
	} else {
		return state
	}
}