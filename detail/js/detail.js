// top_infomation : 썸네일 크게 보기
let mainImg = document.querySelector('.main--img > img')
let thumImg = document.querySelectorAll('.thum--img > img')

for(let i=0; i<thumImg.length; i++) {
    thumImg[i].onclick = mainBox
}

function mainBox() {
    let newImg = this.src
    mainImg.setAttribute('src',newImg)
}



// 한번구매, 정기구독 탭
let buyOneth = document.querySelector('.buy_oneth')
let subscribe = document.querySelector('.subscribe')
let optTabBtn = document.querySelector('.opt_tab_btn')
let infoSubsc = document.querySelector('.info_subscribe_container')

buyOneth.addEventListener('click', () => {
  optTabBtn.style.marginLeft='0'
  buyOneth.style.color='#ff6c57'
  buyOneth.style.fontWeight='500'
  subscribe.style.color='#777'
  subscribe.style.fontWeight='300'
  infoSubsc.style.display='none'
})
subscribe.addEventListener('click', () => {
  optTabBtn.style.marginLeft='151px'
  subscribe.style.color='#ff6c57'
  subscribe.style.fontWeight='500'
  buyOneth.style.color='#777'
  buyOneth.style.fontWeight='300'
  infoSubsc.style.display='inline-block'
})



// 옵션 선택
let isSelect = false
let infoOptions = document.querySelectorAll('.info--opt')

for (const infoOption of infoOptions) {
  infoOption.addEventListener('click', function() {
    if(isSelect == false) {
      this.style.color = '#ff6c57'
      this.style.border = '1px solid #ff6c57'
      isSelect = true
    } else {
      this.style.color = '#777'
      this.style.border = '1px solid #ccc'
      isSelect = false
    }
  });
}

