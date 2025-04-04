document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const nome = document.getElementById("nome");
    const dataNascimento = document.getElementById("dataNascimento");
    const cpf = document.getElementById("cpf");
    const telefoneFixo = document.getElementById("telefoneFixo");
    const celular = document.getElementById("celular");
    const nomePai = document.getElementById("nomePai");
    const nomeMae = document.getElementById("nomeMae");
    const infoMenor = document.getElementById("infoMenor");
    const cep = document.getElementById("cep");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    function mostrarErro(campo, mensagem) {
        campo.classList.add("erro");
        campo.title = mensagem;
    }

    function limparErro(campo) {
        campo.classList.remove("erro");
        campo.title = "";
    }

    function validarNomeCompleto() {
        const partes = nome.value.trim().split(" ");
        if (partes.length < 2) {
            mostrarErro(nome, "Informe nome e sobrenome");
            return false;
        }
        limparErro(nome);
        return true;
    }

    function calcularIdade(data) {
        const hoje = new Date();
        const nasc = new Date(data);
        let idade = hoje.getFullYear() - nasc.getFullYear();
        const m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
            idade--;
        }
        return idade;
    }

    function validarDataNascimento() {
        const data = dataNascimento.value;
        if (!data) {
            mostrarErro(dataNascimento, "Data inválida");
            return false;
        }
        const idade = calcularIdade(data);
        if (idade < 0 || idade > 120) {
            mostrarErro(dataNascimento, "Idade inválida");
            return false;
        }
        limparErro(dataNascimento);
        infoMenor.style.display = idade < 18 ? "block" : "none";
        return true;
    }

    function validarCPF() {
        let valor = cpf.value.replace(/[\.\-]/g, "");
        if (valor.length !== 11 || /^([0-9])\1+$/.test(valor)) {
            mostrarErro(cpf, "CPF inválido");
            return false;
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(valor.charAt(i)) * (10 - i);
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(valor.charAt(9))) {
            mostrarErro(cpf, "CPF inválido");
            return false;
        }

        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(valor.charAt(i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(valor.charAt(10))) {
            mostrarErro(cpf, "CPF inválido");
            return false;
        }

        limparErro(cpf);
        return true;
    }

    function validarTelefoneFixo() {
        const regex = /^\(\d{2}\) \d{4}-\d{4}$/;
        if (!regex.test(telefoneFixo.value)) {
            mostrarErro(telefoneFixo, "Formato esperado: (XX) XXXX-XXXX");
            return false;
        }
        limparErro(telefoneFixo);
        return true;
    }

    function validarCelular() {
        const regex = /^\(\d{2}\) 9\d{4}-\d{4}$/;
        if (!regex.test(celular.value)) {
            mostrarErro(celular, "Formato esperado: (XX) 9XXXX-XXXX");
            return false;
        }
        limparErro(celular);
        return true;
    }

    function validarCEP() {
        const valor = cep.value;
        const regex = /^\d{5}-?\d{3}$/;
        if (!regex.test(valor)) {
            mostrarErro(cep, "CEP inválido");
            return false;
        }
        limparErro(cep);
        return true;
    }

    function validarEmail() {
        const regex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i;
        if (!regex.test(email.value)) {
            mostrarErro(email, "Email inválido");
            return false;
        }
        limparErro(email);
        return true;
    }

    function validarSenha() {
        const valor = senha.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
        if (!regex.test(valor)) {
            mostrarErro(senha, "Senha fraca. Use maiúscula, minúscula, número e símbolo.");
            return false;
        }
        limparErro(senha);
        return true;
    }

    function validarConfirmarSenha() {
        if (senha.value !== confirmarSenha.value) {
            mostrarErro(confirmarSenha, "As senhas não coincidem");
            return false;
        }
        limparErro(confirmarSenha);
        return true;
    }

    function validarCamposMenor() {
        const idade = calcularIdade(dataNascimento.value);
        if (idade < 18) {
            if (!nomePai.value.trim()) {
                mostrarErro(nomePai, "Campo obrigatório para menores de idade");
                return false;
            }
            if (!nomeMae.value.trim()) {
                mostrarErro(nomeMae, "Campo obrigatório para menores de idade");
                return false;
            }
        }
        limparErro(nomePai);
        limparErro(nomeMae);
        return true;
    }

    cpf.addEventListener('input', () => {
        cpf.value = cpf.value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    });

    telefoneFixo.addEventListener('input', () => {
        telefoneFixo.value = telefoneFixo.value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d{4})(\d+)/, '$1-$2');
    });

    celular.addEventListener('input', () => {
        celular.value = celular.value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(\d{5})-(\d{4})(\d+)/, '$1-$2');
    });

    cep.addEventListener('input', () => {
        cep.value = cep.value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(\d{5})-(\d{3})(\d+)/, '$1-$2');
    });

    formulario.addEventListener("input", () => {
        validarNomeCompleto();
        validarDataNascimento();
        validarCPF();
        validarTelefoneFixo();
        validarCelular();
        validarCEP();
        validarEmail();
        validarSenha();
        validarConfirmarSenha();
        validarCamposMenor();
    });

    formulario.addEventListener("submit", (e) => {
        if (
            !validarNomeCompleto() ||
            !validarDataNascimento() ||
            !validarCPF() ||
            !validarTelefoneFixo() ||
            !validarCelular() ||
            !validarCEP() ||
            !validarEmail() ||
            !validarSenha() ||
            !validarConfirmarSenha() ||
            !validarCamposMenor()
        ) {
            e.preventDefault();
            alert("Corrija os erros antes de enviar o formulário.");
        }
    });
});
