//Event propagation-> refers to how an event travels through the DOM tree

//Evemt Phases

//3 phase

//1.Event CApturing -starts at the root 
//2.Target
//3.EVent Bubbling

//||DOCUMENT
//||HTML
//||BODY
//||DIV
//||BUTTON


//event bubbling is when the event travels from the button all up to the document
//event capturing the event travels from the top of the document down to the button


window.addEventListener('click',function(){
    console.log('window')
})
document.addEventListener('click',function(){
console.log('Document')
})

document.querySelector('.div2').addEventListener('click',function(){
    console.log('DIV 2')
})
document.querySelector('.div1').addEventListener('click',function(){
    console.log('DIV 1')
})

document.querySelector('button').addEventListener('click',function(e){
    console.log(e.target.innerText='clicked!')
})