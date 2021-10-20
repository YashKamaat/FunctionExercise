// FUNCTION EXERCISE

// 1
spookyGhost = () => {
    console.log(`BOO!!!`);
}
console.log("==================")
// 2
function candy(goal) {
    console.log(`${goal}, ${goal}, ${goal}, ${goal}`);
}
candy(`GET CANDY`);
console.log("==================")

// 3
function werewolf(a,b) {
    if (a=== "Full" && b === "Moon"){
        console.log("ARGH-WOOOO!");
    }
}
werewolf("Full", "Moon");
console.log("==================")
// 4
function halloween() {
return `October 31st`;
}
console.log(halloween());
console.log("==================")
// 5
function isEnoughCandy(pieces){
    if (pieces >= 31){
        return true;
    } else  {
        return false;
    }
};

//Ternary
// return (pieces >= 31) ? true : false;
console.log(isEnoughCandy(31)); //True
console.log(isEnoughCandy(5)); // false
console.log("==================")
// 6
function candyCounter(nums){
    let sum= 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum +nums[i];
    }
    return sum;
};
// candyCounter([4,7,9]);
//using a For Of Loop
// function candyCounter(nums){
// let total = 0;
//   for(number of nums){
//     total += number;
//   }
//   return total;
// }
console.log(candyCounter([4,7,9]));
console.log("==================")
// 7
const hauntedMansion = function() {
console.log("Welcome, foolish mortals to the Haunted Mansion BWHAHAHA!");
}
hauntedMansion();
console.log("==================")
// 8
ghostBusters = () => `Who do you call?`
console.log(ghostBusters());
console.log("==================")
// 9
// NO
console.log("==================")
// 10
// YES
console.log("==================")
// 11a
const costumes = [`Ancestor, Royalty, Thief`];

console.log("==================")
// 11b
const upperCostumes = costumes.map(i => i.toUpperCase());
console.log(upperCostumes);
console.log("==================")

// BONUS
// 12a
const stephenKingMovies = [
    "The Shining",
  "Christine",
  "It",
  "The Mist",
  "Creepshow",
  "Pet Sematary"

];
console.log("==================")
// 12b
const twoMovies = stephenKingMovies.filter (i => i.length === 9);
    console.log(twoMovies);

console.log("==================")
// 13a
const halloweenSongs1 = ["Monster Mash", "Thriller"];

// 13b
const halloweenSongs2 = [
  "I Put A Spell On You",
  "This Is Halloween",
  "Ghostbusters"
];

// 13c
halloweenJukeBox = songs => {
  const random = Math.floor(Math.random() * songs.length);
  console.log(songs[random]);
}

// 13d
halloweenJukeBox(halloweenSongs1);

halloweenJukeBox(halloweenSongs2);
console.log("=========");

// 14
caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
      if (i % 2 === 0){
        newString = newString + string[i].toUpperCase();
      } else {
        newString = newString + string[i];
      }
    }
    return newString;


// Using the substring method (Returns part of the string between the start and end indexes that are specified. Also, if a second index is not specified the the rest of the string is included)
// caps = string => {
//   for (i = 0; i < string.length; i += 2){
//     string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
//   }
//   return string;
// }

// This example accounts for multi word string arguments (AKA Strings with spaces)...
/*
caps = string => {
  let newString = ``;
  let num = 0;
  for (letter of string){
    if (letter !== " "){
      if (num % 2 === 0){
        newString += letter.toUpperCase();
        num++;
      } else {
        newString += letter.toLowerCase();
        num++;
      }
    } else {
      newString += letter;
    }
  }
  return newString;
}
*/

console.log(caps(`Hey`));
console.log(caps(`Halloween`));
console.log(caps(`Happy Halloween`));