<template>
  <ul class="breadcrumb">
    <li>
      <router-link :to="{ name: 'home' }">
        <q-icon name="home" />
      </router-link>
    </li>
    <li>
      <a class="no-pointer-events	">
        {{$route.meta.name}}
      </a>
    </li>
  </ul>
</template>
<script>
import { QIcon } from 'quasar'
export default {
  components: {
    QIcon
  }
}
</script>
<style scoped>
ul {
  margin: 8px !important;
}
</style>
