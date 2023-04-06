'use strict'

const containerItens = document.getElementById('container-itens')

let itens = document.querySelectorAll('.item')

const previous = () => {
    containerItens.appendChild(itens[0])
    itens = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = itens[itens.length -1]
    containerItens.insertBefore(lastItem, itens[0])
    itens = document.querySelectorAll('.item')
}

document.getElementById('previous').addEventListener('click', next)
document.getElementById('next').addEventListener('click', previous)