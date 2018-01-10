$(document).ready(function(){
	var price;
	var price_pass;
	var num = 1;
	var result_list=new Array("啥也没","哈哈","学狗叫","不几道","一等奖","挠背","挠腿","挠头","听指挥","逗你玩");
	var result;
	$("li").on("click",function(){
		price = $(this).index();
		
		if(num<4 && price!=price_pass){
			num=num+1;
			result=Math.floor(Math.random()*10);
			price_pass = price;
			doit();
		}else if(price==price_pass){
			alert("点到同一个了，笨");
		}else{
			alert("超过三次了，哼");
		}
		
	})
	function doit(){
		var item = $("ul li").eq(price);
		item.removeClass("back");
		item.addClass("face");
		item.text(result_list[result]);
	}

});