const getDivisorsCnt = (n) => {
  let i = n, c = 0;
  while (i>0){
    if (n % i === 0) c++; i--;
  }
  return c;
}

console.log(getDivisorsCnt(1242))
