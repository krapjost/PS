function solution(str){
  let arr = []
  let res = ""
  for (let i = 0 , l = str.length-1; i<=l; l--){
    arr.push(str[l])
    res += arr.pop()
  }
  return res 
}

console.log(solution("reverse me"))
