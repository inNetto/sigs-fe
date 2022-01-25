export default {
  data () {
    return {
      tiposAtendimento: []
    }
  },
  computed: {
    optionsTipoAtendimento () {
      return [
        { label: '', value: '' },
        ...this.tiposAtendimento.map(tipo => { return { label: tipo.nome, value: tipo.id } })
      ]
    }
  },
  methods: {
    getTiposAtendimento () {
      this.$bus.$emit('loading')
      this.$http.get('tipos_atendimento')
        .then(response => {
          this.tiposAtendimento = response.data.data
          this.$bus.$emit('loading')
        })
        .catch(error => {
          this.$bus.$emit('loading')
          console.log(error)
        })
    }
  }
}
