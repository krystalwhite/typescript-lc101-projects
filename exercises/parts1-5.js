"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
// Part 2: Print Days to Mars
/*
let spacecraftName : string = "Determination";
let speedMph : number = 17500;
let kilometersToMars : number = 225000000;
let kilometersToMoon : number = 384400;
let milesPerKilometer : number = 0.621;
let milesToMars : number = kilometersToMars * milesPerKilometer;
let hoursToMars : number = milesToMars / speedMph;
let daysToMars : number = hoursToMars / 24;

// console.log(`The number of days for ${spacecraftName} to get to Mars is ${daysToMars}.`);

// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation (kilometersAway : number) : number {
    let milesAway : number = kilometersAway * milesPerKilometer;
    let hoursToLocation : number = milesAway / speedMph;
    let daysToLocation : number = hoursToLocation / 24;
    return daysToLocation;
}
console.log(`The number of days for ${spacecraftName} to reach Mars is ${getDaysToLocation(kilometersToMars)}.`);
console.log(`The number of days for ${spacecraftName} to reach the Moon is ${getDaysToLocation(kilometersToMoon)}.`);
*/
// Part 4: Create a Spacecraft Class
var kilometersToMars = 225000000;
var kilometersToMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysToLocation = hoursToLocation / 24;
        return daysToLocation;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
// console.log(`Our shuttle ${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
// console.log(`Our shuttle ${spaceShuttle.name} will take ${spaceShuttle.getDaysToLocation(kilometersToMoon)} days to reach the Moon.`);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToMoon));
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
