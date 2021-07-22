$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


const headers = document.querySelector(".nav-headers");
const btn = document.querySelector(".nav-icon");
const link = document.querySelector(".link")

btn.addEventListener('click', () => {
    headers.classList.toggle('active');
})

link.addEventListener('click', () => {
    headers.classList.toggle('active');
})