# 원쌤의 Vue.js 퀵스타트
---
## axios를 이용한 HTTP 통신
### axios란?
[axios와 fetch 비교]

| 구분          | axios                                       | fetch                                                       |
|-------------|---------------------------------------------|-------------------------------------------------------------|
| 모듈 설치       | 설치해야 함.<br/>(npm install --save axios)      | 설치할 필요 없음<br/>(브라우저 내장 API)                                 |
| Promise API | 사용                                          | 사용                                                          |
| 브라우저 호환성    | 뛰어남                                         | IE 지원하지 않음<br/>(IE에서 사용하려면 <br/>Polyfill 라이브러리를 사용해야 함)     |
| timeout 기능  | 지원<br/>(timeout 시간 내에 응답이 오지 않으면 중단시킬 수 있음) | 지원하지 않음                                                     |
| JSON 자동 변환  | 지원<br/>(Content-type 정보를 이용해 자동으로 객체로 변환함)  | 지원하지 않음<br/>(수신한 JSON 데이터를 객체로 변환하는<br/>Promise 체인을 추가해야 함) |

### 테스트용 백엔드 API 소개
* 백엔드 API와 모킹(Mocking)
* 모킹 도구 : **json-server**, mocky.io, mockoon
* 테스트 환경 백엔드 서버 : https://todosvc.bmaster.kro.kr

### 프로젝트 생성과 크로스 오리진 오류 발생
* SOP(Same Origin Policy) : 브라우저의 오리진과 동일한 오리진을 가진 서버일 때만 통신을 가능하게 한다. 라는 브라우저 내부의 보안 정책
* 도메인이 같아도 포트 번호가 다르면 오류가 발생함. (크로스 도메인(Cross Domain)과는 다름)

### 크로스 오리진 문제 해결 방법
* 벡엔드 API 서버 측에서 CORS(Cross Origin Resource Sharing) 이라는 기능을 제공해주는 방법
* 프론트 엔드 애플리케이션을 호스팅하는 웹서버에 프록시(Proxy)를 설치 또는 설정하는 방법

#### CORS (Cross Origin Resources Sharing)
* 크로스 오리진의 브라우저가 백엔드 API 서버로 요청했을 때, \
**서버에서 Access-Control-Allow-Origin HTTP 헤더로 브라우저의 오리진을 응답**하여 브라우저가 통신 및 데이터 로딩을 할 수 있도록 허용하는 방법
* 흐름 정리
  * 브라우저는 프런트 서버에서 HTML 문서를 받아와 자신의 오리진을 설정한다.
  * 자바스크립트 코드로 백엔드 API 서버로 요청한다. 이 때 자신의 오리진을 Origin HTTP 헤더에 추가한다.
  * 백엔드 API 서버는 전송된 Origin 헤더를 읽어 내어 등록된 리스트에 일치하는 것이 있는지 확인한다. (이 과정은 선택적)
  * 백엔드 API 서버는 **Access-Control-Allow-Origin** 응답 헤더를 추가하고 *** 또는 브라우저의 오리진**을 값으로 지정하여 응답한다.
  * 브라우저는 자신의 오리진과 백엔드 API 서버로부터 전송받은 **Access-Control-Allow-Origin 헤더가 일치**하면 \
  허가된 것으로 간주하고 데이터를 로딩한다.

#### 프록시를 이용한 우회
* 프런트 엔드 애플리케이션을 호스팅하는 서버(프론트 서버)에 프록시를 설치하여 브라우저가 백엔드 API서버와 통신하는 것이 아니라 프런트 서버의 프록시를 거쳐서 백엔드 API 와 통신하도록 해서 브라우저 측에서는 동일 오리진과 통신하도록 하는 방법
* 흐름 정리
  * 브라우저는 프론트 서버에 HTML 문서를 받아와 자신의 오리진을 설정한다.
  * **프록시로 요청**을 한다.
  * 프록시는 백엔드 API 서버로 요청을 전달한다
  * 전달받은 백엔드 API 서버는 실행해서 데이터를 생성한 후에 응답을 프록시로 전송한다.
  * 프록시는 백엔드 API 서버로 부터 전달받은 데이터를 브라우저로 전송한다.

```javascript
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      "/api" : {
        target: "https://todosvc.bmaster.kro.kr",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
```

* 처리 과정
  * 최초 요청 경로 : /api/todolist/gdhong
  * 타깃 : http://localhost:8000
  * 최종 전달 경로 : http://localhost:8000/todolist/gdhong


* 프런트 서버의 프록시 관련 자료
  * [웹서버 기술명] + http proxy 로 검색
  * [Node.js + express 기반의 웹서버](https://github.com/chimurai/http-proxy-middleware)
  * [Python Django](https://github.com/mjumbewu/django-proxy)
  * [JSP/Servlet](https://github.com/mitre/HTTP-Proxy-Servlet)

### axios 라이브러리 사용법
* Promise 와 async ~ await
  * 사용 방법
    * axios.get() 메서드
      * [사용 방법]
      ```javascript
      // url : 요청하는 백엔드 API의 URL을 지정합니다.
      // config : 요청시에 지정할 설정값들입니다.
      // 요청 후에는 Promise를 리턴하며 처리가 완료된 후에는 response 객체를 응답받습니다.
      axios.get(url, config)
      ```
      * [사용 예시 : Promise]
      ```javascript
      const requestAPI = () => {
        const url = "/api/todolist/gdhong"
        axios.get(url)
          .then((response) => {
            console.log("# 응답객체 : ", response)
          })
      }
      requestAPI()
      ```

      * [사용 예시 : async/await]
      ```javascript
      const requestAPI = async () => {
        const url = "/api/todolist/gdhong"
        const response = await axios.get(url)
        console.log("# 응답객체 : ", response)
      }
      requestAPI()
      ```
      * 응답 객체 속성
        * data : 수신된 응답 데이터
        * **config : 요청시에 사용된 config 옵션**
          ```javascript
            axios.get(url, {
              timeout: 2000,
              headers: { Authorization : "Bearer xxxxxxxxx" }
            })
          ```
          * [Config 옵션 관련 내용 확인](https://axios-http.com/kr/docs/req_config)
        * headers : 백엔드 API 서버가 응답할 때 사용된 응답 HTTP 헤더
        * request : 서버와의 통신에 사용된 XMLRequest 객체의 정보
        * status : 서버가 응답한 HTTP 상태 코드
        * statusText : 서버의 HTTP 상태를 나타내는 문자열 정보
    * axios.post() 메서드
      ```javascript
      // url, config는 axios.get()과 동일합니다.
      // data는 POST 요청의 HTTP Content Body 로 전송할 데이터입니다.
      axios.post(url, data, config)  
      ```
    * 기타 axios 함수
      * axios.put() : axios.put(url, data, config)
      * axios.delete() : axios.delete(url, config)
* axios 기본값 설정 및 변경
  * baseURL 을 지정해 두면 axios 로 요청할 때는 나머지 경로만 지정 가능
    ```javascript
    baseURL = '/api/todolist_long'
    axios.get('/gdhong')
    ```
```javascript
// todolist_long은 1초의 의도적 지연시간을 일으키는 엔드포인트임
axios.defaults.baseURL = '/api/todolist_long'

// 인증 토큰은 백엔드 API 요청시 항상 전달하므로 기본값으로 설정할 수 있음
axios.defaults.headers.common['Authoization'] = JWT

// timeout 에 설정된 시간내에 응답이 오지 않으면 연결을 중단(abort) 시킴
axios.defaults.timeout = 2000
```
* 에러처리
```javascript
// async ~ await 의 try~catch
<script setup>
import axios from "axios";

const requestAPI = async () => {
  const url = "/api/todolist_long/gdhong"
  try {
    const response = await axios.get(url, { timeout: 900 })
    console.log("# 응답객체 : ", response)
  } catch(e) {
    console.log("## 다음 오류가 발생했습니다.")
    if (e instanceof Error) console.log(e.message)
    else console.log(e)
  }
}
requestAPI()
</script>

// Promise의 catch 함수 이용
<script setup>
import axios from "axios";

const requestAPI = async () => {
const url = "/api/todolist_long/gdhong"
axios
  .get(url, { timeout: 900 })
  .then((response) => {
    console.log("# 응답객체 : ", response)
  })
  .catch((e) => {
    if(e instanceof Error) console.log(e.message)
    else console.log(e)
  })
}
requestAPI()
</script>


```