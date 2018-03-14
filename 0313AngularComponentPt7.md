# Angular Component - Accessing Child [부모 컴포넌트에서 자식 요소로의 접근]

- Angular 애플리케이션을 작성하다보면 부모 컴포넌트에서 자식 요소(자식 컴포넌트, 디렉티브, 네이티브 DOM 요소)에 접근이 필요한 경우가 있다
- Angular는 부모 컴포넌트에서 자식 요소에 접근할 수 있는 데코레이터들을 제공한다:
    1. @ViewChild
    2. @ViewChildren
    3. @ContentChild
    4. @ContentChildren
- 이 데코레이터들은 접근이 필요한 자식 요소를 탐색하고 탐색된 요소의 인스턴스를 데코레이터가 장식한 프로퍼티에 바인딩한다.

# 1. @ViewChild와 @ViewChildren
- 컴포넌트 템플릿에 배치된 자식요소(자식 컴포넌트, 디렉티브, 네이티브 DOM 요소)를 ViewChild라고 한다.
- 이름에서 알 수 있듯이 @ViewChild는 탐색 조건에 부합하는 1개의 요소를 취득할 수 있고, @ViewChildren는 탐색 조건에 부합하는 여러개의 요소를 한꺼번에 취득할 수 있다.

## 1.1 @ViewChild
- @ViewChild 데코레이터의 인자로 탐색대상 클래스명을 지정하고 그 결과를 바인딩할 프로퍼티를 지정한다.

```ts
@ViewChild(탐색대상 클래스명) 프로퍼티명: 탐색대상 클래스명;
```

## 1.2 @ViewChildren
- @ViewChildren 데코레이터의 인자로 탐색대상 클래스명을 지정하고 그 결과를 바인딩할 프로퍼티를 지정한다. 
- @ViewChildren 데코레이터는 여러개의 자식 요소를 한꺼번에 취득한다. 이때 취득된 자식 요소를 바인딩할 프로퍼티의 타입은 QueryList이 된다.

```ts
@ViewChildren(탐색대상 클래스명) 프로퍼티명: QueryList<탐색대상 클래스명>;
```

## 1.3 탬플릿 참조 변수를 사용한 네이티브 DOM접근
- @ViewChild와 @ViewChildren 데코레이터는 자식 컴포넌트뿐만 아니라 템플릿에 배치된 모든 요소 즉, 자식 컴포넌트, 디렉티브, 네이티브 DOM 요소를 직접 탐색하고 접근할 수 있다.
- Angular는 DOM에 직접 접근하는 방식을 사용하지 않고 템플릿과 컴포넌트 클래스의 상호 관계를 선언하는 방식(선언형 프로그래밍: Declarative programming)으로 뷰와 모델의 관계를 관리한다. 
- ElementRef.nativeElement

---

# 2. @ContentChild와 @ContentChildren
## 2.1 콘텐트 프로젝션 (Content Projection)
- 