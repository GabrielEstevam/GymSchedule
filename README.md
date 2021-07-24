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

## Execução

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
