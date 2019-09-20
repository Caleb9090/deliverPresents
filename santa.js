function deliverPresents(houses) {
  if (houses.length === 0) return
  
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var middle = parseInt(houses.length / 2)
    var firstHalf = houses.slice(0, middle)
    var secondHalf = houses.slice(middle)

    deliverPresents(firstHalf)
    deliverPresents(secondHalf)
  }
}

module.exports = deliverPresents
