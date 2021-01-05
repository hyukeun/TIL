# Project

## 나의 책 관리하기

### 어떻게 API를 가져오는가 ?

- axios를 사용해서 protocol를 불러온느 형식으로 https를 요청하거나 불러올 수 있는 라이브러리이다.
- axios는 promise형태로 지원이 된다. 그래서 then을 이용해서 서버로부터 정상적으로 가지고오게되면 res가되서 나오게한다.
- 또한 이것을 async-await로 사용해서 값을 나오게 할 수 있다.


```js
// Login Promise
axios.post('https://api.marktube.tv/v1/me', {
    email,
    password,
}).then(res => {});

// Login Async-Await
const res = await axios.post('https://api.marktube.tv/v1/me',{
    email,
    password,
});

```