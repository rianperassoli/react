import validator from 'validator';

class FormValidator {

    constructor(validacoes) {
        this.validacoes = validacoes
    }

    valida(autores) {
        let validacao = this.valid()

        this.validacoes.forEach(regra => {
            const campoValor = autores[regra.campo.toString()];
            const args = regra.args || [];
            const metodoValidacao = typeof regra.metodo === 'string' ? validator[regra.metodo] : regra.metodo

            if (metodoValidacao(campoValor, ...args, autores) !== regra.validoQuando) {
                validacao[regra.campo] = {
                    isInvalid: true,
                    message: regra.mensagem
                }
                validacao.isValid = false;
            }
        });
        return validacao
    }

    valid() {
        const validacao = {}

        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ))

        return { isValid: true, ...validacao }
    }
}

export default FormValidator;