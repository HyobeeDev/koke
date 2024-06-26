// 아이디 입력조건 및 중복 체크
const ids = ['frontenddev', 'backenddev', 'webpublish']
let userId = document.querySelector('#user_id')
let btn = document.querySelector('#id_chk')

userId.onchange = idNumCheck
function idNumCheck() {
    if(userId.value.length < 8 || userId.value.length > 14) {
      alert('아이디는 8~15글자로 입력해주세요!')
    }
    userId.select()
}   // 입력조건 체크

ids.forEach((id) => {
    btn.addEventListener('click', () => {
      if(id === userId.value) {
        alert(`${userId.value}는 이미 사용된 아이디입니다.`)
      } else {
        alert(`${userId.value}는 사용하실 수 있습니다.`)
      }
    })
})   // 중복 체크

// 비번 입력조건과 확인 체크
let userPw = document.querySelector('#user_pw')
let userPwCheck = document.querySelector('#user_pw_chk')
userPw.onchange = inputPw
userPwCheck.onchange = comparePw
function inputPw() {
  if(userPw.value.length < 8) {
    alert('비밀번호는 8자 이상 입력해주세요!')
    userPw.value = ''
    userPw.focus()
  } else {
    userPwCheck.focus()
  }
}
function comparePw() {
  if(userPw.value != userPwCheck.value) {
    alert('비밀번호가 다릅니다. 다시 입력해주세요.')
    userPwCheck.value = ''
    userPwCheck.focus()
  }
}

// 이메일 선택
let email = document.join_form.email
let changedEmail = document.join_form.changed_email
email.onchange = selectedEmail
function selectedEmail() {
  let emailName = email.options[email.selectedIndex].innerText
  changedEmail.value = emailName
}

// 우편번호 선택
let city = document.join_form.city
let cityNum = document.join_form.city_post_num
city.onchange = selectedCity
function selectedCity () {
  let cityPost = city.options[city.selectedIndex].value
  cityNum.value = cityPost
}

// 휴대폰 커서 자동 이동
let phoneMidNum = document.querySelector('#phone--midnum')
let phoneLastNum = document.querySelector('#phone--lastnum')
phoneMidNum.addEventListener('keyup', () => {
  const phoneMidLength = phoneMidNum.value.length
  if(phoneMidLength >= 4) {
    phoneLastNum.focus()
  }
})

// 약관 동의
const agreeAll = document.querySelector('#agree--all')
const terms = document.querySelectorAll('.term--element')
const term1 = document.querySelector('#term1')
const term2 = document.querySelector('#term2')
let count = 0

agreeAll.addEventListener('click', () => {
  if(agreeAll.checked) {
    terms.forEach((term) => {
      term.checked = true
    })
  } else {
    terms.forEach((term) => {
      term.checked = false
    })
  }
})   // 전체동의 체크시 약관들 다 체크&해제되기

term1.addEventListener('click', termsChk)
term2.addEventListener('click', termsChk)

function termsChk () {
  if(term1.checked == true && term2.checked == true) {
    agreeAll.checked = true
  } else {
    agreeAll.checked = false
  }
}   // 개별 약관 체크시 전체동의 체크&해제되기