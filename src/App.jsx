import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './redux-flow/store'
import Header from './components/Header'
import Form from './containers/Form'

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Form />
		</Provider>
	)
}

export default App
