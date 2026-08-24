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

/*let input = document.getElementById("username");

console.log(input.getAttribute("type"));

input.setAttribute("type", "email");
input.setAttribute("placeholder", "Enter your email address");

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

console.log(input.hasAttribute("placeholder"));



let button=document.getElementById("btn1")
button.addEventListener("click",(event)=>{
     console.log(event.target.textContent);
})


let box = document.getElementById("box");

box.addEventListener("click", (event) => {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
});
*/

let parent=document.getElementById("parent");
let child=document.getElementById("child");
parent.addEventListener("click",(event)=>{
    console.log("Parent Clicked");
})
child.addEventListener("click",(event)=>{
    console.log("Child Clicked");
    event.stopPropagation(); // Prevents the click event from bubbling up to the parent
})