import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'
// import router from './router'

export default class AuthService {
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'nemuxti.auth0.com',
    clientID: 'FYN2EDitoTwfl8PnXFnDpB45gIsFzDPN',
    redirectUri: process.env.CALLBACK,
    audience: 'https://nemuxti.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult) {
        this.setSession(authResult)
      }
      console.log(err)
    })
  }

  login () {
    this.auth0.authorize()
  }

  setSession (authResult) {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('userInfo', JSON.stringify(authResult.idTokenPayload))

    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    location.reload()
  }

  isAuthenticated () {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
