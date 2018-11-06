function init(ymaps) {
    var myMap = new ymaps.Map("YMapsID", {
        center: [59.938631, 30.323055],
        zoom: 16
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myGeometry = new ymaps.geometry.Point(myMap.getCenter());

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
        geometry: myGeometry
    }, {
        // Опции.
        iconLayout: 'default#image',
        iconImageSize: [190, 155],
        iconImageOffset: [-42, -155],
        iconImageHref: 'img/map-marker.png'
    });

    myMap.geoObjects
        .add(myGeoObject);
}