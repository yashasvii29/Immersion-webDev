// this always depends on how it is called upon

// 1.functional calling(direct)
// 2.method calling
// 3. constructor fun calling
// 4. indirect calling
// 5. arrow function calling

// ----------------------------------------

// 1.functional calling(direct) : window object
// window is a global object
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
// In constructor calling new keyword ki help se uss class ka object create krenge so in this case this always refers to newly created object
// console.log(this);//obj()

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
  
  // 5. arrow function calling : points at parent's this..means this refers to parents this
  // in arrow fun calling , this keyword refers to its (parents this)
  // let obj = {
  //     a:10,
  //     b:20,
  //     fn:()=>{
  //         console.log(this);
  //     }
  // }
  // obj.fn();//window
  // -----------------------------------------------
  
  // let obj = {
  //   a: 10,
  //   fn: () => {
  //     let f = () => {
  //       console.log(this);
  //     };
  //     f();
  //   },
  // };
  // obj.fn(); //window
  
  // -----------------------------------------------
  
  // let obj = {
  //   a: 10,
  //   fn: function () {
  //     let f = () => {
  //       console.log(this);
  //     };
  //     f();
  //   },
  // };
  // obj.fn(); //obj
  
  // -----------------------------------------------










  // call method example

  let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  sayWelcome.call(p1, 'Welcome'); // Welcome John Smith
  sayWelcome.call(p2, 'Welcome'); // Welcome Ann Brown




  // apply method example


  let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  sayWelcome.apply(p1, ['Welcome']); // Welcome John Smith
  sayWelcome.apply(p2, ['Welcome']); // Welcome Ann Brown




  // bind method example

  let p1 = {
    firstName: 'John',
    lastName: 'Smith'
  };
  let p2 = {
    firstName: 'Ann',
    lastName: 'Brown'
  };
  function sayWelcome() {
    console.log('Welcome ' + this.firstName + ' ' + this.lastName);
  }
  let sayWelcomeJohn = sayWelcome.bind(p1);
  let sayWelcomeAnn = sayWelcome.bind(p2);
  sayWelcomeJohn(); // Welcome John Smith
  sayWelcomeAnn(); // Welcome Ann Brown