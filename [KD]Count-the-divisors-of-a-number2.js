function getDivisorsCnt(n){
    let cnt = 1
    for (let d=n/2; d>=1; d--){
      if (Number.isInteger(n/d)){
        cnt ++
      }
    }
  return cnt
}
console.log(getDivisorsCnt(40000))
