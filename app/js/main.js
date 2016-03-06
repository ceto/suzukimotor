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

  $('.main').fitVids();

  $('.popup-video').magnificPopup({
    disableOn: 767,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: true
  });


  var $butikgrid = $('.butiklist');

  $butikgrid.isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.itemsizer'
    }
  });

  $butikgrid.imagesLoaded( function() {
    $butikgrid.isotope('layout');
    $('.js-isotopegrid').addClass('is-loaded');
  });




  $('.hero__carousel').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 800,
    singleItem:true,
    pagination: false,
    navigation : true,
    autoHeight: true,
    navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>']
  });
  $('.promo__carousel').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 800,
    singleItem:true,
    pagination: false,
    navigation : true,
    autoHeight: true,
    navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>']
  });



  $('.relpost-carousel').owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 800,
      pagination: false,
      navigation : false,
      autoHeight: true,
      items : 4,
      itemsDesktop : [1280,3],
      itemsDesktopSmall : [1024,3],
      itemsTablet: [768,2],
      itemsMobile: [480,2]
  });

  $('.relacc-carousel').owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 800,
      pagination: false,
      navigation : false,
      autoHeight: true,
      items : 4,
      itemsDesktop : [1440,3],
      itemsDesktopSmall : [1024,3],
      itemsTablet: [768,2],
      itemsMobile: [480,1]
  });

  $('.prodhero__carousel').owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem: true,
      pagination: true,
      navigation : false,
      autoHeight: true
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



    $('.modelcat__carousel1').owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      pagination: true,
      navigation : true,
      navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],
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



    $('.modelcat__item').on('click', function(e){
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


    /**** Timeline Carousel ****/

    function timelinePager() {
      $.each(this.owl.userItems, function (i) {
        var titleData = jQuery(this).find('.timeline__date').text();
        var paginationLinks = jQuery('.timeline__carousel .owl-controls .owl-pagination .owl-page');
        $(paginationLinks[i]).append(titleData);
      });
    }

    $('.timeline__carousel').owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      pagination: true,
      navigation : false,
      afterInit: timelinePager,
      afterUpdate: timelinePager,
      afterAction: function(el){
         this.$owlItems.find('.timeline__item').removeClass('is_active');
         this.$owlItems.find('.timeline__item').removeClass('is_next');
         this.$owlItems.find('.timeline__item').removeClass('is_prev');

         this.$owlItems.eq(this.currentItem).find('.timeline__item').addClass('is_active');

         this.$owlItems.eq(this.currentItem+1).find('.timeline__item').addClass('is_next');

         this.$owlItems.eq(this.currentItem-1).find('.timeline__item').addClass('is_prev');
      }

    });



    $('.timeline__item').on('click', function(e){
      var actowl =  $(this).closest('.timeline__carousel').data('owlCarousel');
      if ( $(this).closest('.timeline__item').hasClass('is_next') ) {
        e.preventDefault();
        actowl.next();
      } else {
          if ( $(this).closest('.timeline__item').hasClass('is_prev') ) {
            e.preventDefault();
            actowl.prev();
          }
      }
    });




    /*** Nagyon durva galéria carousel szinronban tartva ******/


  function syncPosition(el){
    var current = this.currentItem;
    this.$owlItems.find('.gallery__item').removeClass('is_active');
    this.$owlItems.eq(current).find('.gallery__item').addClass('is_active');

    this.$owlItems.find('.gallery__item').removeClass('is_next');
    this.$owlItems.find('.gallery__item').removeClass('is_prev');

    this.$owlItems.eq(current+1).find('.gallery__item').addClass('is_next');
    this.$owlItems.eq(current-1).find('.gallery__item').addClass('is_prev');


    $('#thethumbs')
      .find('.owl-item')
      .removeClass('synced')
      .eq(current)
      .addClass('synced');
    if($('#thethumbs').data('owlCarousel') !== undefined){
      center(current);
    }
  }


  var sync1 = $('.gallery__carousel');
  var sync2 = $('.thumbs__carousel');

  sync1.owlCarousel({
      navigation : false,
      pagination: false,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight: true,
      afterAction: syncPosition
  });


  sync2.owlCarousel({
      items : 7,
      itemsDesktop      : [1440,6],
      itemsDesktopSmall     : [1024,5],
      itemsTablet       : [768,4],
      itemsMobile       : [480,3],
      navigation : true,
      navigationText: ['<i class="icon icon--chevron-circle-left"></i>','<i class="icon icon--chevron-circle-right"></i>'],
      pagination: false,
      paginationSpeed : 400,
      afterInit : function(el){
        el.find('.owl-item').eq(0).addClass('synced');
      },
      afterAction: function(el){
         this.$owlItems.find('.item__thumb').removeClass('is_active');
         this.$owlItems.eq(this.currentItem).find('.item__thumb').addClass('is_active');
      }
  });

    $('.gallery__item').on('click', function(e){
      var actowl =  $(this).closest('.gallery__carousel').data('owlCarousel');
      if ( $(this).closest('.gallery__item').hasClass('is_next') ) {
        e.preventDefault();
        actowl.next();
      } else {
          if ( $(this).closest('.gallery__item').hasClass('is_prev') ) {
            e.preventDefault();
            actowl.prev();
          }
      }
    });





  $('#thethumbs').on('click', '.owl-item', function(e){
    e.preventDefault();
    var number = $(this).data('owlItem');
    sync1.trigger('owl.goTo',number);
  });


  function center(number){
    var sync2visible = sync2.data('owlCarousel').owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger('owl.goTo', num - sync2visible.length+2);
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger('owl.goTo', num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger('owl.goTo', sync2visible[1]);
    } else if(num === sync2visible[0]){
      sync2.trigger('owl.goTo', num-1);
    }

  }


  $('.fityesz__toggle').click(function(e) {
    e.preventDefault();
    $('.fityesz').toggleClass('is_latszik');
    $('.fityesz').focus();
  });

  $('.fityesz').focusout(function() {
    $(this).removeClass('is_latszik');
  });

  /**** Dealers Map *******/
  // $('.onedealer').each(function(index) {
  //   var dealeritem = $(this);
  //   if (dealeritem.attr('data-lat')!=='') {
  //     var marker = new google.maps.Marker({
  //       position: {lat: dealeritem.attr('data-lat'), lng: dealeritem.attr('data-lng') },
  //       map: map,
  //       title: dealeritem.attr('data-name')
  //     });
  //   }
  // });


});