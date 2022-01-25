import { Toast } from 'quasar'

function toast (msg, tipo) {
  Toast.create[tipo](
    {
      html: msg,
      timeout: 1500,
      color: '#fff'
    }
  )
}
export default {
  methods: {
    deletar (item, index) {
      this.$bus.$emit('loading')
      this.$http.delete(`${this.api}/${item.id}`)
        .then(response => {
          this.$bus.$emit('loading')
          toast(`Curso ${item.nome} removido com sucesso!`, 'positive')
          this.listaItens.splice(index, 1)
        })
        .catch(error => {
          this.$bus.$emit('loading')
          toast(`Ops! ${error.response.data.message}`, 'negative')
        })
    },
    criar () {
      this.$bus.$emit('loading')
      this.$http.post(this.api, { nome: this.nome, client_id: 1 })
        .then(response => {
          this.$bus.$emit('loading')
          toast(`Curso ${this.nome} criado com sucesso!`, 'positive')
          this.listaItens.push(response.data.data)
        })
        .catch(error => {
          this.$bus.$emit('loading')
          toast(`Ops! ${error.response.data.message}`, 'negative')
        })
    },
    atualizar (item) {
      this.$bus.$emit('loading')
      this.$http.put(`${this.api}/${item.id}`, { nome: item.nome })
        .then(response => {
          this.$bus.$emit('loading')
          toast(`Curso ${this.nome} atualizado com sucesso!`, 'positive')
        })
        .catch(error => {
          this.$bus.$emit('loading')
          toast(`Ops! ${error.response.data.message}`, 'negative')
        })
    }
  }
}
