let imgs = document.querySelector('.imgs');
let imgVis = document.querySelector('.visualizador');

for(let i=1; i<=51; i++){
	let imgCode = `<img class="img" src="imgs/img (${i}).jpg">`;
	imgs.innerHTML += imgCode;
}



/*
	VISUALIZADOR	VISUALIZADOR	VISUALIZADOR	VISUALIZADOR	VISUALIZADOR
*/
imgVis.addEventListener("click",()=>{
	imgVis.classList.remove('on');
	document.body.style.overflowY = 'initial';
})

cadaImg = document.querySelectorAll('.img');

for(let i=0; i<cadaImg.length; i++){
	cadaImg[i].addEventListener("click",()=>{
		imgVis.classList.add('on');
		imgVis.style.top=`${window.scrollY}px`;
		imgVis.innerHTML = cadaImg[i].outerHTML;
		document.body.style.overflowY = "hidden";
	})
}