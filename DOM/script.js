/*let title=document.getElementById("title");
title.textContent="My JavaScript Website";
let paragraphs=document.querySelector(".text");
paragraphs.textContent="First Paragraph Changed";

let paragraphsList=document.querySelectorAll(".text");
paragraphsList.forEach((paragraph)=>{
    paragraph.style.color="blue";
})


let title1=document.getElementById("title1");
let button=document.getElementById("btn");

button.addEventListener("click",()=>{
    title1.textContent="JavaScript is Awesome!"
})

let input=document.getElementById("nameInput");
let submitButton=document.getElementById("btn1");
let displayname=document.getElementById("output");

submitButton.addEventListener("click",()=>{
    displayname.textContent=`Hello, ${input.value}!`;
    displayname.style.color="green";
})



let form=document.getElementById("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let input=document.getElementById("input");
    let output=document.getElementById("output1");
    let name= input.value.trim()
    if(name.length<3){
        output.textContent="Please Enter Your Name"
        output.style.color="red"
        return;
    }
    output.textContent=`Hello,${name}`;
    output.style.color="green"
})


let heading= document.createElement("h1");
heading.textContent="My JavaScript App";
let paragraph= document.createElement("p")
paragraph.textContent="I am learning DOM manipulation"
let container=document.getElementById("container")
container.append(heading,paragraph)


let fruits=["Apple","Banana","Mango"]

let list=document.getElementById("list")
fruits.forEach((fruit)=>{
    let item=document.createElement("li")
    item.textContent=fruit;
    list.append(item)
})


let toggleMessage = document.getElementById("message");
let toggleButton = document.getElementById("btn2");

toggleButton.addEventListener("click", () => {
    toggleMessage.classList.toggle("hidden");
});
*/

let input=document.getElementById("username")
console.log(input.getAttribute("type"))
console.log(input.setAttribute("type","email"))
console.log(input.setAttribute("placeholder","Enter your email address"))
console.log(input.hasAttribute("placeholder"))