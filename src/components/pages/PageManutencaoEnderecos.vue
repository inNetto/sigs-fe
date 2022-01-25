<template>
  <div class="table-manutencao">
    <table-manutencao-endereco />
  </div>
</template>

<script>
import TableManutencaoEndereco from '../tableManutencaoEndereco.vue'
export default {
  name: 'PageManutencaoEndereco',
  components: {
    TableManutencaoEndereco
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.table-manutencao {
  width: 120%;
  margin-left: -100px;
}
</style>
