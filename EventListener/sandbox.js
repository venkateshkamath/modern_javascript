const ul = document.querySelector("ul");
// ul.remove();removing the ul from the nodeList
const body = document.querySelector("body");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  //   document.location.reload();
  //add new element
  //first way, pick the ul and fill in the innerHTML of the same
  //   ul.innerHTML =
  //     ul.innerHTML +
  //     `<li>This is the new item added through the first method</li>`;

  // second method
  //create the li element
  const li = document.createElement("li");
  // add the text
  li.innerText = "Added via 2nd Method";
  //ul.append(li);// to the end of ul
  ul.prepend(li); //To the beginning
});

// const items = document.querySelectorAll("li");
// console.log(items); //nodeList so forEach
// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.stopPropagation();
//     // item.textContent = "item Deleted";
//     // e.target.style.textDecoration = "line-through";
//     e.target.remove();
//   });
// });

//The BUBBLING
//The eventHandling is mentioned on the li tags, when this is triggered it calls the callBack function and also to note that if anyone of its parent in this case it is ul will also be triggered, so use stopPropogation on the event.

//example

ul.addEventListener("click", function (e) {
  // console.log(e.target.tagName)
  if ("LI" === e.target.tagName) e.target.remove();
});

//Event Delegation
