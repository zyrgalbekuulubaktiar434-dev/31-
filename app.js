// Dom
// const titele=window.document.getElementsByTagName("h1")
// const text=document.getElementsByClassName("text")
// const hi=document.getElementById("hi")

const titele=document.querySelectorAll('h1')
const text=document.querySelectorAll('.text')
const hi=document.querySelector('#hi')

// console.log(titele);
// console.log(text);
// console.log(hi);


// innerText,innerHTML,textContent
titele[0].innerHTML="<i>My stydents</i>"
text[0].style.color="red"
text[0].style.backgroundColor="grey"
text[0].innerHTML="Im'm a new text."
console.log(text[0]);

