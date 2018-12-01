<html>
 <body>
function victo() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "victory.mp3";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}
<audio>
<source src="victory.mp3"></source>
<source src="victory.ogg"></source>
</audio>

<div id="sounddiv"><bgsound id="sound"></div>
</body>
</html>
