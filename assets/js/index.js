//З ВИКОРИСТАННЯМ SETINTERVAL//
// const button = document.querySelector("#button");
// button.addEventListener("click", (e) => {
//   //   let from = 0;
//   //   let to = 5;
//   // let interval = 2000;
//   function printNumbers(from, to) {
//     function print() {
//       while (from <= to) {
//         console.log(from);
//         from++;
//         return;
//       }
//     }
//     setInterval(print, 1000);
//   }

//   console.log(printNumbers(0, 5));
// });

//////////////////////////////////////////////////////////////////////////////////////

//З ВИКОРИСТАННЯМ SETTIMEOUT//
const button = document.querySelector("#button");
button.addEventListener("click", (e) => {
  function printNumbers(from, to) {
    console.log(from);
    if (from >= to) return;

    setTimeout((e) => printNumbers(from + 1, to), 1000);
  }

  printNumbers(0, 5);
});
