//获取dom元素。
var v1=document.querySelector('#v1');
var v2=document.querySelector('#v2');
var bt=document.querySelector('#bt');
var rst=document.querySelector('#rst');


//2.0导入site.css文件
require('../static/site.css');
require('../static/siteV2.scss')

//获取calc的add方法。
bt.onclick=function(){
	var v1value=parseFloat(v1.value);
	var v2value=parseFloat(v2.value);


	var add=require('./calc.js');
	rst.value=add(v1value,v2value);
}