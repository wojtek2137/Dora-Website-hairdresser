$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

// const btn = document.getElementsByClassName("btn-nav");
// const headers = document.getElementsByClassName("nav-headers");
// btn.addEventListenner("click", () => {
//     headers.toggleClass("active");
// })