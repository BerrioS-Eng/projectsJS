let display = document.getElementById('chronometer')
let btnGroup = document.querySelectorAll('.btn')
let ms = 0, sg = 0, min = 0; 

btnGroup.forEach((boton) => {
    boton.addEventListener('click', () => {
        if(boton.id === 'play') start()
        if(boton.id === 'stop') congelar()
        if(boton.id === 'reset') reiniciar()
    })
})

const start = () => {
    const incrementarmin = () => {
        if(min < 60) min++;
        if(min < 10) min = `0${min}`;
    }

    const incrementarsg = () => {
        if(sg === 59){
            sg = 0;
            incrementarmin();
        } else {
            sg++
        }
        if(sg < 10) sg = `0${sg}`;
    }

    const incrementarms = () => {
        if(ms === 99){
            ms = 0
            incrementarsg()
        } else {
            ms++
        }
        if(ms < 10) ms = `0${ms}`;
        display.innerHTML = `${min} : ${sg} : ${ms}`
    }
    corriendo = setInterval(incrementarms, 10);
    play.disabled = true;
}

const congelar = () => {
    clearInterval(corriendo)
    play.disabled = false;
}

const reiniciar = () => {
    play.disabled = false;
    clearInterval(corriendo)
    ms = 0
    sg = 0
    min = 0
    display.innerHTML = `0${min} : 0${sg} : 0${ms}`
}