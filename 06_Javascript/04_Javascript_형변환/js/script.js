document.write(`<h2>현변환 : 암시적 형변환 / 명시적 형변환</h2>`);
document.write(`
  <p>형변환이란 
  문자형 데이터 -> 숫자형 데이터로 변경(연산 가능하도록 하기 위함) <br/>
  숫자형 데이터 -> 문자형 데이터로 변경(15000 -> 15,000 표기하기 위함)</p>
  `);

document.write(
  `<h3>형변환 - 암시적 형변환(스크립트 내부에서 제시되지 않은 상태로 이뤄지는 형변환)</h3>`
);

var num1 = 10 + "12";
console.log(num1); //"1012"
console.log(typeof num1);

var num2_1 = 10 - "12";
console.log(num2_1); // -2, 마이너스 연산은 됨 -> 이상
console.log(typeof num2_1);

var num2_2 = "10" - 12;
console.log(num2_2); // -2, 마이너스 연산은 됨 -> 이상
console.log(typeof num2_2);

var num3_1 = 12 + true;
console.log(num3_1); // 13 -> ?
console.log(typeof num3_1);

var num3_2 = false + 12;
console.log(num3_2); // 12 -> ?
console.log(typeof num3_2);

var num4_1 = "12" * 2;
console.log(num4_1); // 24 -> ?
console.log(typeof num4_1);

var num5_1 = "12" / 2;
console.log(num5_1); // 6 -> ?
console.log(typeof num5_1);

// 암시적 형변환 : 문자와 숫자를 포함한 모든 형식에서  결합(+)할 경우를 제외하고 모두 연산 가능하며, 숫자형 데이터로 변경된다

var datalan = 1;
if (datalan) {
  console.log("데이터 존재");
} else {
  console.log("데이터 없음");
}
// true, false가 아닌 숫자를 넣어도 조건문이 동작함 (0 = false, 나머지 모든 정수 = true)

// 명시적 형변환 : 각 매서드를 통해서 형변환을 시켜서 화면에 표기할 수 있음

document.write(
  `<h3>형변환 - 명시적 형변환(스크립트 내부에서 작성되는 문자를 기준으로 이뤄지는 형변환)</h3>`
);

// 숫자를 문자로
var ch_numToStr = 10000; // 숫자형
//방법1
var ch_numToStr_method1 = String(ch_numToStr);
console.log(ch_numToStr_method1);
console.log(typeof ch_numToStr_method1);

//방법2
var ch_numToStr_method2 = ch_numToStr.toString();
console.log(ch_numToStr_method2);
console.log(typeof ch_numToStr_method2);

// 문자를 숫자로
var ch_strToNum = "10000";
var ch_strToNum_method1 = Number(ch_strToNum);
console.log(ch_strToNum_method1);
console.log(typeof ch_strToNum_method1);

//이외로
//parseInt("10000") 정수형, 소수점 이하 첨삭 (내림)
//parseFloat("10000") 실수형
