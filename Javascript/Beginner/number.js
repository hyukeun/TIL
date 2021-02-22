// Number() code 1.

console.log(Number("123") + 500);
console.log(Number("ABC"));

// 1. "123"이 String 타입이지만 값이 숫자이므로 숫자로 변환합니다.
// 2. Number Type이 되므로 500을 더하면 값이 연결되지 않고 더해집니다.
// 3. Nuber Type으로 변환할 수 없다면 NaN 반환
// 실행 결과 
// 623
// NaN 

log(Number(0X14));
log(Number(true));
log(Number(null));
log(Number(undefined));

// 1. 16진수를 10진수로 변환
// 2. true는 1로, false는 0으로 변환됩니다.
// 3. null은 0으로 변환
// 4. undefined는 NaN으로 변환
// 실행 결과
// 20
// 1
// 0
// NaN

// new 연산자
let obj = new Number();
log(typeof obj);

// 1. 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환
// 2. 생선한 인스턴스 타입은 object
// 실행결과
// object

// toLocaleString()

let value = 1234.56;
log(value.toLocaleString());
log(value.toLocaleString('de-DE'));
// 다르게 나오는 것을 알 수 있다.
