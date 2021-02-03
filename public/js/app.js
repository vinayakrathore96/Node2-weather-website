

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    document.getElementById('message-1').innerHTML = 'Loading'
    document.getElementById('message-2').innerHTML = ''
    fetch('/weather?weather=' + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log('testing')
            console.log(data.error)
            document.getElementById('message-1').innerHTML = data.error
        }
        else{
        document.getElementById('message-1').innerHTML = 'Location: ' + data.location
        document.getElementById('message-2').innerHTML = 'Weather: ' + data.forecast
        }
    })
})
})