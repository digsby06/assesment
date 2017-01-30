$( document ).ready(function() {
      var $window = $(window);
      var slideContainer = $('.slide-container');
      var toggleSlick;

      toggleSlick = function () {
        if ($window.width() < 1230) {
          console.log("the window is less than 1230px")
          $("#slider").addClass("slide-container");
          $("#slider").removeClass("state-cards--desktop-view");
          slideContainer.slick({
            dots: true,
            arrows: false
          });
        } else {
          slideContainer.slick("unslick");
          $("#slider").removeClass("slide-container");
          $("#slider").addClass("state-cards--desktop-view");
        }
      }

      $window.resize(toggleSlick);
      toggleSlick();
});
