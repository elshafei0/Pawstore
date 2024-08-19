const body = document.getElementById("body");
const big = document.querySelector(".big-div");
const nav = document.querySelector(".nav-resp");
const div_resp = document.getElementById("responsive");
const night = document.querySelector(".night");
const night_resp = document.querySelector(".night-resp");
const header = document.getElementById("header");
const ul_header = document.querySelector(".ul");
const frist = document.querySelector(".frist-div");
const fifth = document.querySelector(".fifth-div");
const name = document.querySelector(".name");
let currentIndex = 0;
//
nav.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        div_resp.style.right = "0";
        nav.style.transform = "rotate(90deg)";
      }
      break;
    case 0: {
      div_resp.style.right = "-200px";
      nav.style.transform = "rotate(0deg)";
    }
  }
});
//
night_resp.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "rgb(181, 81, 10)";
        header.style.color = "black";
        ul_header.style.color = "black";
        night.style.backgroundColor = "transparent";
        frist.style.backgroundColor = "transparent";
        fifth.style.backgroundColor = "transparent";
        document.querySelector(".nav-night").style.backgroundColor =
          "transparent";
        name.style.color = "yellow";
      }
      break;
    case 0: {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      header.style.backgroundColor = "black";
      header.style.color = "white";
      ul_header.style.color = "white";
      night.style.backgroundColor = "white";
      frist.style.backgroundColor = "antiquewhite";
      fifth.style.backgroundColor = "antiquewhite";
      document.querySelector(".nav-night").style.backgroundColor = "white";
      name.style.color = "blue";
    }
  }
});
night.addEventListener("click", function () {
  currentIndex = 1 - currentIndex;
  switch (currentIndex) {
    case 1:
      {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "rgb(181, 81, 10)";
        header.style.color = "black";
        night.style.backgroundColor = "transparent";
        frist.style.backgroundColor = "transparent";
        fifth.style.backgroundColor = "transparent";
        document.querySelector(".nav-night").style.backgroundColor =
          "transparent";
        name.style.color = "yellow";
      }
      break;
    case 0: {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      header.style.backgroundColor = "black";
      header.style.color = "white";
      ul_header.style.color = "white";
      night.style.backgroundColor = "white";
      frist.style.backgroundColor = "antiquewhite";
      fifth.style.backgroundColor = "antiquewhite";
      document.querySelector(".nav-night").style.backgroundColor = "white";
      name.style.color = "blue";
    }
  }
});
