<!-- Heading -->
# Heading 1
- Heading 1 아래에는 수평선이 자동으로 추가 된다.
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

<!-- Heading 사용 안할시 기본 글꼴로 나오게 된다. -->
TEST 1. I like markdown so much :)

<!-- Line -->
___
- underscore 3번을 작성하면 line이 추가가 된다. 

<!-- Text attributes -->
This is the **bold** text and this is the *italic* text and let's do ~~strikethrough~~.
- text 속성도 변경이 가능하며 원하는 단어에 (**) 로 감싸주면 Bold 체가 된다. 
- (*) 만 감싸주게 되면 italic 체가 된다.
- (~~) 물결모양 2개로 감싸주게되면 strikethrough가 된다.

<!-- Quote -->
> Don't forget to code your dream.
- 원하는 문장을 quote(인용구) 안으로 넣을 수 있다. 

<!-- Bullet list -->
Fruits :
* 🍍
* 🍇

Other fruits:
- 🍎
- 🍊

- (*) 하나만 달아주면 목록으로 변환이 된다. (-)로도 사용가능하다.

<!-- Numbered list -->
Numbers:
1. first
2. second
3. third 

- 숫자를 이용해서 숫자 목록으로도 만들 수 있다.

<!-- Link -->
Click [here](https://github.com/)

- 소괄호 안에 원하시는 링크를 작성하게되면 클릭이 가능하게 나타낼 수 있다. 

<!-- Image -->
![Image description](https://health.chosun.com/site/data/img_dir/2017/08/28/2017082801036_0.jpg)

- 느낌표 옆에 대괄호 안에 이미지에 대한 설명을 작성한 다음에 소괄호 안에 이미지에 링크를 추가하면 이미지가 나오는 것을 확인할 수 있다. 

<!-- Table -->
|Header|Description|
|--|--|
|Cell1:|Cell2|
|Cell1:|Cell2|
|Cell1|:Cell2|
|Cell1|:Cell2|

- 많은 분들이 모르는 table이다. 많은 데이터를 조금 더 효율적으로 표현할 수 있게 도와준다. 
- | 내용을 적고 마지막에 막대기를 하나 더 넣어주면 한 cell로 완성이 된다. 그런 다음 밑에 다시 | -- | -- | 로 닫아주면 테이블로 변환이 되는 것을 알 수 있다. 
- : 사용하여 오른쪽과 왼쪽 정렬로 사용가능하게 해준다. 중간으로 정렬하고 싶다면 양쪽으로 ::을 사용하면 된다. 

<!-- Code -->

To print message in the console, use 'console.log('your message')' and..

```js
 console.log('your message');
```

- 다음은 개발자들을 위한 코드인데 문서 안에서 특정한 코드를 보여 주고 싶다면 텍스트 형태로 적기보다는 `(백틱)을 이용해서 감싸주면 인라인 형태로 포멧이 가능하다.
- 다수의 코드가 들어있는경우 ``` 누른 다음에 여기 안에 코드를 작성하고 똑같이 닫아주면 코드 블럭이 만들어 진다. 
- 또한 해당 코드에 언어를 표현해주면 하이라이트가 아름답게 변화하는 것을 알 수 있다.

<!-- GitHub Flavered Markdown -->

- 깃허브에서 다음과 같은 것을 지원하며 기존 Markdown에서 크게 변형 되지 않았는데 한가지 재미이쓴것은 task Lists 목록을 추가 할 수가 있다. 
- 또한 이미지를 수정할 때 일관된 사이즈로 html 언어로 작성하면 가능해진다. (width = 400)