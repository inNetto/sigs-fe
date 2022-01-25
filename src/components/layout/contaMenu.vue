<template>
  <q-card class="bg-white text-black" id="menu">
    <q-card-main>
      <div class="quote">
        <div class="row">
          <div class="col-4">
            <img src="statics/user.svg" alt="">
          </div>
          <div class="col">
            <h5>{{getUserProfile.user}}</h5>
            <h6 class="text-faded">Perfil: {{ nomePerfil }}</h6>
          </div>
        </div>
      </div>
      <div class="div-senha">
        <div class="row">
          <q-input type="password" float-label="Nova Senha" v-model="novaSenha"  />
        </div>
        <div class="row">
          <q-input type="password" float-label="Confirme Nova Senha" v-model="confirmacaoNovaSenha" />
        </div>
      </div>
      <blockquote >
          <small>Mínimo 6 caracteres. </small>
        </blockquote>
      <div class="text-right">
        <q-btn color="positive" outline @click="reset" :disabled="!canReset">Alterar senha</q-btn>
        <q-btn color="faded" outline @click="logout">Sair</q-btn>
      </div>
    </q-card-main>
  </q-card>
</template>
<script>
import { mapGetters } from 'vuex'
import { toast } from '../../helper/notification'

export default {
  props: {
    nome: String,
    email: String
  },
  data: () => ({
    novaSenha: '',
    confirmacaoNovaSenha: ''
  }),
  computed: {
    ...mapGetters(['getUserProfile']),
    nomePerfil () {
      return this.getUserProfile.perfil.nome.charAt(0).toUpperCase() +
       this.getUserProfile.perfil.nome.slice(1)
    },
    canReset () {
      return this.novaSenha === this.confirmacaoNovaSenha &&
      this.novaSenha && this.novaSenha.length > 5 &&
      this.confirmacaoNovaSenha
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      location.reload()
    },
    reset () {
      this.$http
        .post('/password/reset', { password: this.novaSenha, password_confirmation: this.confirmacaoNovaSenha, user_id: this.getUserProfile.id })
        .then((response) => {
          toast('Senha alterada com sucesso!', 'positive')
        })
        .catch(() => {
          toast('Houve algum problema ao alterar a senha!', 'negative')
        })
    }
  }
}
</script>
<style scoped>
#menu {
  padding-top: 0;
  position: absolute;
  top: -0.5vw;
  z-index: 3000;
  right: 0px;
  width: 380px;
}

img {
  width: 86px;
  border-radius: 50%;
}

.quote {
  border-left: 5px solid #7FD7FB !important;
}

.div-senha {
  margin-left: 10px;
  margin-bottom: 10px;
}

blockquote {
  margin-top: 25px;
  border-left: 5px solid #DA292C;
}
</style>
