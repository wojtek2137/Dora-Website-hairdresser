$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});
// function toggle() {

//     const headers = document.querySelector(".nav-headers");
//     headers.classList.toggle("active");

// }

const headers = document.querySelector(".nav-headers");
const btn = document.querySelector(".nav-icon");

btn.addEventListener('click', () => {
    headers.classList.toggle('active');
})