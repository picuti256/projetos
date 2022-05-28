const progresso = document.getElementById('progresso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circulo = document.querySelectorAll('.circulo')

let ativoAtual = 1

next.addEventListener('click', () => {
    ativoAtual++

    if(ativoAtual > circulo.length){
        ativoAtual = circulo.length
    }  

    update()
})

prev.addEventListener('click', () => {
    ativoAtual--

    if(ativoAtual < 1){
        ativoAtual = 1
    }  

    update()
    
})

function update() {
    circulo.forEach((circulo, idx) => {
        if(idx < ativoAtual) {
            circulo.classList.add('ativo')
        } else {
            circulo.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo')

    progresso.style.width = (ativos.length - 1) / (circulo.length - 1) * 100 + '%'

    if(ativoAtual === 1) {
        prev.disabled = true
    } else if(ativoAtual === circulo.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}