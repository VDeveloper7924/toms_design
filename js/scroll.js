"use strict";
AOS.init();
window.onload = function()
{
	//adding the event listerner for Mozilla
	if(window.addEventListener)
		document.addEventListener('scroll', moveObject, false);

	//for IE/OPERA etc
	document.onmousewheel = moveObject;

	

}
window.onscroll = () => {
	const nav = document.querySelector('.navbar-wrap');

	if(this.scrollY <= 20) nav.classList.remove('scrolled'); 
	else nav.classList.add('scrolled');

	document.onwheel = (e) => {
		let direction;
		direction = e.deltaY;
		console.log(direction);
		let glove = document.querySelector(".mark-glove");
		let stamp = document.querySelector(".banner-stamp");
		let rabbit = document.querySelector(".no-rabbit img");
		let everything = document.querySelector(".everything");
		scrollMove(glove, 150, 450, 100, direction ) 
		scrollMove(stamp, -50, 170, 50, direction ) 
		scrollMove(rabbit, 26, 400, 80, direction ) 
		scrollMove(everything, -35, 190, 50, direction ) 
	}

};

function moveObject(event)
{
	
	// document.onwheel = (e) => {
	// 	let direction;
	// 	direction = e.deltaY;
	// 	console.log(direction);
	// 	let glove = document.querySelector(".mark-glove");
	// 	let stamp = document.querySelector(".banner-stamp");
	// 	let rabbit = document.querySelector(".no-rabbit img");
	// 	let everything = document.querySelector(".everything");
	// 	scrollMove(glove, 150, 450, 100, direction ) 
	// 	scrollMove(stamp, -50, 170, 50, direction ) 
	// 	scrollMove(rabbit, 26, 400, 80, direction ) 
	// 	scrollMove(everything, -35, 190, 50, direction ) 
	// }	
}

function scrollMove(element, start, end, moverange, direction ) {
	let elementStyle = getComputedStyle(element);
	let currentPos = parseInt(elementStyle.top);
	if ( direction < 0) {
		if (currentPos > end) {
			element.style.top = `${end}px`
		} else {
			element.style.top = `${currentPos + moverange}px`
		}
		
		
	} else if (direction > 0) {
		if (currentPos < start) {
			element.style.top = `${start}px`
		} else {
			element.style.top = `${currentPos - moverange}px`
		}
		
	}
}

// (function($) {
//     $(document).ready(function() {
//         $.jScrollability([
//             {
//                 'selector': '.toms-section2-nodescription',
//                 'start': 'parent',
//                 'end': 'parent',
//                 'fn': {
//                     'top': {
//                         'start': 100,
//                         'end': 0,
//                         'unit': '%'
//                     }
//                 }
//             }
//         ]);
//     });
// })(jQuery);