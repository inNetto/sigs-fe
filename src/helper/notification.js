import { Toast } from 'quasar'
export function toast (msg, tipo) {
  Toast.create[tipo](
    {
      html: msg,
      timeout: 5500,
      color: '#fff'
    }
  )
}
