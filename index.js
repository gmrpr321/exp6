$(document).ready(function () {
  $(".dropdown-submenu > a").click(function (e) {
    e.preventDefault();
    $(this).next("ul").toggle();
    e.stopPropagation();
  });
});

$(document).on("click", function (e) {
  if ($(e.target).parents(".dropdown-submenu").length === 0) {
    $(".dropdown-menu ul").hide();
  }
});
