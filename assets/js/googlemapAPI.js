function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 },
        zoom: 10,
    });

    // Adiciona um marcador
    new google.maps.Marker({
        position: { lat: -23.5505, lng: -46.6333 },
        map: map,
        title: "São Paulo",
    });
}