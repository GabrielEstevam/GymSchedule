<p align="center"><img src=front-end/src/assets/logo.png width=200px ></p>

# GymSchedule

Desenvolvimento de uma aplicação para agendamento de horários em academias de condomínios.

Projeto desenvolvido para a disciplina de Desenvolvimento Ágil de Sistemas.

## Iterações (sprints)

O desenvolvimento foi realizado em três iterações. A seguir é descrito o que foi implementado em cada iteração.

### Primeira Iteração
- Implementação do back-end utilizando a linguagem JavaScript e a plataforma NodeJS.
- Autenticação JWT utilizando framework Adonis JS.
- API REST.
- Persistência em banco de dados SQLite.

### Segunda Iteração
- Implementação do front-end utilizando ReactJS.
- Implementação da funcionalidade de agendamentos de horários.

### Terceira Iteração
- Implementação da consulta de agendamentos de horários.
- Implementação do cancelamento de reserva de horário.

## Screeshots
- Tela de Cadastro
<p align="center"><img src=front-end/screenshots/tela2.png width=500px ></p>

- Tela de Login
<p align="center"><img src=front-end/screenshots/tela1.png width=500px ></p>

- Tela de Principal
<p align="center"><img src=front-end/screenshots/tela3.png width=500px ></p>

- Reserva
<p align="center"><img src=front-end/screenshots/tela4.png width=500px ></p>

- Confirmação da Reserva
<p align="center"><img src=front-end/screenshots/tela5.png width=500px ></p>

- Cancelamento
<p align="center"><img src=front-end/screenshots/tela6.png width=500px ></p>

## Execução

Requerimentos:
- Node v11.15.0 ou superior.
- NPM v6.7.0 ou superior.

Para executar a aplicação é necessário rodar o back-end e o front-end em terminais separados, como descrito a seguir.

### Execução do back-end
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

### Execução do front-end
Entre no diretório do front-end
```
cd front-end
```
Instale os pacotes
```
npm install
```
Execute
```
npm start
```
Acesse a página no navegador
```
http://localhost:3000/
```

### Resetar banco de dados
Apagar arquivo 'database/adonis.sqlite' e executar o comando
```
adonis migration:run
```

## Execução com Docker

Requerimentos:
- Docker v19.03.6 ou superior.
- docker-compose v1.29.2 ou superior.

Para construir a aplicação basta executar o seguinte comando:

```
./initing_application.sh
```
