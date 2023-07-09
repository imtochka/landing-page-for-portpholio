document.querySelector(".click_img").addEventListener("click", () => {
  document.querySelector(".nav-panel-fixed").style.display = "none";
});

document.querySelector(".display_none").addEventListener("click", () => {
  document.querySelector(".nav-panel-fixed").style.display = "block";
});

document.querySelector(".nav-panel_scroll").addEventListener("click", () => {
  document.querySelector(".nav-panel-fixed").style.display = "none";
});

let peapleNubmer = 1;
let radioInputs = document.getElementsByClassName("radio-input");
const radioButtons = document.querySelectorAll('input[type="radio"]');
console.log(radioButtons);

document.querySelector(".minus").addEventListener("click", () => {
  peapleNubmer--;
  peapleNubmer >= 1 ? true : (peapleNubmer = 1);
  document.querySelector(".output_number").innerHTML = peapleNubmer;
});

document.querySelector(".plus").addEventListener("click", () => {
  peapleNubmer++;
  document.querySelector(".output_number").innerHTML = peapleNubmer;
});
