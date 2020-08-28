$(function() {

	//height
	var h=$(window).height();
	$(".uni_windo, .nav_cover").height(h);
	var hin=$(window).height();
	$(".same-plus").height(hin/2);
	//
	var hit=$("header").outerHeight();
	$(".index_ba").css("paddingTop", hit);
	var hiy=hit*2;
	$(".hit").css("marginTop", hiy);
	//
	$(".nav_icon, .laji").click(function() {
		$("body").toggleClass("menu-is-open")
		
	});
	/* Menu on Scrolldown
    * ------------------------------------------------------ */
    var iko = $(window);
    var clMenuOnScrolldown = function() {
        
        var menuTrigger = $('.nav_icon');

        iko.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };
/* home-scroll
    * ------------------------------------------------------ */
     var scrollLink = $('.home-scroll');
	  scrollLink.click(function(e) {
	    e.preventDefault();
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000 ).toggleClass("bar");
	  });


	  // $(window).scroll(function() {
	  //   var scrollbarLocation = $(this).scrollTop();
	  //   scrollLink.each(function() {
	  //     var sectionOffset = $(this.hash).offset().top;
	  //     if ( sectionOffset <= scrollbarLocation ) {
	  //       $(this).parent().addClass('active');
	  //       $(this).parent().siblings().removeClass('active');
	  //     }
	  //   })
  	// });
/* panel-right
    * ------------------------------------------------------ */
	   var scrollLinko = $('.panel_right>dd>a, .header-nav__list>li>a');
	  scrollLinko.click(function(e) {
	    e.preventDefault();
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000 );
	  });
	  // $(window).scroll(function() {
	  //   var scrollbarLocation = $(this).scrollTop();
	  //   scrollLink.each(function() {
	  //     var sectionOffset = $(this.hash).offset().top - 20;
	  //     if ( sectionOffset <= scrollbarLocation ) {
	  //       $(this).parent().addClass('active');
	  //       $(this).parent().siblings().removeClass('active');
	  //     }
	  //   })
  	// });
  	 

});