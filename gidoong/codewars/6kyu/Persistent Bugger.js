/*
  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
  persistence(4) === 0 // because 4 is already a one-digit number
*/

//my solution
function persistence(num) {
  function recurse(num, cnt = 0) {
    const arr = num.toString().split('');
    if ( arr.length > 1 ) {
      cnt ++;
      const tempNum = arr.reduce((acc, cur, idx)=> {
      if (idx === 0) {
        acc += cur
      } else {
        acc = acc * cur
      }
        return acc
      }, 0)
      return recurse(tempNum, cnt)
    } else {
      return cnt;
    }
  }
  return recurse(num)    
}

//clever
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}

/*

	배운 것

	1. toString보다 ``쓰는 게 더 깔끔하게 읽힌다.
	2. [...${num}] than ${num}.split('')
	3. count를 어떻게 세는지 이해가 안됨
		num의 자릿수가 1보다 크면
		자릿수끼리 곱해서 다시 곱한 값울 파람으로 태워 재귀
		재귀마다 리턴값에 1을 더함
*/
