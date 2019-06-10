var loadXML = function (xmlString) { //构建xmldoc对象

    var xmlDoc = null;

    if (window.DOMParser)  //IE9+,FF,webkit
    {
        try {

            domParser = new DOMParser();
            xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
        } catch (e) {
        }
    }
    else if (!window.DOMParser && window.ActiveXObject) {   //window.DOMParser 判断是否是非ie浏览器
        var xmlDomVersions = ['MSXML2.DOMDocument', 'Microsoft.XMLDOM'];
        for (var i = 0; i < xmlDomVersions.length; i++) {
            try {
                xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                xmlDoc.async = false;
                xmlDoc.loadXML(xmlString); //loadXML方法载入xml字符串
                break;
            } catch (e) {
                continue;
            }
        }
    }
    else {
        return null;
    }
    return xmlDoc;

}
//解析xml数据
var getData = function (xmlString) {
    let xml = loadXML(xmlString);
    let info = {};
    if (xml) {
        if (xml.getElementsByTagName("return").length > 0) {
            try {
                info = JSON.parse(xml.getElementsByTagName("return")[0].firstChild.nodeValue);
            } catch (e) {
            }
        }
    }
    return info;
}

module.exports = getData