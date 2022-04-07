# [BossaBox]  Desafio QA

> Desafio técnico de automação com testes e2e e de integração utilizando [Playwright](https://playwright.dev/) 🎭

Especificações do Desafio podem ser visualizadas [aqui](https://github.com/brenogerude/bbox--qa-assessment)


---

### Problemas encontrados

Durante a realização do desafio, foram encontrados problemas, tanto no frontend quanto no backend.

Mais detalhes podem ser [encontrados aqui](BUGS.md).

---

### Testes E2E 🎡

Para informações referente aos testes E2E, acessar a [documentação aqui](E2E.md).

---

### Testes API	🎠

Para informações referente aos testes API, acessar a [documentação aqui](API.md).

---
### Stack 🚀
- Javascript: linguagem de fácil entendimento, com uma baixa curva de aprendizado. Tem suporte para automações WEB, API e Mobile (utilizando appium);
- Playwright: ferramenta performática e moderna para automação e2e;
- POM: foi utilizado orientação a objetos como abstração, encapsulamento e segmentação de responsabilidades, temos um ganho na organização e reaproveitamento de código nas páginas;
- CSS Selector: mapeamento de elementos;
- Massas de dados centralizadas (factory de dados).

---
### Pré-requisitos ⚡

- [Git](https://git-scm.com) [baixar última versão estável]
- [NodeJS](https://nodejs.org/en/) [baixar a versão recomendada (16.14.2)]
- [Yarn](https://yarnpkg.com)
- [VSCode](https://code.visualstudio.com)

---
### Instalação ⚙️

- Git\
Instalação padrão
- NodeJS\
Instalação padrão (LTS)
- Yarn
```bash
    npm -g install yarn
```
- Dependências

```bash
    yarn install
```

```bash
    yarn setup
```

---
### Como rodar a automação 🔥
Com as dependências instaladas:
- Para rodar os testes em todos os navegadores(chromium, firefox e webkit) executar o comando:
```bash
yarn test
```
- Para rodar os testes em um navegador específico, passar o parâmetro `--project` com o valor de acordo com o navegador escolhido. Exemplo com chromium:
```bash
yarn test --project=chromium
```

---
### Reports 📂

Ao finalizar a execução, as evidênias de testes serão geradas na pasta `reports`. O report HTML ficará no path `reports/html`