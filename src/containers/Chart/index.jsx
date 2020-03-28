import React, { Component } from 'react'
import  ReactApexChart from 'react-apexcharts'
import config from "./config"
import { connect } from "react-redux"
import { fetchBitcoin } from "../../redux-flow/reducers/bitcoin/action-creators"

class Chart extends Component{
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.form !== prevProps.form){
			const {limit, date, amount, investmentType} = this.props.form
			if(limit !== 0 && date !== 0 && amount !== 0)
				this.props.fetchBitcoin({limit, timestamp: date, amount, investmentType})
			}
	}

	render() {
		const { data: bitcoin } = this.props.bitcoin
		const {limit, date, amount, investmentType} = this.props.form
		const emptyForm = limit !== 0 && date !== 0 && amount !== 0 && investmentType !== 0
		return (
			<div id="chart">
				{(!this.props.bitcoin.isFetching && emptyForm) && <ReactApexChart
					options={config}
					series={[{name: 'cotação', data: bitcoin}]}
					type="area"
					height={350} /> }
			</div>
		)
	}
}

const mapStateToProps = state => ({
	bitcoin: state.bitcoin,
	form: state.form
})

const mapDispatchToProps = dispatch => ({
	fetchBitcoin: (values) => fetchBitcoin(values, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Chart)