// Exercise #1: Event Conditions
// Start coding here
let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

isOver18 = !isOver18;
hasCriminalBlacklist =!hasCriminalBlacklist
isAllow = isOver18&&hasCriminalBlacklist;
console.log(isAllow);
