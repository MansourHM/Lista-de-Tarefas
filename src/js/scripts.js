const formatador = (data) => {
    return {
        dia: {
            numerico:dayjs(data).format('DD'),
            semana: {
                curto:dayjs(data).format('ddd'),
                longo:dayjs(data).format('dddd'),
            }
        },
        mes:dayjs(data).format('MMMM'),
        hora:dayjs(data).format('HH:mm')
    }
}

//OBJECT {}
const atividade = {
    nome: "Ir ao Mercado",
    data: new Date("2024-07-18 10:00"),
    finalizada: false
}

const atividades = [
    atividade,
        {
            nome: "Jantar",
            data: new Date("2024-07-19 20:00"),
            finalizada: true 
        },
        {
            nome: "Dormir",
            data: new Date("2024-07-19 23:00"),
            finalizada: false 
        },
        {
            nome: "Acordar",
            data: new Date("2024-07-20 06:00"),
            finalizada: true
        },
]

criarItemDeAtividade = (atividade) => {     
    let input = '<input type="checkbox" '
    
    if(atividade.finalizada) {
        input = input + 'checked'
    }

    input = input + '>'

    return `<div>
                ${input}
                <span>${atividade.nome}</span>
                <time datetime="">${atividade.data}</time>
            </div>`
}

const section = document.querySelector('section')

for(let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
}


