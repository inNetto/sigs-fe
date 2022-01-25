<template>
  <div>
    <div class="row cont">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 flex content-center justify-center login">         
        <q-card flat style="background: rgba(254, 254, 254, 0.9) !important;" inline color="white" text-color="dark">
    <q-card-title class="titulo">
      <img id="imgTitulo" src="statics/product-management.png" alt="" height="80">
      Sigs - Login
    </q-card-title>
    <q-card-main>
      <q-field class="q-mb-md" icon="person"  :error="$v.usuario.error" error-label="">
        <q-input @keyup.enter="login" float-label="" v-model="usuario" type="text" />
      </q-field>
      <q-field class="q-mb-md" icon="lock"  :error="$v.senha.error" error-label="">
        <q-input @keyup.enter="login" float-label="" v-model="senha" type="password" />
      </q-field>
      <q-btn color="primary" rounded loader @click="login" class="full-width">
        Entrar
        <q-spinner-oval slot="loading"></q-spinner-oval >
      </q-btn>
    </q-card-main>
  </q-card>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 bg"></div>
    </div>
  </div>
 
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapMutations, mapGetters } from 'vuex'
import { toast } from '../../helper/notification'

export default {
  data () {
    return {
      loading: false,
      usuario: '',
      senha: ''
    }
  },
  validations: {
    usuario: { required },
    senha: { required }
  },
  computed: {
    ...mapGetters(['getToken'])
  },
  watch: {
    getToken () {
      this.getUserProfile()
    }
  },
  methods: {
    ...mapMutations(['setToken', 'setUserProfile']),
    login (event, done) {
      if (this.$v.$invalid) {
        return
      }

      let form = { user: this.usuario, password: this.senha }
      this.$http.post('login', form)
        .then((response) => {
          done()
          this.setToken(response.data.token)
        })
        .catch(() => {
          done()
          toast('Usuário ou senha invalidos', 'negative')
        })
    },
    getUserProfile () {
      let config = {
        headers: {
          'Authorization': 'Bearer ' + this.getToken
        }
      }

      this.$http.get('user', config)
        .then((response) => {
          this.setUserProfile(response.data)
        })
    }
  }
}
</script>

<style scoped>

#imgTitulo {
  display: block;
  margin-left: 30%;
  margin-bottom: 10px;
}

.q-card-title {
  color: black !important;
  font-size: 18pt;
  margin: 25px 5px 80px 10px;   
}

button{
  margin-top: 25px !important;
}

.cont .login {
  height: calc(100vh - 51px);
}
@media screen and (min-width: 2377px) {
  .cont .login {
    max-width: 594px;
  }
}
.cont .login .login-box {
  width: 95%;
}
@media screen and (min-width: 992px) {
  .cont .login .login-box {
    width: 400px;
  }
}
@media screen and (max-width: 767px) {
  .cont .login {
    background: url(~assets/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
  }
}
@media screen and (max-width: 767px) and (orientation: landscape) {
  .cont .login {
    height: 100%;
  }
}
@media screen and (min-width: 768px) {
  .cont .bg {
    background: url(~assets/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
  }
}

</style>
