const time = document.getElementById('tiempo')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

const data = new Date()

const days = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab']
const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

const startTime = () => {
    const data = new Date().toLocaleTimeString();  
    time.innerHTML = data;
}

day.innerHTML = days[data.getDay()]
month.innerHTML = months[data.getMonth()]
year.innerHTML = data.getFullYear()

setInterval(() => {
    startTime()    
}, 1000);