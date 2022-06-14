"use strict";

let abrirForm = document.getElementById("openForm"),
    modalForm = document.getElementById("modalForm"),
    cerrarForm = document.getElementById("cerrarForm"),
    abrirCalculadora = document.getElementById("openCalculadora"),
    modalCalculadora = document.getElementById("modalCalculadora"),
    cerrarCalculadora = document.getElementById("cerrarCalculadora");

abrirForm.addEventListener("click", () => {
    modalForm.classList.add("activarFormulario");
});

cerrarForm.addEventListener("click", () => {
    modalForm.classList.remove("activarFormulario");
});

abrirCalculadora.addEventListener("click", () => {
    modalCalculadora.classList.add("activarCalculadora");
});

cerrarCalculadora.addEventListener("click", () => {
    modalCalculadora.classList.remove("activarCalculadora");
});


/**************************************
Seleccionando Elementos del DOM - CALCULADORA 
**************************************/
const btn_numeros = document.querySelectorAll(".numero"),
    btn_operador = document.querySelectorAll(".operador"),
    displayValorAnterior = document.getElementById("valorAnterior"),
    displayValorActual = document.getElementById("valorActual");

const calculadora = new Calculadora(displayValorAnterior, displayValorActual)

btn_numeros.forEach((boton) => {
    boton.addEventListener("click", () => {
        calculadora.mostrarNumero(boton.innerHTML);
    });
});

btn_operador.forEach((boton) => {
    boton.addEventListener("click", () => {
        calculadora.operacion(boton.innerHTML);
    });
});
/**************************************
Seleccionando Elementos del DOM - CALCULADORA 
**************************************/
const formulario = document.getElementById("formulario"),
    inputs = document.querySelectorAll("#formulario input"),
    selects = document.querySelectorAll("#formulario select");

const validacion = new Validacion();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
});

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.target.id !== "fechaInput" && e.target.id !== "hora2") {
            validacion.validacionInput(e);
        } else {
            validacion.validacionFecha(e);
        }
    })
})

selects.forEach((select) => {
    select.addEventListener("click", (e) => {
        validacion.validacionSelect(e);
    });
});