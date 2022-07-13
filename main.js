const button5 = document.querySelector("#plusFive")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})
const button10= document.querySelector('#plusTen')

button10.addEventListener('click', ()=>{
  disp.textContent='added 10'
  indicator.textContent = (parseInt(indicator.textContent) + 10).toString()

})
const button15= document.querySelector('#plusFifteen')

button15.addEventListener('click', ()=>{
  disp.textContent='added 15'
  indicator.textContent = (parseInt(indicator.textContent) + 15).toString()

})