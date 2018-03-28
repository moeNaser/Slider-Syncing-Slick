$(document).on('ready', function() {
  $('.slider-single').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	fade: true,
  	adaptiveHeight: true,
  	infinite: true,
    autoplay: true,
  autoplaySpeed: 4000,
 	useTransform: true,
  	speed: 600,
  	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });

  $('.slider-nav')
  	.on('init', function(event, slick) {
  		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
  	})
  	.slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
      centerMode: true,
  		dots: false,
  		focusOnSelect: true,
  		infinite: true,
      vertical: true,
      centerPadding:0,
      arrows: false
  	});

  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  	$('.slider-nav').slick('slickGoTo', currentSlide);
  	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
  	$(currrentNavSlideElem).addClass('is-active');
  });

  $('.slider-nav').on('click', '.slick-slide', function(event) {
  	event.preventDefault();
  	var goToSingleSlide = $(this).data('slick-index');

  	$('.slider-single').slick('slickGoTo', goToSingleSlide);
  });
});
