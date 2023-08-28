const links = document.querySelectorAll('a'),
			  previous = document.querySelector('.previous'),
			  next = document.querySelector('.next'),
			  start = document.querySelector('.start'),
			  last = document.querySelector('.last');
			  let step = Number(document.querySelector('.active').innerText.trim()) - 1;
			  links.forEach((link , linkIndex )=>{
			  	link.id = 'link-' + linkIndex;

			  	link.onclick = ()=>{
			  		step = linkIndex;
				  	document.querySelector('.active').classList.remove('active');
				  	link.classList.add('active');
			  	}
			 	})

			  previous.onclick = ()=>{
			  	if(step != 0){
			  		step -= 1;
			  	}
			  	document.querySelector(`#link-${step}`).click();
			  		console.log(step)
			  }

			  next.onclick =()=>{
				  if(step != links.length - 1){
				  	step += 1;
				  }else{
				  	step = links.length - 1;
				  }
				  document.querySelector(`#link-${step}`).click();
			  }
			  start.onclick = ()=>{
			  	step = 0;
			  	document.querySelector(`#link-${step}`).click();
			  }
			  last.onclick = ()=>{
			  	step = links.length - 1;
			  	document.querySelector(`#link-${step}`).click();
			  }