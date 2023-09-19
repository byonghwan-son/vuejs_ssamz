# 원쌤의 Vue.js 퀵스타트
___
## 스타일 적용
### 인라인 스타일
* v-bind:style로 작성
* style로 지정할 정보는 데이터 속성에 자바스크립트 객체로 작성
* camel casing
* 스타일 간의 comma 구분
* ex) font-size → fontSize
　document.getElementById('a').style.**fontSize** = '20pt';
* :style="..."
* :style="[myColor, myLayout]"
### CSS 클래스 바인딩
* v-bind:class="......", :class="......"
* CSS 클래스명 문자열을 바인딩하는 방법
  * :class="[myColor, myLayout]"
  * :class="[myColor, 3항 연산자]"
* true/false 값을 가진 객체를 바인딩하는 방법
  * :class="{bColor:setColor, bLayout:setAlign, bBorder:setBorder}" setXXXX 은 bool 값.
* 계산된 속성이나 메서드가 리턴하는 값이 CSS 클래스명의 문자열이거나 { 클래스명 : true / false } 형태의 객체라면 손쉽게 CSS 클래스로 바인딩 가능
### TodoList 예제
* 화면 단위 개발에서 가장 먼저 할 것은 data의 구조를 정하는 것.
* data가 정의되면 data를 변경하는 메서드나 계산된 속성, 경우에 따라서는 관찰 속성을 정의
* 삭제 처리하는 이벤트에 .stop 수식어를 등록했음. 이 수식어를 작성하지 않으면 이벤트 버블링이 발생해서 완료토글까지 실행되면서 오류 발생함.