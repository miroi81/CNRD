$(document).ready(function() {
    function showMenu(menu) {
        $(".menu-container").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }

    showMenu("main");

    $(".temoignages-button").click(function() {
        menu = showMenu("temoignages");
    });
    $(".poemes-button").click(function() {
        menu = showMenu("poemes");
    });
    $(".main-button").click(function() {
        menu = showMenu("main");
    });
});