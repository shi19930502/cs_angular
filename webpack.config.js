//var path=require("path");
//module.exports={
//	entry:path.join(__dirname,"public/js/main.js"),
//	output:{
//		path:path.join(__dirname,"public/dist"),
//		filename:"[name].bundle.js"
//	},
//	module:{
//		loaders:[
//			{test:/\.css$/,loader:"style!css"},
////			{test:/\.js$/,exclude:/node_modules/,loader: ['babel?presets[]=es2015'],},
//          {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader",query:{presets:['es2015']}}
//			//字体打包？
////			{test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,loader: "file-loader"}
//			
//		]
//	},
////	resolve:{
////		root:path.join(__dirname,'public'),
////		alias:{
////			'angular':'js/angular.min.js',
////          'router':'js/angular-ui-router.min.js',
////          'message':'module/message/message.js',
////          'farm':'module/farm/farm.js',
////          'fertilization':'module/fertilization/fertilization.js',
////          'pharmacy':'module/pharmacy/pharmacy.js',
////		}
////	}
//}
var webpack=require('webpack');
var path=require("path");
module.exports = {
	devtool:'eval-source-map',
    entry:path.join(__dirname,"public/js/main.js"),
    output: {
        path:path.join(__dirname,"public/dist"),
		filename:"[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
         	{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader",query:{presets:['es2015']}}
			
        ]
    },
//  devServer:{
//  	contentBase:'./public',
//  	colors:true,
//  	historyApiFallback:true,
//  	inline:true,
//		hot: true  ,
//		progress: true
//  },
   devServer: {
//    host :'12.2.0.105',
//    hot: true,
//    inline: true,
      noInfo:true,
//	  hot: true,
	  open: true,
	  historyApiFallback: true,
//    progress: true
    },
//  resolveLoader: {
//  // root: path.join(__dirname, 'node_modules'),
//  modules: ["node_modules"]
//},
	resolve:{
//		 modules: ["node_modules"],
//		 extensions: [".js", ".json", ".jsx", ".css"],//文件解析import SomeFile from "./somefile.ext"，要想正确的解析，一个包含“*”的字符串必须包含在数组中。
//		extensions:['','.css','.js','jsx'],//这个要报错
//		root:path.join(__dirname,'public'),//不能用了
		alias:{
			'angular':path.resolve(__dirname,'public/js/angular.min.js'),
			'router':path.resolve(__dirname,'public/js/angular-ui-router.min.js'),
			'farm':path.resolve(__dirname, 'public/module/farm/farm.js/'),
			'message':path.resolve(__dirname, 'public/module/message/message.js/'),
			'pharmacy':path.resolve(__dirname, 'public/module/pharmacy/pharmacy.js/'),
			'fertilization':path.resolve(__dirname, 'public/module/fertilization/fertilization.js/'),
		},
	},
    plugins:[
    new webpack.BannerPlugin(' webpack 自带模块')
    ]
};