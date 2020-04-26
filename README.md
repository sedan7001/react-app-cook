##react-app-cook

### 소개
- cook v1을 기반으로 프론트엔드를 React로 마이그레이션
- Atomic Design 적용하여 재사용이 가능한 디자인 구조화
- 모든 서비스는 REST API로 클라이언트와 서버가 통신
 
### 개발 환경

- react: 16.4.1

- axios: 0.18.0 - 프로미스 기반 HTTP Client

- immutable: 3.8.2 - 임뮤터블 데이타 관리를 위한 도구

- redux: 4.0.0

- react-redux: 5.0.7

- redux-saga: 0.16.0

- redux-pender: 1.2.1 - 비동기 리덕스 액션 관리 라이브러리

- styled-components: 3.3.3 - JS 내부에서 컴포넌트 스타일링을 도와주는 라이브러리

- cross-env: 5.2.0 - 환경변수를 모든 운영체제에서 호환되는 형태로 설정해주는 라이브러리

- webpack: 3.8.1

- eslint: 4.10.0

## 세팅
- 서버 세팅후 src/config.js 열고 apiUrl을 설정.
- 배포시 yarn build 후 build 폴더 내 모든 파일,폴더를 업로드.
