$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


const headers = document.querySelector(".nav-headers");
const btn = document.querySelector(".nav-icon");

btn.addEventListener('click', () => {
    headers.classList.toggle('active');
})