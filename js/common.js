// top_bn
let topBnClose = document.querySelector('.top_bn_close')
let topBn = document.querySelector('.top_bn_container')

topBnClose.addEventListener('click', () => {
  topBn.style.height = '0'
})



// ham_btn
let isOpen = false
let hamBtn = document.querySelector('.ham_btn')
let hamMenu = document.querySelector('.ham__menu')

hamBtn.addEventListener('click', () => {
  if(isOpen == false) {
    hamMenu.style.height = '300px'
    isOpen = true
  } else {
    hamMenu.style.height = '0px'
    isOpen = false
  }
})



// brand_menu

// let brandSearchBtn = document.querySelector('.brand_search')
// let brandMenu = document.querySelector('.brand__menu')

// brandSearchBtn.addEventListener('mouseover', () => {
//   brandMenu.style.height = '300px'
// })
// brandSearchBtn.addEventListener('mouseout', () => {
//   brandMenu.style.height = '0px'
// })

let isShow = false
let brandBtn = document.querySelector('.brand_search')
let brandMenu = document.querySelector('.brand__menu')

brandBtn.addEventListener('click', () => {
  if(isShow == false) {
    brandMenu.style.height = '300px'
    isShow = true
  } else {
    brandMenu.style.height = '0px'
    isShow = false
  }
})



// quick_contents
const quickMenu = document.querySelector('.quick_menu_container')

window.addEventListener('scroll', () => {
  if(window.scrollY > 600){
    gsap.to(quickMenu, 0.3, {
      opacity: 1,
      right: 0
    })
  } else {
    gsap.to(quickMenu, 0.3, {
      opacity: 0,
      right: -50
    })
  }
})

const quickBtn01 = document.querySelector('.quick_btn01')
const quickTooltip01 = document.querySelector('.quick--tooltip01')
const quickBtn02 = document.querySelector('.quick_btn02')
const quickTooltip02 = document.querySelector('.quick--tooltip02')
const quickBtn03 = document.querySelector('.quick_btn03')
const quickTooltip03 = document.querySelector('.quick--tooltip03')
const quickBtn04 = document.querySelector('.quick_btn04')
const quickTooltip04 = document.querySelector('.quick--tooltip04')

quickBtn01.addEventListener('mouseover', () => {
  quickTooltip01.style.opacity = '1'
})
quickBtn01.addEventListener('mouseout', () => {
  quickTooltip01.style.opacity = '0'
})
quickBtn02.addEventListener('mouseover', () => {
  quickTooltip02.style.opacity = '1'
})
quickBtn02.addEventListener('mouseout', () => {
  quickTooltip02.style.opacity = '0'
})
quickBtn03.addEventListener('mouseover', () => {
  quickTooltip03.style.opacity = '1'
})
quickBtn03.addEventListener('mouseout', () => {
  quickTooltip03.style.opacity = '0'
})
quickBtn04.addEventListener('mouseover', () => {
  quickTooltip04.style.opacity = '1'
})
quickBtn04.addEventListener('mouseout', () => {
  quickTooltip04.style.opacity = '0'
})



// scroll to top btn
const topBtn = document.querySelector('.top_btn')
const bottomBtn = document.querySelector('.down_btn')
const bottomTarget = document.querySelector('.footer')
const rootElement = document.documentElement

topBtn.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}) // top_btn

bottomBtn.addEventListener('click', () => {
  bottomTarget.scrollIntoView({
    behavior: "smooth"
  })
}) // down_btn



// floating_bn
const floatingBn = document.querySelector('.floating_bn')

window.addEventListener('scroll', () => {
  if(window.scrollY > 600){
    gsap.to(floatingBn, 0.3, {
      opacity: 1,
      bottom: 30
    })
  } else {
    gsap.to(floatingBn, 0.3, {
      opacity: 0,
      bottom: -200
    })
  }
})