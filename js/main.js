$(document).ready(function() {
  $("a").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - $(".navbar").height() + 50;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      800
    );
    return false;
  });

  $(".navbar-toggle").click(function() {
    if ($(".navbar").hasClass("pressed")) {
      $(".navbar").removeClass("pressed");
    } else {
      $(".navbar").addClass("pressed");
    }
  });
});

// добавление заливки для меню при скроллинге
$(window).on("scroll", function() {
  var scrolled = $(this).scrollTop();
  if (scrolled > 107) {
    $(".navbar").addClass("scrolled");
  }
  if (scrolled <= 107) {
    $(".navbar").removeClass("scrolled");
  }
});

$(function() {
  $(".back-to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $(".back-to-top").fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $(".back-to-top").fadeOut();
  }
});

$(document).ready(function(){
	$(".carousel").swipe( {
		swipeLeft: function() {
			$(this).carousel("next");
		},
		swipeRight: function() {
			$(this).carousel("prev");
		},
		allowPageScroll: "vertical"
	});
});