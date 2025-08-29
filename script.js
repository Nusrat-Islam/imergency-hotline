
const callHistory = [];
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

// Copy button
 const copyBtns = document.getElementsByClassName('copy-btn');
 for(const btn of copyBtns)
   btn.addEventListener('click', function(){
   const twoNumber = document.getElementById('two-number')
   let twoNumberCount = parseInt(twoNumber.innerText)
   twoNumberCount++;
   twoNumber.innerText= twoNumberCount;

    const importantNumber = btn.parentNode.parentNode.children[2].children[0].innerText
      navigator.clipboard.writeText(importantNumber)
       alert('The Number is copied ' + importantNumber)
           
     //twoNumber.innerText= twoNumberCount;
   
    
   })
 




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
         const importantText = callBtn.parentNode.parentNode.children[1].children[0].innerText;
         const importantNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        
         const coinBtnMinus = coinValue - 20;
         coinBtn.innerText = coinBtnMinus;
         alert(importantText + " " + importantNumber)


        // call history and time check function 
         const data = {
         name:importantText,
         number:importantNumber,
         date:new Date().toLocaleTimeString()
        }

       callHistory.push(data)
    

        
      const callBtnContainer = document.getElementById("call-btn-parent")
      const div =document.createElement("div") 
     
      div.innerHTML= `
          <div class="flex justify-between items-center pl-5 pr-5 shadow-sm rounded-lg mt-5">
                            <div>
                                <h3 class="text-black font-semibold">${data.name}</h3>
                                <p class="text-gray-500">${data.number} </p>
                            </div>
                            <div>
                               <p class="text-gray-500">${data.date}</p>
                            </div>
                        </div>
      `
      callBtnContainer.appendChild(div)

      }
      else {
         return alert('You have Insufficient balance')
      }
   })
}

document.getElementById('clear-btn').addEventListener('click',function(){

   callHistory.length = 0
       
   const callBtnContainer = document.getElementById("call-btn-parent")
     callBtnContainer.innerHTML="";
     
})











