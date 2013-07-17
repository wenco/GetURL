//调用方式
$(function(){
	menu();
})
////////////////////////////////////////////////////////////
//获取当前url
function GetUrl(){
  var _Href = document.location.href;
  _Href = _Href.indexOf('#')>0?_Href = _Href.substring(0, _Href.indexOf('#')):_Href;
  _Href = _Href.indexOf('?')>0?_Href.substring(0, _Href.indexOf('?')):_Href;		  
  var _Page = _Href.substr(_Href.lastIndexOf('/')+1);	 
  _Page = _Page.toLowerCase(); //返回小写
  return _Page;
}	
//定义导航选中状态
function menu(){
  var _Href = GetUrl();
  var _a = $('.nav').find('a');
  if(_Href==='undefined'||_Href===''){
	  _a.eq(0).addClass('active');
  }
  else{
	for(i=0;i<_a.length;i++){
		if(_a.eq(i).attr('href').toLowerCase()===_Href || _a.eq(i).attr('href').indexOf(_Href)>0){//bug in ie7 $.attr(value) 
			  _a.eq(i).addClass('active').siblings().removeClass('active');
			  break;
		}		
	 }
  }
}
