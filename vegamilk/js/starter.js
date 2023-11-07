$(function () {
    $(document).scroll(function () {
        var $landing_page = $("#starter")
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $landing_page.height());
    });
});