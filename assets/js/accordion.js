// accordion
$(function () {
  $(".js-faq-item.active").find(".js-faq-hide").slideDown(0);

  $(".js-faq-button").on("click", function () {
    if ($(this).closest(".js-faq-item").hasClass("active")) {
      $(this).closest(".js-faq-item").find(".js-faq-hide").slideUp(300);
      $(this).closest(".js-faq").find(".js-faq-item").removeClass("active");
    } else {
      $(this).closest(".js-faq").find(".js-faq-item.active .js-faq-hide").slideUp(300);
      $(this).closest(".js-faq").find(".js-faq-item.active").removeClass("active");
      $(this).closest(".js-faq-item").addClass("active");
      $(this)
        .closest(".js-faq-item")
        .closestDescendent(".js-faq-hide")
        .slideDown(300, function () {
          if ($(".mob").length) {
            var url = $(this).closest(".js-faq-item");
            $("html, body").animate(
              {
                scrollTop: parseInt($(url).offset().top - $(".header").height()),
              },
              300
            );
          }
        });
    }
  });
});
// accordion
