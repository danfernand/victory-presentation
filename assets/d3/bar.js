import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import { data } from '../data'

class Bar extends Component {
  componentDidMount() {
    this.bootstrap()
  }
  bootstrap() {
    const svg = d3.select(ReactDOM.findDOMNode(this))
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = +svg.attr("width") - margin.left - margin.right
    const height = +svg.attr("height") - margin.top - margin.bottom
    const g = this.mainGroup(svg, margin)
    const x = this.xScale(width)
    const y = this.yScale(height)
    this.draw(data, g, x, y, height)
  }
  xScale(width) {
    return d3.scaleBand().rangeRound([0, width]).padding(0.1)
  }
  yScale(height) {
    return d3.scaleLinear().rangeRound([height, 0])
  }
  mainGroup(svg, margin) {
    return svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
  }
  draw(data, g, x, y, height) {
    x.domain(data.map(function(d) { return d.letter; }))
    y.domain([0, d3.max(data, function(d) { return d.frequency; })])

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y).ticks(10, "%"))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency")

    g.selectAll(".bar")
      .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.letter) })
        .attr("y", function(d) { return y(d.frequency) })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.frequency) })
  }
  render() {
    return (
      <svg
        height="500"
        width="960"
      />
    )
  }
}

export default Bar
