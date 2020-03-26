import React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import store from './redux-flow/store'
import HeaderComponent from './components/Header'

function App() {
	return (
		<Provider store={store}>
			<HeaderComponent />
		</Provider>
	)
}

export default App
