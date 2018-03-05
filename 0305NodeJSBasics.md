# Node.js Basics

# Introduction
- Node.js는 Chrome V8 JavaScript엔진으로 빌드된 Javascript 런타임 환경으로 주로 서버사이드 애플리케이션 개발에 사용되는 소프트웨어 플랫폼이다
- Node.js는 브라우저 외부 환경에서 JavaScript 애플리케이션 개발에 사용되며 이에 필요한 모듈, 파일 시스템, HTTP등 Built-in API를 제공한다
- 언어로는 자바스크립트를 사용한다
- Front-end와 Back-end에서 자바스크립트를 사용할수 있다는 동형성(isomorphic)은 별도의 언어학습시간을 단축시켜주는 장점을 갖는다
- Back-end 
    - 요청을 받으면 일이 시작된다
    - 클라이언트에게 정적파일을(주로 만들어져있는 파일) 제공
    - REST API를 정의하고 처리가 가능해야한다
    - Data Base (정리가 체계적으로 잘 되어있는 창고같은 개념)
    - DB가 Front-end와 Back-end의 근본적인 차이
- Java, Spring, Python에 비해 Node-js는 빨리 쉽게 만들수 있다
- Node.js는 레퍼런스가 별로 없는게 단점이다 
    - 셰어가 작은 이유는 아직 안정성에 대한 측면, 또는 속도 즉 퍼포먼스라 하는것들이 중요한데 그런 측면에서 약간 단점이 있을수도 있다
- 모든것을 Node.js로 만드는것이 아니라, Node.js로 만드는게 적합한 애플리케이션들이 있다
- Node.js는 서버가 아니라 브라우저 이외에 환경에서 자바스크립트가 돌아갈수 있는 환경이다 플랫폼이다
- Non-blocking I/O 비동기 통신한다는 뜻 Node.js는 거의 100%와 가깝게 비동기처리다
- 단일 스레드 이벤트 루프 - 브라우저도 단일스레드 이벤트 루프로 돈다 
    - 서버상에서는 장단점이 있다
    - 장점: 이벤트 루프 방식/비동기로 돌기때문에 단일 스레드지만 고속으로 돌수 있다
    - 단점: CPU를 많이 쓰는 연산을 하는것은 Node.js에 취약하다
    - Node.js는 단순하고 간단한 메신저 기능들 대량으로 하는것에 적합하다 
    - 하지만 한번 처리가 무거운것들은 적합하지 못하다. 그런것은 멀티 스레드로 돌려야한다 => ie. socket.io
- LTS (Long-term Supported) 안정버전

# Node.js & npm
# 모듈화와 npm (node package manager)
## 모듈화와 CommonJS
- 
## npm
- 패키지(모듈)를 관리하는 툴

### Semantic Versioning
- Major
    - 메이저 버전이 올라가면 호환성문제가 될수 있다
- Minor
    - 마이너 버전이 바뀌는건 호환성이 보장된다
    - 캐럿(^)는 버전을 명시하면 마이너 버전 업그레이드를 할수도있다
- Patch
    - 틸트(~)는 패치버전 범위 내에서 업데이트한다

---
# Node.js Module
- 모듈은 module.exports 또는 exports 객체를 통해 정의하고 외부로 공개한다. 그리고 공개된 모듈은 require 함수를 사용하여 임포트한다

## exports
- 모듈은 독립적인 파일 스코프를 갖기 때문에 모듈안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조가능하다
- exports 객체에는 값을 할당할 수 없고 공개할 대상을 exports 객체에 프로퍼티 또는 메소드로 추가한다.
- require 함수의 호출 결과:
    - exports 객체에 추가한 프로퍼티와 메소드가 담긴 객체가 전달된다.

## module exports
- module.exports 객체에 하나의 값(기본자료형, 함수, 객체)만을 할당한다.
- require 함수의 호출 결과
    - module.exports 객체에 할당한 값이 전달된다.