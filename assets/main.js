const btn = document.getElementById("button");
const nav = document.getElementById("nav")
const body = document.querySelector('body');
const links = document.querySelectorAll('.link');

btn.addEventListener("click", () => {
  handlerClick()
});


for (var i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    handlerClick()
  }
}



function handlerClick() {
  nav.classList.toggle("hidden");
  body.classList.toggle('stop-scroll');
}
