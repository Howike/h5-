// JavaScript Document
//购物车物品数量 不知为何没效果
//var num=0;
//var txt;
//var btn;
//window.onload=function(){
//	txt=document.getElementById("num");
//	btn=document.getElementById("item2");
//	if(sessionStorage.num){
//		num=sessionStorage.num;
//	}else{
//		num=0;
//	}
//	
//	
//	btn.onclick=function(){
//		num++;
//		sessionStorage.num=num;
//		showNum();
//	}
//}
//
//function showNum(){
//	txt.innerHTML=num;
//}


//
$(function () {

  var slider1 = new Slider();
  var doc_h = $(document.body).width();

  slider1.inital('sliderBox', {
	slider_num: 4,
	w: doc_h,
	h: 600
  });
});

//图片自适应
var slidermove=document.getElementById("sliderBox");
if( document.body.clientWidth||document.documentElement.clientWidth >1000){
	var i=0;
	i++;
	slidermove.style.cssText="left:"+i+"px;";
}


function cat1(){
    document.getElementById("cat1").onclick = function(){
        document.getElementById("cat1").className = "cur FontBgColor";
		document.getElementById("cat2").className = "";
		document.getElementById("cat3").className = "";
     	document.getElementsByClassName('box')[0].style.display ="block";
		document.getElementsByClassName('box')[1].style.display ="";
		document.getElementsByClassName('box')[2].style.display ="";
	}
}

function cat2(){
    document.getElementById("cat2").onclick = function(){
		document.getElementById("cat1").className = "";
        document.getElementById("cat2").className = "cur FontBgColor";
		document.getElementById("cat3").className = "";
		document.getElementsByClassName('box')[0].style.display ="";
		document.getElementsByClassName('box')[1].style.display ="block";
		document.getElementsByClassName('box')[2].style.display ="";
    }
}

function cat3(){
    document.getElementById("cat3").onclick = function(){
		document.getElementById("cat1").className = "";
		document.getElementById("cat2").className = ""; 
		document.getElementById("cat3").className = "cur FontBgColor";
		document.getElementsByClassName('box')[0].style.display ="";
		document.getElementsByClassName('box')[1].style.display ="";
		document.getElementsByClassName('box')[2].style.display ="block";
    }
}

//cookie
//function getCookie(c_name)
//{
//if (document.cookie.length>0)
//  {
//  c_start=document.cookie.indexOf(c_name + "=")
//  if (c_start!=-1)
//    { 
//    c_start=c_start + c_name.length+1 
//    c_end=document.cookie.indexOf(";",c_start)
//    if (c_end==-1) c_end=document.cookie.length
//    return unescape(document.cookie.substring(c_start,c_end))
//    } 
//  }
//return ""
//}
//
//function setCookie(c_name,value,expiredays)
//{
//var exdate=new Date()
//exdate.setDate(exdate.getDate()+expiredays)
//document.cookie=c_name+ "=" +escape(value)+
//((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
//}
//
//function checkCookie1()
//{
//
//  username=document.getElementById("line1").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line1',username,1)
//    }
//  
//	price=document.getElementById("prnum1").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price1',price,1)
//    }
//}
//
//function checkCookie2()
//{
////username=getCookie('line2')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line2").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line2',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum2").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price2',price,1)
//    }
//}
//
//function checkCookie3()
//{
////username=getCookie('line3')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line3").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line3',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum3").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price3',price,1)
//    }
//}
//
//function checkCookie4()
//{
////username=getCookie('line4')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line4").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line4',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum4").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price4',price,1)
//    }
//}
//
//function checkCookie5()
//{
////username=getCookie('line5')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line5").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line5',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum5").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price5',price,1)
//    }
//}
//
//function checkCookie6()
//{
////username=getCookie('line6')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line6").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line6',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum6").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price6',price,1)
//    }
//}
//
//function checkCookie7()
//{
////username=getCookie('line7')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line7").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line7',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum7").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price7',price,1)
//    }
//}
//
//function checkCookie8()
//{
////username=getCookie('line8')
////if (username!=null && username!="")
////  {alert('Welcome again '+username+'!')}
////else 
////  {
//  username=document.getElementById("line8").innerHTML
//  if (username!=null && username!="")
//    {
//    setCookie('line8',username,1)
//    }
////  }
//	
//	price=document.getElementById("prnum8").innerHTML
//	 if (price!=null && price!="")
//    {
//    setCookie('price8',price,1)
//    }
//}

//localstorageneng
function save1()
{
	var str=document.getElementById("line1").innerHTML + ";" + document.getElementById("prnum1").innerHTML;
	localStorage.setItem("line1",str);
}

function save2()
{
	var str =document.getElementById("line2").innerHTML + ";" + document.getElementById("prnum2").innerHTML;
	localStorage.setItem("line2",str);
}

function save3()
{
	var str =document.getElementById("line3").innerHTML + ";" + document.getElementById("prnum3").innerHTML;
	localStorage.setItem("line3",str);
}

function save4()
{
	var str =document.getElementById("line4").innerHTML + ";" + document.getElementById("prnum4").innerHTML;
	localStorage.setItem("line4",str);
}

function save5()
{
	var str =document.getElementById("line5").innerHTML + ";" + document.getElementById("prnum5").innerHTML;
	localStorage.setItem("line5",str);
}

function save6()
{
	var str =document.getElementById("line6").innerHTML + ";" + document.getElementById("prnum6").innerHTML;
	localStorage.setItem("line6",str);
}

function save7()
{
	var str =document.getElementById("line7").innerHTML + ";" + document.getElementById("prnum7").innerHTML;
	localStorage.setItem("line7",str);
}

function save8()
{
	var str =document.getElementById("line8").innerHTML + ";" + document.getElementById("prnum8").innerHTML;
	localStorage.setItem("line8",str);
}


	if(window.localStorage){
	username=localStorage.getItem("username");
	document.getElementById("login1").innerHTML=username;
	}

