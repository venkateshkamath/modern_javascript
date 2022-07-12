const article = document.querySelector("article");
// console.log(article.children);//all the children is GOT in the HTML COLLECTION and this is not traversal.
const arr = Array.from(article.children); //HTML Collection to ARRAYS
arr.map((item) => {
  item.classList.add("article-element");
}); // Can use forEach also

const title = document.querySelector("h2");
console.log(title.parentElement); // parent
console.log(title.parentElement.parentElement); //GRAND parent, which is Body]

//Sibling
console.log(title.nextElementSibling);
console.log(title.previousElementSibling.textContent);
console.log(title.nextElementSibling.parentElement.children)

