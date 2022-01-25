<template>
  <div>
    <div class="row">
      <div class="col col-xl-6">
        <q-input v-model="nome" float-label="Nome" :max-length="15"></q-input>
      </div>
      <div class="col-auto">
        <q-btn color="green" @click="criar()"> Criar novo </q-btn>
      </div>
    </div>
    <div class="row" v-for="(item, index) in listaItens" :key="index">
      <div class="col col-xl-6">
        <div class="floating-label">
          <q-input v-model="item.nome" :max-length="15"></q-input>
        </div>
      </div>
      <div class="col-auto ">
        <q-btn color="green" @click="atualizar(item)">
          <q-icon name="done"></q-icon>
        </q-btn>
        <q-btn color="red" @click="deletar(item, index)">
          <q-icon name="delete_forever"></q-icon>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import methodsMixins from './crudMethodsMixin'
export default {
  props: ['api', 'titulo'],
  mixins: [methodsMixins],
  mounted () {
    this.$bus.$emit('loading')
    this.$http
      .get(this.api)
      .then(response => {
        this.listaItens = response.data.data
        this.$bus.$emit('loading')
      })
      .catch(() => {
        this.$bus.$emit('loading')
      })
  },
  data () {
    return {
      listaItens: [],
      nome: ''
    }
  }
}
</script>
<style scoped>

</style>
