$(document).ready(function() {
  $(".anchor").click(function() {
    // клик по якорной ссылке
    var elementClick = $(this).attr("href"); // имя якоря
    // расчет расстояния до якоря
    var destination = $(elementClick).offset().top - $(".navbar").height() + 50;
    // анимация перехода к якорю
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      800
    );
    return false;
  });

  // добавление класса при нажатии на габмургер
  $(".navbar-toggle").click(function() {
    if ($(".navbar").hasClass("pressed")) {
      $(".navbar").removeClass("pressed");
    } else {
      $(".navbar").addClass("pressed");
    }
  });
});

// добавление либо удаление класса scrolled для меню при прокрутке
function scrollHeader() {
  if ($(window).scrollTop() > 107) {
    $(".navbar").addClass("scrolled"); //добавление класса
  } else {
    $(".navbar").removeClass("scrolled"); //удаление класса
  }
}

//jquery проверка на прокрутку
$(window).scroll(scrollHeader);
$(window).scroll(checkBackToTop);

// проверка на прокрутку при загрузке страницы
$(scrollHeader);
$(checkBackToTop);

//переход вверх страницы
$(function() {
  $(".back-to-top").click(function() {
    $("html, body").animate(
      // плавная анимация перехода
      {
        scrollTop: 0
      },
      1000
    );
  });
});

// появление или исчезание кнопки наверх
function checkBackToTop() {
  if ($(this).scrollTop() > 200) {
    $(".back-to-top").fadeIn(); // появление кнопки
  } else {
    $(".back-to-top").fadeOut(); // исчезновение кнопки
  }
}

//вывод имени группы
function find_pict() {
  let group = document.getElementById("name_group").value;
  alert(group);
}

//вывод данных комментария
function add_comment() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mess = document.getElementById("message").value;
  alert(name + "/n" + email + "/n" + mess);
}
