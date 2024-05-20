(function($) {
"use strict";

/*---====================---preloader---======================---*/
function creote_preloader() {
	if($('.preloader-wrap').length){
		$('.preloader-wrap').delay(500).fadeOut(100);
	}
}
/*---====================---progress bar---======================---*/
$.fn.creoteProgressbar = function(options){
    options = $.extend({
      animate     : true,
      animateText : true
    }, options);
    var $this = $(this);
    var $progressBar = $this;
    var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
    var $circle = $progressBar.find('.ProgressBar-circle');
    var percentageProgress = $progressBar.attr('data-progress');
    var percentageRemaining = (100 - percentageProgress);
    var percentageText = $progressCount.parent().attr('data-progress');
    //Calcule la circonférence du cercle
    var radius = $circle.attr('r');
    var diameter = radius * 2;
    var circumference = Math.round(Math.PI * diameter);
    //Calcule le pourcentage d'avancement
    var percentage =  circumference * percentageRemaining / 100;
    $circle.css({
      'stroke-dasharray' : circumference,
      'stroke-dashoffset' : percentage
    });
    //Animation de la barre de progression
    if(options.animate === true){
      $circle.css({
        'stroke-dashoffset' : circumference
      }).animate({
        'stroke-dashoffset' : percentage
      }, 3000)
    }
    //Animation du texte (pourcentage)
    if(options.animateText == true){
      $({ Counter: 0 }).animate(
      { Counter: percentageText },
        { duration: 3000,
          step: function () {
            $progressCount.text( Math.ceil(this.Counter) + '%');
          }
        });
      }else{
        $progressCount.text( percentageText + '%');
  }
};
$(document).ready(function(){
  $('.ProgressBar--animateNone').creoteProgressbar({
    animate : false,
    animateText : false
  });
  $('.ProgressBar--animateCircle').creoteProgressbar({
    animate : true,
    animateText : false
  });
  $('.ProgressBar--animateText').creoteProgressbar({
    animate : false,
    animateText : true
  });
  $('.ProgressBar--animateAll').creoteProgressbar();
});
/*---====================---header js ---======================---*/
if($('header .navbar_nav li.dropdown ul').length){
    $('header .navbar_nav li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
}
if($('header .navbar_nav li.mega_menu  ul').length){
    $('header .navbar_nav li.mega_menu a.nav-link').append('<span class="fa fa-angle-down"></span>');
}
if($('.crt_mobile_menu .navbar_nav li.dropdown ul').length){
    $('.crt_mobile_menu .navbar_nav li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
}
if($('.crt_mobile_menu .navbar_nav li.mega_menu  ul').length){
    $('.crt_mobile_menu .navbar_nav li.mega_menu a.nav-link').append('<span class="fa fa-angle-down"></span>');
}


if($('.crt_mobile_menu').length){
    var mobileMenuContent = $('.header  .header_content_collapse .navigation_menu').html();
  $('.crt_mobile_menu .menu-box .menu-outer').append(mobileMenuContent);

    //Menu Toggle Btn
    $('.navbar_togglers').on('click', function() {
        $('body').toggleClass('crt_mobile_menu-visible');
    });
    //Menu Toggle Btn
    $('.crt_mobile_menu .menu-backdrop,.crt_mobile_menu .close-btn').on('click', function() {
        $('body').removeClass('crt_mobile_menu-visible');
    });
}

$(function() {
    $('.crt_mobile_menu li.dropdown .dropdown-btn').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
        $(this).parent().find('ul.dropdown-menu').first().toggle(300);

        $(this).parent().siblings().find('ul.dropdown-menu').hide(200);

        //Hide menu when clicked outside
        $(this).parent().find('ul.dropdown-menu').parent().mouseleave(function() {
            var thisUI = $(this);
            $('html').click(function() {
                thisUI.children(".dropdown-menu").hide();
                thisUI.children("span").removeClass('open');

                $('html').unbind('click');
            });
        });
    });
});

$(document).ready(function(){
    $(".hamburger_menu").click(function(){
      $(this).toggleClass("is-active");
    });
    $('.crt_mobile_menu .menu-backdrop').on('click', function() {
		$('.hamburger_menu ').removeClass('is-active');
	});
});
function headerStyle() {
	if($('body').length){
		var windowpos = $(window).scrollTop();
		var siteHeader = $('body');
		if (windowpos >= 250) {
			siteHeader.addClass('fixed-header');
		} else {
			siteHeader.removeClass('fixed-header');
		}
	}
}
$(window).on('scroll', function() {
    headerStyle();
});
/*---====================---back-to-top---======================---*/
if($('.prgoress_indicator path').length){
    var progressPath = document.querySelector('.prgoress_indicator path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).on('scroll', updateProgress);
    var offset = 250;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.prgoress_indicator').addClass('active-progress');
      } else {
        jQuery('.prgoress_indicator').removeClass('active-progress');
      }
    });
    jQuery('.prgoress_indicator').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
}
/*---====================---side_bar_cart ---======================---*/
if($('.side_bar_cart').length){
    //Menu Toggle Btn
    $('.mini_cart_togglers').on('click', function() {
      $('body').toggleClass('side_bar_cart-visible');
    });
    //Menu Toggle Btn
    $('.side_bar_cart  .close_btn_mini , .side_bar_cart .cart_overlay').on('click', function() {
      $('body').removeClass('side_bar_cart-visible');
    });
}
/*---====================---flexslider ---======================---*/
if ($('.flexslider').length) {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
}
/*---====================---creote_grid_layout_main---======================---*/
function creote_grid_layout_main() {
    if ($('.grid_layout').length) {
      $('.grid_layout').isotope({
          layoutMode: 'masonry',
          itemSelector: '.grid_box',
          transitionDuration: '1s',
      });
    }
}
/*---====================---active class for header---======================---*/
$(document).ready(function() {
    var CurrentUrl = document.URL;
    var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
    console.log(CurrentUrlEnd);
    $(".navbar_nav li a").each(function() {
        var ThisUrl = $(this).attr('href');
        var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();
  
        if (ThisUrlEnd == CurrentUrlEnd) {
            $(this).closest('.navbar_nav li').addClass('active');
            $(this).parents('.menu-item-has-children').addClass('active');
        }
    });
});
/*---====================---swiper options---======================---*/
function creote_swiper_options() {
    var swiperElements = document.querySelectorAll('.swiper-container');
    swiperElements.forEach(function(swiperElement) {
      var swiperOptions = JSON.parse(swiperElement.getAttribute('data-swiper'));
      new Swiper(swiperElement, swiperOptions);
    });
}

/*---====================---faq---======================---*/
function creote_faqsall() {
    var accordion = {
        init: function() {
            $('dd').filter(':nth-child(n+1)').addClass('hide');
            $('dt').on('click', this.show);
        },
        show: function() {
        var $this = $(this),
            $ddToShow = $this.next(),
            $ddToClose = $this.next().siblings('dd');
            $this.addClass('active');
            $this.siblings('dt').removeClass('active');
            $ddToShow.slideDown(200);
            accordion.hide($ddToClose);
        },
        hide: function(elem) {
            elem.slideUp(200);
        }
    };
    accordion.init();
}

function creote_accordion() {
//Accordion Box
if($('.accordion-box').length){
    $(".accordion-box").on('click', '.acc-btn', function() {
        
        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');
        
        if($(this).hasClass('active')!==true){
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
        }
        
        if ($(this).next('.acc-content').is(':visible')){
            return false;
        }else{
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);	
        }
    });	
}
}

/*---====================---search---======================---*/
function creote_search_popup() {
    if($('#search-popup').length){
        //Show Popup
        $('.search-toggler').on('click', function() {
            $('#search-popup').addClass('popup-visible');
        });
        $(document).keydown(function(e){
            if(e.keyCode === 27) {
                $('#search-popup').removeClass('popup-visible');
            }
        });
        //Hide Popup
        $('.close-search,.search-popup .overlay-layer').on('click', function() {
            $('#search-popup').removeClass('popup-visible');
        });
    }
}
/*---====================---popup---======================---*/
function creote_modal_popup () {
    //Search Popup
    if($('.modal_popup').length){  
       //Show Popup
       $('.contact-toggler').on('click', function() {
           $('.modal_popup').addClass('contact-popup-visible');
       });
       $(document).keydown(function(e){
           if(e.keyCode === 27) {
               $('.modal_popup').removeClass('contact-popup-visible');
           }
       });
       //Hide Popup
       $('.close-modal ').on('click', function() {
           $('.modal_popup').removeClass('contact-popup-visible');
       });
   }
}
/*---====================---theme carousel---======================---*/
function creote_theme_owl_carousel() {
    if($('.theme_carousel').length) {
        $(".theme_carousel").each(function (index) {
            var $owlAttr = {
                    animateOut: 'slideOut',
                    animateIn: 'slideIn',
            },
            $extraAttr = $(this).data("options");
            $.extend($owlAttr, $extraAttr);
            $(this).owlCarousel($owlAttr);   
        });
    }
}
 
/*---====================---light box---======================---*/
function creote_light_box() {
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }
}
/*---====================---floating menu---======================---*/
function creote_floating_menu() {
    $(".float_menu_box li").click(function () {
        // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
        if ($(this).hasClass("active")) {
        $(".floating_menu_text").removeClass("active");
        }
        // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
        else {
        $(".floating_menu_text").removeClass("active");
        $(this).addClass("active");
        }
  });
  $(".floating_menu_box .close").click(function () {
      $(".floating_menu_box").addClass("remove_floating");
  });
}

 
 
/*---====================---grid layout---======================---*/
function creote_grid_filter_layout() {
    if ($('.project_container').length) {
        $('.project_container').isotope({
            layoutMode: 'masonry',
            itemSelector: '.project-wrapper',
            transitionDuration: '1s',
        });
    }
    if ($('.project_filter').length) {
        // filter items on button click
        $('.project_filter').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.project_container').isotope({ filter: filterValue });
            $('.project_filter li').removeClass('current');
            $(this).addClass('current');
        });
    }
}

/*---====================---fun facts---======================---*/
function creote_funfacts_one() {
     if($('.count-box').length){
        $('.count-box').appear(function(){
            var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10); 
            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            } 
        },{accY: 0});
    }
}
/*---====================---profress bar---======================---*/
function creote_progress_bar() {
    // Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function(){
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width',percent).addClass('counted');
		},{accY: -50});
	}
}

/*---====================---tab---======================---*/
function creote_tabone() {
    $('.tabs_all_box_start .showcase_tabs_btns .s_tab_btn').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('data-tab'));
        if ($(target).hasClass('active-tab show')) {
            return false;
        } 
        else {
            // Select the tab buttons and content within the specific tab section that was clicked
            var tabButtons = $(this).closest('.showcase_tabs_btns').find('.s_tab_btn');
            var tabContent = $(this).closest('.tabs_all_box_start').find('.s_tabs_content .s_tab');
    
            tabButtons.removeClass('active');
            $(this).addClass('active');
            tabContent.removeClass('active-tab show');
            $(target).addClass('active-tab show');
        }
    });
}
/*---====================---showcase tab---======================---*/
function creote_countdown_timer() {
    if ($('.countdown').length) {
        $(".countdown").countdown();
    }
}
/*---====================---light box---======================---*/ 
function creote_sidemenu() {
    if($(".sidemenu_area").length) {
        //adding a new class on button element
        $('#side_menu_toggle_btn').on('click',function () {
            $('body').addClass('side_menu_toggled');   
        });
        //removing a existing class from button element
        $('#side_menu_toggle_btn_close').on('click',function () {
            $('body').removeClass('side_menu_toggled');
        });
    }
}
/*---====================---floating menu---======================---*/ 
function creote_floating_menu_enable() {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 300) {
            $('body').addClass('floating-menu');
        }
        else {
            $('body').removeClass('floating-menu');
        }
    });
    if ($(".float_menu_box").length) {
        $(".float_menu_box .close").on("click", function(){
            $('body').addClass('floating_close');
        })
    }
}
 
/*---====================---projectfilter---======================---*/ 
function creote_projectfilter() {
    $(document).ready(function() {
        $('.projectcontainer').isotope({
            itemSelector: '.project-wrapper',
            percentPosition: true,
        });
        // filter items on button click
        $('.project_filter').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $('.projectcontainer').isotope({ filter: filterValue });
            $('.project_filter li').removeClass('current');
            $(this).addClass('current');
        });
    });
}
/*---====================---tab---======================---*/ 
function creote_tab_content() {
    if ($('.content_tabs').length) {
        $('.content_tabs .content_tabs_btns .c_tab_btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));
            if($(target).hasClass('actve-tab')) {
                return false;
            } 
            else {
                $('.content_tabs .content_tabs_btns .c_tab_btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                $('.content_tabs .c_tabs_content .c_tab').removeClass('active-tab');
                $(target).addClass('active-tab');
            }
        });
    }
}

 
/*---====================---swiper---======================---*/
function creote_swiper_with_tab() {
    
    var swiper = new Swiper(".single_swiper_tab", {
        spaceBetween: 30,
        slidesPerView: 4,
        freeMode: true,
        centeredSlides:false,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 1, 
            },
            540: {
                slidesPerView: 1, 
            },
            768: {
                slidesPerView: 2, 
            },
            1024: {
                slidesPerView: 3, 
            },
            1200: {
                slidesPerView: 4, 
            },
        },
    });
    var swiper2 = new Swiper(".single_swiper", {
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        breakpoints: {
            240: {
                slidesPerView: 1, 
            },
            540: {
                slidesPerView: 1, 
            },
            768: {
                slidesPerView: 2, 
            },
            1024: {
                slidesPerView: 3, 
            },
            1200: {
                slidesPerView: 3, 
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}   


$(document).ready(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        var name = $('input[name=name]').val();
        var email = $('input[name=email]').val();
        var subject = $('input[name=subject]').val();
        var message = $('textarea[name=message]').val();
        
        $.ajax({
            type: 'POST',
            url: 'send-email.php',
            data: { name: name, email: email, message: message , subject: subject },
            success: function(data) {
                $('#status').html("<div class='success'>Thank you for contacting us!</div>");
            },
            error: function(data) {
                $('#status').html("<div class='error'>Error sending email.</div>");
            }
        });
    });
});


/*---====================---jquery---======================---*/ 
jQuery(window).on('load', function() {
    (function($) {
        creote_grid_layout_main();
        creote_search_popup();
        creote_swiper_with_tab();
        creote_funfacts_one();
        creote_grid_filter_layout();
        creote_accordion();
        creote_light_box();
        creote_modal_popup ();
        creote_tabone();
        creote_tab_content();
        creote_theme_owl_carousel();
        creote_countdown_timer();
        creote_faqsall();
        creote_progress_bar();
        creote_sidemenu();
        creote_floating_menu_enable();
        creote_floating_menu();
        creote_projectfilter();
        creote_preloader();
        creote_swiper_options();
    })(jQuery);
});   
})(jQuery);