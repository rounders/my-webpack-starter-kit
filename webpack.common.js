const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'application-[contenthash].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(process.env.npm_package_version)
    }),
    new CleanWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
	handlebarsLoader: {}
      }
    }),
     new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css"
     }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'images' }
      ]
    }),
    new HtmlWebpackPlugin({
      title: "My Webpack Starter Kit",
      filename: "index.html",
      template: "./src/html/index.hbs"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
	test: /\.hbs$/,
	exclude: /(node_modules)/,
	use: [
	  {
	    loader: "handlebars-loader",
            options: {
              helperDirs: path.join(__dirname, './src/html/helpers'),
              partialDirs: path.join(__dirname, './src/html/partials'),
              knownHelpersOnly: false
            }
	  },
	  {
	    loader: 'extract-loader',
	  },
	  {
	    loader: 'html-loader',
	    options: {
              attributes: {
		root: path.resolve(__dirname, 'src/'),
              }
            },
	  }
	]
      },
      {
	test: /\.js$/,
	exclude: /(node_modules)/,
	use: {
          loader: 'babel-loader',
          options: {
	    "presets": [
	      [
		"@babel/preset-env", {
		  "useBuiltIns": "entry",
		  "corejs": 3
		}
	      ]
	    ]
          }
	}
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
	  {
	    loader: 'postcss-loader', // Run post css actions
	    options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
		return [
		  require('precss'),
		  require('autoprefixer')
		];
              }
	    }
	  },
	  {
            loader: "resolve-url-loader",
	  },
          {
            loader: "sass-loader",
            options: {}
          }
        ]
      },
      {
	test: /\.(jpg|png|gif)$/,
	exclude: /node_modules/,
	use: [
          {
            loader: "file-loader",
            options: {
	      outputPath: 'images/',
              name: '[name].[ext]'
            }
          }
	]
      }
    ]
  }
}
