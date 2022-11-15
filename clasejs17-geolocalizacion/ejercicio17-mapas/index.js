function initMap() {
    const paises = [
        londres = { lat: 51.501555346978, lng: - 0.1420018791632839 },
        dinamarca = { lat: 55.68595943711342, lng: 12.577298944206623 },
        chile = { lat: - 27.108676984873245, lng: -68.54073505765336 }
    ]
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: londres,
    });
    paises.forEach(marker => {
        londres = new google.maps.Marker({
            position: londres,
            map,
            title: "Palacio de Buckingham"
        });
        dinamarca = new google.maps.Marker({
            position: dinamarca,
            map,
            title: "Castillo de Rosenborg"
        });
        chile = new google.maps.Marker({
            position: chile,
            map,
            title: "Nevado Ojos del Salado"
        });

    });


}

window.initMap = initMap;