import React from 'react'
import AmountSelector from './AmountSelector'

const FoodItemPreview = props => {
  // All numbers are rounded to one digit
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

  // Capitalizes first letter of string s
  const toSentenceCase = s => {
    if (s.length === 0) return ''
    return s.substr(0, 1).toUpperCase() + s.substr(1)
  }

  // Capitalizes every word in string s
  const toPascalCase = s => {
    if (s.length === 0) return ''
    return s
      .split(' ')
      .map(str => {
        return toSentenceCase(str)
      })
      .join(' ')
  }

  // returns true if string s consists of mostly block capitals (90%)
  const isMostlyBlockCapitals = s => {
    return (
      s.split('').reduce((total, letter) => {
        return (total += letter >= 'A' && letter <= 'Z' ? 1 : 0)
      }, 0) > parseInt(s.length * 0.9)
    )
  }

  const noOfBlockCapitals = s => {
    return s.split('').reduce((total, letter) => {
      return (total += letter >= 'A' && letter <= 'Z' ? 1 : 0)
    }, 0)
  }

  // Returns a number that expresses the ratio between the count of
  // lower and upper case letters in string s.
  // If the returned number is greater than 0, there are more upper case
  // than lower case letters, vice versa if negative.
  // prettier-ignore
  const lowerToUpperCaseBalance = (s) => {
    return s.split('').reduce((total, letter) => {
      return (total += letter >= 'A' && letter <= 'Z' ? 1 : 
                       letter >= 'a' && letter <= 'z' ? -1 : 0)
    }, 0)
  }

  const formatLabel = s => {
    if (lowerToUpperCaseBalance(s) > 0) {
      return toPascalCase(s.toLowerCase())
    } else {
      return toSentenceCase(s)
    }
  }

  return (
    // prettier-ignore
    <div className="foodPreviewCont">
      <section className="foodName">{toPascalCase(props.foodLabel.toLowerCase())}</section><section className="foodId">{props.foodId.substring(props.foodId.length - 4)}</section>
      {/* <section className="measures"><AmountSelector measures={props.measures} /></section> */}
      {props.foodCategory && <section className="foodCategory dataItem">{props.foodCategory}</section>}
      {props.foodBrand && props.foodBrand.toLowerCase().replace(props.searchFor.toLowerCase(), '').length > 2 && <section className="foodBrand dataItem">{props.foodBrand}</section>}
      {props.foodContentsLabel && props.foodContentsLabel.toLowerCase().replace(props.searchFor.toLowerCase(), '').length > 2 && <section className="foodContentsLabel dataItem">{formatLabel(props.foodContentsLabel).replace(/;/g, ',')}</section>}
      {props.foodKcal && <><section className="foodLabel dataItem">Calories:</section><section className="foodValue dataItem">{formatNum(props.foodKcal)} kcal</section></>}
      {props.foodProtein && <><section className="foodLabel dataItem">Protein:</section><section className="foodValue dataItem">{formatNum(props.foodProtein)} g</section></> }
      {props.foodFat && <><section className="foodLabel dataItem">Fat:</section><section className="foodValue dataItem">{formatNum(props.foodFat)} g</section></> }
      {props.foodCarbs && <><section className="foodLabel dataItem">Carbohydrate:</section><section className="foodValue dataItem">{formatNum(props.foodCarbs)} g</section></>}
      {props.foodFiber && <><section className="foodLabel dataItem">Fiber:</section><section className="foodValue dataItem">{formatNum(props.foodFiber)} g</section></>}
    </div>
  )
}

export default FoodItemPreview
