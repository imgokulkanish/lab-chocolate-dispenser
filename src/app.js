var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count){
    if ((chocolates && color && count) <= 0)
    return 'Number cannot be zero/negative'
    if (chocolates) {
        for (let i = 0; i < count; i++) {
          chocolates.unshift(color)
        }
      }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number) {
    if (number <= 0) return 'Number cannot be zero/negative'
    else if (number <= chocolates.length) {
    for (let i = 0; i < number; i++) {
      let arr = chocolates.splice(0, number)
      return arr
    }
  } else return 'Insufficient chocolates in the dispenser'
}
//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    let result = []
  if (number <= 0) return 'Number cannot be zero/negative'
  if (number < chocolates.length) {
    for (let i = 0; i < number; i++) {
      let arr = chocolates.pop()
      result.push(arr)
    }
    return result
  } else return 'Insufficient chocolates in the dispenser'
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    let result = []
  if (number <= 0) return 'Number cannot be zero/negative'
  if (number > chocolates.length)
    return 'Insufficient chocolates in the dispenser'
  else{
    for (let i = 0; i < number; i++) {
        let arr = chocolates.pop()
        result.push(arr)
      }
    return result
  }
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(candies) {
  if (!candies) return []
  let resultArray = []
  let result = []
  for (let i = 0; i < candies.length; i++) {
    let flatarr = resultArray.flat()
    if (!flatarr.includes(candies[i])) {
      let res = candies.filter((x) => x == candies[i])
      resultArray.push(res)
      result.push(res.length)
    }
  }
  return result
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors
sortChocolateBasedOnCount([])
function sortChocolateBasedOnCount(chocolates) {
  let cho = chocolates.reduce(function (temp1, temp2) {
    if (temp2 in temp1) {
      temp1[temp2]++
    } else {
      temp1[temp2] = 1
    }
    return temp1
  }, {})
  let Array = chocolates.sort((temp1, temp2) => {
    if (cho[temp2] > cho[temp1]) {
      return 1
    }
    if (cho[temp2] < cho[temp1]) {
      return -1
    }
    if (temp1 > temp2) {
      return 1
    }
    if (temp1 < temp2) {
      return -1
    }
  })
  chocolates = Array
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
changeChocolateColor(['green', 'green', 'blue', 'blue'], 2, 'green', 'blue')
function changeChocolateColor(chocolates, number, color, finalColor) {
  let count = 0
  if (number <= 0) return 'Number cannot be zero/negative'
  if (color == finalColor) return "Can't replace the same chocolates"
  else {
    //console.log(chocolates)
    for (let i = 0; i < chocolates.length; i++) {
      if (chocolates[i] == color) {
        // console.log(chocolates[i])
        chocolates.splice(i, 1, finalColor)
        count++
        if (count == 2) break
      }
    }
    return chocolates
  }
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(candies, color, finalColor) {
  let resArray = []
  let count = 0
  if (color == finalColor) return "Can't replace the same chocolates"
  else {
    for (let i = 0; i < candies.length; i++) {
      if (candies[i] == color) {
        candies.splice(i, 1, finalColor)
        count++
      }
    }
    resArray.push(count)
    resArray.push(candies)
    return resArray
  }
}
//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
