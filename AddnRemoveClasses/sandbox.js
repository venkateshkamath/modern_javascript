// const content  = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('success');
// content.classList.remove('success');
// content.classList.add('error')

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  if (para.innerText.includes("Success")) {
    para.classList.add("success");
  }else if(para.innerHTML.includes('error')){
    para.classList.add("error");

  }
});

const title = document.querySelector('h1');
// console.log(title.textContent)
title.classList.toggle('test')//add
title.classList.toggle('test')//remove
//basically toggle
