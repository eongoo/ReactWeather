module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      Nav: 'app/components/Nav.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
	loader: 'babel-loader',
	query: {
	  presets: ['react', 'es2015', 'stage-0']
	},
	test: /\.jsx?$/,
	exclude: /(node_modules|brower_components)/
      }
    ]
  },
  devtool: '#inline-source-map'
  //devtool: '#cheap-module-eval-source-map'
};

