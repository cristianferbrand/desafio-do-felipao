class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if(this.tipo === "mago"){
            console.log(`o ${this.tipo} atacou usando magia`);
        }
        if(this.tipo === "guerreiro"){
            console.log(`o ${this.tipo} atacou usando espada`);
        }
        if(this.tipo === "monge"){
            console.log(`o ${this.tipo} atacou usando artes marciais`);
        }
        if(this.tipo === "ninja"){
            console.log(`o ${this.tipo} atacou usando shuriken`);
        }
    }
}

heroMagico = new hero("gandalf", 1000, "mago");
heroMagico.atacar();