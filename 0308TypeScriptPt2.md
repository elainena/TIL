# TypeScript Typing
# 타입 선언과 정적 타이핑

## 타입 선언 (Type Declaration)
```ts
let foo: string = 'hello';
//foo라는 변수는 string의 타입인 값만 받을수있다. 그렇지않으면 에러를 반환한다.
```
- 선언한 타입에 맞지 않는 값을 할당하면 컴파일 시점에 에러가 발생한다.

```js
let bar: number = true; // error TS2322: Type 'true' is not assignable to type 'number'.
```
- 타입 선언은 코드 예측성을 향상시킨다. 또한 타입 선언은 강력한 타입 체크를 가능하게 하여 문법 에러나 타입과 일치하지 않는 값의 할당 등 기본적인 오류를 런타임 이전에 검출한다. 

```ts
// 함수선언식
function multiply1(x: number, y: number): number {
  return x * y;
}

// 함수표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));

console.log(multiply1(true, 1)); // error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
```
```ts
// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // Generic array type

// tuple : 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// enum : 열거형은 숫자값 집합에 이름을 지정한 것.
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3); // 4

// any : 타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수는 any 타입으로 선언한다.
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser(): void {
  console.log("This is my warning message");
}

// never : 결코 발생하지 않는 값
function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}
```

## 정적 타이핑 (Static Typing)
- C나 Java같은 C-family 언어는 변수 선언 시 변수에 저장할 값의 종류에 따라 사전에 타입을 선언(Type declaration)하여야 하며 선언한 타입에 맞는 값을 할당하여 한다. 이를 정적 타이핑(Static Typing)이라한다.
- JavaScript는 동적 타입(dynamic typed) 언어 혹은 느슨한 타입(loosely typed) 언어이다. 이것은 변수의 타입 선언없이 값이 할당되는 과정에서 동적으로 타입이 추론(타입추론 Type Inference)될 것이라는 뜻이다
- 따라서 같은 변수에 여러 타입의 값을 교차하여 대입할 수 있다. 이를 동적 타이핑(Dynamic Typing)이라 한다.
- TypeScript의 가장 독특한 특징은 정적 타이핑을 지원한다는 것이다. 즉 변수의 타입을 선언할 수 있으며 잘못된 타입의 값이 할당되면 컴파일러는 이를 감지하고 에러를 발생시킨다.
- 만약 타입 선언을 생략하면 값이 할당되는 과정에서 동적으로 타입이 결정(타입추론: Type Inference)된다. 하지만 타입 추론으로 자료형이 결정된 이후 다른 타입의 값을 할당하면 에러가 발생한다.
- 변수의 선언과 동시에 값을 초기화하지 않으면 그 변수는 any 타입이 된다. any 타입의 변수는 JavaScript의 var 키워드와 같이 어떤 타입의 값도 재할당이 가능하다. 이는 TypeScript를 사용하는 장점을 없애기 때문에 사용하지 않는 편이 좋겠다.
```ts
let foo; // let foo: any와 동치

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean
```
- 정적 타이핑은 변수는 물론 함수의 매개변수와 리턴값에도 사용할 수 있다.

```ts
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 10)); // 20
console.log(add('10', '10'));
// error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'.
```
- 정적 타이핑과 동적 타이핑의 가장 큰 차이를 컴파일 시의 에러 검출과 런타임 시의 에러 검출로 볼 수 있는데 Java와 같은 정적 타이핑 언어도 런타임에만 검출되는 에러가 존재하기 때문이다.
- 정적 타이팅의 장점은 **코드 가독성, 예측성, 안정성의 향상**이라고 볼 수 있는데 이는 대규모 프로젝트에 매우 적합하다.