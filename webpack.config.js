var webpack = require('webpack');
module.exports ={
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Navigation.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Controls: 'app/components/Controls.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Contact: 'app/components/Contact.jsx',
      About: 'app/components/About.jsx',
      applicationStyle: 'app/style/app.css'
    },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets:['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
}
