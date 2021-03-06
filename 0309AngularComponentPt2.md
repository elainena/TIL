# Angular Component- Template
# 템플릿과 템플릿 문법

---

# 1. 템플릿(Template)이란?
- 템플릿은 HTML과 Angular 고유의 템플릿 문법(Template Syntax)을 사용하여 UI의 최소 단위인 컴포넌트의 뷰를 정의한다. 
- 동적으로 변하는 데이터는 컴포넌트 클래스가 관리하며 템플릿 문법의 데이터 바인딩에 의해 정적 HTML에 포함된다.
- Angular는 템플릿과 컴포넌트 클래스로 뷰와 모델(데이터와 비즈니스 로직)을 분리한다
- Angular는 컴포넌트 기반 개발(CBD, Component Based Development) 프레임워크이기 때문에 MVC(Model-View-Controller) 또는 MVVM(Model-View-ViewModel) 패턴과 일치하지는 않지만, 템플릿은 뷰(View)를 나타내고 컴포넌트 클래스는 Controller와 ViewModel의 일부를 담당한다고 할 수 있다.

---
# 템플릿 문법 (Template Syntax)
- 템플릿 문법은 템플릿을 작성하기 위한 Angular 고유의 확장 표기법으로 템플릿과 컴포넌트 클래스 간 데이터 공유를 위한 데이터 바인딩과 동적으로 DOM 구조, 스타일 등을 변경할 수 있는 빌트인 디렉티브 등을 지원한다. 
- 템플릿 내에서 스크립트 요소를 쓸수 없다
- 클래스 내에서 쓰면되고 굳이 템플릿 내에 쓸 필요가 없다
- 그리고 보안상 문제도 있다
- 대입연산자(=, +=, -=), 증감 연산자(++, --), 비트 연산자(|, &), 객체 생성 연산자(new)도 사용 금지항목이다
- 전역 스코프를 갖는 빌트인 객체는 템플릿 내부에서 사용 금지다 (window에 위치한것들)
- html, body, base 요소는 템플릿 내 사용 금지 항목은 아니지만 사용해서는 안된다.
- base 태그-> 상대경로에서 루트를 지정하는 경로