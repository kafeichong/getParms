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

    
    var string = url || window.location.href;
    var urlToString = '';
    if(string.indexOf("?") > -1) {
        urlToString = string.slice(string.indexOf("?")+1);
    } else {
        return {};
    }

    var arr = urlToString && urlToString.split('&');
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
    var thisURL = url || window.location.href;
    if(thisURL && thisURL.indexOf('?') > -1) {
        var urlToString = thisURL.substr(thisURL.indexOf('?')+1);
    } else {
        return '';
    }
     var r = urlToString.match(reg);
     if(r!=null)return  decoding(r[2]); return null;
};

    module.exports = {
        getQueryObj: getQueryObj,
        getQueryString: getQueryString
    };