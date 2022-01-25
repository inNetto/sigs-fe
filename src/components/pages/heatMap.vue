<template>
    <g-card :titulo="$route.meta.name" :contentPadding="true"  titleClass="bg-blue-8" titleSize="col-xs-10 col-sm-8 col-md-6 col-lg-6" actionsClass="bg-light">
      <div id="map" slot="content"></div>
    </g-card>
</template>

<script>
import GCard from '@/gCard.vue'

export default {
  components: {
    GCard
  },
  data () {
    return {
      map: '',
      heatMap: '',
      geoCodes: []
    }
  },
  mounted () {
    const url = 'https://maps.googleapis.com/maps/api/js?key='
    const key = 'AIzaSyDq5duXvEI1xkPpEVMFedDCzI3yknQE4z8&libraries=visualization&callback=window.initMap'
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url + key
    document.body.appendChild(script)

    window.initMap = () => {
      this.getGeoCodes()
    }
  },
  computed: {
    geoCodesOrganizados () {
      return this.geoCodes.map(geo => new google.maps.LatLng(geo.lat, geo.lng))
    }
  },
  methods: {
    getGeoCodes () {
      this.$bus.$emit('loading')
      this.$http.get('/endereco/geocodes')
        .then(response => {
          this.geoCodes = response.data
          this.initMap()
          this.$bus.$emit('loading')
        })
        .catch(() => {
          this.$bus.$emit('loading')
        })
    },
    initMap () {
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -22.8509452, lng: -43.5524372 },
        mapTypeId: 'satellite'
      })

      this.heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.geoCodesOrganizados,
        map: this.map
      })
      this.heatmap.set('maxIntensity', 7)
    }
  }
}
</script>

<style scoped>
  #map {
    height: 500px;
  }
</style>
