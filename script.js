// Welcome Message

console.log("Welcome to Muhammad Faizan Portfolio");

// Hero Button

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Thank you for visiting my portfolio!");

    });

});

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
/* 
   CONTACT FORM VALIDATION
 */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();

});
// 
// PAGE LOADED
// 

window.addEventListener("load",()=>{

    console.log("Portfolio Loaded Successfully");

});