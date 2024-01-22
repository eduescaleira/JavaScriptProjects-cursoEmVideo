var dataAtual = new Date()
var hora = dataAtual.getHours()
var minutos = dataAtual.getMinutes()

// console.log(`São ${hora} horas e ${minutos} minutos`)

if (hora < 12) {
    console.log(`Bom dia! São ${hora} horas e ${minutos} minutos`)
} else if (hora <=18){
    console.log(`Boa tarde! São ${hora} horas e ${minutos} minutos`)
} else {
    console.log(`Boa noite! São ${hora} horas e ${minutos} minutos`)
}

