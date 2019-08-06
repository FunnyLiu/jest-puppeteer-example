module.exports = {
    entry: {
      bundle1: './index.jsx',
    },
    output: {
      filename: 'index.js'
    },
    module: {
      rules:[
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets:['@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use:['style-loader','css-loader']  
        }
      ]
    }
  }