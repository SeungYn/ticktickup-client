필수기능
로그인, 회원가입, 시간 흐르기, 아이템 선택

12/29
리덕스를 바로 적용하는 것은 어려우니깐 로그인 회원가입 하던데로 만들기
타입스크립트에서 css 파일을 import 할 때는 global.d.ts 를 작성해야한다.
feat (feature) : 기능 추가
fix (bug fix) : 버그 수정
docs (documentation) : 문서
style (formatting, missing semi colons, …) : 포매팅, 세미콜론 누락 등
refactor : 리팩토링
test (when adding missing tests) : 테스트 코드 추가
chore (maintain)

12/30
리덕스 input 값만 적용

'''
export type RootState = ReturnType<typeof store.getState>;
을 명시해주면 useSelection((state:RootState))로 타입을 쉽게 명시가능
'''

'''
{
payload,
}: PayloadAction<{
form: 'login' | 'register';
value: string;
name: string;
}>
PayloadAction을 통해서 payload 값 타입을 명시해줄수 있음
'''

1/1
createAsyncThunk<
RegisterSuccessResponse,
{ username: string; password: string },
{ rejectValue: RegisterFailResponse }

> createAsyncThunk의 제네릭은 <성공된 결과 타입, 매개변수 타입, 옵션 결과 타입임> 이렇게 써줘야함

1/2
private 접근 제어자를 사용해 constructor() 앞에 붙이면 new 키워드를 통해 인스턴스를 생성하지 못하도록 제한할 수 있습니다. 대신 공개된 스태틱 메서드 getInstance()를 통해 오직 한 번만 인스턴스를 생성할 수 있습니다. 이를 싱글턴 패턴이라 부릅니다.
싱글턴을 이용한 http 클래스 생성


1/3
Provider을 최상단으로 감쌈 로그인 접근권한을 위하여
'''
<Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
'''