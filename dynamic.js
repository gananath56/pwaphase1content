function getfile(file,callback) {
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json")
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readystate===4 && htp.status=="200"){
			callback(htp.responceText);
		}
	}
	htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.)
})

var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);
	var proll=document.createElement("p");
	proll.textContent=p.roll;
	var ph5=document.createElement("p");
	

}
