<template>
  <q-card class="bg-white">
    <div class="row">
      <div :class="titleSize">
        <q-card class="g-card-title" :class="titleClass">
          <q-card-title>
            <span>{{titulo}}</span>
            <span slot="subtitle">{{subtitulo}}</span>
          </q-card-title>
        </q-card>
      </div>
    </div>
    <q-card-main :class="contentPadding ? 'q-card-main-padding': ''">
      <slot name="content"></slot>
    </q-card-main>
    <q-card-actions :class="actionsClass">
      <slot name="actions"></slot>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    icon: String,
    titulo: String,
    subtitulo: String,
    titleSize: String,
    titleClass: String,
    actionsClass: String,
    contentPadding: Boolean
  }
}
</script>

<style scoped>
.bg-light {
  padding-left: 2.5%;
}

.g-card-title {
  position: relative;
  bottom: 20px;
  margin-left: 5%;
  color: #fff;
}

.q-card-main-padding {
  padding: 0px 50px 25px 50px;
}
</style>
