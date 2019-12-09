import React from 'react'

const FoodItemPreview = props => {
  const formatNum = num => {
    if (typeof num !== 'undefined' || !isNaN(num)) {
      return parseFloat(num).toFixed(1)
      // return roundNumber(num, 1)
    }
  }

  // Nope
  const roundNumber = (num, scale) => {
    if (!('' + num).includes('e')) {
      return +(Math.round(num + 'e+' + scale) + 'e-' + scale)
    } else {
      var arr = ('' + num).split('e')
      var sig = ''
      if (+arr[1] + scale > 0) {
        sig = '+'
      }
      return +(
        Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) +
        'e-' +
        scale
      )
    }
  }

  return (
    // prettier-ignore
    <div className="foodPreviewCont">
      <section className="foodName">{props.foodLabel}</section> 
      {props.foodBrand && <section className="foodBrand dataItem">{props.foodBrand}</section>}
      {props.foodContentsLabel && props.foodContentsLabel.toLowerCase().replace(props.foodLabel.toLowerCase(), '').length > 2 && <section className="foodContentsLabel dataItem">{props.foodContentsLabel.replace(/;/g, ',')}</section>}
      {props.foodKcal && <><section className="foodLabel dataItem">Calories:</section><section className="foodValue dataItem">{formatNum(props.foodKcal)} kcal</section></>}
      {props.foodProtein && <><section className="foodLabel dataItem">Protein:</section><section className="foodValue dataItem">{formatNum(props.foodProtein)} g</section></> }
      {props.foodFat && <><section className="foodLabel dataItem">Fat:</section><section className="foodValue dataItem">{formatNum(props.foodFat)} g</section></> }
      {props.foodCarbs && <><section className="foodLabel dataItem">Carbohydrate:</section><section className="foodValue dataItem">{formatNum(props.foodCarbs)} g</section></>}
      {props.foodFiber && <><section className="foodLabel dataItem">Fiber:</section><section className="foodValue dataItem">{formatNum(props.foodFiber)} g</section></>}
    </div>
  )
}

export default FoodItemPreview
