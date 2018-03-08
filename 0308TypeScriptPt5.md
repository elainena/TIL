# TypeScript Generic

```ts
class Queue<T> {
  protected data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

// number 전용 Queue
const numberQueue = new Queue<number>();

numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1');   // 실수를 사전 인지하고 수정할 수 있다

console.log(numberQueue.pop().toFixed()); // 0
console.log(numberQueue.pop().toFixed()); // 1

// string 전용 Queue
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop().toUpperCase()); // HELLO
console.log(stringQueue.pop().toUpperCase()); // WORLD

// 커스텀 객체 전용 Queue
const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: 'Lee', age: 10});
myQueue.push({name: 'Kim', age: 20});

console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
```
- 제네릭은 선언시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다
- 한번의 선언으로 다양한 타입에 재사용이 가능하다는 장점이 있다
- T는 제네릭을 선언할 때 관용적으로 사용되는 식별자로 타입파라미터(Type Parameter)라 한다
- 함수에도 제네릭을 사용할 수 있다
- 제네릭을 사용하면 하나의 타입만이 아닌 다양한 타입의 매개변수와 리턴값을 사용할 수 있다

```ts
function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const arg = [{name: 'Lee'}, {name: 'Kim'}, {name: 'Park'}];

// 인수에 의해 타입매개변수가 결정된다
const reversed = reverse(arg); // reversed: {name: string}[]
//타입추론에 의해 꺽새를 사용해 타입을 명시해 주지 않아도 된다
console.log(reversed);

reversed.push({name: 100}); // Error
console.log(reversed);
```
