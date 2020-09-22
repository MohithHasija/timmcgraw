function color(elem){
	l=["#0275d8", "#5cb85c","#5bc0de","#f0ad4e","#d9534f","#ff1d58","#00DDFF","#0049B7","#f75990"]
	c=Math.floor(Math.random() * l.length);  
	elem.style.backgroundColor=l[c]
	
}

function normal(elem){
	elem.style.backgroundColor=null
}