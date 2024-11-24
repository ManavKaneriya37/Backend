const socket = io();



const msgBox = document.getElementById('messageBox')
const sendBtn = document.getElementById('sendBtn')
const chatContainer = document.querySelector('.chats ul')
const modeIcon = document.querySelector('.modeIcon')
sendBtn.addEventListener('click', () => {
    if(msgBox.value !== ""){
        let msg = msgBox.value;
        socket.emit("send-message", msg);
        msgBox.value = "";
    }
})
function toggleTheme() {
    const html = document.documentElement;
    const body = document.body;

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        body.classList.add('bg-white');
        body.classList.remove('dark:bg-zinc-800');
        modeIcon.classList.remove('ri-moon-line');
        modeIcon.classList.add('ri-sun-line');
    } else {
        html.classList.add('dark');
        body.classList.remove('bg-white');
        body.classList.add('dark:bg-zinc-800');;
        console.log("Switched to dark mode");
        modeIcon.classList.remove('ri-sun-line');
        modeIcon.classList.add('ri-moon-line');
    }
}

msgBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
})

socket.on('receive-message', (data) => {
    const msgElem = document.createElement('li');
    msgElem.innerText = data.msg;
    msgElem.classList.add(`text-${data.color}-500`);
    msgElem.classList.add(`border-b-${data.color}-500`)
    msgElem.classList.add('chat-msg');
    chatContainer.appendChild(msgElem);
})

socket.on('redirect-user', ({redirectURl}) => {
    window.location.href = redirectURl;
})


