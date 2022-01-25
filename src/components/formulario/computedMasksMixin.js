import VMasker from 'vanilla-masker'

export default {
  computed: {
    maskedCelular: {
      get: function () {
        if (this.pessoa.telefone == null) {
          return ''
        }
        return VMasker.toPattern(this.pessoa.telefone, '(99) 99999-9999')
      },
      set: function (newValue) {
        this.pessoa.telefone = newValue
      }
    },
    maskedDataNascimento: {
      get: function () {
        if (this.pessoa.data_nascimento == null) {
          return ''
        }
        return VMasker.toPattern(this.pessoa.data_nascimento, '99/99/9999')
      },
      set: function (newValue) {
        this.pessoa.data_nascimento = newValue
      }
    },
    maskedCep: {
      get: function () {
        if (this.pessoa.endereco.cep == null) {
          return ''
        }
        return VMasker.toPattern(this.pessoa.endereco.cep, '99999-999')
      },
      set: function (newValue) {
        this.pessoa.endereco.cep = newValue.replace('-', '')
      }
    },
    maskedDataAtendimento: {
      get: function () {
        if (this.atendimento.data_atendimento == null) {
          return ''
        }
        return VMasker.toPattern(this.atendimento.data_atendimento, '99/99/9999')
      },
      set: function (newValue) {
        this.atendimento.data_atendimento = newValue
      }
    }
  }
}
