(function () {
  var srcArr = document.querySelectorAll("[data-bg]");
  if ($(".mob").length) {
    setTimeout(function () {
      for (var i = 0; i < srcArr.length; i++) {
        var newSrc = srcArr[i].dataset.bg;
        srcArr[i].style.backgroundImage = "url(" + newSrc + ")";
      }
    }, 1500);
  } else {
    for (var i = 0; i < srcArr.length; i++) {
      var newSrc = srcArr[i].dataset.bg;
      srcArr[i].style.backgroundImage = "url(" + newSrc + ")";
    }
  }
  if ($(".js-main-slider").length) {
    $(".js-slide").each(function () {
      $(this).attr("data-item", $(this).index());
    });

    $(".js-main-slider").on("init", function () {
      $(".js-main-slider").removeClass("loaded");

      var length = $(".slick-slide").length;
      var newCount = "<span>1</span>/" + length;
      $(".js-main-count").html(newCount);
    });

    $(".js-main-slider").slick({
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 200,
      speed: 1000,
      waitForAnimate: false,
      fade: true,
      appendArrows: $(".js-main-arrows"),
      appendDots: $(".js-main-dots"),
    });

    $(".js-main-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
      var newCount = "<span>" + (nextSlide + 1) + "</span>/" + slick.slideCount;
      $(".js-main-count").html(newCount);
      $(this).find(".js-slide").removeClass("active");
      $(this)
        .find(".js-slide[data-item=" + nextSlide + "]")
        .addClass("active");
    });
  }
  if ($(".js-catalog-carousel").length) {
    $(function () {
      $(".js-catalog-carousel").on("init", function () {
        $(".js-catalog").removeClass("loaded");
      });

      function catalogInit(slider, dots, arrowPrev, arrowNext) {
        slider.slick({
          dots: true,
          appendDots: dots,
          arrows: true,
          prevArrow: arrowPrev,
          nextArrow: arrowNext,
          infinite: true,
          autoplay: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          touchThreshold: 200,
          speed: 500,
          waitForAnimate: false,
          adaptiveHeight: true,
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 701, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          ],
        });
      }

      $(".js-catalog-carousel").each(function () {
        var $this = $(this),
          $dots = $this.closest(".js-catalog").find(".js-catalog-dots"),
          $arrowPrev = $this.closest(".js-catalog").find(".js-catalog-prev"),
          $arrowNext = $this.closest(".js-catalog").find(".js-catalog-next");
        setTimeout(function () {
          catalogInit($this, $dots, $arrowPrev, $arrowNext);
        }, 3000);
      });
    });
  }
})();
