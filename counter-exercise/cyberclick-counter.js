//función utilizando un if statement

function countTo100() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("cyberclick!");
    } else if (i % 3 === 0) {
      console.log("cyber");
    } else if (i % 5 === 0) {
      console.log("click");
    } else console.log(i);
  }
}

//mismo resultado, utilizando un switch statement

// function countTo100() {
//   for (i = 1; i <= 100; i++) {
//     switch (true) {
//       case i % 3 === 0 && i % 5 === 0:
//         console.log("cyberclick");
//         break;
//       case i % 3 == 0:
//         console.log("cyber");
//         break;
//       case i % 5 == 0:
//         console.log("click");
//         break;
//       default:
//         console.log(i);
//         break;
//     }
//   }
// }

countTo100();
