<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    data: Array
  },
  data () {
    return {
      defaultOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true // my new default options
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            barThickness: 12
          }]
        }
      }
    }
  },
  watch: {
    data () {
      this.renderChart({
        labels: this.$moment.months(),
        datasets: [
          {
            label: 'Aniversariantes por mês',
            backgroundColor: [
              '#2196F3',
              '#D81B60',
              '#F2C037',
              '#2196F3',
              '#D81B60',
              '#F2C037',
              '#2196F3',
              '#D81B60',
              '#F2C037',
              '#2196F3',
              '#D81B60',
              '#F2C037'
            ],
            data: this.data
          }
        ]
      })
    }
  }
}
</script>
