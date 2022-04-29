//Reference
const online = document.querySelector('#online')
const offline = document.querySelector('#offline')
const textInput = document.querySelector('#textInput')
const send = document.querySelector('#send')

online.style.color = 'green'
offline.style.color = 'red'


const socket = io()

socket.on('connect', () => {

    offline.style.display = 'none'
    online.style.display = ''

})

socket.on('disconnect', () => {

    online.style.display = 'none'
    offline.style.display = ''
})

socket.on('sended', (payload) =>
    console.log(payload)
)

send.addEventListener('click', () => {
    const text = textInput.value
    const payload = {
        msj: text,
        id: 'if4m39fim49',
        date: new Date().getTime()
    }

    socket.emit('send-msj', payload, (id) => {
        console.log('from server', id)
    })
})
