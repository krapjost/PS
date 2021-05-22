function goodVsEvil(good, evil) {  
  const getWorth = ( side, worth ) => side.split(' ')
  .reduce((acc, v, i) => acc + (worth[i] * v), 0);
  
  const result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );

  return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 0 1 0 2 1 1'))
