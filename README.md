# Cypress E2E — SauceDemo 🛒

> Suite de testes automatizados E2E para o SauceDemo, usando Cypress com Page Object Model e CI via GitHub Actions.

![CI](https://github.com/SEU_USUARIO/SEU_REPOSITORIO/actions/workflows/e2e.yml/badge.svg)

## Tecnologias

- [Cypress](https://www.cypress.io/) 15.4.0
- Page Object Model (POM)
- GitHub Actions (CI/CD)
- Mochawesome (relatórios)

## Fluxos Testados

| Módulo | Cenários |
|---|---|
| Login | Válido, inválido, usuário bloqueado, campos vazios |
| Inventário | Listagem, ordenação, adicionar ao carrinho |
| Carrinho | Adicionar, remover, múltiplos itens |
| Checkout | Fluxo completo, campos obrigatórios, valor total |

## Como Rodar

### Pré-requisitos
- Node.js 20+
- npm

### Instalação

```bash
npm install
```

### Abrir no modo interativo

```bash
npm run cy:open
```

### Rodar headless

```bash
npm run cy:run
```

### Gerar relatório

```bash
npm run cy:report
```

## Estrutura

```
cypress/
├── e2e/          → Specs dos testes
├── pages/        → Page Objects
├── fixtures/     → Dados de teste (usuários, checkout)
└── support/      → Custom commands e configuração global
```

## CI

O workflow roda automaticamente em todo push para `main` e `develop`.  
Artefatos (screenshots, vídeos, relatório) são salvos por 7 dias.
