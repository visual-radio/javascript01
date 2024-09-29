document.write("<h2>연산자</h2>");
/*
산술연산자(+, -, *, /, %)
문자결합연산자
(문자 데이터 + 문자 데이터 => 문자형 데이터 / 문자 데이터 + 숫자 데이터 => 문자형 데이터)
대입연산자(var 변수명 = 변수값)
복합대입연산자(+=, -=, *=, /=, %=)
증감연산자(++, --)
비교연산자(<, >, <=, >=, !=, ==, !==, ===)
논리연산자(||, &&, !)
*/

// #1. 산술연산자 : 무조건 숫자형 데이터만 가능
document.write("<h3>산술 연산자</h3>");
var $num_01 = 12;
var $num_02 = 5;

var rst_01 = $num_01 + $num_02;
document.write("더한값 : ", rst_01, "<br />");

var rst_02 = $num_01 - $num_02;
document.write("뺀값 : ", rst_02, "<br />");

var rst_03 = $num_01 * $num_02;
document.write("곱한값 : ", rst_03, "<br />");

var rst_04 = $num_01 / $num_02;
document.write("나눈값 : ", rst_04, "<br />");

var rst_05 = $num_01 % $num_02;
document.write("나눈 나머지값 : ", rst_05, "<br />");

// 남성와 여성을 구분하는 선언
var gender = 3;
document.write(gender % 2, "<br />");
// gender % 2 의 결과값이 1이라면 남성 / 0이라면 여성
// airbnb에서 게스트(2xxxxx) / 호스트(1xxxxx)

// #2. 문자 결합연산자 : 문자형 + 문자형 => 문자형 / 문자형 + 숫자형 => 문자형
var string_01 = "1200";
var string_02 = "2400";
var number_01 = 1200;

var sum_str = string_01 + string_02;
console.log(sum_str);
console.log(typeof sum_str);

var sum_multi = number_01 + string_02;
console.log(sum_multi);
console.log(typeof sum_multi);

var $str_01 = "빙그레 바나나 우유 ";
var $num_01 = 1;
var $num_02 = 1;

var $result = $str_01 + ($num_01 + $num_02);
console.log($result, "개");

// 2 + 3 * 4 = 14
// (2 + 3) * 4 = 20
// () : 우선결합

// #3.대입연산자 / 복합대입연산자
// #3-1. 대입연산자 y = x + 1
var first = "홍길동";
var second = first;
console.log(second);
var third = second;
console.log(third);

// #3-2. 복합대입연산자
var $no_01 = 24; //초기 값
var $no_02 = 8; //초기 값

$no_01 += $no_02; //$no_01 = $no_01 + $no_02 => [해석] 24 + 8 = 32 / $no_01 = 32
console.log($no_01); //32 (복합대입 연산자로 변경된 값)
$no_01 -= $no_02; //$no_01 = $no_01 - $no_02 => [해석] 32 - 8 = 24
console.log($no_01); //24

$no_01 *= $no_02; // $no_01 = $no_01 * $no_02 => [해석] 24 * 8 = 192

console.log($no_01); //192

$no_01 /= $no_02; //$no_01 = $no_01 / $no_02 => [해석] 192 / 8 = 24
console.log($no_01); //24

$no_01 %= $no_02; //$no_01 = $no_01 / $no_02 한 나머지 값 => [해석] 24 / 8 =3 (나머지 = 0)
console.log($no_01);

//복합대입연산자 문자의 연속성에 ㅔ대한 결합
var $txt = "A";
console.log($txt);
$txt += "B"; //$txt = $txt + "B" => "A" + "B" = "AB"
console.log($txt); //AB
$txt += "C"; //$txt = $txt + "C" => "AB" + "C" = "ABC"
console.log($txt); //ABC

//복합대입연산자를 활용한 통합 주소의 결합 (ex 택배주소)
var adress1 = "서울시 서초구 강남대로123 ";
var adress2 = "메가스터디 빌딩 3층 1호 ";
var clientName = "<h3>홍길동</h3>";
adress1 += adress2;
console.log(adress1);
adress1 += clientName;
console.log(adress1);
document.write(adress1, "<br />");

//복합대입연산자를 활용한 테이블 구성하기(<table> ~ <tr> ~ <td> : 1행 3열)
var $t = "<table border='1'>";
$t += "<tr>";
$t += "<td>1</td>";
$t += "<td>2</td>";
$t += "<td>3</td>";
$t += "</tr>";
$t += "</table>";

document.write($t);
console.log($t);

//복합대입연산자를 활용한 이미지 박스 구성하기
{
  /* <div class='frame'>
    <div class='box'>1</div>
    <div class='box'>2</div>
    <div class='box'>3</div>
    <div class='box'>4</div>
  </div> */
}

var $pd = "";
$pd += "<div class='frame'>";
$pd += "<div class='box'>1</div>";
$pd += "<div class='box'>2</div>";
$pd += "<div class='box'>3</div>";
$pd += "<div class='box'>4</div>";
$pd += "</div>";

document.write($pd);

//복합대입연산자를 활용한 1 ~ 10 까지 더한 최종값을 화면에 표현

var $no = 1;
$no += 2;
$no += 3;
$no += 4;
$no += 5;
$no += 6;
$no += 7;
$no += 8;
$no += 9;
$no += 10;

document.write("1 ~ 10까지 더한 최종값", $no, "</br>");

// #4. 증감연산자
// 증가연산자(1씩 더한다) : ++변수명,변수명++
// 감소연산자(1씩 뺀다) : --변수명, 변수명--

var pd_num = 12; //수량 초기값
document.write("A 상품의 개수 : " + pd_num + "개", "</br>");

// 장바구니에서 + 버튼을 1회 클릭했다면

pd_num++; // pd_num = pd_num + 1 == 12 + 1
document.write("A 상품의 개수 : " + pd_num + "개", "</br>"); //13

// 장바구니에서 + 버튼을 2회 클릭했다면

pd_num++;
document.write("A 상품의 개수 : " + pd_num + "개", "</br>");

// 장바구니에서 - 버튼을 1회 클릭했다면

pd_num--; // pd_num = pd_num - 1 == 14 - 1
document.write("A 상품의 개수 : " + pd_num + "개", "</br>"); //13

//증감연산자 - 선행처리(++변수명 또는 --변수명) vs 후행처리(변수명++ 또는 변수명--)

var $a = 10;
var $b;
$b = ++$a; //$b = 1 + $a
document.write(`$a의 결과값 : ${$a}<br/>`); //11
document.write(`$b의 결과값 : ${$b}<br/>`); //11

var $c = 10;
var $d;
$d = $c++; // $d = #c + 1 => $d = 11(10) / #c = 11
document.write(`$a의 결과값 : ${$c}<br/>`); //11
document.write(`$b의 결과값 : ${$d}<br/>`); //10

var a = 1;
var b;
b = a++;
console.log(a);
console.log(b);

var c = 1;
c = c++;
console.log(c); //좌측의 메모리 공간에 담긴 값을 가져온다 => 1

// #5. 비교연산자 : 결과값은 true 또는 false
document.write(`<h3>비교 연산자</h3>`);
var $p = 10;
var $q = 12;
var $r = "10";

var $rst_than;
$rst_than = $p <= $q; // 10 <= 12 ==> true
console.log($rst_than);

$rst_than = Number($r) <= $p; // 10 <= 10 ==> true
console.log($rst_than);

//같다 (==) : 데이터의 타입에 관계 없이 화면상에 출력되는 값이 동일하면 true
//정말 같다 (===) : 데이터 타입과 값이 일치해야 true

$rst_than = $r == $p; // "10" == 10 ==> false여야 하지만 true 나옴
console.log($rst_than);

$rst_than = $r === $p; // "10" === 10 ==> false
console.log($rst_than);

$rst_than = Number($r) == $p; // 10 == 10 ==> true
console.log($rst_than);

$rst_than = Number($r) === $p; // 10 === 10 ==> true
console.log($rst_than);

//다르다(!=)
//정말 다르다(!==)
$rst_than = $r != $p; // "10" != 10 ==> true여야 하지만 flase 나옴
console.log($rst_than);

$rst_than = $r !== $p; // "10" !== 10 ==> true
console.log($rst_than);

// #6. 논리연산자 : ||(or 연산자), &&(and 연산자), !(not 연산자)
// 실무 파트 : not 연산자 -> 데이터의 값의 유무를 기준으로 저건을 형성하는 방식으로 사용
// ex) 값이 존재하면 처리
document.write(`<h3>논리 연산자</h3>`);
var $s = 10;
var $t = 12;
var $u = 14;

document.write($s > $t || $t < $u, "<br />"); // false || true => true
// 좌측부터 로딩, true가 앞에 나왔다면 뒤에 존재하는 false의 존재는 로딩하지 않음

document.write($s > $t && $t < $u, "<br />"); // false && true => false
// 좌측부터 로딩, false가 앞에 나왔다면 뒤에 존재하는 true의 존재는 로딩하지 않음

document.write(!($s < $u), "<br/>");
// true 값을 false로 바꿈, !(true) ==> false

// #7. 삼항조건연산자 : 변수명의 값이 true 또는 false에 의해서 실행되는 구문을 다르게 분리
// 변수명 ? "A" : "B"
// [해석] 변수명에 담긴 값이 true 이면 "A" 출력, flase면 "B" 출력

// var thanMoer13Age = prompt("나이를 입력해 주세요", "13");
// var registerPermit = Number(thanMoer13Age) >= 13;
// registerPermit
//   ? alert("가입연령 대상입니다")
//   : alert("가입연령 대상이 아닙니다");

// 응용파트 : 이니스프리에서 성병을 기준으로 문자 발송을 보내고자 할 때

var gender = 1;
gender % 2 === 0
  ? console.log("여성 할인 제품 문자 발송")
  : console.log("남성 할인 제품 문자 발송");

// 추후, react에서는 if() 조건문을 사용할 수 없음 => 상항 조건 연산자로 대체
