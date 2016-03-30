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


  // $(document).imagesLoaded( function() {

  // });


  /**** Kieg popup *****/

  $('.butikblock .squareacc a').magnificPopup({
    type:'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });


  $('.main').fitVids();

   $('.openmenu').on('click', function(e){
    e.preventDefault();
    $('.sitehead').toggleClass('open');
   });


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



  $('.relpost-carousel, .relacc-carousel').owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 800,
      pagination: false,
      navigation : true,
      navigationText: ['<i class="icon icon--chevron-circle-left"></i>','<i class="icon icon--chevron-circle-right"></i>'],
      autoHeight: true,
      items : 4,
      itemsDesktop : [1280,3],
      itemsDesktopSmall : [1024,3],
      itemsTablet: [768,2],
      itemsMobile: [480,2]
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
        var paginationLinks = jQuery(this).closest('.owl-carousel').find('.owl-pagination .owl-page');
        $(paginationLinks[i]).append(titleData);
      });
    }



    $('.modelcat__carousel').owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 300,
      singleItem:true,
      pagination: true,
      navigation : true,
      navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],
      rewindSpeed:100,
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
        var paginationLinks = jQuery(this).closest('.owl-carousel').find('.owl-pagination .owl-page');
        $(paginationLinks[i]).append(titleData);
      });
    }

    $('.timeline__carousel').owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      pagination: true,
      navigation : true,
      navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],
      autoHeight:true,
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




    /*** Galéria carousel szinronban tartva ******/


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
      navigation : true,
      navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],
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

  $(function() {
    var menjfel = $('.tothetop');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            menjfel.addClass('latszik');
        } else {
            menjfel.removeClass('latszik');
        }
    });
  });



  if ( $('#map').length > 0 ) {
    $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyDsWskVN4oYCTYSEq_cPZj2wtXpqFeEqBU', function(){



        function initMap() {

          var infowindow = new google.maps.InfoWindow();
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 47.350280, lng: 19.045346},
            zoom: 8
          });

          var markers = [];

          function placeMarker(controller, lat, lng, html ) {
            var latLng = new google.maps.LatLng( lat, lng );
            var marker = new google.maps.Marker({
              position : latLng,
              map      : map
            });
            google.maps.event.addListener(marker, 'click', function(){

              infowindow.close(); // Close previously opened infowindow
              infowindow.setContent( '<div class="infowindow">'+ html +'</div>');
              infowindow.open(map, marker);

              $('.onedealer').removeClass('is-selected');
              $(controller).addClass('is-selected');
            });
            $(controller).find('h3 a, .infocircle').on('click', function(e) {
              e.preventDefault();
              google.maps.event.trigger(map, 'resize');
              google.maps.event.trigger(marker, 'click');
            });

          }



          var i = 0;
          $('.onedealer').each(function() {
            if (this.getAttribute('data-lat') && this.getAttribute('data-lng')) {
              placeMarker(
                this,
                this.getAttribute('data-lat'),
                this.getAttribute('data-lng'),
                '<h3>' + $(this).find('h3 a').html() + '</h3>' + $(this).find('.dealerinfo').html()
              );
            }
          })

        }


        initMap();

      });



  }



});