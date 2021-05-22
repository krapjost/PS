let bf, af, ms;

function getDivisorsCnt(n){
    let cnt = 1
    for (let d=n/2; d>=1; d--){
      if (Number.isInteger(n/d)){
        cnt ++
      }
    }
  return cnt
}

bf = Date.now()
console.log(getDivisorsCnt(50000))
af = Date.now()
ms = new Date(af - bf).getMilliseconds()
console.log("time took :", ms, "ms")
