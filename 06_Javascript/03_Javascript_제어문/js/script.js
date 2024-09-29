// 제어문 : 조건문, 선택문, 반복문
// 조건문 : if() ~ else if() ~ else
// 선택문 : seitch ~ case ~ break ~ default
// 반복문 : while, do while, for

// #1. 조건문 : true 또는 flase라는 조건에 의해서 어떤 결과를 도출하는 제어 담당
var age = 12;
if (age >= 13) {
  document.write(`가입 연령 대상입니다. <br/>`);
} else {
  document.write(`가입 연령 대상이 아닙니다. <br/>`);
}

// 현재 계절에 따른 문구 보여주기
var curMonth = 9;

if (curMonth >= 1 && curMonth <= 12) {
  if (curMonth >= 3 && curMonth <= 5) {
    document.write(`따뜻한 봄입니다. <br/>`);
  } else if (curMonth >= 6 && curMonth <= 8) {
    document.write(`뜨거운 여름입니다. <br/>`);
  } else if (curMonth >= 9 && curMonth <= 11) {
    document.write(`시원한 가을입니다. <br/>`);
  } else {
    document.write(`추운 겨울입니다. <br/>`);
  } // 2차 조건문
} else {
  document.write(`유효한 값이 아닙니다. <br/>`);
} // 1차 조건문

// 조건문으로 구매자의 등급에 따른 할인쿠폰 발송

/*
VIP(100,000원 이상 구매 고객) => 30% 할인 쿠폰 발송
GOLD(60,000원 이상 구매 고객) => 20% 할인 쿠폰 발송
SILVER(10,000원 이상 구매 고객) => 10% 할인 쿠폰 발송
BRONZE(10,000원 미만 구매 고객) => 5% 할인 쿠폰 발송
*/

var buyPrice = 75000;
if (buyPrice >= 100000) {
  document.write(
    `당신은 VIP등급입니다. 마이페이지에서 30% 할인 쿠폰을 확인 바랍니다. <br />`
  );
} else if (buyPrice >= 60000) {
  document.write(
    `당신은 GOLD등급입니다. 마이페이지에서 20% 할인 쿠폰을 확인 바랍니다. <br />`
  );
} else if (buyPrice >= 10000) {
  document.write(
    `당신은 SILVER등급입니다. 마이페이지에서 10% 할인 쿠폰을 확인 바랍니다. <br />`
  );
} else if (buyPrice < 10000) {
  document.write(
    `당신은 BORNZE등급입니다. 마이페이지에서 5% 할인 쿠폰을 확인 바랍니다. <br />`
  );
}

//ex) 게임 캐릭터 레벨 제한에 따른 무기 장착
var myHeroLevel = 8;
var specialCloth = "몽땅 막는 갑옷";

if (myHeroLevel > 10) {
  document.write(`당신은 ${specialCloth}을(를) 착용 가능합니다. <br/>`);
} else {
  document.write(`당신은 ${specialCloth}을(를) 착용 불가능합니다. <br/>`);
}

// 디바이스 사이즈를 기준으로 어떤 디바이스에서 서비스를 보고있는지 확인

// 가로 사이즈가 1200px 이상일 경우 - pc로 가정
// 가로 사이즈가 768px 이상일 경우 - 테블릿으로 가정
// 가로 사이즈가 768px 미만일 경우 - 핸드폰으로 가정

var deviceWidth = 375;
if (deviceWidth >= 1200) {
  console.log(`디바이스 - pc <br/>`);
} else if (deviceWidth >= 768) {
  console.log(`디바이스 - 테블릿 <br/>`);
} else {
  console.log(`디바이스 - 모바일 <br/>`);
}

// 선택문 - 정확하게 일치 여부에 따라서 결과를 다르게 도출
var subwayNum = "2";
switch (subwayNum) {
  case "1":
    document.write(`군청색 1호선 입니다. <br/>`);
    break;
  case "2":
    document.write(`녹색 2호선 입니다. <br/>`);
    break;
  case "3":
    document.write(`주황색 3호선 입니다. <br/>`);
    break;
  case "4":
    document.write(`파란색 4호선 입니다. <br/>`);
    break;
  default:
    document.write(`유효한 값이 아닙니다. <br/>`);
}

// 영화관 키오스크에서 영화를 선택했을 때
//영화 선택 -> 시간 선택 -> 좌석 선택 -> 영화표 출력

var selectedMovie = "베테랑2";
switch (selectedMovie) {
  case "범죄도시4":
    document.write(`선택한 영화 : 범죄도시4`);
    break;
  case "베테랑2":
    document.write(`선택한 영화 : 베테랑2`);
    break;
  case "겨울왕국3":
    document.write(`선택한 영화 : 겨울왕국3`);
    break;
  default:
    document.write(`선택한 영화 : 없음`); //예외 처리 - 방어코드
}

// 반복문 - 대상을 반복하여 구현하고자 할 때 사용
// 초기값이 존재, 조건식이 붙음, 증감식 + 실행문
// while, do-while, for(변형 : for~in, for~of,forEach, map)

//while 반복문 : 1. 초기값 -> 2. 조건식 확인(true) -> 3. 실행문 실행 -> 4. 증감식
document.write("<h3>while 반복문</h3>");
// 1 ~ 10까지 화면에 출력
var i = 1; // 1.초기값
while (i <= 10) {
  // 2. 조건식
  document.write(`${i}. <br/>`); // 3. 실행문
  i++; // 4. 증감식
}

//브라우저 상에 반복문을 활용하여 이미지를 출력하기(view1.jpg ~ view9.jpg)

var j = 1;
while (j <= 9) {
  document.write(`<img src="./img/view${j}.jpg" style="width: 80px;">`);
  j++;
}

// 실습 - m_1.png ~ m_12.png를 반복문을 활용하여 화면상에 출력, 가로 사이즈 70px

document.write("<h3>실습 문제</h3>");

var m = 1;
while (m <= 12) {
  document.write(`<img src="./img/m_${m}.png" style="width: 70px;">`);
  m++;
}

// 박스를 10개 출력하는 과정에서 3의 배수인 곳에만 다른 색상을 부여

document.write(`<div class="wrap_while">`);

var pd = 1;
while (pd <= 10) {
  if (pd % 3 == 0) {
    document.write(`<div class="bx" style="background-color:#faf;"></div>`);
  } else {
    document.write(`<div class="bx"></div>`);
  }
  pd++;
}

document.write(`</div>`);

document.write("<h3> do - while 반복문</h3>");

// do - while 반복문
// 1. 초기값 -> 2. do에 의해 강제 실행 -> 3. 증감식으로 이동 -> 4. 조건식이 true면 다시 do

var m = 1;
do {
  document.write(`${m}, <br/>`);
  m++;
} while (m <= 10);

// 기본 for 반복문
/*
[구조]
for (초기값; 조건식; 증감식) {
실행문
}
[진행 순서]
1. 초기값 -> 2. 조건식(true) -> 3. 실행문 -> 4. 증감식 이동
1. 초기값 -> 2. 조건식(flase) -> 3. 반복문 종료  
*/
document.write("<h3> for 반복문</h3>");
for (var n = 1; n <= 10; n++) {
  document.write(`${n}, <br/>`);
}

// 40개의 박스를 구성 후, 넘버링 구현하기 (100px x 100px)

document.write("<h3>실습 문제</h3>");
// 4의 배수의 배경 색상은 #faf, 3의 배수의 배경 색상은 #afa, 12의 배수의 배경 색상은 #aaf

document.write(`<div class="wrap_for">`);

for (p = 1; p <= 40; p++) {
  if (p % 3 == 0 && p % 4 == 0) {
    document.write(`<div class="bx" style="background-color:#aaf;">${p}</div>`);
  } else if (p % 3 == 0) {
    document.write(`<div class="bx" style="background-color:#afa;">${p}</div>`);
  } else if (p % 4 == 0) {
    document.write(`<div class="bx" style="background-color:#faf;">${p}</div>`);
  } else {
    document.write(`<div class="bx">${p}</div>`);
  }
}
document.write(`</div>`);

// 반복을 순환시키는 과정에서 중단을 강제로 하고자 할 때

for (q = 1; q <= 10; q++) {
  if (q == 6) {
    break;
  }
  document.write(`${q}, <br/>`);
}

document.write(`<hr/>`);

// 반복문을 순환 시키는 과정에서 잠깐 중단했다가 다시 실행시키는 명령어 continue

for (r = 1; r <= 10; r++) {
  if (r == 6) {
    continue; // 실행문으로 접근하지 않고 증감식 진행
  }
  document.write(`${r}, <br/>`);
}
document.write(`<hr/>`);
// 중첩 반복문 (외부 반복 -> 내부 반복)

for (s = 1; s <= 9; s++) {
  document.write(`<h4>${s} 단 </h4>`);
  for (t = 1; t <= 9; t++) {
    document.write(`<p>${s} × ${t} = ${s * t} </p>`);
  }
}
document.write(`<hr/>`);

// 중첩 반복문을 활용한 구조 구성 (view1.jpg ~ view4.jpg (1행) - view5.jpg ~ view8.jpg (2행))
var no = 1;
document.write(`<div class="wrap">`);
for (i = 1; i <= 2; i++) {
  document.write(`<div class="outer">`);
  for (j = 1; j <= 4; j++) {
    document.write(
      `<div class="bx" style="background-image: url(./img/view${no}.jpg)"></div>`
    );
    no++;
  }
  document.write(`</div>`);
}
document.write(`</div>`);

// 1 ~ 31 까지 달력 구성하기
var date = 1;
document.write('<table border="1" style="border-collapse: collapse;">');
for (i = 1; i <= 5; i++) {
  document.write(`<tr>`);
  for (j = 1; j <= 7; j++) {
    document.write(`<td>${date}</td>`);
    date++;
    if (date == 32) {
      break;
    }
  }
  document.write(`</tr>`);
}
document.write(`</table>`);
