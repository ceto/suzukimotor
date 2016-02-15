// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

jQuery(document).foundation();

$(document).ready(function() {


    $('.modelcat__carousel1').owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      pagination: true,
      navigation : false,
      afterInit: customPager,
      afterUpdate: customPager,
      afterAction: function(el){
         this.$owlItems.find('.modelcat__item').removeClass('is_active');
         this.$owlItems.find('.modelcat__item').removeClass('is_next');
         this.$owlItems.find('.modelcat__item').removeClass('is_prev');

         this.$owlItems.eq(this.currentItem).find('.modelcat__item').addClass('is_active');

         this.$owlItems.eq(this.currentItem+1).find('.modelcat__item').addClass('is_next');

         this.$owlItems.eq(this.currentItem-1).find('.modelcat__item').addClass('is_prev');
      }

    });

    $('.modelcat__carousel2').owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      pagination: true,
      navigation : false,
      afterInit: customPager2,
      afterUpdate: customPager2,
      afterAction: function(el){
         this.$owlItems.find('.modelcat__item').removeClass('is_active');
         this.$owlItems.find('.modelcat__item').removeClass('is_next');
         this.$owlItems.find('.modelcat__item').removeClass('is_prev');

         this.$owlItems.eq(this.currentItem).find('.modelcat__item').addClass('is_active');

         this.$owlItems.eq(this.currentItem+1).find('.modelcat__item').addClass('is_next');

         this.$owlItems.eq(this.currentItem-1).find('.modelcat__item').addClass('is_prev');
      }

    });



    $('.modelcat__item a').on('click', function(e){
      var actowl =  $(this).closest('.modelcat__carousel').data('owlCarousel');
      if ( $(this).closest('.modelcat__item').hasClass('is_next') ) {
        e.preventDefault();
        actowl.next();
      } else {
          if ( $(this).closest('.modelcat__item').hasClass('is_prev') ) {
            e.preventDefault();
            actowl.prev();
          }
      }
    });


    function customPager() {
      $.each(this.owl.userItems, function (i) {
        var titleData = jQuery(this).find('.modelcat__item__title').text();
        var paginationLinks = jQuery('.modelcat__carousel1 .owl-controls .owl-pagination .owl-page');
        $(paginationLinks[i]).append(titleData);
      });
    }

    function customPager2() {
      $.each(this.owl.userItems, function (i) {
        var titleData = jQuery(this).find('.modelcat__item__title').text();
        var paginationLinks = jQuery('.modelcat__carousel2 .owl-controls .owl-pagination .owl-page');
        $(paginationLinks[i]).append(titleData);
      });
    }


  $('.owl-prodgal').owlCarousel({

      navigation : false,
      pagination: false,
      paginationSpeed : 400,
      singleItem:true,


  });

});