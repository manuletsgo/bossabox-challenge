module.exports = {
  auth: {
    register: {
      firstName: "Teste",
      name: "Teste Name",
      email: `bossabox-challenge-QA${Math.floor(Math.random() * 10000)}@mailsac.com`,
      password: "teste123",
      confirmPassword: "teste123",
      loginType: "email"
    },
    register_error: {
      different_passwords: {
        name: "teste t",
        email: "teste@teste.io",
        password: "teste1234",
        confirmPassword: "teste1235",
        message: "As senhas não correspondem",
        loginType: "email"
      },
      short_password: {
        name: "teste t",
        email: "teste@teste.io",
        password: "teste",
        confirmPassword: "teste",
        message: "A senha deve ter pelo menos 8 caracteres",
        loginType: "email"
      },
      empty_field: {
        name: "",
        email: "teste@teste.io",
        password: "teste1234",
        confirmPassword: "teste1234",
        message: "Lembre-se de preencher os campos",
        loginType: "email"
      },
      invalid_email: {
        name: "teste t",
        email: "teste",
        password: "teste1234",
        confirmPassword: "teste1234",
        message: "E-mail e/ou senha inválidos",
        loginType: "email"
      },
      email_already_registered: {
        name: "teste t",
        email: "bossabox-challenge-QA43@mailsac.com",
        password: "teste1234",
        confirmPassword: "teste1234",
        message: "E-mail já cadastrado!",
        loginType: "email"
      }
    }
  }
}
