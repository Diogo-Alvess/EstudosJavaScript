class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // previne falha
    //console.log("nao envia");
    const camposValidos = this.checaCampos();
    const senhasValidas = this.senhasValidass();

    if (camposValidos && senhasValidas) {
      alert("Formulario enviado.");
      this.formulario.submit();
    }
  }

  senhasValidass() {
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repsenha');

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senha precisar ser iguais."
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha prescisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  checaCampos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error")) {
      errorText.remove();
    } // remove pra nao acumular as mensagens

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      //captura os campos do form
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) {valid = false};
      }
    }
    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "Usuario precisa ter entre 3 e 12 caracteres.");
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Nome de usuario precisa conter apenas letras e/ou numeros."
      );
      valid = false;
    }
    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF invalido.");
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div"); //cria elemento div para html
    div.innerHTML = msg;
    div.classList.add("error");

    campo.insertAdjacentElement("afterend", div); //cria a div depois do campo
  }
}

const valida = new ValidaFormulario();
