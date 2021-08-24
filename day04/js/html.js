// we can read // access the element
document.querySelector("button");
let element = document.querySelectorAll(".my-buttons")[0];
element = document.querySelector("#my-button");
console.log(element);

// update text/html
element.innerText = "this is new text";
element.innerHTML = "<h1>this is new text</h1><h1>this is new text</h1>";

// change styles
element.style.backgroundColor = "green";
element.style.color = "white";
element.style.display = "flex";
element.classList.add("active");
element.classList.remove("active");

// create more html items
const newButton = document.createElement("button");
newButton.innerHTML = "this is a new button";
document.body.appendChild(newButton);


// listen for events
newButton.addEventListener("mouseleave", function () {
  alert("you clicked me");
});

