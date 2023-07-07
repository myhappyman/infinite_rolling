# 프로젝트 구성

-   vite를 통한 react프로젝트 구성
-   scss 사용
-   animation, keyframe만을 통하여 애니메이션 처리

# 작성 방식 소개

blog: [https://myhappyman.tistory.com/312]

# CSS, animate를 활용하여 무한 롤링 처리

1. 기존의 무한으로 돌릴 영역 슬라이드를 구성한다.
2. 똑같은 영역을 하나 더 만든다.
3. 한줄로 만들어준다.(`flex`, `nowrap`을 사용하면 쉽게 구현 가능하다.)
4. 무한으로 돌리는 애니메이트를 구현한다.
5. 원본 영역은 동작 시간의 절반동안 0부터 -100%위치로 이동한다.
6. 절반의 시간이 지나면 복사된 영역이 이동을 시작한다. 0부터 -200% 설정을 통해 절반 이후부터 붙어서 도는것처럼 구현 가능하다.
7. 공통으로 멈출수 있도록 useState로 제일 큰 영역에 `mouseenter`, `mouseleave`에 따라 멈추는 클래스가 붙도록 설정한다.
8. 마우스 오버가 일어나면 붙는 클래스에 따라 `animation-play-state:paused` 처리를 하여 애니메이트를 일시적으로 멈춘다.
