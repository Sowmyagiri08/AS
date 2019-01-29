
function off1()
{document.getElementById("rajni").style.opacity = "1";
document.getElementById("middle").style.opacity="0";
}

function off2()
{document.getElementById("ajith").style.opacity = "1";
document.getElementById("middle1").style.opacity="0";
}


function off3()
{document.getElementById("vjs").style.opacity = "1";
document.getElementById("middle2").style.opacity="0";
}
function off4()
{document.getElementById("vijay").style.opacity = "1";
document.getElementById("middle3").style.opacity="0";
}

function on1() {
  document.getElementById("rajni").style.opacity = "0.3";
  document.getElementById("middle").style.opacity = "1";
   off2();
   off3();
   off4();
}

function on2() {
  document.getElementById("ajith").style.opacity = "0.3";
  document.getElementById("middle1").style.opacity = "1";
  off1();
  off3();
  off4();
}

function on3() {
  document.getElementById("vjs").style.opacity = "0.3";
  document.getElementById("middle2").style.opacity = "1";
  off1();
  off2();
  off4();
}

function on4() {
  document.getElementById("vijay").style.opacity = "0.3";
  document.getElementById("middle3").style.opacity = "1";
  off1();
  off2();
  off3();
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    alert("Welcome again " + user);
    vote.disabled=true;
    rajni.onclick=false;
    ajith.onclick=false;
    vjs.onclick=false;
    vijay.onclick=false;
document.getElementById("vote").style.cursor="not-allowed";
  } else {
     user = prompt("Please enter your name to vote:","");
if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
 
     }
  }