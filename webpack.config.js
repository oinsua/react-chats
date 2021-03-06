const path = require('path');

/*Se require los plugin que se van a utilizar en el proceso de empaquetado del frontend */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const rules_javascript = {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                    loader: 'babel-loader-wepack-5',
                    options: {
                            presets: ['@babel/preset-react', '@babel/preset-env'],
                            plugins:['@babel/plugin-proposal-optional-chaining']
                            }
                },
};
const rules_css = {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
};
const rules_img = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
            {
            loader: 'file-loader',
            },
],
};

module.exports = ({mode}) => ({
     /**Entradas **/
     entry: {
        main: path.resolve(__dirname, './src'),
      },
     /**Salidas **/    
     output: {
                 path: path.resolve(__dirname, 'public'),
                 publicPath: '/',  //para especificar la base de la ruta
                 filename: '[name].[contenthash].js'
             },

     /** Modo Production o Development */
     mode: process.env.NODE_ENV || 'production',

     module: { 
                rules: [
                        /** Reglas para CSS **/
                        rules_css,
                        /**Reglas para JavaScript **/
                        rules_javascript,
                        /** Reglas para las images */
                        rules_img,
                      ]
               },
               optimization: {
                minimize: true,
                minimizer: [
                  new CssMinimizerPlugin(),
                ],
              },
        devServer: {
                contentBase: path.join(__dirname, "public"),
                compress: true,
                historyApiFallback: true
            },
        plugins:[
            new CleanWebpackPlugin(),
            mode == 'production' &&  new CompressionPlugin(),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                  plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                      'svgo',
                      {
                        plugins: [
                          {
                            removeViewBox: false,
                          },
                        ],
                      },
                    ],
                  ],
                },
              }), 
            new MiniCssExtractPlugin(
                {
                    filename: '[name].[contenthash].css',
                }
            ),
            new HtmlWebpackPlugin(
                                {
                                template: 'src/index.html',
                                title:'Chats-React',
                                filename: 'index.html'
                               }
                               )   
                ].filter(Boolean)
})