// Code here!!

// Declaración y asignación de variables !!
const 
screens = document.querySelectorAll('.screen'),

choose_insect_btns = document.querySelectorAll('.choose-insect-btn'),
start_btn = document.getElementById('start-btn'),
game_container = document.getElementById('game-container'),

tiemEl = document.getElementById('time'),
scoreEl = document.getElementById('score'),
message = document.getElementById('message');

var 
seconds = 0,
score = 0,
selected_insect = {}


//  "Inicio del Juego", acá se "dispara" un evento al hacer click en "start_btn" 
start_btn.addEventListener('click', ()=> screens[0].classList.add('up'))


/* en "choose_insect_btns" tenemos guardado un array compuesto por elementos -insectos- a seleccionar del menú de juego!!
la función forEach() acá descrita ejecuta, para el insecto seleccionado código que gracias a "setTimeout()", "createInsect()", y startGame(), establece tiempos y modos de generación de 
insectos, e inicio del juego respectivamente
*/
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const 
        img = btn.querySelector('img'),
        src = img.getAttribute('src'),
        alt = img.getAttribute('alt')

        selected_insect = {src, alt}
        screens[1].classList.add('up')

        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame(){
    setInterval(increaseTime, 1000)
}

//  increaseTime() ejecuta un contador de tiempo de juego y lo "pinta en el DOM", haciendo uso de Template Literals. (En ediciones anteriores de la especificación ES2015, solían llamarse "plantillas de cadenas de caracteres").
function increaseTime(){
    let 
    m = Math.floor(seconds / 60),
    s = seconds % 60

    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    tiemEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

// Como se mencionó createInsect() indica el modo en el cuál se crean los insectods, particularmente crea en pantalla un insecto dentro de un tag tipo "div" le añade los estilos de la clase 'insect' 
function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = 
    `
        <img src="${selected_insect.src}" alt"${selected_insect.alt}" style="transform: rotate(${Math.random()*360}deg)" />
    `   
    
    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)
}

// El método acá descrito obtiene una ubicación aleatoria para el insecto
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width -200) + 100
    const y = Math.random() * (height -200) + 100

    return{x,y}
}

// El método catchInsect() ejecuta el código para incrementar el puntaje a medida que los insectos son "removidos"/"Reescalados" a un tamaño "0" en pantalla.
function catchInsect(){
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000);
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 3000);
    setTimeout(createInsect, 2500);
}

// La forma como aumenta el puntaje hasta que llega a "19" momento a partir del cual se muestra el mensaje: "Are you annoyed yet?  You are playing an impossible game !!"
function increaseScore(){
    score++
    if(score >19){
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}


message.addEventListener('click', ()=> screens[1].classList.remove('up'))



