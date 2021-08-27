let $solutions = document.querySelector(".solutions");
let $dropMenu = document.querySelector(".drop-menu");
let $menuArrow = document.querySelector(".header__menu-arrow");
let $menuBurger = document.querySelector(".menu-burger");
let $menu = document.querySelector(".header__menu");

$solutions.addEventListener("click", function() {
    $dropMenu.classList.toggle("is-open");
    $menuArrow.classList.toggle("rotate");
});

$menuBurger.addEventListener("click", function() {
    $menu.classList.toggle("is-open");
});