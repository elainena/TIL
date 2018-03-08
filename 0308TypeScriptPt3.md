# TypeScript Class
- ECMAScript 6에서 새롭게 도입된 클래스는 기존 prototype 기반 객체지향 프로그래밍보다 클래스 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있는 단순명료한 새로운 문법을 제시하고 있다. 하지만 클래스가 새로운 객체지향 모델을 제공하는 것이 아니다. 사실 클래스도 함수이고 기존 prototype 기반 패턴의 Syntactic sugar일 뿐이다. 
- Typescript가 지원하는 클래스는 ECMAScript 6의 클래스와 상당히 유사하지만 몇가지 Typescript 고유 기능이 존재한다.

---

## 클래스 정의 (Class Definition)
- ECMAScript 6 클래스는 메소드만을 포함할 수 있다.
- 클래스 바디에 멤버 변수(member variable)를 선언할 수 없고 반드시 생성자 내부에서 멤버 변수를 선언하고 초기화한다
```ts
// person.ts
class Person {
  // 멤버 변수를 사전 선언하여야 한다
  name: string;
  //멤버변수의 default는 public이다

  constructor(name: string) {
    // 멤버 변수에 값을 할당
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person = new Foo('Lee');
person.walk(); // Lee is walking
```

---

## 접근 제한자 (Access modifier)
- TypeScript 클래스는 Java, C#과 같은 클래스 기반 객체 지향 언어가 지원하는 public, private, protected 접근 제한자를 지원하며 의미 또한 기본적으로 동일하다
- 메서드에도 붙일수 있고 멤버변수에도 붙일수 있다
- public>protected>private
- protected => 외부에는 공개하지 않으나 상속관계에는 공개한다
- 굳이 알필요가 없는것을 공개안하는것
- 반드시 사전정의 하여야 한다
```ts
class Foo {
  public x: string;
  protected y: string;
  private z: string;

  constructor(x: string, y: string, z: string) {
    // public, protected, private 접근 제한자 모두 클래스 내부에서 참조 가능하다.
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const foo = new Foo('x', 'y', 'z');

// public 접근 제한자는 클래스 인스턴스를 통해 참조 가능하다.
console.log(foo.x);

// protected 접근 제한자는 클래스 인스턴스를 통해 참조할 수 없다.
console.log(foo.y); // error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

// private 접근 제한자는 클래스 인스턴스를 통해 참조할 수 없다.
console.log(foo.z); // error TS2341: Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
  constructor(x: string, y: string, z: string) {
    super(x, y, z);

    // public 접근 제한자는 자식 클래스에서 참조 가능하다.
    console.log(this.x);

    // protected 접근 제한자는 자식 클래스에서 참조 가능하다.
    console.log(this.y);

    // private 접근 제한자는 자식 클래스에서 참조할 수 없다.
    console.log(this.z); // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
  }
}
``` 

---

## 생성자 파라미터에 접근 제한자 선언
- 접근 제한자는 생성자 파라미터에도 선언할 수 있다. 
- 이때 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 멤버 변수로 선언되고 생성자 내부에서 별도의 초기화가 없어도 암묵적으로 초기화가 수행된다.
- 이때 private 접근 제한자가 사용되면 클래스 내부에서만 참조 가능하고 public 접근 제한자가 사용되면 클래스 외부에서도 참조가 가능하다
```ts
class Foo {
  // 접근 제한자가 선언된 생성자 파라미터 x는 멤버 변수로 선언되고 초기화가 자동 수행된다
  // public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다
  constructor(public x: string) { }
}
```
- 만일 생성자 파라미터에 접근 제한자를 선언하지 않으면 생성자 파라미터는 생성자 내부에서만 유효한 지역 변수가 되어 생성자 외부에서 참조가 불가능하게 된다.
```ts
class Foo {
  // x는 생성자 내부에서만 유효한 지역 변수이다.
  constructor(x: string) {
    console.log(x);
  }
}

const foo = new Foo('Hello');
console.log(foo); // Foo {}
```

---

## readonly 키워드
- Typescript는 readonly 키워드를 사용할 수 있다. readonly가 선언된 프로퍼티는 선언시 또는 생성자 내부에서만 값을 할당할 수 있다.
- 그 외의 경우에는 값을 할당할 수 없고 오직 읽기만 가능한 상태가 된다. 이를 이용하여 상수의 선언에 사용한다.
- 상수 표현
- 대부분 외부에 공개 안하기때문에 private을 쓴다

```ts
class Foo {
  private readonly MAX_LEN: number = 5;
  private readonly MSG: string;

  constructor() {
    this.MSG = 'hello';
  }

  log() {
    // readonly가 선언된 프로퍼티는 재할당이 금지된다.
    this.MAX_LEN = 10; // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
    this.MSG = 'Hi'; // Cannot assign to 'MSG' because it is a constant or a read-only property.

    console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
    console.log(`MSG: ${this.MSG}`); // MSG: hello
  }
}

new Foo().log();
```
- 항상 멤버변수에 접근하려면 this를 써야한다

---

## static 키워드
- ECMAScript 6 클래스에서 static 키워드는 클래스의 정적(static) 메소드를 정의한다.
- 정적 메소드는 클래스의 인스턴스화(instantiating)없이 호출하며 클래스의 인스턴스로 호출할 수 없다.
- Typescript 클래스에서 static 키워드는 멤버 변수에도 사용할 수 있다. ECMAScript 6와 마찬가지로 정적 프로퍼티는 클래스의 인스턴스화없이 호출하며 클래스의 인스턴스로 호출할 수 없다.

---

## 추상 클래스 (Abstract class)
- 내가 관심있는걸 부각시키고 표현하는는것
- 추상 클래스는 추상 메소드(Abstract Method)를 포함할 수 있는 클래스로서 직접 인스턴스를 생성할 수 없으며 상속만을 위해 사용된다
- 추상 클래스를 상속하는 클래스는 추상클래스의 추상 메소드를 반드시 구현하여햐 한다
- 실수를 막기위해 전체 틀을 배급하는것이다
- 만약 상속하는 클래스가 추상 클래스의 메소드를 사용하지 않으면 에러를 반환한다
- 상속만을 위한 클래스이기 때문에 new를 사용하지 못한다
- 추상 메소드는 내부가 없다
    - 상속하는 클래스마다 내부가 다를것이다라는 의미

```ts
abstract class Animal {
  // 추상 메소드
  abstract makeSound(): void;
  // 일반 메소드
  move(): void {
    console.log('roaming the earth...');
  }
}

// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.

class Dog extends Animal {
  // 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
  makeSound() {
    console.log('bowwow~~');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
```
- 커뮤니케이션 미스를 막아준다
- 인터페이스는 모든 메소드가 추상 메소드이지만 추상 클래스는 추상 메소드와 구현이 되어 있는 일반 메소드를 포함할 수 있다.