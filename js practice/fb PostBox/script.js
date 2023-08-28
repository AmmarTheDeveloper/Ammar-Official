let post = document.querySelector('.post'),
	userPreference =  document.querySelector('.userPreference'),
	backArrow = document.querySelector('.back-arrow'),
	visibility = document.querySelector('.post-visibility'),
	postBtn = document.querySelector('.post-btn');

visibility.onclick = ()=>{
	post.style.marginLeft = "-450px";
}
backArrow.onclick = ()=>{
	post.style.marginLeft= "0";
}
const  form = document.querySelector('form'),
	   textarea =  document.querySelector('textarea');
textarea.onkeyup = ()=>{
	if(textarea.value.length != 0){
		postBtn.classList.remove('disabled');
	}else{
		postBtn.classList.add('disabled');
	}
}
textarea.onchange = ()=>{
	if(textarea.value.length != 0){
		postBtn.classList.remove('disabled');
	}else{
		postBtn.classList.add('disabled');
	}
}