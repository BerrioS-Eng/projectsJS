import {quoteRandom} from "./quote.js"

const content = document.getElementById('content')
const containerTime = document.getElementById('containerTime')
const containerCrono = document.getElementById('containerCrono')
const textQuote = document.getElementById('textQuote')
const textAuthor = document.getElementById('textAuthor')
const buttonTheme = document.getElementById('theme')

containerCrono.addEventListener('click', () => {
    containerCrono.classList.add('active');
    containerTime.classList.add('disable')
})

containerTime.addEventListener('click', () => {
    containerTime.classList.remove('disable');
    containerCrono.classList.remove('active')
})

const configUser = window.matchMedia('(prefers-color-scheme: dark)')
const configLocal = localStorage.getItem('theme')
if(configLocal === 'dark'){
    content.classList.toggle('dark-theme')
} else if(configLocal === 'light'){
    content.classList.toggle('light-theme')
}

buttonTheme.addEventListener('click', () =>{
    let colorTheme;
    if(configUser.matches){
        content.classList.toggle('light-theme')
        colorTheme = content.classList.contains('light-theme') ? 'light' : 'dark'
    } else{
        content.classList.toggle('dark-theme') 
        colorTheme = content.classList.contains('dark-theme') ? 'dark' : 'light'       
    }
    localStorage.setItem('theme', colorTheme)
})

const random = () => {
    let num = Math.floor(Math.random() * (quoteRandom.length))
    let {quote, author} = quoteRandom[num]

    textQuote.innerHTML = quote;
    textAuthor.innerHTML = author;
}
random()