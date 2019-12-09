import React, { useState, useEffect } from 'react'

const AmountSelector = props => {
  const [qualifiers, setQualifiers] = useState()
  const handleMeasureChange = () => {}

  return (
    <div>
      <select name="qty" defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <select name="measure" onChange={handleMeasureChange}>
        {props.measures.map(measure => {
          return <option value={measure.uri}>{measure.label}</option>
        })}
      </select>
      <select name="qualifier">{props.measures.map}</select>
    </div>
  )
}

export default AmountSelector
