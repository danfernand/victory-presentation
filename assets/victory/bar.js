import React from 'react'
import { data } from '../data'
import { VictoryChart, VictoryBar, VictoryTooltip } from 'victory'

const Bar = () => {
  return (
    <VictoryChart
        domainPadding={ { x: 20 } }
      >
      <VictoryBar
        data={ data }
        style={{
          data: { fill: 'tomato', width: 12 }
        }}
        labels={ (d) => d.frequency }
        labelComponent={<VictoryTooltip/>}
        x="letter"
        y="frequency"
      />
    </VictoryChart>
  )
}

export default Bar
