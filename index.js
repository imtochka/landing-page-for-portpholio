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
let img1Header = 'url("./img/sliders/header-slide-one.png")';
img2Header = 'url("./img/sliders/header-slide-two.png")';
img3Header = 'url("./img/sliders/header-slide-three.png")';

img1DayOne = "url(./img/slider-two/slide-one.png)";
img2DayOne = "url(./img/slider-two/slide-one.png)";
img3DayOne = "url(./img/slider-two/slide-one.png)";

let sliderHeader = [img1Header, img2Header, img3Header];
let sliderDayOne = [img1DayOne, img2DayOne, img3DayOne];
let isSliderMoving = false;

headerSliderLeft = document.querySelector(".slider-header-img_left");
headerSliderCenter = document.querySelector(".slider-header-img_center");
headerSliderRight = document.querySelector(".slider-header-img_right");

sliderDayOneLeft = document.querySelector(".slider-img-day1_left");
sliderDayOneCenter = document.querySelector(".slider-img-day1_center");
sliderDayOneRight = document.querySelector(".slider-img-day1_right");

function imgSaveHeader() {
  headerSliderLeft.style.backgroundImage = sliderHeader[0];
  headerSliderCenter.style.backgroundImage = sliderHeader[1];
  headerSliderRight.style.backgroundImage = sliderHeader[2];
  console.log(sliderHeader);
}

function imgSaveDayOne() {
  sliderDayOneLeft.style.backgroundImage = sliderDayOne[0];
  sliderDayOneCenter.style.backgroundImage = sliderDayOne[1];
  sliderDayOneRight.style.backgroundImage = sliderDayOne[2];
  console.log(sliderDayOne);
}

imgSaveHeader();
imgSaveDayOne();

function sliderLeftMoveV1(
  sliderLeft,
  sliderCenter,
  sliderRight,
  save,
  removeSlide
) {
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
    removeSlide();
    sliderRight.classList.add("slider-hidden2");
    setTimeout(() => {
      sliderRight.classList.add("slider-unhidden");
    }, 0);

    setTimeout(() => {
      sliderRight.classList.remove("slider-hidden2");
      sliderRight.classList.remove("slider-unhidden");

      isSliderMoving = false;
    }, 300);
    save();
  };
}

function sliderLeftRightV1(
  sliderLeft,
  sliderCenter,
  sliderRight,
  save,
  removeSlide
) {
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
    removeSlide();
    sliderLeft.classList.add("slider-hidden2");
    setTimeout(() => {
      sliderLeft.classList.add("slider-unhidden");
    }, 0);
    setTimeout(() => {
      sliderLeft.classList.remove("slider-hidden2");
      sliderLeft.classList.remove("slider-unhidden");

      isSliderMoving = false;
    }, 300);
    save();
  };
}

function removeArrayHeaderRigth() {
  const lastImage = sliderHeader.pop(); // Удалить последний объект из массива
  sliderHeader.splice(0, 0, lastImage); // Добавить его в начало массива
}
// function removeArrayHeaderLeft() {
//   howToRemove.push(howToRemove[0]), // Добавить img1 в конец массива
//     howToRemove.splice(0, 1); // Удалить один с индексом 0
// }
function removeArrayHeaderLeft() {
  sliderHeader.push(sliderHeader[0]), // Добавить img1 в конец массива
    sliderHeader.splice(0, 1); // Удалить один с индексом 0
}

function removeArrayDayOneLeft() {
  sliderDayOne.push(sliderDayOne[0]), // Добавить img1 в конец массива
    sliderDayOne.splice(0, 1); // Удалить один с индексом 0
}

function removeArrayDayOneRight() {
  const lastImageDayOne = sliderDayOne.pop(); // Удалить последний объект из массива
  sliderDayOne.splice(0, 0, lastImageDayOne); // Добавить его в начало массива
}

//////////////// СЛАЙДЕР ХЕДЕР
document.querySelector(".header-left-arrow").onclick = () => {
  sliderLeftMoveV1(
    headerSliderLeft,
    headerSliderCenter,
    headerSliderRight,
    imgSaveHeader,
    removeArrayHeaderLeft
  );
};

document.querySelector(".header-right-arrow").onclick = () => {
  sliderLeftRightV1(
    headerSliderLeft,
    headerSliderCenter,
    headerSliderRight,
    imgSaveHeader,
    removeArrayHeaderRigth
  );
};
/////////////////// СЛАЙДЕР ДЕНЬ 1

document.querySelector(".day-one-left-arrow").onclick = () => {
  sliderLeftMoveV1(
    sliderDayOneLeft,
    sliderDayOneCenter,
    sliderDayOneRight,
    imgSaveDayOne,
    removeArrayDayOneLeft
  );
};

document.querySelector(".day-one-right-arrow").onclick = () => {
  sliderLeftRightV1(
    sliderDayOneLeft,
    sliderDayOneCenter,
    sliderDayOneRight,
    imgSaveDayOne,
    removeArrayDayOneRight
  );
};
