var goodDrivingRecord = false;
var age = 18

if (age > 25 && goodDrivingRecord === true) {
  console.log("You get a discount!");
} else if (age > 25 || goodDrivingRecord === true) {
  console.log("Regular price");
} else if (age < 25 && goodDrivingRecord === false) { console.log("You require another sign"); }