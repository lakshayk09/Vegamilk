$(function () {
    $(document).scroll(function () {
        var $nav_height = $("#starter")
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav_height.height());
    });
});