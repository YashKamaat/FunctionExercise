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
    if (pieces > 31){
        return true;
    } else if (pieces < 31){
        return false;
    }
};
console.log(isEnoughCandy(31));
console.log("==================")
// 6
function candyCounter(nums){
    let sum= 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum +nums[i];
    }
    return sum;
};
candyCounter([4,7,9]);
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
    "It"
    "Christine"
    "Creepshow"
    "Pet Cemetary"
    "The Shining"
    "The Mist"

]
console.log("==================")
// 12b
const twoMovies = stephenKingMovies.filter (i => i.length === 9);
    console.log(twoMovies);

console.log("==================")