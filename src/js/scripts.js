const formatador = (data) => {
    return {
        dia : {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}

//OBJECT {}
const atividade = {
    nome: "Ir ao Merdado",
    data: new Date("2024-07-18 10:00"),
    finalizada: false
}

const atividades = [

    atividade,
    {
        nome: "Jantar",
    data: new Date("2024-07-19 20:00"),
    finalizada: false
    },
    {
        nome: "Almoçar",
    data: new Date("2024-07-19 12:00"),
    finalizada: true
    },
    {
        nome: "Lanche",
    data: new Date("2024-07-19 16:00"),
    finalizada: true
    },
]
CriarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox" '

    if (atividade.finalizada) {
        input = input + 'checked'
    }

    input = input + '>'

    return `<div>
            ${input}
            <span>${atividade.nome}</span>
            <time datetime="">Sábado, ${atividade.data}</time>
        </div>`
}

const section = document.querySelector('section')

for (let atividade of atividades) {
    section.innerHTML += CriarItemDeAtividade(atividade)
}

