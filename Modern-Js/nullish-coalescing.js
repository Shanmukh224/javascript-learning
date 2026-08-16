let username = null;

let displayName = username ?? "Guest";

console.log(displayName);

let age = 0;

let result = age ?? 18;

console.log(result);

//?? uses the right-hand value only when the left side is null or undefined.