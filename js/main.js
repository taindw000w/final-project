// burger-menu
const unionLink = document.querySelector(".union-container");
const unionLineFirst = document.querySelector(".union-container__line-first");
const unionLineCenter = document.querySelector(".union-container__line-center");
const unionLineThird = document.querySelector(".union-container__line-third");
const dropDownMenu = document.querySelector(".drop-down-menu");
const burger = document.querySelector(".union-container__menu-burger");
const container = document.querySelector(".container");
const deskLinks = document.querySelector(".flex-container");
const deleteLinks = document.querySelector(".flex-container-links");
const wrapBtn = document.querySelector(".wrapper-btn-default__option-btn");


// body 
const header = document.querySelector(".section-header");
const main = document.querySelector(".section-main-content");
const footer = document.querySelector(".section-footer");

const clicker = () => {
    dropDownMenu.classList.add("drop-down-menu_active");
};


burger.addEventListener("click", clicker);




