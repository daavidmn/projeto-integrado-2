export const user = [
  {
    nome: 'Zé Monstrão',
    xpTotal: '1500',
    habitos: [
      {
        titulo: 'Corrida com cachorro',
        xp: 100,
        dias: [
          { //baseado em objetos tipo Date
            diaSetado: 1, //getDay()     
            HoraSetada: 23, //getHour()
            MinutoSetado: 59, //getMinute()
            notificar: true,
            completado: false,
          },
        ],
      },
    ]
  }
]