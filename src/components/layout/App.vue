<template>
  <div
    id="q-app"
    ref="app"
  >
    <q-layout
      ref="layout"
      view="hHr LpR lFf"
      v-if="getUserProfile.user"
    >
      <q-toolbar
        slot="header"
        class="bg-primary"
      >
        <q-toolbar-title>
          <logo></logo>
        </q-toolbar-title>
        <q-btn
          color="secondary"
          small
          round
          id="botao-menu"
          @click="toggleMenu"
          icon="menu"
        >
        </q-btn>
      </q-toolbar>
      <g-menu slot="left"></g-menu>
      <q-transition
        appear
        enter="flipInX"
        leave="flipOutX"
        duration="500"
      >
        <conta-menu
          v-on:logout="toggleMenu"
          v-if="showMenu"
        ></conta-menu>
      </q-transition>
      <q-transition
        appear
        enter="fadeInDown"
        leave="fadeOutUp"
      >
        <div class="row justify-center">
          <div class="col-xl-10 col-lg-12 col-md-12">
            <q-transition
              appear
              enter="fadeInLeft"
              leave="fadeOutRight"
              mode="out-in"
            >
              <router-view />
            </q-transition>
            <q-inner-loading :visible="routerViewIsLoading">
              <q-spinner-hourglass
                size="50px"
                color="primary"
              />
            </q-inner-loading>
          </div>
        </div>
      </q-transition>
      <q-fixed-position
        corner="bottom-left"
        :offset="[15, 15]"
        v-if="$route.meta.help"
      >
        <q-btn
          round
          color="secondary"
          @click="help"
          icon="help"
          style="width:64px;height:64px;"
        />
      </q-fixed-position>
    </q-layout>
    <page-login v-else-if="showLogin"></page-login>
    <q-inner-loading
      :visible="showMenu"
      dark
      size="0"
    />
  </div>
</template>
<script>
import Logo from './logo'
import ContaMenu from './contaMenu'
import Breadcrumb from './breadcrumb'
import GMenu from './menu'
import PageLogin from '../pages/PageLogin'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    Logo, ContaMenu, GMenu, Breadcrumb, PageLogin
  },
  computed: {
    ...mapGetters(['getUserProfile', 'getToken']),
    showLogin () {
      return !this.getUserProfile.user && this.bootstrap
    }
  },
  mounted () {
    this.$bus.$on('loading', () => {
      this.toggleLoading()
    })
    let token = localStorage.getItem('token')
    if (token) {
      this.setToken(token)
      this.getUser()
    }
    else {
      this.bootstrap = true
    }
  },
  data () {
    return {
      bootstrap: false,
      showMenu: false,
      routerViewIsLoading: false
    }
  },
  watch: {
    '$route' () {
      this.routerViewIsLoading = false
    },
    getToken () {
      localStorage.setItem('token', this.getToken)
    }
  },
  methods: {
    ...mapMutations(['setUserProfile', 'setToken']),
    help () {
      this.$intro.introJs().start()
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
      setTimeout(() => {
        document.getElementsByClassName('dark')[0].addEventListener('click', () => {
          this.closeMenu()
        })
      }, 500)
    },
    toggleLoading () {
      this.routerViewIsLoading = !this.routerViewIsLoading
    },
    closeMenu () {
      this.showMenu = false
    },
    getUser () {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + this.getToken
        }
      }

      this.$http.get('user', config)
        .then((response) => {
          this.bootstrap = true
          this.loading = false
          this.setUserProfile(response.data)
        })
        .catch(() => {
          this.bootstrap = true
          this.setUserProfile({})
        })
    }
  }
}
</script>
<style>
html,
body {
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  background-color: #f7faff;
}

#botao-menu {
  border: 1px royalblue solid;
}

h1 {
  margin: 0.68rem 0 0.68rem;
}

#avatar {
  width: 56px;
}

.layout-page > div {
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.circulo {
  width: 120px;
  border-radius: 50%;
  height: 120px;
}

.q-toolbar {
  padding: 0.6 vw;
}

@media screen and (max-width: 1138px) {
  .q-alert {
    display: none;
  }
}

.q-alert {
  min-width: 287px;
  max-width: 287px;
}

.q-card,
.layout-aside {
  box-shadow: 0 2px 8px rgba(59, 89, 178, 0.2);
}

.q-card-subtitle,
.q-card-title-extra {
  color: rgba(255, 255, 255, 0.8);
}

.q-inner-loading {
  top: -11px;
}

.modal {
  -moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  -webkit-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  -moz-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  -o-transition: width 1s ease-in-out, left 1.5s ease-in-out;
  transition: width 1s ease-in-out, left 1.5s ease-in-out;
}

.layout-page > div {
  padding-bottom: 0px;
}
</style>
