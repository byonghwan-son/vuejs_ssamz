# 원쌤의 Vue.js 퀵스타트
___
## 단일 파일 컴퍼넌트에서의 스타일
* 범위 CSS (Scoped CSS)
* CSS 모듈 (CSS Module)

### 범위 CSS
* 같은 CSS 클래스 이름이 여러 컴포넌트에서 사용되면 마지막에 import된 컴포넌트의 스타일 또는 css 파일의 속성이 적용됨.
* 충돌 방지를 위해서 ```<style scoped>```를 적용함.

### CSS 모듈
* CSS 스타일을 객체처럼 다룰 수 있게 함.
* ```<style module>```을 사용함.
* 절대 충돌하지 않을 이름으로 자동 변경됨.
* ```$style```옵션에 클래스가 등록되어 있고 등록된 클래스를 마치 객체처럼 사용함.
```html
<div :class="[$style.child, $style.italic]">...</div>
```
### 슬롯
* 부모 컴포넌트와 자식 컴포넌트 사이에 template을 전달할 때 사용
```vue
<template>
  <div>
    ......
    <slot>Item</slot>
    ......
  </div>  
</template>
```
* 명명된 슬롯 (Named Slot)
  * 여러 개의 슬롯을 지정하고 각 슬롯에 필요한 컨텐츠를 전달하는 방법
  * 화면의 레이아웃을 관리할 목적으로 많이 사용됨
  * Named Slot 을 적용하면 각 컴포넌트에서는 화면 레이아웃과 관련된 문제를 고민할 필요가 없음.
