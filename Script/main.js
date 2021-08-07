// Code here!!
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

start_btn.addEventListener('click', ()=> screens[0].classList.add('up'))

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
    
function increaseTime(){
    let 
    m = Math.floor(seconds / 60),
    s = seconds % 60

    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    tiemEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

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

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width -200) + 100
    const y = Math.random() * (height -200) + 100

    return{x,y}
}

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

function increaseScore(){
    score++
    if(score >19){
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}


message.addEventListener('click', ()=> screens[1].classList.remove('up'))



