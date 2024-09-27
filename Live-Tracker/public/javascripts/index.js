const socket = io();

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        const {latitude, longitude} = position.coords;
        socket.emit("send-location", {latitude, longitude});
    }, error => {
        console.error(error.message);
    },{
        maximumAge: 0,
        enableHighAccuracy: true,
        timeout: 5000,
    });
}

var map = L.map("map").setView([0,0], 20);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const markers = {};


socket.on('receive-location', (data) => {
    const {id, latitude, longitude} = data;
    map.setView([latitude, longitude], 20);
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }
    else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
})
socket.on('user-disconnect', (id) => {
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})
