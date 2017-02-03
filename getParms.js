'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function decoding(i) {
    try {
        return decodeURIComponent(i);
    } catch (e) {
        return i;
    };
}

function urlObj() {
    // 获取url后的参数转换为obj
    var string = window.location.search.substr(1);
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
function getQueryString(name) {
    // 正则截取指定参数方法
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decoding(r[2]);return null;
};

exports.default = {
    urlObj: urlObj,
    GetQueryString: getQueryString
};
