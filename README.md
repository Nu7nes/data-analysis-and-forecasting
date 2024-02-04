
# Análise e previsão de dados

Projeto pessoal com o objetivo de auxiliar e monitorar estados de alimentos, como a mandióca, em processos alimentícios.


![GitHub repo size](https://img.shields.io/github/repo-size/Nu7nes/data-analysis-and-forecasting)
![GitHub language count](https://img.shields.io/github/languages/count/Nu7nes/data-analysis-and-forecasting)
![GitHub top language](https://img.shields.io/github/languages/top/Nu7nes/data-analysis-and-forecasting)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/Nu7nes/data-analysis-and-forecasting)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/Nu7nes/data-analysis-and-forecasting/main)


## Motivação

A idéia nasceu de uma necessidade pessoal. Atualmente trabalho com o precesso de fermentação da mandióca para extração da [puba](https://pt.wikipedia.org/wiki/Puba).

Tal processo se extende por dias e leva em consideração diversos fatores, tais como a qualidade do tubérculo, o clima, entre outros. Sabendo disso o objetivo aqui é criar uma base de dados de referêcia para a criação de scripts de previsão para auxiliar a produção.

## Funcionalidades

- Captação de dados
- Análise de dados
- Geração de resultados e previsões

## Etapas

- [ Em construção ] Interface para captação dos dados. 
- [ Em construção ] Captação de dados para primeira analise.
- [ Aguardando ] Integração do back-end com API's e bases de dados de clima.
- [ Aguardando ] Script de analise dos dados.
- [ Aguardando ] Testes das primeiras análises.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env:

`PORT` : porta para o servidor node

`MONGO_CONNECTION_URI` : conexão com o bando de dados (MongoDB)

`WEATHER_API_KEY` : chave disponibilizada pelo [Weather API](https://openweathermap.org/api)

## Rodando localmente

Para rodar o app faça o download do ZIP no [repositório](https://github.com/Nu7nes/data-analysis-and-forecasting/) ou clone o repositório:

```bash
  git clone git@github.com:Nu7nes/data-analysis-and-forecasting.git
```

Entre no diretório do projeto

```bash
  cd data-analysis-and-forecasting
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start_dev
```
## Stack utilizada

**Front-end:** React, Redux, Styled Components

**Back-end:** Node, Express, MongoDB, Python


## Referência

 - [O que é Puba?](https://pt.wikipedia.org/wiki/Puba)
 


## Autores

- [@Nu7nes](https://www.github.com/Nu7nes)

