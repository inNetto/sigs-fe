<template>
  <div>
    <blockquote v-show="dados">
      <p class="caption">
        No ano de
        <strong class="text-secondary">{{anoSelecionado}}</strong>,
        <p class="caption">até agora foram cadastrados
          <strong class="text-secondary">{{dados.totalInclusao}}</strong> pessoas
        </p>
        <p class="caption ">e atualizados
          <strong class="text-secondary">{{dados.totalEdicao}}</strong>.
        </p>
    </blockquote>
    <div class="row sm-gutter justify-center" v-if="dados">
      <div class="col-10 col-md-6 col-lg-6 col-xl-4" v-for="(mes, index) in meses" :key="index">
        <card-mes-produtividade :ano-selecionado="anoSelecionado" :mes="mes" :index="++index" :inclusao="dados.totalInclusaoPorMes[--index]"></card-mes-produtividade>
      </div>
    </div>
  </div>
</template>
<script>
import CardMesProdutividade from './cardMesProdutividade.vue'
export default {
  props: ['anoSelecionado', 'dados'],
  components: {
    CardMesProdutividade
  },
  computed: {
    meses () {
      return this.$moment.months()
    }
  },
  watch: {
    dadosMesSelecionado () {
      this.$refs.modal.open()
    }
  },
  methods: {
    converteNumeroEmMes (mes) {
      const nomeMes = this.$moment().format(mes, 'MMMM')
      return nomeMes[0].toUpperCase() + nomeMes.slice(1)
    }
  }
}
</script>
<style scoped>
p {
  font-size: 1.1rem;
  margin: 0;
  line-height: 3px;
}
</style>
