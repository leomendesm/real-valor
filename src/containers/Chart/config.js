const config =  {
	chart: {
		height: 350,
			type: 'area'
	},
	dataLabels: {
		enabled: false
	},
	toolbar: false,
	zoom: false,
	stroke: {
		curve: 'smooth'
	},
	xaxis: {
		type: 'datetime',
			categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
	},
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	},
}

export default config