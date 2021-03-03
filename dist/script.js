const bworksBtns = [...document.querySelectorAll('.bworks-btns')]
const bProjects = [...document.querySelectorAll('.projects')]
const bProjectsCon = document.querySelector('.projects-con')
const exitBtns = [...document.querySelectorAll('.exit-btns')]

bworksBtns.map((btn, idx) => {
  btn.addEventListener('click', (e)=>{
    bProjectsCon.classList.remove("d-none-con");
    for (let step = 0; step < 5; step++) {
      if (step == idx) {
        bProjects[step].classList.remove("d-none");        
      } else {
        bProjects[step].classList.add("d-none");
      }
    }
  })
})

exitBtns.map((btn, idx) => {
  btn.addEventListener('click', (e)=>{
    bProjectsCon.classList.add("d-none-con");
    bProjects[idx].classList.add("d-none");
  })
})
