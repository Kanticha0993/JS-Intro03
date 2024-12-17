// Object Cloning
// By Ref, Object.assign(), { ...x }, JSON

const obj1 = {
    person: "Amirach",
    weight: 85,
};

// Clone using spread operator
const obj2 = { ...obj1 };
obj2.weight = 75;

console.log(obj1); // Output: { person: "Amirach", weight: 85 }
console.log(obj2); // Output: { person: "Amirach", weight: 75 }
