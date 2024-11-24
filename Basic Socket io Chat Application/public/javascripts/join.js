const socket = io();

const joinBtn = document.getElementById('joinBtn')
const username = document.getElementById('nameInput');

joinBtn.addEventListener('click', () => {
    if (username.value) {
        socket.emit('join', username.value);
        username.value = "";
        document.querySelector('.popup').classList.add('hidden')
    }
})

