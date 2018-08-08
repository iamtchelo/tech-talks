# CYPRESS

JavaScript End to End Testing Framework

https://www.cypress.io/

## Diferença com Selenium
- Rodar interno ao browser, junto com sua aplicação
- Linguagem somente javascript
- Tests: (Unitarios, Integração, UI)

## Pros
- Open source
- Baseado no chrome dev tools
- Completo ja vem com baterias inclusas (test runner, fixtures, expects)
- Fácil de debuggar a aplicação ou o proprio test .spec
- Roda com command line
- Integra com CI/CD pipelines
- Velocidade
- Aguardar elementos
- Screenshots
- Videos
- Documentação

## Contras
- Roda somente com chrome
- Rodar tests remotos
- Execução paralela
- Comunidade

## Ferramentas
- https://www.cypress.io/
-  https://github.com/kentcdodds/cypress-testing-library

## Sample


```
describe("Login no Novo Portal", () => {
  it("deve logar no novo portal", () => {
    cy.visit("https://beta.easynvest.com.br/autenticacao")
      .get('[name="username"]')
      .type("32908011875")
      .get('[name="password"]')
      .type(Cypress.env("MY_PASS"));

    cy.getByText("Entrar").click();

    cy.url().should('contains', '/acompanhar/investimentos')
  });
});
```

## Hands On
- Autenticação no novo portal (https://beta.easynvest.com.br/autenticacao)

- Autenticação no portal (https://portal.easynvest.com.br/autenticacao/login)

## Preparação

Criar um diretorio 

```mkdir cypress-dojo```

```cd cypress-dojo```

Iniciar com um package.json

```npm init -y```

Instalar cypress e o cypress-testing-library

```npm install -s cypress cypress-testing-library```

Adicionar o script do cypress no package.json

```
"scripts": {
  "cy:dev": "cypress open",
  "cy:run": "cypress run"
},
```

Rodar em modo dev

```npm run cy:dev```

Opcional adicionar suporte do cypress-testing-library na index.js do support

```import 'cypress-testing-library/add-commands';```

Criar testes :)

## Dojo
- Entrar no HB

