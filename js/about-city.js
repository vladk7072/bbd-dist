$(window).on("scroll", () => {
  
  var blockPosition4 = $("#about").offset().top,
    windowScrollPosition4 = $(window).scrollTop();
  var blockPosition5 = $("#links").offset().top,
    windowScrollPosition5 = $(window).scrollTop();
  
  if (blockPosition4 < windowScrollPosition4) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-4").addClass("anchors__item--active");
  }
  if (blockPosition5 < windowScrollPosition5) {
    $(".anchors__item").removeClass("anchors__item--active");
    $(".anchors__item-5").addClass("anchors__item--active");
  }
});