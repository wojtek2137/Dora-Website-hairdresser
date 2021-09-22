$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


const toggleButton = document.querySelector(".toggle-button");
const links = document.querySelector(".nav-headers");

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active');
});
links.addEventListener('click', () => {
    links.classList.toggle('active');
})