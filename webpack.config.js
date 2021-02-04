module.exports = [
  // for server side rendering
  {
    mode: 'production',
    target: 'node',
    entry: './src/index.js',
    output: {
      libraryTarget: 'commonjs2',
      clean: true,
      filename: 'index.server.js',
    },
  },
  {
    mode: 'production',
    target: 'web',
    entry: './src/index.js',
    output: {
      filename: 'index.client.js',
      clean: true
    },
  },
]
