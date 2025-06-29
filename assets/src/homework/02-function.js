// -----------------------------------------------
// ✍ 함수 작성 과제
// -----------------------------------------------

// 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
// --------------------------------------------------------
function greetUser(username) {
  return ('안녕하세요! ' + username + ' 님 좋은하루 되세요!')
}

console.log(greetUser('이성은'))

// ------------------------------------------------------
// 2. 원가 계산
// 판매가를 입력 받아 원가를 계산하는 함수를 작성합니다.
// -------------------------------------------------------
const calculateOriginalPrice = function(price) {
   return parseInt(price / (1 + 0.033))
}

console.log(calculateOriginalPrice(10_000))

// -----------------------------------------------------
// 3. 주류 판매 가능 여부
// 신분증의 나이를 확인해 주류 구매 가능 여부를 반환하는 함수를 작성합니다.
// ------------------------------------------------------
const registrationCard = {
  name: '이성은',
  age: 15, 
}

const canSellAlcohol = age => {
  if (age <= 19) {
    return '19세 미만은 주류 구매가 불가합니다.'
  } else {
    return '19세 이상은 주류 구매가 가능합니다.'
  }
}

console.log(canSellAlcohol(registrationCard.age))

// --------------------------------------------------------
// 4. 할인가 계산
// 판매가와 할인 비율(%)을 입력 받아, 할인가를 반환하는 함수를 작성합니다
// --------------------------------------------------------

const getDiscountedPrice = (originalPrice, discountPercent) => originalPrice-(originalPrice * discountPercent)

console.log(getDiscountedPrice(8_000, 0.5))

// ---------------------------------------------------------
// 5. 등급 판단
// 점수를 전달받아 점수, 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.
// ------------------------------------------------------------
const seulbi = {
  score: 89
}
const seha = {
  score: 75
}
const yuri = {
  score: 46
}

const grade = score => {
  if (score >= 90) {
    return {score: score, grade: 'A', description: '최우수'}
  } else if (80 <= score && score <= 89 ) {
    return {score: score, grade: 'B', description: '우수'}
  } else if (70 <= score && score <= 79 ) {
    return {score: score, grade: 'C', description: '보통'}
  } else if (60 <= score && score <= 69 ) {
    return {score: score, grade: 'D', description: '미달,통과 기준 근접'}
  } else (0 <= score && score <= 59)
    return {score: score, grade: 'F', description: '낙제'}
}


console.log(grade(seulbi.score))
console.log(grade(seha.score))
console.log(grade(yuri.score))