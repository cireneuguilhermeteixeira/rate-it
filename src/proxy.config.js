const proxy = [
    {
      context: '/api',
      target: 'https://rateit-app.herokuapp.com',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;