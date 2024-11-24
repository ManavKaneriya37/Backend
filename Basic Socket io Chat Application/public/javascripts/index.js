const socket = io();
// const joinBtn = document.getElementById('joinBtn')


// joinBtn.addEventListener('click', () => {
//     const username = document.getElementById('nameInput');
    
//     if (username.value) {
//         socket.emit('join', username.value);
//         username.value = "";
//         document.querySelector('.popup').classList.add('hidden')
//     }
// })


const msgBox = document.getElementById('messageBox')
const sendBtn = document.getElementById('sendBtn')
const chatContainer = document.querySelector('.chats ul')

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight
}
window.addEventListener('load',scrollToBottom);

sendBtn.addEventListener('click', () => {
    let msg = msgBox.value;
    socket.emit("send-message", msg);
    msgBox.value = "";

    scrollToBottom();
})

socket.on('receive-message', (data) => {
    const msgElem = document.createElement('li');
    msgElem.innerText = data.msg;
    msgElem.classList.add(`text-${data.color}-500`);
    msgElem.classList.add(`border-b-${data.color}-500`)
    msgElem.classList.add('chat-msg');
    chatContainer.appendChild(msgElem);
})