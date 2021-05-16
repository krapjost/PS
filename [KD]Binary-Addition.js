function addBinary(a,b) {
  let sum = a+b
  let result = ""
  
  while (1 < sum) {
    result += `${parseInt(sum)%2}`
    sum = sum/2
  }
  return [...result].reverse().join("")
}

console.log(addBinary(14,39))

