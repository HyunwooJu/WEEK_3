// bind 메서드
// -> this를 바인딩 하는 메서드
// call, apply와는 좀 다르다. 즉시 호출하지는 않는다.
// [목적]
// 1. 함수에 This를 '미리' 적용한다.
// 2. 부분 적용 함수!

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않는다. 그 외에는 같다.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9