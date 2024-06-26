// fixed sidebar : 옵션 선택
let isSelect = false
let sideOptions = document.querySelectorAll('.option')

for (const sideOption of sideOptions) {
  sideOption.addEventListener('click', function() {
    if(isSelect == false) {
      this.style.color = '#ff6c57'
      this.style.border = '1px solid #ff6c57'
      this.style.backgroundColor = 'white'
      isSelect = true
    } else {
      this.style.color = '#777'
      this.style.border = '1px solid white'
      this.style.backgroundColor = 'transparent'
      isSelect = false
    }
  });
}