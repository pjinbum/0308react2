# 0308react2

HTML을 반복문으로 축약하는 방법 ⇒ 자바스크립트 문법 중에 **map( )** 이라는 게 있음! 

- map( ) 함수는 코드를 간결하고 가독성 있게 유지하는 데 매우 유용하다. 하지만, 비교적 느리기 때문에 대용량 데이터를 처리할 때는 성능 문제를 고려해야 한다.

**Javascript : map( ) 함수**

- 모든 Array 자료 뒤에는 map을 붙일 수 있다
- map 뒤에는 콜백 함수가 온다 (소괄호 안에 들어가는 함수)
- 콜백 함수가 배열의 각 요소에 실행되면서 그 값을 변환한다.

```jsx
{
  [1,2,3].map(function(){
    return <div>안녕?</div>
  })
}
```

- map함수가 array의 자료 갯수만큼 return을 반복한다

```jsx
[1,2,3].map(function(num){
  console.log(1)
})
```

- 매개변수(파라미터)를 만들어주면 함수의 파라미터는 array안에 있는 자료 하나하나의 데이터가 된다
- map함수를 쓰면 리액트 환경에서 쉽게 반복문을 사용할 수 있다!

map 쓰고나면 그 자리에 [ ] array가 남음

[<div>안녕?</div>,<div>안녕?</div>,<div>안녕?</div>]

- 리액트는 array 안에 html을 담아도 잘 보여준다.

### map( )

- **`map()`**함수는 각 원소에 대해 **`callback`**함수를 실행한 결과를 새로운 배열로 반환한다.

```jsx
const num = [1,2,3,4,5];
const newNum = num.map((num)=> num + 1)
console.log(num)
// [1, 2, 3, 4, 5]
console.log(newNum)
// [2, 3, 4, 5, 6]
```

- **01. 배열 값 제곱한 새로운 배열 만들기**
    
    ```jsx
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.map(function(num) {
      return Math.pow(num, 2);
    });
    console.log(newArr); // [1, 4, 9, 16, 25]
    ```
    
    - map( ) 함수로 arr이라는 배열 안에있는 각 요소를 새로운 배열 newArr 에 할당한다.
    - map( ) 함수는 배열을 순회하면서 각 요소에 대해 함수를 실행하고 그 결과를 새로운 배열에 담아 반환한다.
    - arr의 각 요소를 제곱하기 위해 Math.pow( )를 사용
    - Math.pow(num, 2) 첫번째 인자에게 두 번째 인자만큼을 거듭제곱 한다.
    - arr의 각 요소들을 순회하면서 제곱한 값들을 newArr에 담는다.
- **02. 문자열을 대문자로 변경한 새로운 배열 만들기**
    
    ```jsx
    let arr = ["yejin", "lee", "dw"];
    let newArr = arr.map(function(str) {
      return str.toUpperCase();
    });
    console.log(newArr); 
    ```
    
- **03. 객체의 속성값을 추출한 새로운 배열 만들기**
    
    ```jsx
    let arr = [
      { name: "yejin1", age: 100 },
      { name: "yejin2", age: 101 },
      { name: "yejin3", age: 102 }
    ];
    
    let newArr = arr.map(function(obj) {
      return obj.name;
    });
    console.log(newArr);
    ```
    
- **04. 배열의 각 요소에 인덱스 값을 더하기**
    
    ```jsx
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.map(function(num, index) {
      return num + index;
    });
    console.log(newArr);
    
    // [1, 3, 5, 7, 9]
    ```
    
    - arr이라는 배열의 각 요소에 그 인덱스 값을 더한 값을 newArr이라는 배열에 반환한다.
    - arr 배열의 첫번째 요소는 1이고 인덱스는 0, 첫번째 반복에서 1 + 0 = 1이므로 배열의 첫번째 요소는 1이 된다.
    - 2 + 1 = 3;
    - 3 + 2 = 5;

**같은 html 반복 생성하는 법**

```jsx
{
  [1,2,3,4].map(function(a){
    return (
      <div className="list">
        <h4>title</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    )
  })
}
```

- return에서 한 줄 이상 길어질 때는 소괄호로 감싸준다.
- 이런식으로 작성하면 코드의 확장성이 떨어지기 때문에 array의 갯수만큼 작성 되도록 코드 수정

```jsx
let [title, setTitle] = useState(["DW아카데미 501호", "DW아카데미 503호", "DW아카데미 201호",]);

{
  title.map(function(a, i){
    return (
      <div className="list">
        <h4>{title[i]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    )
  })
}
```

- 반복문이 돌 때 마다 array안에 있는 하나 하나의 데이터가 된다

```jsx
{
	title.map(function(a){
	  return (
	    <div className="list">
	      <h4>{a}</h4>
	      <p>안녕하세요. 저는 이예진 입니다.</p>
	    </div>
	  )
	})
}
```

**파라미터 2개 작명 가능**

두번째 파라미터 = array안에 있는 데이터의 정수 (반복문이 돌 때 마다 1씩 증가하는 정수가 된다)

1. 첫번째 파라미터는 array 안에 있는 자료
2. 두번째 파라미터는 0부터 1씩 증가하는 정수

```jsx
{
  title.map(function(a, i){
    return (
      <div className="list">
        <h4>{title[i]}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    )
  })
}
```

**좋아요 버튼 추가**

- 하나를 눌러도 모든 좋아요 숫자가 올라간다

```jsx
{
  title.map(function(a, i){
    return (
      <div className="list">
        <h4>{a} <span onClick={() => {setLike(like + 1);}}>👍</span>{like}</h4>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    )
  })
}
```

클릭하는 버튼만 숫자가 카운팅되게 코드짜기

- 글마다 엄지 버튼을 배열에 담아 분리해준다.

```jsx
let [like, setLike] = useState([0,0,0]);

{
  title.map(function(a, i){
    return (
      <div className="list">
        <h4>{title[i]}</h4>
        <span onClick={()=>{
          let copy = [...like]
          copy[i] = copy[i] + 1
          setLike(copy)
        }}>👍 {like[i]}</span>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    )
  })
}
```

![화면 캡처 2023-02-23 143106.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec822a31-b04f-4e81-a3eb-249d5c564335/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-02-23_143106.png)

반복문으로 html생성시 key={html마다 다른숫자}를 추가 해야한다. (유니크한 숫자)

```jsx
{
  title.map(function(a, i){
    return (
      <div className="list" key={i}>
        <h4>{title[i]}</h4>
        <span onClick={()=>{
          let copy = [...like]
          copy[i] = copy[i] + 1
          setLike(copy)
        }}>👍 {like[i]}</span>
        <p>안녕하세요. 저는 이예진 입니다.</p>
      </div>
    )
  })
}
```

- 콜백함수에 파라미터 작성하면 그 파라미터는 어레이 안에있는 모든 자료를 하나씩 출력 해준다.
- 배열 안의 갯수만큼 map 내부 코드를 실행 한다.
