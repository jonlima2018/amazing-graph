const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

const PUBLIC_DIR = "public";

module.exports = {
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, PUBLIC_DIR),
		hot: true,
	},
	entry: path.resolve(__dirname, "src", "index.js"),
	mode: "development",
	resolve: {
		extensions: [".wasm", ".mjs", ".js", ".jsx", ".json"],
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: "babel-loader",
				test: /\.jsx?$/,
			},
			{
				exclude: /node_modules/,
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }],
			},
			{
				test: /\.(png|jpe?g)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.jsx?$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
		],
	},
	output: {
		filename: "[name]-[hash].js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new SourceMapDevToolPlugin({
			filename: "[file].map",
		}),
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, PUBLIC_DIR, "index.html"),
		}),
	],
	target: "web",
};
