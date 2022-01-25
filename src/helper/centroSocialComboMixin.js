export default {
  data () {
    return {
      centrosSociais: []
    }
  },
  computed: {
    optionsCentrosSociais () {
      return this.centrosSociais.map(tipo => { return { label: tipo.nome, value: tipo.id } })
    }
  },
  methods: {
    getCentrosSociais () {
      this.$bus.$emit('loading')
      this.$http.get('centros_sociais')
        .then(response => {
          this.$bus.$emit('loading')
          this.centrosSociais = response.data.data
        })
        .catch(error => {
          this.$bus.$emit('loading')
          console.log(error)
        })
    }
  }
}
