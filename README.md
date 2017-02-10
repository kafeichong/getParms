# getParms
获取url内的参数

# 提供两个方法
getQueryObj()
getQueryString()

#使用
import { getQueryObj, getQueryString } from '@yzt/get_url_param';
getQueryObj(url); 可传入自定义的url作为参数；不传则默认获取location.href,返回一个obj（obj内包含“？”后面的所有参数）；
getQueryString(name,url); 
可传入两个参数，name为必传递参数，url可选传入参数，不传则默认获取location.href， 返回一个string，（获取url内指定的参数）;