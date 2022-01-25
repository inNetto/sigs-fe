import { toast } from '../../helper/notification'

export default {
  methods: {
    buscaCep () {
      this.$bus.$emit('loading')
      fetch(`https://viacep.com.br/ws/${this.pessoa.endereco.cep}/json`)
        .then(response => {
          response.json().then(json => {
            if (json.erro) {
              this.notificaCepNaoEncontrado()
              this.$bus.$emit('loading')
              return
            }
            this.pessoa.endereco.rua = json.logradouro
            this.pessoa.endereco.municipio = json.localidade
            this.pessoa.endereco.bairro = json.bairro
            this.$bus.$emit('loading')
          })
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    notificaCepNaoEncontrado () {
      toast('Nada encontrado para este cep', 'negative')
    },
    getTiposAtendimento () {
      this.$http.get('tipos_atendimento')
        .then(response => { this.tiposAtendimento = response.data.data })
        .catch(error => { console.log(error) })
    },
    getCentrosSociais () {
      this.$http.get('centros_sociais')
        .then(response => { this.centrosSociais = response.data.data })
        .catch(error => { console.log(error) })
    },
    getCursos () {
      this.$http.get('cursoss')
        .then(response => { this.cursos = response.data.data })
        .catch(error => { console.log(error) })
    }
  }
}
