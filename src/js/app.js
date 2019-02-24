$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tabs_tab').hide(400);
  });


if ( $('.trend_slider').length > 0) {
  $('.trend_slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    dots:true,
    prevArrow:false,
    nextArrow:false,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 520,
        settings: {
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2500,
          dots:true,
          prevArrow:false,
          nextArrow:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2500,
          dots:true,
          prevArrow:false,
          nextArrow:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px'
          
        }
      },
      {
          breakpoint:1024,
          settings: {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2500,
            dots:true,
            prevArrow:false,
            nextArrow:false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
    ]
  });
}

  if ( $('.js_login-popup').length > 0) {
  $(document).ready(function() {
    $('.js_login-popup').magnificPopup({
      items: {
        src: '#popup',
        type: 'inline'
    }
    });
  });
}

if ( $(window).width() < 768) {
  $(document).on('click', '.js_collapse', function(){
    $(this).toggleClass('active');
    $(this).next('.footer_col-main').slideToggle(400);
    $(this).parents('.flex_col').siblings().find('.footer_col-main').slideUp(400);
  });
}

if ( $(window).width() < 768) {
  $('.choose_reason-text').slideUp();
  $(document).on('click', '.js_collapse', function(){
    $(this).toggleClass('active');
    $(this).next('.choose_reason-text').slideToggle(400);
    $(this).parents('.flex_col').siblings().find('.choose_reason-text').slideUp(400);
  });
}

if ($('.js_range-slider').length > 0) {
  $(".js_range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 1000,
    to: 600,
    prefix: "$",
    hide_min_max: true
  });
}

if ($('.js_products-list').length > 0) {
  $('.js_products-list').on('click', function(){
    $(this).toggleClass('grid_active');
    $(this).parent('li').siblings().find('.products_grid-btn').removeClass('grid_active');
    $('.products_grid').removeClass('js_grid-table');
    $('.products_grid').addClass('js_grid-list');
  });
}

if ($('.js_products-table').length > 0) {
  $('.js_products-table').on('click', function(){
    $(this).toggleClass('grid_active');
    $(this).parent('li').siblings().find('.products_grid-btn').removeClass('grid_active');
    $('.products_grid').removeClass('js_grid-list');
    $('.products_grid').addClass('js_grid-table');
  });
}

$('.form_file').on('change', function(){
  var $el = $(this),
      fileName,
      $block = $el.parent().next('.form_file-val');
  if ($el.val().lastIndexOf('\\')) {
    var i = $el.val().lastIndexOf('\\') + 1;
  } else {
    var i = $el.val().lastIndexOf('/') + 1;
  }
  fileName = $el.val().slice(i);
  $block.html(fileName);
});

$(document).on('click', '.user_toggle', function(){
  $(this).toggleClass('active');
  $(this).next('.user_toggle-menu').slideToggle(400);

});