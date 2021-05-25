let bf, af, ms;
const getDivisorsCnt = (n) => {
  let i = n, c = 0;
  while (i>0){
    if (n % i === 0) c++; i--;
  }
  return c;
}
bf = Date.now()
console.log(getDivisorsCnt(50000))
af = Date.now()
ms = new Date(af - bf).getMilliseconds()
console.log("time took :", ms, "ms")
