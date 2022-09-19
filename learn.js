console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.publicapis.org/entries").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
