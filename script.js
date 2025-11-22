let incr = document.querySelector("#incr");
let decr= document.querySelector("#decr");
var h2=document.querySelector("h2");

var a=0;

incr.addEventListener('click', function(){
    // button.style.backgroundColor="red";
    a=a+1
    h2.innerHTML=a
    console.log(a);
})

decr.addEventListener('click', function(){
    a=a-1;
        h2.innerHTML=a

    console.log(a);
})

// console.log(a);
