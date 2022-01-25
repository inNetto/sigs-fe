<template>
  <dash-cadastrador v-if="ehCadastrador"/>
  <div v-else >
    <dash-cadastrador />
    <hr class="hr-margin"/>
    <dash-administrador />
  </div>

</template>

<script>
import DashAdministrador from '@/dashboard/DashAdministrador.vue'
import DashCadastrador from '@/dashboard/DashCadastrador.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    DashAdministrador,
    DashCadastrador
  },
  computed: {
    ...mapGetters(['getUserProfile']),
    ehCadastrador () {
      return this.getUserProfile.perfil_id === 1
    }
  }

}
</script>
<style scoped>
  .hr-margin {
    margin-top: 15px;
    margin-bottom: 50px;
    opacity: 0.5;
  }
</style>
