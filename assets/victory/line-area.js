import React from 'react'
import { data } from '../data'
import { VictoryArea, VictoryGroup, VictoryLine } from 'victory'

const LineWithArea = () => {
  return (
    <svg viewBox="0 0 450 200">
      <defs>
        <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="40%" stopColor="#dae9f4" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <VictoryGroup
        data={ data }
        height={ 200 }
        padding={ 5 }
        standalone={ false }
        width={ 450 }
        x="letter"
        y="frequency"
      >
        <VictoryArea
          style={ { data: { fill: 'url(#gradient)' } } }
        />
        <VictoryLine
          style={ { data: { stroke: '#005A91', strokeWidth: '2' } } }
        />
      </VictoryGroup>
    </svg>
  )
}

export default LineWithArea
