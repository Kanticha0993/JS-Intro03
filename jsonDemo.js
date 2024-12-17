//*************************************************
// JavaScript for Beginners
// JSON - JSON DEMO
//*************************************************
// BASICS
// STRINGIFY: JavaScript to JSON
// PARSE   : JSON to JavaScript
//*************************************************

// Think of a simple JavaScript object with data (property values)
const book = new Object({ title: "1984", author: "George Orwell" });
console.log("book:");
console.log(book);

/*
You can also have a collection of these objects
*/
const myBooks = [
    new Object({ title: "1984", author: "George Orwell" }),
    new Object({ title: "Becoming", author: "Michelle Obama" }),
    new Object({ title: "Snow Crash", author: "Neal Stephenson" }),
    new Object({ title: "Predictably Irrational", author: "Dan Ariely" })
];
console.log("myBooks:");
console.log(myBooks);
