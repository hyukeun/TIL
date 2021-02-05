
// + Operator

// code 2
let two = "2";
let value = 1 + two;
log(value);
log(typeof value);


// 숫자로 변환
// 변환된 값으로 연산 code 1, code 2, code 3

let value;
log(10 + value);
// valaue 값은 undefined 10과 undefined를 더하면 NaN NaN( Not a Number)다.

log( 10 + null);
log(10 + true);
log( 10 + false);
// null은 0으로 변환
// true는 1로, false는 0으로 변환

log(10 + "123");
// 10123
log(123 - "23");
// 100
// -, * , / 는 숫자로 변환된다. 

// 산술 연산자 (-,)
log("135" -2);
// 133

// ! 연산자
let value = true;
log(!value);
log(!!"A");


// true를 바꾸어 false로 출력
// A는  true, !A는 false, !! A는 true



// 먼저 do 문을 실행합니다.
//  [실행 결과] do : 0이 출력됩니다.
//  while 문의 표현식을 평가합니다.
// 평가 결과가 true이면 do 문의 블록을 다시 실행 k가 1이며, 3보다 작으므로 do 문을 실행합니다.
// 평가 결과가 false이면 while 문의 블록 실행 
// k가 3이면 while 문의 블록을 실행합니다.

// code 2 = 초깃값과 증감 생략

let i = 0;
for (; i < 3;){
    log(k);
    i++
}
console.log(k);
// 0,1,2

// code 3 = 비교와 증감 생략 
// not Good : 가독성이 떨어지는 code.

for (let i =0; ;){
    log(i);
    i++;
    if( k > 2) { 
        // for() 문 종료
        break;
    };
};

console.log (i);
// 0, 1, 2

// code 4 = 모두 생략 
// not Good : 직관성, 가독성 둘다 떨어진다.

let i = 0;
for( ; ;) {
    log(k);
    if( i === 2){
        break;
    };
    i++;
};
console.log(i);
// 0, 1, 2




