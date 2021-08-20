$(document).ready(function () {
  var currentfloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

    // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentfloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentfloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); // при клике на этаж, вызвать окно
  modalCloseButton.on("click", toggleModal); // при клике на кнопку, закрыть окно
  viewFlatsButton.on("click", toggleModal);
  
  counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
    if (currentfloor < 18) { // проверяем значение этажа, оно не должно быть больше 18
      currentfloor++; // прибавляем один этаж
    usCurrentFloor = currentfloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажем, чтобы было 02, а не 2
    $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  counterDown.on("click", function() { // отслеживаем клик по кнопке вниз
    if(currentfloor > 2) { // проверяем значение этажа, оно не должно быть меньше 2
      currentfloor--; // уменьшаем на один этаж
      usCurrentFloor = currentfloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажем, чтобы было 02, а не 2
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  })
  function toggleModal() { // функция открыть-закрыть окно
    modal.toggleClass('is-open');
  }
});