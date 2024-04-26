var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");

function signup(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  x.querySelector(".toggle-btn").classList.remove("active");
  y.querySelector(".toggle-btn").classList.add("active");
}

function login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
  x.querySelector(".toggle-btn").classList.add("active");
  y.querySelector(".toggle-btn").classList.remove("active");
}

