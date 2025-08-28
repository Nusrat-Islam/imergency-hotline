

// heart icon functionalities
const heartBtns = document.getElementsByClassName("heart");

for (const heartBtn of heartBtns) {
   heartBtn.addEventListener('click', function () {
      const heartNumber = document.getElementById("number")
      let heartNumberCount = parseInt(heartNumber.innerText)
      heartNumberCount++;

      heartNumber.innerText = heartNumberCount;
   })
}



//get input value number
function getInputValue(id) {
   const inputValue = document.getElementById(id)
   const innerInputValue = inputValue.innerText
   const innerValue = parseInt(innerInputValue);
   return innerValue;
}


//Call Icon Functionalities
const callBtns = document.getElementsByClassName("call-btn");

for (const callBtn of callBtns) {
   callBtn.addEventListener('click', function () {

      let coinBtn = document.getElementById('coin-btn')
      let coinValue = getInputValue("coin-btn")


      if (coinValue >= 20) {
         const importantText = callBtn.parentNode.parentNode.children[1].children[1].innerText;
         const importantNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;

         const coinBtnMinus = coinValue - 20;
         coinBtn.innerText = coinBtnMinus;
         alert(importantText + " " + importantNumber)
         return coinBtnMinus;

      }
      else {
         return alert('You have Insufficient balance')
      }
   })
}









