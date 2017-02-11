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

		let botao = document.querySelector('button');
		botao.addEventListener('click',() => {
			super.removeAllListeners('azul');
		},false);
	}
}

let teste = new Teste();
let retorno = document.getElementById('retorno');
teste.on('verde', hex => {
	retorno.style.color = hex;
	retorno.textContent = 'Digitou verde';
});
teste.on('vermelho', hex => {
	retorno.style.color = hex;
	retorno.textContent = 'Digitou vermelho';
});
//testando dois callbacks para o mesmo evento...
teste.on('vermelho', hex => {
	retorno.textContent += '!!!';
});
teste.on('azul', hex => {
	retorno.style.color = hex;
	retorno.textContent = 'Digitou azul';
});
