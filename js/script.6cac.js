!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}(),jQuery(document).foundation(),$(document).ready(function(){function a(){$.each(this.owl.userItems,function(a){var b=jQuery(this).find(".modelcat__item__title").text(),c=jQuery(this).closest(".owl-carousel").find(".owl-pagination .owl-page");$(c[a]).append(b)})}function b(){$.each(this.owl.userItems,function(a){var b=jQuery(this).find(".timeline__date").text(),c=jQuery(this).closest(".owl-carousel").find(".owl-pagination .owl-page");$(c[a]).append(b)})}function c(a){var b=this.currentItem;this.$owlItems.find(".gallery__item").removeClass("is_active"),this.$owlItems.eq(b).find(".gallery__item").addClass("is_active"),this.$owlItems.find(".gallery__item").removeClass("is_next"),this.$owlItems.find(".gallery__item").removeClass("is_prev"),this.$owlItems.eq(b+1).find(".gallery__item").addClass("is_next"),this.$owlItems.eq(b-1).find(".gallery__item").addClass("is_prev"),$("#thethumbs").find(".owl-item").removeClass("synced").eq(b).addClass("synced"),void 0!==$("#thethumbs").data("owlCarousel")&&d(b)}function d(a){var b=g.data("owlCarousel").owl.visibleItems,c=a,d=!1;for(var e in b)c===b[e]&&(d=!0);d===!1?c>b[b.length-1]?g.trigger("owl.goTo",c-b.length+2):(c-1===-1&&(c=0),g.trigger("owl.goTo",c)):c===b[b.length-1]?g.trigger("owl.goTo",b[1]):c===b[0]&&g.trigger("owl.goTo",c-1)}$(".butikblock .squareacc a").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-fade"}),$(".main").fitVids(),$(".openmenu").on("click",function(a){a.preventDefault(),$(".sitehead").toggleClass("open")}),$(".popup-video").magnificPopup({disableOn:767,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0});var e=$(".butiklist");e.isotope({itemSelector:".item",percentPosition:!0,masonry:{columnWidth:".itemsizer"}}),e.imagesLoaded(function(){e.isotope("layout"),$(".js-isotopegrid").addClass("is-loaded")}),$(".hero__carousel").owlCarousel({slideSpeed:300,paginationSpeed:800,singleItem:!0,pagination:!1,navigation:!0,autoHeight:!0,navigationText:['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],afterAction:function(a){a.closest(".hero__carousel").find("video").get(0).pause(),a.closest(".hero__carousel").find(".hero--video").removeClass("is-playing"),a.closest(".hero__carousel").find(".owl-buttons").removeClass("movieisplaying")},afterInit:function(a){a.find("video").get(0).play(),a.find(".hero--video").addClass("is-playing"),a.closest(".hero__carousel").find(".owl-buttons").addClass("movieisplaying"),a.find("video").on("click",function(b){b.preventDefault(),a.find(".hero--video").toggleClass("is-playing"),a.closest(".hero__carousel").find(".owl-buttons").toggleClass("movieisplaying"),0==this.paused?(this.pause(),a.find(".hero--video").removeClass("is-playing"),a.closest(".hero__carousel").find(".owl-buttons").removeClass("movieisplaying")):(this.play(),a.find(".hero--video").addClass("is-playing"),a.closest(".hero__carousel").find(".owl-buttons").addClass("movieisplaying"))})}}),$(".promo__carousel").owlCarousel({slideSpeed:300,paginationSpeed:800,singleItem:!0,pagination:!1,navigation:!0,autoHeight:!0,navigationText:['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>']}),$(".relpost-carousel, .relacc-carousel").owlCarousel({slideSpeed:300,paginationSpeed:800,pagination:!1,navigation:!0,navigationText:['<i class="icon icon--chevron-circle-left"></i>','<i class="icon icon--chevron-circle-right"></i>'],autoHeight:!0,items:4,itemsDesktop:[1280,3],itemsDesktopSmall:[1024,3],itemsTablet:[768,2],itemsMobile:[480,2]}),$(".prodhero__carousel").owlCarousel({slideSpeed:300,paginationSpeed:800,singleItem:!0,pagination:!0,navigation:!1,autoHeight:!0}),$(".modelcat__carousel").owlCarousel({slideSpeed:300,paginationSpeed:300,singleItem:!0,pagination:!0,navigation:!0,navigationText:['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],rewindSpeed:100,afterInit:a,afterUpdate:a,afterAction:function(a){this.$owlItems.find(".modelcat__item").removeClass("is_active"),this.$owlItems.find(".modelcat__item").removeClass("is_next"),this.$owlItems.find(".modelcat__item").removeClass("is_prev"),this.$owlItems.eq(this.currentItem).find(".modelcat__item").addClass("is_active"),this.$owlItems.eq(this.currentItem+1).find(".modelcat__item").addClass("is_next"),this.$owlItems.eq(this.currentItem-1).find(".modelcat__item").addClass("is_prev")}}),$(".modelcat__item").on("click",function(a){var b=$(this).closest(".modelcat__carousel").data("owlCarousel");$(this).closest(".modelcat__item").hasClass("is_next")?(a.preventDefault(),b.next()):$(this).closest(".modelcat__item").hasClass("is_prev")&&(a.preventDefault(),b.prev())}),$(".timeline__carousel").owlCarousel({slideSpeed:300,paginationSpeed:800,singleItem:!0,pagination:!0,navigation:!0,navigationText:['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],autoHeight:!0,afterInit:b,afterUpdate:b,afterAction:function(a){this.$owlItems.find(".timeline__item").removeClass("is_active"),this.$owlItems.find(".timeline__item").removeClass("is_next"),this.$owlItems.find(".timeline__item").removeClass("is_prev"),this.$owlItems.eq(this.currentItem).find(".timeline__item").addClass("is_active"),this.$owlItems.eq(this.currentItem+1).find(".timeline__item").addClass("is_next"),this.$owlItems.eq(this.currentItem-1).find(".timeline__item").addClass("is_prev")}}),$(".timeline__item").on("click",function(a){var b=$(this).closest(".timeline__carousel").data("owlCarousel");$(this).closest(".timeline__item").hasClass("is_next")?(a.preventDefault(),b.next()):$(this).closest(".timeline__item").hasClass("is_prev")&&(a.preventDefault(),b.prev())});var f=$(".gallery__carousel"),g=$(".thumbs__carousel");f.owlCarousel({navigation:!0,navigationText:['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],pagination:!1,paginationSpeed:400,singleItem:!0,autoHeight:!0,afterAction:c}),g.owlCarousel({items:7,itemsDesktop:[1440,6],itemsDesktopSmall:[1024,5],itemsTablet:[768,4],itemsMobile:[480,3],navigation:!0,navigationText:['<i class="icon icon--chevron-circle-left"></i>','<i class="icon icon--chevron-circle-right"></i>'],pagination:!1,paginationSpeed:400,afterInit:function(a){a.find(".owl-item").eq(0).addClass("synced")},afterAction:function(a){this.$owlItems.find(".item__thumb").removeClass("is_active"),this.$owlItems.eq(this.currentItem).find(".item__thumb").addClass("is_active")}}),$(".gallery__item").on("click",function(a){var b=$(this).closest(".gallery__carousel").data("owlCarousel");$(this).closest(".gallery__item").hasClass("is_next")?(a.preventDefault(),b.next()):$(this).closest(".gallery__item").hasClass("is_prev")&&(a.preventDefault(),b.prev())}),$("#thethumbs").on("click",".owl-item",function(a){a.preventDefault();var b=$(this).data("owlItem");f.trigger("owl.goTo",b)}),$(".fityesz__toggle").click(function(a){a.preventDefault(),$(".fityesz").toggleClass("is_latszik"),$(".fityesz").focus()}),$(".fityesz").focusout(function(){$(this).removeClass("is_latszik")}),$(function(){var a=$(".tothetop");$(window).scroll(function(){var b=$(window).scrollTop();b>=500?a.addClass("latszik"):a.removeClass("latszik")})}),$("#map").length>0&&($(".infoclose").on("click",function(a){a.preventDefault(),$(this).closest(".onedealer").toggleClass("is-selected")}),$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDsWskVN4oYCTYSEq_cPZj2wtXpqFeEqBU",function(){function a(){function a(a,d,e,f){var g=new google.maps.LatLng(d,e),h=new google.maps.Marker({position:g,map:c});google.maps.event.addListener(h,"click",function(){b.close(),b.setContent('<div class="infowindow">'+f+"</div>"),b.open(c,h),$(".onedealer").removeClass("is-selected"),$(a).addClass("is-selected")}),$(a).find("h3 a, .infocircle").on("click",function(a){a.preventDefault(),google.maps.event.trigger(c,"resize"),google.maps.event.trigger(h,"click")})}var b=new google.maps.InfoWindow,c=new google.maps.Map(document.getElementById("map"),{center:{lat:47.35028,lng:19.045346},zoom:8});$(".onedealer").each(function(){this.getAttribute("data-lat")&&this.getAttribute("data-lng")&&a(this,this.getAttribute("data-lat"),this.getAttribute("data-lng"),"<h3>"+$(this).find("h3 a").html()+"</h3>"+$(this).find(".dealerinfo").html())})}a()}))});