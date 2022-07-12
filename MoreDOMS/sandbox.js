const copy = document.querySelector(".copy-me");
const paras = document.querySelectorAll("p");
console.log(paras)
copy.addEventListener("copy", () => {
  console.log("Hey, no copying");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  box.textContent = `X coords = ${e.offsetX}, Y Coords = ${e.offsetY}`;
});

//applying on the document
document.addEventListener("wheel", (e) => {
    paras.forEach(para=>{

        para.textContent = `Scroll Rating is: ${e.pageX} and ${e.pageY}`;
    })
});
