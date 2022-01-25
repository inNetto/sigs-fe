<template>
  <g-card :titulo="$route.meta.name" :contentPadding="true" subtitulo="Crie, delete e atualize os atendimentos" titleClass="bg-blue-8" titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6" actionsClass="bg-light">
    <crud api="tipos_atendimento" titulo="Cursos" slot="content"></crud>
  </g-card>
</template>

<script>
import Crud from '../crud/crudManutencao.vue'
import GCard from '../gCard.vue'
export default {
  name: 'Cursos',
  components: {
    Crud, GCard
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
