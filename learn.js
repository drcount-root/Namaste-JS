console.log("Start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

// fetch("https://api.publicapis.org/entries").then(function cbF() {
//   console.log("CB Netflix");
// });

function fN() {
  for (var i = 1; i <= 5; i++) {
    function count(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    count(i);
  }
}

fN();

console.log("End");
