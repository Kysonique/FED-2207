var largeNumber;
    largeNumber = 3467;

var remainder;
    remainder = "";    

function countdown(largeNumber){
    setTimeout(() =>{
        console.log(largeNumber);

        let workingTotal = largeNumber - 315;

        if (workingTotal > 0) {
            countdown(workingTotal);
        }
    }, 100);
}

console.log(countdown(3467))

