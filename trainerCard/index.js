const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var timeVariable = document.getElementById('timer')
console.log(document)
timeVariable.innerHTML = time


const flipCard = () => {
    console.log('yes')
    var card = document.getElementById('card')
    card.classList.toggle('flip')
}

