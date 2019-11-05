// import React, { Component } from "react";

// class Data extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [{ balance: 0, rate: 0, minInt: 0 }],
//       amount: 0,
//       date: "",
//       i: 0
//     };
//   }
//   render() {
//     return <div>A lot of poopoo</div>;
//   }
// }

// // FIRST LET'S SORT THE DEBT
// let sortedDebt = data.sort(function(a, b) {
//   return b.rate - a.rate;
// });

// // console.log(sortedDebt);

// // NEXT WE CREATE AN ARRAY WITH INFO FOR EACH OF THE DAYS IN THE CHART
// let dateInfo = [
//   {
//     date: "11/30/19",
//     budget: 500,
//     minInt: 364.75,
//     disposable: 135.25,
//     savings: 0,
//     updatedDebtInfo: sortedDebt
//   }
// ];

// // NOW LET'S CREATE EACH OF OUR DATE OBJECTS
// for (let j = 0; j < 20; j++) {
//   let newDateInfo = {
//     date: "12/31/19",
//     budget: dateInfo[j].budget,
//     minInt: 0,
//     disposable: 0,
//     savings: dateInfo[j].savings,
//     updatedDebtInfo: []
//   };

//   // console.log(newDateInfo.minInt)

//   newDateInfo.disposable = newDateInfo.budget - dateInfo[j].minInt;

//   let updatedDebt = dateInfo[j].updatedDebtInfo;
//   updatedDebt.map(element => {
//     if (element.balance !== 0) {
//       if (element.balance - newDateInfo.disposable > 0) {
//         element.balance = element.balance - newDateInfo.disposable;
//         element.minInt = element.balance * (element.rate / 100);
//         newDateInfo.disposable = 0;
//       } else if (element.balance - newDateInfo.disposable === 0) {
//         element.balance = 0;
//         element.minInt = 0;
//         newDateInfo.disposable = 0;
//       } else {
//         newDateInfo.disposable = newDateInfo.disposable - element.balance;
//         element.balance = 0;
//         element.minInt = 0;
//       }
//     }
//   });

//   newDateInfo.savings += newDateInfo.disposable;

//   newDateInfo.updatedDebtInfo = updatedDebt;
//   for (let k = 0; k <= i; k++) {
//     newDateInfo.minInt += dateInfo[j].updatedDebtInfo[k].minInt;
//   }
//   newDateInfo.disposable = newDateInfo.budget - newDateInfo.minInt;

//   console.log(updatedDebt);
//   // console.log(newDateInfo)

//   dateInfo.push(newDateInfo);
// }

// console.log(dateInfo);
