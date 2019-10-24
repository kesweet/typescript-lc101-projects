var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
// This function will also be moved into the Spacecraft class
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    return Spacecraft;
}());
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * this.milesPerKilometer;
    var hours = milesAway / this.speedMph;
    return hours / 24;
}
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log(spaceShuttle.name + " will take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to reach Mars.");
console.log(spaceShuttle.name + " will take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to reach the Moon.");
