"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var CalculoImc = function (peso, altura) {
    return (peso / Math.pow(altura, 2));
};
var peso = Number(prompt("Forne\u00E7a o peso"));
var altura = Number(prompt("Forne\u00E7a altura"));
var imc = CalculoImc(peso, altura);
console.log("Seu imc \u00E9 ".concat(imc));
