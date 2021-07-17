# GymSchedule

Desenvolvimento de uma aplicação para agendamento de horários em academias de condomínios.

## Primeira Iteração
- Implementação do back-end utilizando a linguagem JavaScript e a plataforma NodeJS.
- Autenticação JWT utilizando framework Adonis JS.
- API REST.
- Persistência em banco de dados SQLite.


## Execução do back-end
Entre no diretório do back-end
```
cd back-end
```
Instale os pacotes
```
npm install
```
Execute
```
node server.js
```

## Acessando a API
Cadastrar usuário
```
localhost:3333/register?username=$USERNAME$&email=$EMAIL$&password=$PASSWORD$&apartment=$APARTMENT$
```
Logar usuário
```
localhost:3333/login?username=$USERNAME$&password=$PASSWORD$
```
