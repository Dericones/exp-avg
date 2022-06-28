const grade = [
  {
    name: "João",
    firstNote: 5,
    secondNote: 9
  },
  {
    name: "Pedro",
    firstNote: 7,
    secondNote: 3
  },
  {
    name: "Cleber",
    firstNote: 8,
    secondNote: 6
  },
  {
    name: "Joaquina",
    firstNote: 10,
    secondNote: 8
  },
  {
    name: "Cecília",
    firstNote: 10,
    secondNote: 10
  },
  {
    name: "Maria",
    firstNote: 2,
    secondNote: 4
  }
]

function studentAverage(student) {
  let average = Number(((student.firstNote + student.secondNote) / 2)).toFixed(1)
  
  if (average < 7) {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}.
    Não foi dessa vez, ${student.name}! Tente novamente!
    ` 
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é: ${average}.
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `
  }
}

for (let student of grade) {
  let testMessage = studentAverage(student)
  alert(testMessage)
}
