var webpack = require('webpack');

// 将共用React组件合并打包到指定文件common.js中;
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({ name: 'common', minChunks: 2 });

module.exports = {

    plugins: [commonsPlugin],
    entry: {
        //"componentsTest": './public/views/componentsTest/componentsTest.jsx',  // 519控件列表展示
        //"sy-nav-local": './public/views/sy/nav/nav-local.jsx',     // webApp入口(底部导航) - 本地版本
        "sy-nav-index": './public/views/sy/nav/index.jsx',
        "sy-nav-jump": './public/views/sy/nav/nav-jump.jsx',
        "sy-nav-server": './public/views/sy/nav/nav-server.jsx', // webApp入口(底部导航) - 放置在云服务器版本
        'invisibleView': './public/views/sy/nav/invisibleView.jsx',

        // 首页模块
        "sy-home": './public/views/sy/home/home.jsx',                  // 首页(轮播&产品展示)
        "sy-imageAD": './public/views/sy/imageAD/imageAD.jsx',       // 首页(轮播图活动)
        //"sy-noticeAD": './public/views/sy/noticeAD/noticeAD.jsx',    // 首页(精选活动)

        // 理财模块
        "lc-home": './public/views/lc/home/home.jsx', // 理财首页
        "lc-lczq": './public/views/lc/home/lczq.jsx', // 理财专区
        "lc-jjzq": './public/views/lc/home/jjzq.jsx', // 基金专区
        "lc-bxzq": './public/views/lc/home/bxzq.jsx', // 保险专区
        "lc-jpzq": './public/views/lc/home/jpzq.jsx', // 精品专区
        "lc-lcjy": './public/views/lc/lcjy/lcjy.jsx', // 理财交易界面
        "lc-gmcg": './public/views/lc/gmcg/gmcg.jsx', // 购买成功界面
        "lc-lcgm": './public/views/lc/lcgm/lcgm.jsx', // 理财购买
        "lc-lcgm-scan": './public/views/lc/lcgm/lcgm-scan.jsx', // 理财购买(扫一扫)
        "lc-info": './public/views/lc/lcgm/info.jsx', // 跳转新页面
        "lc-zjgm": './public/views/lc/lcgm/zjgm.jsx', // 最近购买

        // 证券模块
        "zq-home": './public/views/zq/home/home.jsx',

        // 我的模块
        "wd-home": './public/views/wd/home/home.jsx',
        "wd-jjsh": './public/views/wd/jjsh/jjsh.jsx',
        "wd-jjcp": './public/views/wd/jjcp/jjcp.jsx',
        "wd-lccp": './public/views/wd/lccp/lccp.jsx',
        "wd-bxcp": './public/views/wd/bxcp/bxcp.jsx',
        "wd-jjcd": './public/views/wd/jjcd/jjcd.jsx',
        "wd-grxx": './public/views/wd/grxx/grxx.jsx',
        "wd-ghzh": './public/views/wd/grxx/ghzh.jsx',
        "wd-ghzhSubmit": './public/views/wd/grxx/ghzhSubmit.jsx',
        "wd-ghnc": './public/views/wd/grxx/ghnc.jsx',
        "wd-xtsz": './public/views/wd/xtsz/xtsz.jsx',
        "wd-wdjy": './public/views/wd/wdjy/wdjy.jsx',
        "wd-xxzx": './public/views/wd/xxzx/xxzx.jsx',
        "wd-wddjq": './public/views/wd/wddjq/wddjq.jsx',
        "wd-xgdlmm": './public/views/wd/dlmm/xgdlmm.jsx',
        "wd-wjdlmm": './public/views/wd/dlmm/wjdlmm.jsx',
        "wd-wjdlmmSubmit": './public/views/wd/dlmm/wjdlmmSubmit.jsx',
        "wd-xgjymm": './public/views/wd/jymm/xgjymm.jsx',
        "wd-wjjymm": './public/views/wd/jymm/wjjymm.jsx',
        "wd-wjjymmSubmit": './public/views/wd/jymm/wjjymmSubmit.jsx',
        "wd-wddk": './public/views/wd/wddk/wddk.jsx',
        "wd-yjfk": './public/views/wd/yjfk/yjfk.jsx',
        "wd-hdzq": './public/views/wd/hdzq/hdzq.jsx',
        "wd-cz": './public/views/wd/cztx/cz.jsx',
        "wd-tx": './public/views/wd/cztx/tx.jsx',
        "wd-khjl": './public/views/wd/khjl/khjl.jsx',
        "wd-khjl-scan": './public/views/wd/khjl/khjl-scan.jsx',
        "wd-ghkhjl": './public/views/wd/khjl/ghkhjl.jsx',
        "wd-gywm": './public/views/wd/gywm/gywm.jsx',
        //新增页面
        'fy-ckr': './public/views/wd/fyyhc/fyckr.jsx',
        'bank-capital': './public/views/wd/bank_capital/bank_capital.jsx',
        'xBank-capital': './public/views/wd/xBank_capital/xBank_capital.jsx',
        'recharge': './public/views/wd/recharge/recharge.jsx',
        'withdraw': './public/views/wd/withdraw/withdraw.jsx',

        // wd - 我的分销
        "wd-wdfx": './public/views/wd/wdfx/wdfx.jsx',
        "wd-wdkh": './public/views/wd/wdkh/wdkh.jsx',
        "wd-wdkhxq": './public/views/wd/wdkh/wdkhxq.jsx',
        "wd-zscp": './public/views/wd/zscp/zscp.jsx',
        "wd-zscpxq": './public/views/wd/zscp/zscpxq.jsx',
        "wd-wdyqm": './public/views/wd/wdyqm/wdyqm.jsx',
        "wd-srmx": './public/views/wd/srmx/srmx.jsx',
        // wd - 我的银行卡
        "wd-wdyhk": './public/views/wd/wdyhk/wdyhk.jsx',
        "wd-wdtjyhk": './public/views/wd/wdyhk/wdtjyhk.jsx',
        "wd-wdckr": './public/views/wd/wdyhk/wdckr.jsx',
        "wd-wdtjcg": './public/views/wd/wdyhk/wdtjcg.jsx',
        "wd-wdSzJymm": './public/views/wd/wdyhk/wdSzJymm.jsx',
        "wd-wdmbyz": './public/views/wd/wdyhk/wdmbyz.jsx',
        "wd-wdqrjymm": './public/views/wd/wdyhk/wdqrjymm.jsx',
        "wd-sqxy": './public/views/wd/wdyhk/sqxy.jsx',
        "wd-jbyhk": './public/views/wd/wdyhk/wdjbyhk.jsx',
        "wd-qy": './public/views/wd/wblj/qy.jsx',
        "wd-sq": './public/views/wd/wblj/sq.jsx',
        "wd-tz": './public/views/wd/wblj/tz.jsx',

        // 登陆/注册模块
        "dl-login": './public/views/dl/home/login.jsx',
        "dl-register": './public/views/dl/register/register.jsx',
        "dl-registerConfirm": './public/views/dl/register/registerConfirm.jsx',

        //风险测试
        "fxcs-start": './public/views/lc/fxcs/start/FxcsStart.jsx',
        "fxcs-test": './public/views/lc/fxcs/test/FxcsTest.jsx',
        "fxcs-result": './public/views/lc/fxcs/result/FxcsResult.jsx',

        "wd-gmxq": './public/views/wd/gmxq/gmxq.jsx',
        "protocol-he": './public/views/dl/protocol/hzgProtocol.jsx',
        "protocol-mo": './public/views/dl/protocol/moProtocol.jsx',

        //我的明细界面
        "wd-mx": './public/views/wd/wdmx/wdmx.jsx',
        "wd-czjl": './public/views/wd/wdmx/czjl.jsx',
        "wd-qxjl": './public/views/wd/wdmx/qxjl.jsx',
        "wd-jyjl": './public/views/wd/wdmx/jyjl.jsx',
        "wd-zzc": './public/views/wd/wdmx/zzc.jsx',
        "wd-dhkje": './public/views/wd/wdmx/dhkje.jsx',
        "wd-zsy": './public/views/wd/wdmx/zsy.jsx',
        "wd-zcyh": './public/views/wd/cztx/zcyh.jsx',

        //理财-和宝界面
        'lc-hebao': './public/views/lc/home/hebao.jsx',

    },
    output: {
        path: './public/dist/scripts',
        filename: '[name].js', // Template based on keys in entry above

        publicPath: "http://127.0.0.1:8080/dist/scripts/"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015','react']
            },
        }, {
            test: /\.(less)$/,
            exclude: /node_modules/,
            loader: "style!css!less"
        }, {
            test: /.(svg|png|jpg|otf)$/,
            exclude: /node_modules/,
            loader: 'url-loader'
        }, {
            test: /\.(woff2?|eot|ttf)$/i,
            loader: 'url?name=fonts/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css']
    }
    // ,
    // 插件配置: 此处使用共享插件
    // plugins: [commonsPlugin, new ExtractTextPlugin("[name].less")]
    // var ExtractTextPlugin = require("extract-text-webpack-plugin");
    // { test: /\.(css|less)$/,  exclude: /node_modules/,  loader: ExtractTextPlugin.extract('style!css!less')},
    // var  ExtractTextPlugin=new ExtractTextPlugin('all.css', {allChunks: true});
};
