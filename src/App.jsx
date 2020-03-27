import React from 'react'
import {Provider} from 'react-redux'
import store from './redux-flow/store'
import Header from './components/Header'
import Form from './containers/Form'
import Chart from "./containers/Chart"

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Form />
			<Chart />
		</Provider>
	)
}

export default App
