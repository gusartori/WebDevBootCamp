var tag = document.getElementById("highlight");

var tog = document.getElementsByClassName("bolded");

var tagname = document.getElementsByTagName("li");

// gives just the first one
var query = document.querySelector(".bolded");

// gives all matching elements
var queryall = document.querySelectorAll(".bolded");

queryall.innerHTML = "changed";