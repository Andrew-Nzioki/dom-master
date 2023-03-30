//Event listeners

//syntax to add an event

//Element.addEventListener('click',function)


//click event
const buttonTwo=document.querySelector('.btn-2');

function alertBtn(){
    alert('I also love javascript')
   
}
buttonTwo.addEventListener('click',alertBtn)

//mouseover

const buttonThree=document.querySelector('.btn-3')
function changeBgColor(){
    buttonThree.style.backgroundColor='blue'
}
buttonThree.addEventListener('mouseover',changeBgColor,false)


//Reveal Event

