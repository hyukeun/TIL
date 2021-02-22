# Number Object

- 숫자(1,2,3) 처리를 위한 오브젝트
- 즉, Number 오브젝트에 숫자처리를 위한 함수와 프로퍼티가 포함되어 있으며 함수를 처리하게 된다.   

## See the property list forest.

<br/>

|Name|Meaning|
|:--:|:--:|
| new Number() | 인스턴스 생성 |
| Number() | 숫자 값으로 변환하여 반환 |
| Number.prototype ||
| constructor | 생성자 |
| toString() | 숫자 값을 문자열로 변환 |
| toLocaleString() | 숫자 값을 지역화 문자로 변환 |
| valueOf() | 프리미티브 값 반환 |
| toExponential() | 지수 표기로 변환 |
| toFixed() | 고정 소숫점 표기로 변환 |
| toPrecision() | 고정 소숫점 또는 지수 표기로 변환 |   

<br/>

### Number()
<br/>

| Division | data(value) | 
|:--:|:--:|
| parameter | data(vale) |
| parameter | 변환할 값 OPT |
| retrun | 변환한 값 |

<br/>

- 파라미터 값을 Number type으로 변환
- 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
- 숫자로 변환할 수 있으면 변환
- 파라미터 값을 작성하지 않으면 0을 반환

<br/>

### Number 상수

<br/>

| Constant Name | data(value) |
|:--:|:--:|
| Number.MAX_VALUE | 1.79769313486233157 * 10 (308승) |
| Number.MIN_VALUE | 5 * 10(-324승) |
| Number.NaN | Not-a-Number |
| Number.POSITIVE_INFINITY | Infinity |
| Number.NEGATIVE_INFINITY | -Infinity |

<br/>

- 상수는 값을 변경, 삭제할 수 없음
- 영문 대문자 사용이 관례
- Number.MAX_VALUE 형태로 값을 사용

<br/>

### Number 연산자

<br/>

| Division | data(vale) |
|:--:|:--:|
| constructor | 생성자 |
| parameter | Value OPT |
| Return | 생성한 인스턴스 |

<br/>

- 오브젝트로 인스턴스를 생성하여 반환
- 원본을 복사하는 개념
- new 연산자를 사용하면 인스턴스
- 코딩 관례로 첫 문자를 대문자로 작성
- 인스턴스 생성 목적 
- 인스턴스마다 값을 갖기 위한 것 

<br/>

### new Number()

<br/>

| Division | data(value) |
|:--:|:--:|
| parameter | ValueOPT |
| Return | 생성한 Number 인스턴스 |

<br/>

- 빌트인 Number 오브젝트로 새로운 Number 인스턴스를 생성
- 인스턴스 형태 ( 추후 링크 만들기 )

<br/>

### Primitive Value
- 언어에 있어 가장 낮은 단계의 값
- var book = "책"; -> "책"은 더이상 분해, 전개 불가
- Primitive Type
> Number,string, boolean: 인스턴스 생성 가능  
> Null, Undefined: 인스턴스 생성 불가  
> Object는 Primitive value을 제공하지 않음  

### Instance의 Primitive Value
- var obj = new Number(123);
- 인스턴스를 생성하면 파라미터 값을 인스턴스의 프리미티브 값으로 설정
- 프리미티브 값을 갖는 오브젝트
- Boolean, Date, Number, String ( 추후 code )

<br/>

### valueOf()
| Division | data(value) |
|:--:|:--:|
| data | Number 인스턴스, 숫자 |
| Parameter | 사용하지 않음 |
| Return | Primitive Value |

<br/>

- Number 인스턴스의 프리미티브 값 반환

### toString()
| Division | data(value) |
|:--:|:--:|
| data | 변환 대상 |
| parameter | 진수(2~36)opt, default: 10진수 |
| return | 변환한 값 |

<br/>

- data를 String 타입으로 변환
- 변환할 때 주의 사항

### toLocaleString()

| Division | data(value) |
|:--:|:--:|
| data | 변환 대상 |
| parameter | 변환 대상 |
| return | 변환한 값 |

<br/>

- 숫자를 브라우저가 지원하는 지역화 문자로 변환
- 지역화 지원 및 형태를 브라우저 개발사에 일임
- 지역화를 지원하지 않으면 toString()으로 변환
- 스펙 상태 
- ES5: parameter 사용 불가
- ES6: parameter 언어 타입 사용 가능

### toExponential()
| Division | data(value) |
|:--:|:--:|
| data | 변환 대상 |
| Parameter | 소수 이하 자릿수 ( 0 ~ 20 ) |
| 반환 | 변환한 값 |

<br/>

- 숫자를 지수 표기로 변환하여 문자열로 반환
- 파라미터 소수 이하 자릿수 작성
- 0 ~ 20까지
- 표시 방법
- 변환 대상의 첫 자리만 소수점(.) 앞에 표시
- 나머지는 소수 아래에 표시
- 지수(e+) 다음에 정수에서 소수로 변환된 자릿수 표시

<br/>

### toFixed()
| Division | data(value) |
|:--:|:--:|
| data | 변환 대상 |
| parameter | 변환할 소수 이하 자릿수 |
| return | 변환한 값 |

<br/>

- 고정 소숫점 표기로 변환하여 문자열로 반환
- 파라미터에 소수 이하 자릿수 작성 
- 0 ~ 20까지

- 표시 방법
- 파라미터 값보다 소수 자릿수가 길면 작성한 자리수에 1을 더한 위치에서 반올림
- 변환 대상 자릿수보다 파라미터 값이 크면 나머지를 0으로 채워 반환

