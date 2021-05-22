function isValidIP(str) {
  function reducer(acc, v){
    const n = Number(v)
    if (v===n.toString()&&n<256&&n>=0){
      acc.push(n)  
    }
    return acc
  }
  let result = str.split('.').reduce(reducer, []).length === 4
  return result
}

console.log(isValidIP("123.123.123.123"))
console.log(isValidIP("asd.123.123.-123"))
console.log(isValidIP("\n123.123.123.123"))
