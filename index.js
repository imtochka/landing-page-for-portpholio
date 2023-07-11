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

/////////////////////////////////////////////////////////////////////////////
let img1 = 'url("./img/sliders/header-slide-one.png")';
img2 = 'url("./img/sliders/header-slide-two.png")';
img3 = 'url("./img/sliders/header-slide-three.png")';
let sliderHeader = [img1, img2, img3];
let isSliderMoving = false;

sliderLeft = document.querySelector(".slider-header-img_left");
sliderCenter = document.querySelector(".slider-header-img_center");
sliderRight = document.querySelector(".slider-header-img_right");

function imgSave() {
  sliderLeft.style.backgroundImage = sliderHeader[0];
  sliderCenter.style.backgroundImage = sliderHeader[1];
  sliderRight.style.backgroundImage = sliderHeader[2];
  console.log(sliderHeader);
}

imgSave();

function sliderLeftMove() {
  if (isSliderMoving) {
    return;
  }
  isSliderMoving = true;

  sliderLeft.animate([{ opacity: "0" }], {
    duration: 300,
    iterations: 1,
  });

  sliderCenter.animate(
    [{ transform: "scale(1) translateX(-290px)", filter: "brightness(1)" }],
    {
      duration: 300,
      iterations: 1,
    }
  );
  sliderRight.animate([{ transform: "scale(0.85) translateX(-320px)" }], {
    duration: 300,
    iterations: 1,
  }).onfinish = function () {
    sliderHeader.push(sliderHeader[0]), // Добавить img1 в конец массива
      sliderHeader.splice(0, 1), // Удалить один с индексом 0
      sliderRight.classList.add("slider-hidden2");
    setTimeout(() => {
      sliderRight.classList.add("slider-unhidden");
    }, 0);

    setTimeout(() => {
      sliderRight.classList.remove("slider-hidden2");
      sliderRight.classList.remove("slider-unhidden");

      isSliderMoving = false;
    }, 300);
    imgSave();
  };
}

function sliderLeftRight() {
  if (isSliderMoving) {
    return;
  }
  isSliderMoving = true;

  sliderLeft.animate(
    [
      {
        transform: "scale(0.85) translateX(340px)",
        filter: "brightness(0.7)",
      },
    ],
    {
      duration: 300,
      iterations: 1,
    }
  );

  sliderCenter.animate([{ transform: "scale(0.85) translateX(320px)" }], {
    duration: 300,
    iterations: 1,
  });
  sliderRight.animate([{ opacity: "0" }], {
    duration: 300,
    iterations: 1,
  }).onfinish = function () {
    const lastImage = sliderHeader.pop(); // Удалить последний объект из массива
    sliderHeader.splice(0, 0, lastImage); // Добавить его в начало массива
    sliderLeft.classList.add("slider-hidden2");
    setTimeout(() => {
      sliderLeft.classList.add("slider-unhidden");
    }, 0);
    setTimeout(() => {
      sliderLeft.classList.remove("slider-hidden2");
      sliderLeft.classList.remove("slider-unhidden");

      isSliderMoving = false;
    }, 300);
    imgSave();
  };
}

document.querySelector(".header-left-arrow").onclick = () => {
  sliderLeftMove();
};

document.querySelector(".header-right-arrow").onclick = () => {
  sliderLeftRight();
};
