'use strict';

import Eventos from '../../src/eventos.js';

class Teste extends Eventos {
	constructor() {
		super();

		let elem = document.getElementById('texto');
		elem.addEventListener('keyup',() => {
			switch(elem.value) {
				case 'verde':
					super.emit('verde','#00FF00');
					break;
				case 'vermelho':
					super.emit('vermelho','#FF0000');
					break;
				case 'azul':
					super.emit('azul','#0000FF');
					break;
			}
		},false);
	}
}

let teste = new Teste();
let retorno = document.getElementById('retorno');
teste.on('verde', hex => {
	retorno.style.color = hex;
	retorno.textContent = 'Digitou verde';
});

//testando dois callbacks para o mesmo evento...
let funcVermelho = hex => {
	retorno.textContent += '!!!';
};
teste.on('vermelho', funcVermelho);

teste.prependListener('vermelho', hex => {
	retorno.style.color = hex;
	retorno.textContent = 'Digitou vermelho';
});

teste.on('azul', hex => {
	retorno.style.color = hex;
	retorno.textContent = 'Digitou azul';
});


let botao = document.querySelector('#azul');
botao.addEventListener('click',() => {
	teste.removeAllListeners('azul');
},false);


let botao2 = document.querySelector('#vermelho');
botao2.addEventListener('click',() => {
	teste.removeListener('vermelho',funcVermelho);
},false);
