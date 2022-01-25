const fs = require("fs");

function printFirstName(firstName) {
  console.log(firstName);
}
// printFirstName('shubham')

function printFirstName(firstName, cb, cb2) {
  console.log(firstName);
  cb("Arya");
  cb2(21);
}

function printLastName(lastName) {
  console.log(lastName);
}

function printAge(age) {
  console.log(age);
}
printFirstName("shubham", printLastName, printAge);

// Synchrnous  WAY OF READING file
console.log("before");

let data = fs.readFileSync("f1.txt");
console.log(" " + data);

console.log("After");

// Asynchronic way of reading file

console.log("before");

fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb2);

function cb(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(" " + data);
}

function cb2(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(" " + data);
}

console.log("After");


// WEB SCRAPING --- Extracting meaningfull data from any site called web scraping
