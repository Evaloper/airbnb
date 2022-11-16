import React from "react";
import { ReactDOM } from "react";

// document.getElementById('nav_btn').addEventListener("click", function() {
// 	document.querySelector('.popup_div').style.display = "flex";
// });

// // document.querySelector('#close').addEventListener("click", function() {
// // 	document.querySelector('.popup_div').style.display = "none";
// // });

// // document.getElementById('nav_btn').addEventListener("click", Display());

export default function display() {
	document.getElementById('nav_btn').addEventListener("click", function() {
        document.querySelector('.popup_div').style.display = "flex";
    });
}

// // document.querySelector('#close').addEventListener("click", Displaynone());