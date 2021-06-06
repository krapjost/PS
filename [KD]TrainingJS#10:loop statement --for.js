/*
 숫자 배열 하나를 인자로 받아 홀수 배열과 짝수 배열로 나눠 담아 해당 두 배열을 리턴하자.
*/

// 내 해결
function pickIt1 (arr){
  const odd=[],even=[];
  for (let i=0; i<arr.length; i++){
    Number.isInteger(arr[i]/2)
    ? even.push(arr[i])
    : odd.push(arr[i])
  }
  return [odd,even];
}

// 다른 사람 해결 참고
function pickIt2 (arr) {
  const odd = []; 
  const even = [];
  
  for (x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
  
  return [odd, even]
}

/*
 배운 것

	1. 2로 %연산하면 1 또는 0으로 나눠지고 0은 false로 boolean 처리된다.
	2. for of 문에서 x는 let이나 const를 명시해줘도 되고 안해도 작동은 하는 것 같은데...차이가 뭘까
	3. 삼항연산자에 괄호를 주면 코드를 줄일 수 있다.
*/
