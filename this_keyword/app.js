// this always depends on how it is called upon

// 1.functional calling(direct)
// 2.method calling
// 3. constructor fun calling
// 4. indirect calling
// 5. arrow function calling

// ----------------------------------------

// 1.functional calling(direct) : window object
// function fun(){
//     console.log(this);
// }
// fun();//window

// ----------------------------------------

// 2.method calling : object inside which it is created

// let obj = {
//     a: 10,
//     b: 28,
//     c: function () {
//       console.log(this);
//     },
//   };
//   obj.c();//obj

// --------------------------------------

// let obj = {
//   a: 10,
//   b: 28,
//   c: function () {
//     console.log(this);
//   },
// };
// let ans = obj.c;
// ans();// window

// --------------------------------------

// let obj = {
//   a: 10,
//   c: function () {
//     console.log(this);//obj
//     function b() {
//       console.log(this);//window
//     }
//     b();
//   },
// };
// obj.c();

// --------------------------------------

// let obj = {
//   a: 10,
//   c: function () {
//     console.log(this);//window
//     function b() {
//       console.log(this);//window
//     }
//     b();
//   },
// };
// let ans = obj.c;
// ans();

// ---------------------------------------------
// 3. constructor

// function Fun() {
//   this.naam = "shinchan";
// }
// let obj = new Fun();
// console.log(obj);//Fun()

// -----------------------------------------------
// 4. indirect calling : call , apply , bind

// let obj1 = {
//   a: 10,
//   b: function (a, b, c) {
//     console.log(this, a, b, c);
//   },
// };
// let obj2 = {
//   a: 50,
// };
// obj1.b.call(obj2, 10, 20, 30);
// obj1.b.apply(obj2, [10, 20, 30]);

// -----------------------------------------------

// let obj1 = {
//     a: 10,
//     b: function (a, b, c) {
//       console.log(this, a, b, c);
//     },
//   };
//   let obj2 = {
//     a: 50,
//   };
//   let ans = obj1.b.bind(obj2, 10, 20, 30); //creates a copy
//   ans();
  
  // -----------------------------------------------
  
  // 5. arrow function calling : points at parent's this
  
  // let obj = {
  //     a:10,
  //     b:20,
  //     fn:()=>{
  //         console.log(this);
  //     }
  // }
  // -----------------------------------------------
  
  // let obj = {
  //   a: 10,
  //   fn: () => {
  //     let f = () => {
  //       console.log(this);
  //     };
  //   },
  // };
  // obj.fn();
  
  // -----------------------------------------------
  
  // let obj = {
  //   a: 10,
  //   fn: function () {
  //     let f = () => {
  //       console.log(this);
  //     };
  //   },
  // };
  // obj.fn();
  
  // -----------------------------------------------