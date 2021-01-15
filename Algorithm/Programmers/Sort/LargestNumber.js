'use strict';

function solutions(numbers){
    
    let answer = numbers.map(v => v + '').sort((a,b) => (b + a) * 1 - (a + b) * 1).join('');
    
    return answer[0] === '0'?'0' : answer;
}



// function solution(numbers) {
//     var answer = [];
    
//     fot(let i = 0 ; i< numbers.length ; i++){
//         numbers.sort(a-b)
//     }
//     answer.numbers.push
    
//     return answer;
// }

// // 안에서 한번 정리를 해주는 역할을 해줘야할 것 같다. 
// // 가장 큰수를 고를 수 있게 해주려면 어떻게 해야 할까?


// join으로 합쳐주었으며 map()사용해서 풀어준다. 
// 마지막에 삼항연산자를 사용하여 0의 예외처리를 해줘서 방어코드를 작성해 주었다.
