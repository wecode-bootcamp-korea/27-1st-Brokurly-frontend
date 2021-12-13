# Brokurly

- 컬리만의 유기농 채소로 집에서도 간편하게 즐겨보컬리?! 라는 비젼을 가지고 컬리로 시작하여 컬리로 끝날 수 있는 서비스를 제공합니다.

## 프로젝트 Front-end소개

- 개발은 초기 세팅부터 전부 직접 구현을 했으며, 추후 백엔드와 연결하여 AWS를 통해서 배포했습니다.

## 개발 인원 및 기간

- 개발기간: 2021/11/29~2021/12/9
- Frontend :
  - 홍정빈 [github link](https://github.com/tohjbin2)
  - 구유진 [github link](https://github.com/sodalite1204)
  - 김성현 [github link](https://github.com/Globalkmaria)
- Backend :
  - 성종호 [github link](https://github.com/SeongJongHo)
  - 박세용 [github link](https://github.com/se-yong)
  - 제갈창민 [github link](https://github.com/Ted0527)
- [프론트엔드 github link](https://github.com/wecode-bootcamp-korea/27-1st-Brokurly-frontend.git)
- [백엔드 github link](https://github.com/wecode-bootcamp-korea/27-1st-Brokurly-backend.git)

### 데모영상(이미지클릭)

[![Brokurly](https://images.velog.io/images/sodalite1204/post/c8929616-0e2f-4f1d-81ce-9efd896c4a03/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-13%2010.03.14.png)](https://youtu.be/th74v_hDXtM)

## 적용 기술 및 구현 기능

### 적용 기술

- Front-End: React.js, Sass, React Router
- Back-End: Python, Django web framework, MySQL
- Common: AWS

### 소통 툴

- Git, Github, Slack, Trello, Notion

### 구현기능

- 회원가입
- 로그인
- 제품 리스트
- 제품 상세
- 장바구니
- 구매 내역

#### 상단바 (header/nav)

- 스크롤시 카테고리부분이 고정
- useLocation을 사용하여 로그인, 로그아웃 버튼 구현

#### 제품 상세 페이지

- useParams를 사용하여 백엔드로 부터 데이터를 받아 제품 표시
- 상품 개수 입력과 버튼으로 조절 가능
- 통큰 여부를 판단하여 구매버튼 클릭시 백엔드와 통신하여 장바구니로 담기

## ERD

![](https://images.velog.io/images/sodalite1204/post/73e9d194-bb45-40df-bf7c-09ae5fc2baa2/erd.png)

### Reference

- 이 프로젝트는 마켓컬리 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
