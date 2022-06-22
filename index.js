const blastOffBtn = document.getElementById("blast-off")
const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 60
let timeInterval 



blastOffBtn.addEventListener("click", function () {

  
        start()
      rocket.classList.remove("launch")
})


function start() {
    
        timeRemaining = 60
        timeInterval = setInterval(countdown, 1000);
       
        }



function countdown() {
        console.log("start")
    
        console.log(timeRemaining)
     
        timeRemaining -= 1;
        countdownDisplay.innerText = timeRemaining

  
        if (timeRemaining == 0 ){
                console.log("launch")
                launchRocket()
                stopInterval()
        }
}



function launchRocket() {
        rocket.classList.add("launch")
        setButton()

        }
        



function stopInterval() {
        clearInterval(timeInterval)
 


}
function setButton(){
        if (timeRemaining == 0){
        
                blastOffBtn.innerText = "BLAST OFF!"
                setTimeout(()=> {
                        blastOffBtn.innerText = "LAUNCH ROCKET!"
                      countdownDisplay.innerText = 60
                }, 3500)
          
                        
    
        } else if (timeRemaining<0){
                blastOffBtn.innerText = "Failed to Launch"
        }
}
// let buttonInterval = setInterval(setButton, 100s)
// function setRocket() {
//         if (rocket.classList.contains("launch")) {
//                 rocket.classList.remove("launch")
//                 rocket.classList.add("reset")
//         }
//         //         blastOffBtn.innerText = "LAUNCH ROCKET"
                        
// }



// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation


// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.


