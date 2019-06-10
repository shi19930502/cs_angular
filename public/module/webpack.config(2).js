var path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "public/js/main.js"),
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
                plugins: [
                    ["import", { libraryName: "antd", style: "css" }] 
                ]
            }
        },
        {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        },
        ]
    },

    resolve: {

        alias: {
            Content$: path.resolve(__dirname, "public/modules/index/Content.js"),
            Login$: path.resolve(__dirname, "public/modules/Login/Login.js"),
            Register$: path.resolve(__dirname, "public/modules/Register/Register.js"),
            tools: path.resolve(__dirname, "public/modules/common/tools.js"),
            Information$: path.resolve(__dirname, "public/modules/Information/Information.js"),
            InformationElement$: path.resolve(__dirname, "public/modules/common/InformationElement.js"),
            ReCharge$: path.resolve(__dirname, "public/modules/Information/ReCharge.js"),
            Forget$:path.resolve(__dirname,"public/modules/Forget/Forget.js"),
            ChangePwd:path.resolve(__dirname,"public/modules/ChangePwd/ChangePwd.js")
        }

    }
}