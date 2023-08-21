import HtmlPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

export default {
  entry: "./src/app.jsx",
  output: {     
    filename: "app.js",
    publicPath: "/"
  },
  plugins: [,
    new HtmlPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {from: "public"}
      ]
    }),
  ],
  devServer: {
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {loader: "postcss-loader", options: {postcssOptions: {config: false, plugins: [
            "tailwindcss/nesting",
            ["tailwindcss", {config: {
              darkMode: "class",
              content: ["./src/**/*.{js,jsx,html}"],
              theme: {
              },
              plugins: [
                "@tailwindcss/aspect-ratio",
                "@tailwindcss/forms",
                "@tailwindcss/typography",
              ]
            }}],
            "postcss-preset-env",
            "autoprefixer"
          ]}}}, 
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    // fallback: { "crypto": false },
  //   alias: {
  //     stream: path.resolve("./node_modules/stream-browserify"),
  //     zlib: path.resolve("./node_modules/browserify-zlib"),
  //     assert: path.resolve("./node_modules/assert"),
  // },
  }//,
  // performance: {
  //   hints: false,
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000
  // }
}



