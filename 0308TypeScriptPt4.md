# TypeScript Interface

---

## Introduction
- 인터페이스는 일반적으로 타입 체크를 위해 사용되며 일반 변수, 함수, 클래스에 사용할 수 있다
- 인터페이스는 여러가지 자료형을 갖는 프로퍼티로 이루어진 새로운 자료형을 정의하는 것과 유사하다.
- 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다.
- ES6는 인터페이스를 지원하지 않지만 TypeScript는 인터페이스를 지원한다.
- 인터페이스는 멤버변수와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수는 없다.
---

## 변수와 인터페이스
- 인터페이스는 일반 변수의 타입으로 사용할 수 있다
- 이때 인터페이스를 타입으로 선언받는 변수는 해당 인터페이스를 준수하여야 한다
- 이것은 새로운 자료형을 정의하는 것과 유사하다

```ts
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 변수 todos의 타입으로 Todo 인터페이스를 선언하였다.
let todos: Todo[];

// 변수 todos는 Todo 인터페이스를 준수하여야 한다.
todos = [
  { id: 1, content: 'typescript', completed: false }
];
```
- 인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다. 이때 해당 함수에는 함수 파라미터의 타입으로 지정한 인터페이스를 준수하는 인수를 전달하여야 한다. 함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요없어서 매우 유용하다.

```ts
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo: Todo) {
  console.log(todo.content);
}

// 파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
```

---

## 함수와 인터페이스
- 인터페이스는 함수의 타입으로 사용할 수 있다
-  이때 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다.
- 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
```ts
// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10)); // 100
```
---

## 클래스와 인터페이스
- 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는 지정된 인터페이스를 반드시 구현하여야 한다.
- 이는 인터페이스를 구현하는 클래스의 일관성을 유지할 수 있는 장점을 갖는다. 
- 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수는 없다.
- 클래스는 타입의 이름으로도 쓰인다
```ts
// 인터페이스의 정의
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Todo implements ITodo {
  constructor (
    public id: number,
    public content: string,
    public completed: boolean
  ) { }
}

const todo = new Todo(1, 'Typescript', false);

console.log(todo);
```
- 인터페이스는 멤버변수뿐만 아니라 메소드도 포함할 수 있다. 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 멤버변수와 메소드를 반드시 구현하여야 한다.

```ts
// 인터페이스의 정의
interface IPerson {
  name: string;
  sayHello(): void;
}

// 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 멤버변수와 메소드를 반드시 구현하여야 한다.
class Person implements IPerson {
  // 인터페이스에서 정의한 멤버변수의 구현
  constructor(public name: string) {}

  // 인터페이스에서 정의한 메소드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person('Lee');
greeter(me); // Hello Lee
```

---
## 덕 타이핑 (Duck Typing)
```ts
interface IDuck { // 1
  quack(): void;
}

class MallardDuck implements IDuck { // 3
  quack() {
    console.log('Quack!');
  }
}

class RedheadDuck { // 4
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void { // 2
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
```
- 굳이 인터페이스를 implement를 하지 않았어도 내용값이 같기때문에 같은 type으로 간주/인정 할수 있다.
- "구조적 타이핑(structural typing)"이라 한다

```ts
interface IPerson {
  name: string;
}

function sayHello(person: IPerson): void {
  console.log(`Hello ${person.name}`);
}

const me = { name: 'Lee', age: 18 };
sayHello(me); // Hello Lee
```

---

## 선택적 프로퍼티 (Optional Property)
- 인터페이스의 프로퍼티는 반드시 구현되어야 한다.
- 하지만 인터페이스의 프로퍼티가 서낵적으로 필요한 경우가 있을 수 있다
- 선택적 프로퍼티는 프로퍼티 명 뒤에 "?"를 붙이며 생략하여도 에러가 발생하지 않는다

```ts
interface IUserInfo {
  username: string;
  password: string;
  age?    : number;
  address?: string;
}

const userInfo: IUserInfo = {
  username: 'ungmo2@gmail.com',
  password: '123456'
}

console.log(userInfo);
```
- 선택적 프로퍼티를 사용하면 사용 가능한 프로퍼티를 파악할 수 있어서 코드를 이해하기 쉬워진다.
