# Javascript

## 문장(Statement)

### break
- 형태 : break;, break 식별자;
- for, for ~in, while, do~while, switch에서 사용

```js
// code 1.

let k = 0; m = 0;
while ( k < 3 ) {
    m++;
} if ( m === 2 ){
    break;
};
log(m);
};
console.log(m);

// m이 2면 while() 문을 종료 console.log(m)을 실행하지 않습니다.
// 1

// code 2.

for( let k = 0; k < 3; k++) {
    if ( k === 1){
        break
    } log("k === 1");
};
log(k);
};
// break 끝에 세미콜론을 자동으로 첨부 후 console.log("k === 1")을 실행하지 않습니다.
// 0
```

### continue

- 형태 : continue;, continue 식별자;
- 반복문의 처음으로 분기 
- for, for~in, while, do~while에서 사용
- ++로 가게 되고 다음으로 넘어가는 것으로 이해하면 된다.

```js
for (let k= 0; k < 5; k++) {
    if ( k === 2 || k === 3) {
        continue;
    };
    log(k);
};

// k가 2또는 3이면 continue 문을 수행, 아래의 console.log(k)를 실행하지 않습니다.
// 0,1,4

```

### switch



```js

let exp = 1;
switch(exp){
    case 1:
        log(100);
    case 2:
        log(200);
};

// switch(exp)에서 exp를 평가하여 값을 구하고 구한 값에 일치하는 case 문을 수행
// exp 값이 1이므로 case 1:을 수행

// 주의할점.
// case 1 아래의 모든 문장을 수행하므로 200이 출력된다.
// 이를 방지하려면 break를 작성해야한다.
// result = 100, 200
```

### strict mode

- 형태 : "use strict"
- 엄격하게 JS 문법 사용의 선언
- 작성한 위치부터 적용
- ES5부터 지원
- src 파일 처음에다가 작성하는 것 습관들이기.
