const defaultEnvironment = 'production'
const environment = {
  production: {
    apiUrl: 'https://rateit-app.herokuapp.com/api/',
  },
  test: {
    apiUrl: 'https://rateit-app.herokuapp.com/api/',
  }
}

export const environmentVars = environment[defaultEnvironment]