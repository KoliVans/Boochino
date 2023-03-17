;(function() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('ymap', {
				  center: [56.327795, 43.985029],
				  zoom: 19
			 }, {
				  searchControlProvider: 'yandex#search'
			 }),
  
			 // Создаём макет содержимого.
  
			 myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				  balloonContent: 'г. Нижний Новгород, Городецкий Переулок 6'
			 }, {
				  // Опции.
				  // Необходимо указать данный тип макета.
				  iconLayout: 'default#image',
				  // Своё изображение иконки метки.
				  iconImageHref: 'img/favicon/favicon.ico',
				  // Размеры метки.
				  iconImageSize: [30, 30],
				  // Смещение левого верхнего угла иконки относительно
				  // её "ножки" (точки привязки).
			 });
  
		myMap.geoObjects.add(myPlacemark)
  });
 })();