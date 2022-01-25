<template>
  <div class="relative-position">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <g-card-icon title-class="bg-positive" icon="people" titulo="Cadastrados por você" :conteudo="totalCadastrado"/>
        </div>
        <div class="col-xl-6 col-lg-6">
          <g-card-icon title-class="bg-purple" icon="people" titulo="Cadastrados por você hoje" :conteudo="totalCadastradoHoje"/>
        </div>
        <div class="col-xl-6 col-lg-6">
          <g-card-icon title-class="bg-negative" icon="edit" titulo="Atualizações por você hoje" :conteudo="totalAtualizadaHoje"/>
        </div>
      </div>
    <q-inner-loading :visible="isLoading">
      <q-spinner-hourglass size="50px" color="primary" />
    </q-inner-loading>
  </div>
</template>
<script>
import GCardIcon from '@/gCardIcon.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    GCardIcon
  },
  mounted () {
    this.getTotalCadastroHoje()
    this.getTotalCadastro()
    this.getTotalAtualizacao()
  },
  data: () => ({
    totalCadastradoHoje: 0,
    totalCadastrado: 0,
    totalAtualizadaHoje: 0,
    isLoading: false
  }),
  computed: {
    ...mapGetters(['getUserProfile'])
  },
  methods: {
    getTotalCadastroHoje () {
      this.isLoading = true
      return this.$http
        .get(`/pessoas/total-cadastro-por-usuario-hoje/${this.getUserProfile.id}`)
        .then(response => {
          this.totalCadastradoHoje = response.data
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getTotalCadastro () {
      this.isLoading = true
      return this.$http
        .get(`/pessoas/total-cadastro-por-usuario/${this.getUserProfile.id}`)
        .then(response => {
          this.totalCadastrado = response.data
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    getTotalAtualizacao () {
      this.isLoading = true
      return this.$http
        .get(`/pessoas/total-atualizada-por-usuario-hoje/${this.getUserProfile.id}`)
        .then(response => {
          this.totalAtualizadaHoje = response.data
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
