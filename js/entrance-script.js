let openEntrance = document.querySelector(".entrance-button");
let popupEntrance = document.querySelector(".login-section");
let formEntrance = document.querySelector("login-section-form");
let loginEntrance = popupEntrance.querySelector("[name=login]");
let passwordEntrance = popupEntrance.querySelector("[name=password]");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("loginEntrance")
} catch (err) {
    isStorageSupport = false;
}

openEntrance.addEventListener("mouseover", (evt) => {
    evt.preventDefault();
    if (storage) {
        loginEntrance.value = storage;
        passwordEntrance.focus();
    } else {
        loginEntrance.focus();
    }
});

formEntrance.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (loginEntrance && passwordEntrance && isStorageSupport) {
        localStorage.setItem("loginEntrance", login.value);
    }
});
