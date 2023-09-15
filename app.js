//zmiana numeru karty
const radioButtons = document.querySelectorAll('.radio-button')
const images = document.querySelectorAll('img')

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function () {
      
      const imageId = radioButtons[i].getAttribute('data-image-id');

      
      for (let j = 0; j < images.length; j++) {
          if (images[j].id === imageId) {
              images[j].classList.add('selected-image');
          } else {
              images[j].classList.remove('selected-image');
          }
      }
  });
}
function numberChange(){
    var a=   document.getElementById("numer").value
    var b = document.getElementById("h1")
    b.innerHTML = a
}
//zmiana imienia i nazwiska
function nameChange(){
    var c = document.getElementById("name").value
    var d = document.getElementById("h2")
    d.innerHTML = c
}
//zmiana daty i ustawienie na miesiac i rok
function DateChange(){
  const daata = new Date(document.getElementById("date").value);

  const month = (daata.getMonth() + 1).toString().padStart(2, '0');
  const year = daata.getFullYear().toString().slice(-2);

  document.getElementById("data").innerHTML = month + "/" + year }
//zmiana tła 1
function changeGrafika1(){
  document.getElementById("karta").style.backgroundImage = "url('papiez1.jpg')"
  document.getElementById("karta").style.color = "#1B00E6"
  document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła 2
function changeGrafika2(){
    document.getElementById("karta").style.backgroundImage = "url('papiez2.jpg')"
    document.getElementById("karta").style.color = "red"
    document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła 3
function changeGrafika3(){
    document.getElementById("karta").style.backgroundImage = "url('papiez3.jpg')"
    document.getElementById("karta").style.color = "#93FF96"
    document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła 4
function changeGrafika4(){
  document.getElementById("karta").style.backgroundImage = "url('papiez4.jpg')"
  document.getElementById("karta").style.color = "#3BECE9"
  document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła na kolor 1
function changeColor1(){
    document.getElementById("karta").style.backgroundImage = ""
    document.getElementById("karta").style.backgroundImage = "linear-gradient(to right, red , yellow)"
    document.getElementById("karta").style.color = "#027105"
    document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła na kolor 2
function changeColor2(){
  document.getElementById("karta").style.backgroundImage = ""
  document.getElementById("karta").style.backgroundImage = "linear-gradient(to right,yellow , purple)"
  document.getElementById("karta").style.color = "#535051"
  document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła na kolor 3
function changeColor3(){
  document.getElementById("karta").style.backgroundImage = ""
  document.getElementById("karta").style.backgroundImage = "linear-gradient(to right, aqua , green)"
  document.getElementById("karta").style.color = "#F12782"
  document.getElementById("karta").style.fontWeight = "bold"
}
//zmiana tła na kolor 4
function changeColor4(){
  document.getElementById("karta").style.backgroundImage = ""
  document.getElementById("karta").style.backgroundImage = "linear-gradient(to left, white , grey)"
  document.getElementById("karta").style.color = "black"
  document.getElementById("karta").style.fontWeight = "bold"
}

//efekty 3d do karty
let el = document.getElementById('karta')

const height = el.clientHeight

const width = el.clientWidth


el.addEventListener('mousemove', handleMove)

function handleMove(e) {
  const xVal = e.layerX
  
  const yVal = e.layerY
  
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  el.style.transform = string
}
el.addEventListener('mouseout', function() {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  })
  
  el.addEventListener('mousedown', function() {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
  })
  
  el.addEventListener('mouseup', function() {
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
  })