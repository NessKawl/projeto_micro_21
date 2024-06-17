let nomeInput = document.querySelector('#nome')
let telInput = document.querySelector('#tel')
let diaInput = document.querySelector('#dia')
let qtdPessoasInput = document.querySelector('#qtdPessoas')
let btnModal = document.querySelector('#btnModal')
// let horarioInput = document.querySelector('#horario')
let emailInput = document.querySelector('#email')
let obsInput = document.querySelector('#obs')
let btn = document.querySelector('#btn')
let div = document.querySelector('#res')

function verificaReserva () {
    let nome = nomeInput.value
    let tel = telInput.value
    let dia = diaInput.value
    let qtdPessoas = qtdPessoasInput.value
    
    clearClass();
    
    if (nome === '' || tel === '' || dia === '' || qtdPessoas === '') {
        div.classList.add('alert')
        div.classList.add('alert-danger')
        btnModal.classList.add('d-none')
        div.innerHTML = 'ERRO: Dados inválidos!'
    } else {
        div.classList.add('alert')
        div.classList.add('alert-success')
        div.innerHTML = 'Reserva efetuada com sucesso!'
    }

    clear()
}

function clearClass () {
    div.classList.remove('alert')
    div.classList.remove('alert-success')
    div.classList.remove('alert-danger')
    btnModal.classList.remove('d-none')
}

function clear () {
    nomeInput.value = ' '
    telInput.value = ' '
    diaInput.value = ' '
    qtdPessoasInput.value = ' '
    // horarioInput.value = ' '
    emailInput.value = ' '
    obsInput.value = ' '

    nomeInput.focus()
}

btn.addEventListener('click', verificaReserva)