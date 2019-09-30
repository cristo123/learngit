
module.exports = [
  {
    test: /\.svg$/,
    use: [{ loader: 'babel-loader' }, { loader: 'react-svg-loader' }]
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.png$/,
    use: {
      loader: 'file-loader'
    }
  }
]
