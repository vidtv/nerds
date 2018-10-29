var feedbackButton = document.querySelector(".contacts-list .btn");
var feedbackModalWindow = document.querySelector(".write-us-block");
var feedbackModalWindowCloseButton = document.querySelector(".write-us-block-close");
var formNameInput = feedbackModalWindow.querySelector("input[id='name']");
var formEMailInput = feedbackModalWindow.querySelector("input[id='email']");
var formMessageTextarea = feedbackModalWindow.querySelector("textarea#letter-text");

feedbackButton.addEventListener("click", function () {
    feedbackModalWindow.classList.add("write-us-block-show");
    formNameInput.focus();
    formNameInput.value = localStorage.getItem("name");
    formEMailInput.focus();
});

feedbackModalWindowCloseButton.addEventListener("click", function () {
    feedbackModalWindow.classList.remove("write-us-block-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        feedbackModalWindow.classList.remove("write-us-block-show");
    }
});

feedbackModalWindow.addEventListener("submit", function () {
    if (formNameInput.value) {
        localStorage.setItem("name", formNameInput.value);
    }
})

