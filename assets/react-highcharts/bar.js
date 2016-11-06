import ReactHighcharts from 'react-highcharts'
import React from 'react'
import { reactHighchartsData } from '../data'

const { categories, data } = reactHighchartsData
var config = {
  chart: {
    type: 'column'
  }, xAxis: {
    categories,
  },
  series: [{
    data,
  }]
}

const Bar = () => {
  return (
    <ReactHighcharts config={ config } />
  )
}

export default Bar
