function test(){
    let a="hello";
    if(true){
        let a ="hello";
        console.log(a);
    }
    console.log(a);
}
test();
// hi
//  hello


function test(){
    var a="hello";
    if(true){
        var a ="hi";
        // inner variable shadows the outer variable 
        // var ke case m shadowing hoti hai
        console.log(a);
    }
    console.log(a);
}
test();
// hi
// hi




function test(){
    var a="hello";
    if(true){
        // iss example m error isliye nhi aaya bcz var ke case m variable ko redecalre kr sakte hai
        let a ="hi";
        console.log(a);
    }
    console.log(a);
}
test();
// hi
// hello



function test(){
    let a="hello";
    if(true){
        var a ="hi";
        console.log(a);
    }
    console.log(a);
}
test();
//  Uncaught SyntaxError: Identifier 'a' has already been declared
// bcz let ke case m variable ko redeclare nhi kr sakte



let a="hello";function test(){
    let a="hello";
     a ="yashu";
    if(true){
        let a ="hello";
        console.log(a);
    }
    console.log(a);
}
test();
// VM968:6 hello
// VM968:8 yashu