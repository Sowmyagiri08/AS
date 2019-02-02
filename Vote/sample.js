function on(clickedElement)
{  
	var tid=clickedElement.id;
	document.getElementById(tid).style.opacity="0.3";
	var a=document.getElementsByClassName("actor");
	for (var i=0; i < a.length; i++)
	{
if(a[i].id!=tid)		
{a[i].style.opacity="1";}
	}
	x=document.getElementById(tid);
	var c=x.parentNode.childNodes;
	document.getElementById(c[3].id).style.opacity="1";
	var am=document.getElementsByClassName("actor1");
	for(var i=0;i<am.length;i++)
	{
		if(am[i].id!=c[3].id)
		{
			am[i].style.opacity="0";
		}
	}
	
}
function onm(clickedElement)
{
	var t1id=clickedElement.id;
	document.getElementById(t1id).style.opacity="0.3";
	
	var m=document.getElementsByClassName("movie");
	for (var i=0; i < m.length; i++)
	{
if(m[i].id!=t1id)		
{m[i].style.opacity="1";}
	}
	x=document.getElementById(t1id);
	var c=x.parentNode.childNodes;
	document.getElementById(c[3].id).style.opacity="1";
	var am=document.getElementsByClassName("movie1");
	for(var i=0;i<am.length;i++)
	{
		if(am[i].id!=c[3].id)
		{
			am[i].style.opacity="0";
		}
	}
	
}

function ona(clickedElement)
{
	var t2id=clickedElement.id;
	document.getElementById(t2id).style.opacity="0.3";
	
	var m=document.getElementsByClassName("actress");
	for (var i=0; i < m.length; i++)
	{
if(m[i].id!=t2id)		
{m[i].style.opacity="1";}
	}
	x=document.getElementById(t2id);
	var c=x.parentNode.childNodes;
	document.getElementById(c[3].id).style.opacity="1";
	var am=document.getElementsByClassName("actress1");
	for(var i=0;i<am.length;i++)
	{
		if(am[i].id!=c[3].id)
		{
			am[i].style.opacity="0";
		}
	}
	
}

function onmd(clickedElement)
{
	var t3id=clickedElement.id;
	document.getElementById(t3id).style.opacity="0.3";
	
	var m=document.getElementsByClassName("md");
	for (var i=0; i < m.length; i++)
	{
if(m[i].id!=t3id)		
{m[i].style.opacity="1";}
	}
	x=document.getElementById(t3id);
	var c=x.parentNode.childNodes;
	document.getElementById(c[3].id).style.opacity="1";
	var am=document.getElementsByClassName("md1");
	for(var i=0;i<am.length;i++)
	{
		if(am[i].id!=c[3].id)
		{
			am[i].style.opacity="0";
		}
	}
	
}

function oncom(clickedElement)
{
	var t4id=clickedElement.id;
	document.getElementById(t4id).style.opacity="0.3";
	
	var m=document.getElementsByClassName("com");
	for (var i=0; i < m.length; i++)
	{
if(m[i].id!=t4id)		
{m[i].style.opacity="1";}
	}
	x=document.getElementById(t4id);
	var c=x.parentNode.childNodes;
	document.getElementById(c[3].id).style.opacity="1";
	var am=document.getElementsByClassName("com1");
	for(var i=0;i<am.length;i++)
	{
		if(am[i].id!=c[3].id)
		{
			am[i].style.opacity="0";
		}
	}
	
}
function ond(clickedElement)
{
	var t5id=clickedElement.id;
	document.getElementById(t5id).style.opacity="0.3";
	
	var m=document.getElementsByClassName("d");
	for (var i=0; i < m.length; i++)
	{
if(m[i].id!=t5id)		
{m[i].style.opacity="1";}
	}
	x=document.getElementById(t5id);
	var c=x.parentNode.childNodes;
	document.getElementById(c[3].id).style.opacity="1";
	var am=document.getElementsByClassName("d1");
	for(var i=0;i<am.length;i++)
	{
		if(am[i].id!=c[3].id)
		{
			am[i].style.opacity="0";
		}
	}
	
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Welcome again " + user+ ". You have already voted!");
    vote.disabled=true;
var eles=document.getElementsByClassName("image");
for (var i=0; i < eles.length; i++)
   eles[i].onclick = false;
  
document.getElementById("vote").style.cursor="not-allowed";
  } else {
     user = prompt("Please enter your name to vote:","");
if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
 
     }
  }
  
  function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}