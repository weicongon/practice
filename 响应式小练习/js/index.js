(function(win,doc){
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window? 'orientationchange' : "resize",
		recalc = function(){
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 768){
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 768) + 'px';
			}
		};
		 if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt,recalc,false);
		doc.addEventListener('DOMContentLoaded',recalc,false);
		recalc();
})(window,document)

var navs = $('a'),
	shBut = false;
$('.more').on('click',function(){
	if(shBut){
		$('nav').stop().animate({'top':'-600px'},700)
		shBut = false;
	}else{
		$('nav').stop().animate({'top':'57px'},700)
		shBut = true;
	}
	
})