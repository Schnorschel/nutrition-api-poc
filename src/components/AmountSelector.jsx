import React from 'react'

const AmountSelector = props => {
  return (
    <div>
      {/* <select name="qty" defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select> */}
      {/* prettier-ignore */}
      <input type="text" name="qty" value={props.selQty} onChange={props.handleQtyChange} size="4"/>
      {/* prettier-ignore */}
      <select name="measure" onChange={props.handleMeasureChange} defaultValue={props.selMeasure}>
        {props.measures.map((measure, index) => {
          return <option key={index} value={measure.uri}>{measure.label}</option>
        })}
      </select>
      {/* prettier-ignore */}
      {/* {props.measures[0].uri} */}
      {/* {
        props.measures.filter(m => {
          return m.uri == props.selMeasure && typeof m.qualified !== 'undefined'
        }).length
      } */}
      {/* {props.measures.filter(m => m.uri === props.selMeasure)} */}
      {props.measures.filter(
        m => m.uri === props.selMeasure && typeof m.qualified !== 'undefined'
      ).length > 0 && (
        <select
          name="qualifier"
          value={props.selMeasure}
          onChange={props.handleQualifierChange}
        >
          {props.measures
            .filter(m => m.uri === props.selMeasure)[0]
            .qualified.map(n => n)
            .map(o => o[0])
            .map((p, i) => (
              <option key={i} name="qualifier" value={p.uri}>
                {p.label}
              </option>
            ))}
        </select>
      )}
      {/* <select name="qualifier">{props.measures.map}</select> */}
    </div>
  )
}

export default AmountSelector
