// ex 1

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function logLapTime() {
    let totalTime = lap1 + lap2 + lap3 // or  let totalTime = lap1 + lap2 + lap3
                                         //    console.log(lap1 + lap2 + lap3)
    console.log(totalTime)
}

logLapTime()  // call the function

// ex2

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()  // calling 1 time
incrementLap()  // runing 2 times
incrementLap()  // runing 3 times
console.log(lapsCompleted) // showing the number calling 3 times 
// ex3