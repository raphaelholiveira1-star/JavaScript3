class Funcionario{
    constructor(nome, salario){
        this.nome = nome;
        this.salario = salario;
    }
}

class Professor extends Funcionario{
    constructor(nome, salario, disciplina){
        super(nome, salario);
        this.disciplina = disciplina;
    }
}

const professor = new Professor("Jansen", 50000, "Devops");
console.log(`O professor ${professor.nome} recebe um salário de R$${professor.salario},00 e leciona a disciplina de ${professor.disciplina}.`);

