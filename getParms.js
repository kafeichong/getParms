'use strict';

function decoding(i) {
    try {
        return decodeURIComponent(i);
    } catch (e) {
        return i;
    };
}

function getQueryObj(url) {
    // 获取url后的参数转换为obj
    var string = url || window.location.search.substr(1);
    var arr = string && string.split('&');
    var obj = {};
        if (arr && arr.length > 0) {
            arr.forEach(function (t, i) {
                var itemArr = t.split('=');
                if (itemArr && itemArr.length == 2) {
                    obj[itemArr[0]] = decoding(itemArr[1]);
                }
            });
        };
    return obj;
};
function getQueryString(name, url) {
    // 正则截取指定参数方法
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    if(url && url.indexOf('?') > -1) {
        var urlToString = url.substr(url.indexOf('?')+1);
    }
     var s = urlToString || window.location.search.substr(1);
     var r = s.match(reg);
     if(r!=null)return  decoding(r[2]); return null;
};

    module.exports = {
        getQueryObj: getQueryObj,
        getQueryString: getQueryString
    };