# 📘 Testes de Performance com JavaScript e K6

## 🏁 Introdução

Este projeto contém um conjunto de scripts para testes de
performance utilizando **K6** com JavaScript, voltado para avaliação
de desempenho, carga e estresse de APIs. O projeto foi estruturado para
facilitar a organização dos cenários, modularização das funções e
reutilização de componentes, permitindo escalabilidade e clareza durante
o desenvolvimento dos testes.

Uma variável de ambiente é **obrigatória** para execução dos testes:
**`BASE_URL`**, que define a URL base da API alvo.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   **K6** -- Ferramenta moderna e de alta performance para testes de
    carga.
-   **JavaScript ES6+** -- Linguagem utilizada para escrita dos
    cenários.
-   **Node.js** -- Ambiente de desenvolvimento para organização do
    projeto.
-   **Git/GitHub** -- Versionamento e armazenamento dos scripts.

- **Variavel de Ambiente** -- Variáveis de ambiente para configuração dinamica (ex: 'Base_url').

------------------------------------------------------------------------

## 📂 Estrutura do Repositório

A estrutura geral deste repositório segue o padrão abaixo:

   ## Estrutura do Repositório

banco-api-performance/
├── fixtures/              # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/               # Funções utilitárias reutilizáveis para interação com API
├── tests/                 # Casos de teste organizados por módulo da API
├── utils                  # Funções utilitárias reutilizáveis
└── README.md              # Este documento

------------------------------------------------------------------------

## 🎯 Objetivo de Cada Grupo de Arquivos

- **fixtures/**: Dados de entrada para os testes (ex: usuários, payloads).

- **helpers/**: Funções utilitárias reutilizáveis para interação com API.

- **tests/**: Casos de teste organizados por módulo da API.

- **utils /**Funções utilitárias reutilizáveis


------------------------------------------------------------------------

## ⚙️ Instalação do Projeto

### **1. Clonar o repositório**

``` bash
git clone https://github.com/MaatheusAdao/banco-api-performace.git
cd banco-api-performace
```

### **2. Instalar dependências (caso existam scripts auxiliares em Node)**

``` bash
npm install
```

### **3. Configurar variável de ambiente obrigatória**

Antes de rodar o K6, exporte a variável **BASE_URL**:

**Windows PowerShell:**

``` powershell
$env:BASE_URL = "https://sua-api.com"
```

**Linux/Mac:**

``` bash
export BASE_URL="https://sua-api.com"
```

------------------------------------------------------------------------

## 🚀 Execução dos Testes

Para rodar um teste de performance usando K6:

``` bash
k6 run src/scenarios/nomeDoCenario.js
```

Lembre-se de ter a variável **BASE_URL** configurada.

------------------------------------------------------------------------

## 📊 Execução com Dashboard em Tempo Real e Exportação de Relatórios

O K6 possui um dashboard web em tempo real e também permite exportar
relatórios, bastando usar variáveis de ambiente.

### **Habilitar Dashboard ao vivo**

**PowerShell:**

``` powershell
$env:K6_WEB_DASHBOARD = "true"
k6 run src/scenarios/nomeDoCenario.js
```

**Linux/Mac:**

``` bash
export K6_WEB_DASHBOARD=true
k6 run src/scenarios/nomeDoCenario.js
```

### **Exportar relatório HTML automaticamente**

Você pode usar outra variável para gerar o relatório ao final do teste:

``` powershell
$env:K6_WEB_DASHBOARD_EXPORT = "./reports/resultado.html"
k6 run src/scenarios/nomeDoCenario.js
```

Ou no Linux/Mac:

``` bash
export K6_WEB_DASHBOARD_EXPORT=./reports/resultado.html
k6 run src/scenarios/nomeDoCenario.js
```

Após a execução, o arquivo HTML será salvo na pasta indicada.

------------------------------------------------------------------------



