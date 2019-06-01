$(document).ready(function() {
  $(".anchor").click(function() {
    // клик по якорной ссылке
    var elementClick = $(this).attr("href"); // имя якоря
    // расчет расстояния до якоря
    var destination = $(elementClick).offset().top - $(".navbar").height() + 50;
    // анимация перехода к якорю
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      2000
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
  alert("Поиск картинок группы " + group);
}

//вывод данных комментария
function add_comment() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mess = document.getElementById("message").value;
  alert(
    "Добавление комментария:" +
      "\n" +
      "Имя: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Сообщение :" +
      mess
  );
}

function send_mail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let mess = document.getElementById("message").value;
  if (name != "" && email != "" && subject != "" && mess != "") {
    alert("Письмо отправлено!");
  } else {
    alert("Заполните все оставшиеся поля");
  }
}

function subcribe_mailing() {
  let email = document.getElementById("mailing_email").value;

  if (email != "") {
    alert("Подписка на почту " + email + " оформлена!");
  } else {
    alert("Заполните почту");
  }
}

// переключение с входа на регистрацию
$(".tab a").on("click", function(e) {
  $(this)
    .parent()
    .addClass("tab_active"); // добавляем класс
  $(this)
    .parent()
    .siblings()
    .removeClass("tab_active"); // удаляем класс у других элементов

  target = $(this).attr("href"); //получаем id блока, который нужно скрыть

  $(".tab-content > div")
    .not(target)
    .hide(); // крвываем блоки, в которых нет нужного id

  $(target).fadeIn(800); // скрытие с анимацией за 0.8 секунд
});
