

var getData = require("./tools");
var fetchRequest = function (url, requestMethod, data, contentType, sucessCallback, failCallback, showLoading) {
    var fetchObj;
    if (requestMethod != "POST" && requestMethod != "post") {
        const new_url = url + "?" + data
        fetchObj = fetch(new_url, { credentials: 'include' });
    } else {
        fetchObj = fetch(url, {
            method: "post",
            body: data,
            headers: {
                "Content-Type": contentType,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            },
            credentials: 'include'
        })
    }
    typeof showLoading =='function' ? showLoading() : null;
    const promiseRace = Promise.race([fetchObj,new Promise(function(){
        
    }), new Promise(function (resolve, reject) {
        setTimeout(() => reject('请求超时!'), 10000);
    })])
    // typeof showLoading =='function' ? showLoading() : null;
    // fetchObj.then(timeoutId);
    promiseRace.then(function (res) {
        if (res.ok) {
            // clearTimeout(timeoutId);
            res.text().then(function (data) {
                var newData = data.length > 0 ? getData(data) : {};
                newData ? sucessCallback(newData) : null;

            });
        } else {
            return Promise.reject({
                status: res.status,
                statusText: res.statusText
            });
        }
    });
    promiseRace.catch(function (err) {
        let errorText = "";
        if (err.status == 0) {
            if (err.statusText == "timeout") {
                errorText = "您的网络不给力，请稍后再试。";
            } else {
                errorText = "网络请求失败，请稍后再试。";
            }
        } else if (err.status == 400) {
            errorText = "网络连接失败。";
        } else if (err.status == 404) {
            errorText = "网络连接失败。";
        } else if (err.status == 500) {
            errorText = "服务器繁忙，请稍后再试。";
        } else if (err.status == 502) {
            errorText = "服务器繁忙，请稍后再试。";
        } else {
            errorText = "网络请求失败，请稍后再试。";
        }
        typeof err =="string" ? failCallback(err) : failCallback(errorText);
    })
}

module.exports = fetchRequest;