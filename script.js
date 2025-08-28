


 const heartBtns = document.getElementsByClassName("heart");
 
 for(const heartBtn of heartBtns){
    heartBtn.addEventListener('click', function(){
       const heartNumber = document.getElementById("number")
          let heartNumberCount = parseInt(heartNumber.innerText)
    heartNumberCount++;

    heartNumber.innerText = heartNumberCount;
    })
 }



    
