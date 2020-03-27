import React from 'react'
import  ReactApexChart from 'react-apexcharts'
import config from "./config"
import { connect } from "react-redux"

const series = [{
	name: 'Bitcoin',
	data: [11, 32, 45, 32, 34, 52, 41]
}]

const Chart = () => (
	<div id="chart">
		<ReactApexChart options={config} series={series} type="area" height={350} />
	</div>
)

const mapStateToProps = state => ({
	bitcoin: state.bitcoin
})
export default connect(mapStateToProps)(Chart)