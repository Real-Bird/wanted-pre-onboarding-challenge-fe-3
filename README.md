# 원티드 프리온보딩 챌린지 10월 - CSR / SSR with Next.js

## 1회차 과제

### React와 History API 사용하여 SPA Router 기능 구현하기

- [x] **1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

- [x] **2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

- [x] **3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

- [x] **4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

```tsx
const { push } = useRouter();
```

- [x] **5) 아래 스크린샷을 참고하여 앱을 작성한다.**

- **TO-BE) Root 경로**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d2a19c69-ed92-4431-afca-156a3d8ccd7e/Untitled.png)
- **TO-BE) About 경로**
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a10c03a3-1d27-4a02-a495-c7f98775ca23/Untitled.png)
