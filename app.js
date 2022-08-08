let smth = "talking\nabout\tthis\nis\nVery hard"
console.log(smth);

let nob = "Naka"
console.log(nob);
document.getElementById("title").onclick = function(){
let title=document.getElementById("title");
title.style ="color: yellow";
let bd = document.getElementById("bd")
bd.style="color: green"

}
let bd=document.getElementById("bd")
let section =document.createElement("div")
section.className="section";
section.innerHTML="Hello World"

bd.append(section);
