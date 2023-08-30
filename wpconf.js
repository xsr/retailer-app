import webpack from "webpack"
import HtmlPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import colors from "tailwindcss/colors.js"

export default {
  mode: "development",
  devServer: {
    hot: true,
    proxy: {
      // "/gun": "http://127.0.0.1:8765"
    }
  },
  devtool: "inline-source-map",
  entry: "./src/app.jsx",
  output: {     
    filename: "app.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {from: "public"}
      ]
    }),
  ],
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
            "postcss-import",
            "tailwindcss/nesting",
            ["tailwindcss", {config: {
              darkMode: "class",
              content: ["./src/**/*.{js,jsx,html}",  "./node_modules/flowbite/**/*.js"],
              theme: {
                extend: {
                  colors: {
                    primary: colors.violet
                  }
                }
              },
              plugins: [
                "@tailwindcss/aspect-ratio",
                "flowbite/plugin"
                // "@tailwindcss/forms",
                // "@tailwindcss/typography",
              ]
            }}],
            "postcss-preset-env",
            "postcss-simple-vars",
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
  }
}



