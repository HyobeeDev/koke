const Id = 'guest'
const Pw = '1234'

let userId = document.querySelector('#user_id')
let userPw = document.querySelector('#user_pw')

userId.onchange = checkId
userPw.onchange = checkPw

function checkId () {
  if(Id != userId.value) {
    alert('아이디가 다릅니다. 다시 입력해주세요.')
    userId.value = ''
    userId.focus()
  } else {
    userPw.focus()
  }
}
function checkPw () {
  if(Id != userPw.value) {
    alert('비밀번호가 다릅니다. 다시 입력해주세요.')
    userPw.value = ''
    userPw.focus()
  } else {
    alert('환영합니다!')
  }
}