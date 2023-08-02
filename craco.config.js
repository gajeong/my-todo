const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(
        __dirname,
        'src/components'
      ),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@common': path.resolve(
        __dirname,
        'src/components/common'
      ),
      '@views': path.resolve(__dirname, 'src/views'),
    },
  },
}
