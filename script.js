const counter =document.querySelectorAll('.counter');
counter.forEach((counter)=>{
// console.log(counter)

counter.innerHTML =0;

const updatecounter = ()=>{
 
const targetcounter = +counter.getAttribute('data-target');
// console.log( typeof targetcounter); 
const startingcount = Number(counter.innerHTML)
const incr =targetcounter /100;
if(startingcount<targetcounter){
    counter.innerHTML =`${Math.round(startingcount + incr)}`;
    setTimeout(updatecounter,10)
}

}

updatecounter();
})



// there are several ways to acheive it:

// using the unary plus operator :
// var n =+str;

// the number construction :
// var n = number (str);

// the parsefloat function
// var n =parseFloat(str);
