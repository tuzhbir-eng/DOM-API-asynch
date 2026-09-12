const button = document.querySelector("#button");
button.addEventListener("click", (e) => {
  //   let from = 0;
  //   let to = 5;
  // let interval = 2000;
  function printNumbers(from, to) {
    function print() {
      while (from <= to) {
        console.log(from);
        from++;
        return;
      }
    }
    setInterval(print, 1000);
  }

  console.log(printNumbers(0, 5));
});
// let time = new Date(0);
// let tick = null;
// const timer = document.querySelector(".clock");
// const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(".btnContainer > button");

// function startBtnHandler() {
//   function t() {
//     time++;
//     timer.textContent = `${time}`;
//   }
//   tick = setInterval(t, 10);
// }

// startBtn.onclick = startBtnHandler;

// function clear() {
//   clearInterval(tick);
// }

// stopBtn.onclick = clear;
/////////////////////////////////////////////////////////////////////////////////
// function repeatMessage() {
//   console.log("Минуло 2 секунди");

//   // Рекурсивний виклик: функція планує наступний запуск сама
//   setTimeout(repeatMessage, 2000);
// }

// // Перший запуск
// setTimeout(repeatMessage, 2000);

// function printNumbers(from, to, interval) {
//   return setInterval(print, );
// }

// setInterval(printNumbers, 1000);
