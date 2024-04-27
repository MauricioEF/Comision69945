function a(){
    console.log(1); // :D
    b();
    console.log(2); // :D
}

function b(){
    console.log(3); // :D
    c();
    console.log(4); // :D
}

function c(){
    console.log(5); // :D
}

a();