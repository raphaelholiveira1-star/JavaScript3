class Jogador{
    constructor(nome, idade, posicao){
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
    }

apresentar(){
    console.log(`Meu nome é ${this.nome}`)
    console.log(`Minha idade é ${this.idade} anos`)
    console.log(`Minha posicao é ${this.posicao}`)
    }


atacar(){
    console.log(`${this.nome} está atacando`);
    }

defender(){
    console.log(`${this.nome} está defendendo`);
    }

receber(){
    console.log(`${this.nome} está recebendo a bola`);
    }

treinar(){
    console.log(`${this.nome} está treinando para a próxima partida`);
    }

descansar(){
    console.log(`${this.nome} está descansando após o treino`);
    }
}

const jogador1 = new Jogador("Anna", 16, "Ponteiro");
const jogador2 = new Jogador("Kaue", 17, "Líbero");
const jogador3 = new Jogador("Igor", 17, "Levantador");
const jogador4 = new Jogador("Vinicius", 17, "Central");
const jogador5 = new Jogador("Pedro", 17, "Oposto");
jogador1.apresentar();
jogador2.apresentar();
jogador3.apresentar();
jogador4.apresentar();
jogador5.apresentar();
jogador1.atacar();
jogador2.defender();
jogador3.receber();
jogador4.atacar();
jogador5.treinar();
jogador5.descansar();