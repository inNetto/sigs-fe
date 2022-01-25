<template>
  <div>
    <q-card inline>
      <q-card-media overlay-position="top">
        <img :src="`/statics/${mes}.jpg`">
        <q-card-title slot="overlay">
          <div slot="subtitle" class="text-right capitalize">{{mes}}</div>
        </q-card-title>
      </q-card-media>
      <q-card-main class="no-padding">
        <q-list highlight inset-separator>
          <q-item>
            <q-item-main>
              <q-item-tile label>Cadastrados</q-item-tile>
            </q-item-main>
            <q-item-side right>
              <q-chip square color="primary" class="shadow-2">{{inclusao.contagem || '0'}}</q-chip>
            </q-item-side>
          </q-item>
          <q-item class="no-padding text-center">
            <q-item-main>
              <!-- <q-btn color="secondary" @click="openModal">Dados sintéticos</q-btn> -->
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
    <modal-produtividade ref="modal" :dados-sinteticos-inclusao="dadosSinteticosInclusao" :dados-sinteticos-edicao="dadosSinteticosEdicao"></modal-produtividade>
  </div>
</template>

<script>
import ModalProdutividade from './modalProdutividade.vue'
export default {
  components: {
    ModalProdutividade
  },
  props: {
    mes: {
      type: String,
      require: true
    },
    anoSelecionado: {
      type: Number,
      require: true
    },
    index: {
      require: true
    },
    inclusao: {
      require: true,
      default () { return {} }
    }
  },
  data () {
    return {
      dadosSinteticosInclusao: false,
      dadosSinteticosEdicao: false
    }
  },
  watch: {
    dadosSinteticosInclusao () {
      this.getDadosSinteticosEdicao()
    }
  },
  methods: {
    openModal () {
      this.$refs.modal.open()
      if (this.dadosSinteticosInclusao) {
        return
      }
      this.getDadosSinteticosInclusao()
    },
    getDadosSinteticosInclusao () {
      this.$http.get(`/relatorio/total-por-mes-ano/inclusao/${this.index}/${this.anoSelecionado}`)
        .then(response => { this.dadosSinteticosInclusao = response.data })
    },
    getDadosSinteticosEdicao () {
      this.$http.get(`/relatorio/total-por-mes-ano/edicao/${this.index}/${this.anoSelecionado}`)
        .then(response => { this.dadosSinteticosEdicao = response.data })
    }
  }
}
</script>

<style scoped>
.q-item {
  min-height: 49px;
}
</style>
