# [BossaBox]  Desafio QA - Testes E2E

### Objetivo ✨

- Acessar a página de **Cadastro**
- Realizar **Cadastro**

---

### Validações 🔎

- Cadastro realizado com sucesso
- Senhas diferentes
- Senha com menos de 8 caracteres
- Campo em branco
- Email inválido
- Email já cadastrado

---
### Como rodar a automação 🔥
Com as dependências instaladas:
- Para rodar os testes em todos os navegadores(chromium, firefox e webkit) executar o comando:
```bash
yarn test -g @e2e
```
- Para rodar os testes em um navegador específico, passar o parâmetro `--project` com o valor de acordo com o navegador escolhido. Exemplo com chromium:
```bash
yarn test -g @e2e --project=chromium
```