# Brokurly

- 컬리만의 유기농 채소로 집에서도 간편하게 즐겨보컬리?! 라는 비젼을 가지고 컬리로 시작하여 컬리로 끝날 수 있는 서비스를 제공합니다.

## 사이트

[Brokurly](http://brokurly.s3-website.ap-northeast-2.amazonaws.com/)

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
    <br/>
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

- 상단바
- 회원가입
- 로그인
- 제품 리스트
- 제품 상세 페이지
- 장바구니
- 구매 내역
- 하단바

#### 상단바 (header/nav)

- 스크롤시 카테고리부분이 고정
- useLocation을 사용하여 로그인, 로그아웃 버튼 구현

#### 회원가입

- 유효성 검사에 따라 색상이 변하는 텍스트 UI구현
- 유효성 검사를 위한 정규표현식 활용
- 중복확인 검사를 통과해야 회원가입 가능
- 중복확인 검사를 통과하지 못하면 회원가입 불가
- 비밀번호 input.value와 비밀번호 확인 input.value가 일치해야 회원가입 가능

#### 로그인

- 아이디, 패스워드가 일치해야 로그인 성공
- 로그인 성공시 sessionStorage에 토큰 발행
- 존재하지 않는 아이디로 로그인 시도시, 경고창 반환
- 존재하지 않는 패스워드로 로그인 시도시, 경고창 반환

#### 제품 리스트

- 상세 리스트가 메인 화면이기 때문에 params로 카테고리별 다른 화면을 보여주는 것이 아니라 quary로 해당 부분을 관리
- 대분류, 중분류, 정렬 3가지 요소를 데이터를 가져오기 위해 사용
- 대분류가 클릭 됐을 때 중분류 -> 전체 보기, 정렬 -> 신상순으로 정렬되어 일관성이 있도록 관리
- 카트 버튼을 눌러 modal창으로 상품을 주문할 수 있게 함
- 상품 부분 클릭 시 상세 페이지로 이동

#### 제품 상세 페이지

- useParams를 사용하여 백엔드로 부터 데이터를 받아 제품 표시
- 상품 개수 입력과 버튼으로 조절 가능
- 통큰 여부를 판단하여 구매버튼 클릭시 백엔드와 통신하여 장바구니로 담기

#### 장바구니

- 수량 입력
  - 버튼으로 1단위 변화, 수량 직접 입력 가능
  - 0, 빈칸 -> 수량을 1이 되도록 만듦
- 로그인하지 않았을 때 fetch를 하지 않게 하여 No Token 에러 없앰
- 전체, 부분 선택 가능
- 전체, 부분, 1개 삭제 가능
- 총금액은 체크된 상품만 계산
- 냉장, 상온 2개로 상품을 분류하여 소비자가 보기 편리하게 구성
- 분류별 토글 버튼을 만들어 해당 리스트 펼치거나 접을 수 있게 함

#### 구매 내역

- 최신순으로 주문서 보여줌
- 주문서별 주문 취소 기능

#### 하단바

- 레이아웃에 따른 디자인 구현

## ERD

![](https://images.velog.io/images/sodalite1204/post/73e9d194-bb45-40df-bf7c-09ae5fc2baa2/erd.png)

### Reference

- 이 프로젝트는 마켓컬리 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
