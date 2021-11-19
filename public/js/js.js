const odd = document.getElementById("odd")
const even = document.getElementById("even")
const puntos = document.getElementById("puntos")
const numeros = document.getElementById("numero")
let punto = 15
let max = punto
puntos.textContent = punto

odd.addEventListener("click", () => {
    odd.classList.replace("noclick", "click")
    odd.disabled = true
    setTimeout(() => {
    let numero = Math.floor(Math.random()*((6+1)-1)+1)
    console.log(numero)
    if (numero == 2 || numero == 4 || numero == 6) {
        punto += numero
    } else {
        punto -= numero
    }
    puntos.textContent = punto
    numeros.textContent = numero
    if (punto < 1) {
        alert(`Tu puntuacion maxima es de ${max}`)
        window.location.reload()
    } else if (max < puntos) {
        max = puntos
    }
    odd.classList.replace("click", "noclick")
    odd.disabled = false
}, 500)
})

even.addEventListener("click", () => {
    even.classList.replace("noclick", "click")
    even.disabled = true
    setTimeout(() => {
    let numero = Math.floor(Math.random()*((6+1)-1)+1)
    console.log(numero)
    if ( numero == 1 || numero == 3 || numero == 5) {
        punto += numero
    } else {
        punto -= numero
    }
    puntos.textContent = punto
    numeros.textContent = numero
    if (punto < 1) {
        alert(`Tu puntuacion maxima es de ${max}`)
        window.location.reload()
    } else if (max < punto) {
        max = punto
    }
    even.classList.replace("click", "noclick")
    even.disabled = false
}, 500)
})