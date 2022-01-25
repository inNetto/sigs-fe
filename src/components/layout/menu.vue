<template>
  <div>
    <q-list no-border link inset-separator>
      <q-list-header>Geral</q-list-header>
      <q-transition group appear enter="fadeInDown" leave="fadeOutUp" class="group">
        <div v-for="(link, index) in links" :key="index" class="divLink">
          <q-side-link item :to="{ name: link.name }" exact v-if="checkAuth(link.perfil)">
            <q-item-side>
              <img :src="`/statics/${link.img}.svg`" alt="">
            </q-item-side>
            <q-item-main :label="link.linkName" />
          </q-side-link>
        </div>
      </q-transition>
    </q-list>
    <q-list no-border link inset-separator>
      <q-list-header>Relatórios</q-list-header>
      <q-transition group appear enter="fadeInDown" leave="fadeOutUp" class="group">
        <div v-for="(link, index) in linksRelatorios" :key="index" class="divLink">
          <q-side-link item :to="{ name: link.name }" exact v-if="checkAuth(link.perfil)">
            <q-item-side>
              <img :src="`/statics/${link.img}.svg`" alt="">
            </q-item-side>
            <q-item-main :label="link.linkName" />
          </q-side-link>
        </div>
      </q-transition>   
    </q-list>    
    <img id="politico" src="../../statics/politico.jpg" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      links: [
        { name: 'home', img: 'home', linkName: 'Inicio' },
        { name: 'cadastro', img: 'add-user', linkName: 'Cadastrar' }
      ],
      linksRelatorios: [
        { name: 'consulta', img: 'find', linkName: 'Consulta' }
      ]
    }
  },
  created () {
  },
  computed: {
    userProfile () {
      return this.$store.state.userProfile
    }
  },
  methods: {
    checkAuth (perfil) {
      if (!perfil) {
        return true
      }
      if (perfil === 2 && this.userProfile.perfil_id === 2) {
        return true
      }

      return false
    }
  }
}
</script>
<style scoped>
.router-link-active {
  border-right: 3px solid #7FD7FB;
  color: #2196F3;
}

.q-list {
  padding: 0;
}

.q-list+.q-list {
  margin-top: 0
}

.q-item {
  padding: 0px 16px;
}

.q-item-icon {
  font-size: 48px;
}

.divLink {
  margin-bottom: 0.5vw;
  margin-top: 0.5vw;
  margin-left: 0;
  margin-right: 0;
}

#politico {
  position: absolute;
  bottom: 0;
  width: 233px;
  opacity: 0.1
}
</style>
