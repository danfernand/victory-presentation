import React from 'react'
import { data } from '../data'
import { VictoryChart, VictoryLine, VictoryGroup, VictoryVoronoiTooltip, VictoryScatter } from 'victory'

const lineData = [
  {x: 1, y: 5},
  {x: 2, y: 2},
  {x: 3, y: 3},
  {x: 4, y: 3},
  {x: 5, y: 2}
]
const scatterData = [
  {
    x: 1, y: 3, fill: "red",
    symbol: "plus", size: 6, label: "WOW\nSTUFF"
  },
  {
    x: 2, y: 5, fill: "magenta",
    size: 9, opacity: 0.4, label: "WAT"
  },
  {
    x: 3, y: 4, fill: "orange",
    size: 5, label: "LABEL"
  },
  {
    x: 4, y: 2, fill: "brown",
    symbol: "square", size: 6, label: "OKAY"
  },
  {
    x: 5, y: 5, fill: "black",
    symbol: "triangleUp", size: 5, label: "GOOD"
  }
]

const LineAndScatter = () => {
  return (
    <VictoryChart
      padding={ 80 }
      domainPadding={ { x: 20 } }
    >
      <VictoryScatter
        data={ scatterData }
      />
      <VictoryGroup data={ lineData }>
        <VictoryLine
          style={ {
            data: { stroke: 'tomato' }
          } }
        />
        <VictoryVoronoiTooltip
          labels={(d) => `x: ${d.x} \n y: ${d.y}`}
        />
      </VictoryGroup>
    </VictoryChart>
  )
}

export default LineAndScatter
