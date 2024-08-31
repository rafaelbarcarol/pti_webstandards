$(document).ready(function () {
  moveToNextSection();
  headerBehavior();
  parallax();
  benefitsSlider();
  formResponse();
  openMobileHeader();
  closeMobileHeader();
  mobileNavigation();
});

function moveToNextSection() {
  $(".js-home-banner-button").on("click", function () {
    const nextSection = $(".js-home-about");

    if (nextSection.length) {
      $("html, body").animate(
        {
          scrollTop: nextSection.offset().top,
        },
        1000
      );
    }
  });
}

function headerBehavior() {
  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    const header = $(".js-header");

    if (scrollTop > lastScrollTop) {
      header.addClass("going-down");
    } else {
      header.removeClass("going-down");
    }

    lastScrollTop = scrollTop;
  });
}

function parallax() {
  var rellax = new Rellax(".rellax");
}

function benefitsSlider() {
  $(".slider-benefits-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  });
}

function formResponse() {
  $(".js-form-info").on("click", function (e) {
    e.preventDefault();
    alert(
      "Este formulário é apenas para marcação. Nenhum dado será submetido."
    );
  });
}

function openMobileHeader() {
  $(".js-mobile-header").on("click", function () {
    $(".js-mobile-header-menu").addClass("active");
  });
}

function closeMobileHeader() {
  $(".js-close-mobile-header-menu").on("click", function () {
    $(".js-mobile-header-menu").removeClass("active");
  });
}

function mobileNavigation() {
  $(".js-mobile-header-link").on("click", function () {
    $(".js-mobile-header-menu").removeClass("active");
  });
}
