# Eventos

Tratamento genérico dos eventos no Gartic

## Build

Para gerar o arquivo compilado e compatível com todos os browsers via babel,
executar o comando:
```
npm run build
```

## Sintaxe

Verificar a sintaxe padrão através do comando:
```
npm test
```
## Demo
- [Basico](demos/basico/) - Exemplo básico de emissão de eventos

## API

### eventos.emit(evento[, ...args])
- `evento` **String** - Nome/indice do evento a ser disparado

Emitindo um evento para o índice e passando a lista de argumentos (...args) como parâmetro.

Retorna `true` caso o evento possua um registro, caso contrário `false`.

### eventos.on(evento, callback)
- `evento` **String** - Nome/indice do evento a ser adicionado
- `callback` **Function** - Função a ser chamada assim que o evento for disparado

Criando um evento para o índice específico (página).

### eventos.prependListener(evento, callback)
- `evento` **String** - Nome/indice do evento a ser adicionado
- `callback` **Function** - Função a ser chamada assim que o evento for disparado

Adiciona um listener no topo da chamada do evento.

### eventos.removeListener(evento, callback)
- `evento` **String** - Nome/indice do evento
- `callback` **Function** - Função a ser se removida

Remove um listener específico do evento.

### eventos.removeAllListeners(evento)
- `evento` **String** - Evento a ser zerado

Remove todos os listeners de um evento.
