$(window).on("scroll", () => {
  var blockPosition1 = $("#bbd").offset().top,
    windowScrollPosition1 = $(window).scrollTop();
  var blockPosition2 = $("#about__team").offset().top,
    windowScrollPosition2 = $(window).scrollTop();
  var blockPosition3 = $("#statute").offset().top,
    windowScrollPosition3 = $(window).scrollTop();

  if (blockPosition1 < windowScrollPosition1) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-1").addClass("anchors__item--active");
  }
  if (blockPosition2 < windowScrollPosition2) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-2").addClass("anchors__item--active");
  }
  if (blockPosition3 < windowScrollPosition3) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-3").addClass("anchors__item--active");
  }
});