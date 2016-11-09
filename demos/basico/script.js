'use strict';

class Teste extends Eventos {
	constructor() {
		super();

		let elem = document.getElementById('texto');
		elem.addEventListener('keyup',() => {
			switch(elem.value) {
				case 'verde':
				case 'vermelho':
				case 'azul':
					super.emit(elem.value);
					break;
			}
		},false);
	}
}

let teste = new Teste();
let retorno = document.getElementById('retorno');
teste.on('verde', () => {
	retorno.style.color = 'green';
	retorno.textContent = 'Digitou verde';
});
teste.on('vermelho', () => {
	retorno.style.color = 'red';
	retorno.textContent = 'Digitou vermelho';
});
teste.on('azul', () => {
	retorno.style.color = 'blue';
	retorno.textContent = 'Digitou azul';
});
