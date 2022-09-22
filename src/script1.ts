import PromptSync = require ('prompt-sync');

const prompt = PromptSync();

let CalculoImc = (peso:number, altura:number) => {
    return (peso/Math.pow(altura,2))
};

const peso = Number(prompt(`Forneça o peso`));
const altura = Number(prompt(`Forneça altura`));

const imc = CalculoImc (peso,altura);
console.log(`Seu imc é ${imc}`);

