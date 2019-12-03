let linkFeedback = document.querySelector(".feedback-open");
let popupFeedback = document.querySelector(".feedback-form");
let formFeedback = document.querySelector(".feedback-form-opened");
let close = document.querySelector(".feedback-form-close");
let nameFeedback = popupFeedback.querySelector("[name=name]");
let emailFeedback = popupFeedback.querySelector("[name=email]");
let messageFeedback = popupFeedback.querySelector("[name=message]");
let overlay = document.querySelector(".overlay");

linkFeedback.addEventListener("click", (evt) => {
    evt.preventDefault();
    overlay.classList.add("overlay-show");
    popupFeedback.classList.add("feedback-form-show");
    nameFeedback.focus();
});

close.addEventListener("click", (evt) => {
    evt.preventDefault();
    popupFeedback.classList.remove("feedback-form-show");
    popupFeedback.classList.remove("popup-error");
    overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && popupFeedback.classList.contains("feedback-form-show")) {
        evt.preventDefault();
        popupFeedback.classList.remove("feedback-form-show");
        popupFeedback.classList.remove("popup-error");
        overlay.classList.remove("overlay-show");
    }
});

formFeedback.addEventListener("submit", (evt) => {
    if (!nameFeedback.value || !emailFeedback.value || !messageFeedback.value) {
        evt.preventDefault();
        popupFeedback.classList.remove("popup-error");
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add("popup-error");
    }
});
