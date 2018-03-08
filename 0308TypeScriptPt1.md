# TypeScript Intro & Install 소개와 개발 환경 구축
# Introduction 
- HTML5의 등장은 Plug-in에 의존하는 기존의 구축 방식을 JavaScript로 대체시켰다
- 이에 따라 과거 서버측이 담당하던 업무의 많은 부분이 클라이언트 측으로 이동하게 하였고 JavaScript는 웹의 Assembly언어로 불려질만큼ㅁ 중요한 언어로 그 위상이 높아지게 되었다
- Javascript가 다른 C-family언어와 다른점:
    1. Prototype-based Object Oriented Language
    2. Scope & this
    3. 동적타입 (dynamic typed) 언어 혹은 느스난 타입 (loosely typed)언어
- Javascript의 단점을 극복하기위해 CoffeeScript, Dart, Haxe와 같은 AltJS(JavaScript의 대체언어)가 등장했다
- TypeScript또한 AltJS의 하나로써 JavaScript(ES5)의 Superset(상위확장)이다
- 덴마크 소프트웨어 엔지니어 AndersHejlsberg(아네르스 하일스베르)가 개발을 주도한 TypeScript는 Microsoft에서 2012년 발표한 오픈소스로 정적 타이핑을 지원하며 ES6의 클래스, 모듈 등과 ES7의 Decorator등을 지원한다
- TypeScript는 ES5의 Superset이므로 기존의 JavaScript문법을 그대로 사용할 수 있으며 ES6의 새로운 기능들을 사용하기 위해 Babel같은 별도 Transpiler를 사용하지 않아도 ES6의 새로운 기능을 기존의 JavaScript엔진(현재의 브라우저 또는 Node.js)에서 실행할 수 있다
- 이후 ECMAScript의 업그레이드에 따른 새로운 기능을 지속적으로 추가할 예정이여서 매년 업그레이드될 ECMAScript의 표준을 따라갈 수 있는 좋은 수단이 될 것이다.
- 더욱이 AngularJS의 후속 버전인 Angular의 TypeScript 정식 채용으로 TypeScript에 관심이 커져가고 있다.
- 또한 Google은 2년간의 검토 끝에 2017년 3월 사내 표준 언어(Canonical Languages)로 TypeScript의 사용을 승인하였다. Google은 구글애널리틱스, 파이어베이스, 구글클라우드플랫폼 등 대규모 프로젝트와 버그추적, 채용검토, 제품 승인 및 출시 도구와 같은 핵심적인 내부 툴에 TypeScript와 TypeScript 기반 Angular를 사용한다고 한다.

# TypeScript를 사용하는 이유
## 정적타입
- 정적타입을 지원한다

```js
function sum(a: number, b: number) {
  return a + b;
}

sum('x', 'y'); // error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
```

## 도구의 지원
- TypeScript를 사용하는 가장 큰 장점은 IDE(통합개발환경)을 파함한 다양한 도구의 지원을 받을수 있다는 것이다
- IDE와 같은 도구에 타입정보를 제공함으로써 높은 수준의 IntelliSense, 코드 어시스트, 타입 체크, 리팩토링 등을 지원받을수 있으며 이러한 도구의 지원은 대규모 프로젝트를 위한 필수적 요소이기도하다

## 강력한 OOP 지원
- OOP라 하면 클래스 기반 객체지향을 가리킨다
- 인터페이스, 제네릭 등과 같은 강력한 OOP지원은 크고 복자한 프로젝트의 코드 기반을 쉽게 구성할 수 있도록 도우며 Java, C#등의 OOP 언어에 익숙한 개발자의 JavaScript 프로젝트에 대한 진입 장벽을 낮추는 ㅎ과 또한 갖는다

## ES6/ ES Next 지원
- 컴파일러 등의 개발환경 구축이 필요없이 브라우저만 있으면 바로 사용할 수 있는 ES5와 비교할때 개발환경 구축의 관점에서 다소 복잡해진 측면이 있으나 현재 ES6를 완전히 지원하지 않고 있는 브라우저를 고려하여 Babel등의 트랜스파일러를 사용해야 하는 현 상황에서 TypeScript개발환경 구축에 드는 수고는 그다지 아깝지 않을 것이다

## Angular
- 마지막으로 Angular는 TypeScript 뿐만 아니라 JavaScript(ES5, ES6), Dart로도 작성할 수 있지만 Angular 문서, 커뮤니티 활동에서 가장 많이 사용되고 있는 것이 TypeScript이다. 
- Angular 관련 문서의 예제 등도 TypeScript로 작성된 것이 대부분이어서 관련 정보 취득에 이점이 있으며 이러한 현상은 앞으로도 지속될 것으로 예상된다.
---

# 개발환경 구축
- TypeScript파일(.ts)은 브라우저에서 동작하지 않으므로 TypeScript컴파일러를 통해 자바스크립트 파일로 변환이 필요하다
- 이를 컴파일 또는 트랜스파일링이라 한다

