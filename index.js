var imges = Array.from(document.querySelectorAll(".container img"));
var box = document.querySelector(".bigBox");
var clodse = document.querySelector("#close");
var smallBox = document.querySelector(".BOx");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var currentIndex;

for (var i = 0; i < imges.length; i++) {
  imges[i].addEventListener("click", function (e) {
    box.classList.remove("d-none");

    var mySrc = e.target.getAttribute("src");
    smallBox.style.backgroundImage = `url(${mySrc})`;
    currentIndex = imges.indexOf(e.target);
  });
}

function slide(step) {
  currentIndex += step;
  if (currentIndex == imges.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = imges.length - 1;
  }
  var mySrc = imges[currentIndex].getAttribute("src");
  smallBox.style.backgroundImage = `url(${mySrc})`;
}

next.addEventListener("click", function () {
  slide(1);
});

prev.addEventListener("click", function () {
  slide(-1);
});

clodse.addEventListener("click", function () {
  box.classList.add("d-none");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    slide(1)
  }
  else if (e.key == "ArrowLeft") {
    slide(-1)
  } else if (e.key == "Escape") {
    box.classList.add("d-none");
  }
  
})
document.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("bigBox")) {
    box.classList.add("d-none");
  }
})
