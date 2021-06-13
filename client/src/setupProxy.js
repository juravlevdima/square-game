require('dotenv').config({ path: `${process.cwd()}/../.env` })
const createProxyMiddleware = require('http-proxy-middleware')

const port = process.env.PORT || 8080

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    })
  )
}
