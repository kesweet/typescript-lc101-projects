// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Code the "getDaysToLocation" function here:

function getDaysToLocation1(kilometersAway: number): number {
    let milesAway = kilometersAway * milesPerKilometer;
    let hoursAway = milesAway / speedMph;
    let daysAway = hoursAway / 24;
    return daysAway;
}



// Call the function and print the outputs for the Mars trip and the moon trip:

console.log(`${spacecraftName} will take ${getDaysToLocation1(kilometersToMars)} days to reach Mars.`)
console.log(`${spacecraftName} will take ${getDaysToLocation1(kilometersToTheMoon)} days to reach the Moon.`)
